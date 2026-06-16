import { existsSync } from "node:fs";
import chromiumPack from "@sparticuz/chromium";
import { zipSync } from "fflate";
import { PDFDict, PDFDocument, PDFHexString, PDFName, PDFString } from "pdf-lib";
import puppeteer, { type Browser, type Page } from "puppeteer-core";
import { projects } from "@/data/portfolio";

type PdfTarget = {
  filename: string;
  kind: "main" | "project";
  url: string;
};

type RenderedPdf = PdfTarget & {
  pdf: Uint8Array;
};

const pdfViewport = {
  width: 1440,
  height: 1200,
  deviceScaleFactor: 1
} as const;

const localChromePaths = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser"
];

export async function createPortfolioPdfZip(origin: string) {
  const browser = await launchBrowser();

  try {
    const targets = getPdfTargets(origin);
    const files: Record<string, Uint8Array> = {};
    const batchSize = 2;

    for (let index = 0; index < targets.length; index += batchSize) {
      const batch = targets.slice(index, index + batchSize);
      const batchEntries = await Promise.all(batch.map((target) => renderPdf(browser, target)));

      batchEntries.forEach(({ filename, pdf }) => {
        files[filename] = pdf;
      });
    }

    return zipSync(files, { level: 6 });
  } finally {
    await browser.close();
  }
}

function getPdfTargets(origin: string): PdfTarget[] {
  return [
    {
      filename: "00-joinseong-portfolio-main.pdf",
      kind: "main",
      url: `${origin}/`
    },
    ...projects.map((project, index) => ({
      filename: `projects/${String(index + 1).padStart(2, "0")}-${project.slug}.pdf`,
      kind: "project" as const,
      url: `${origin}/projects/${project.slug}`
    }))
  ];
}

async function renderPdf(browser: Browser, target: PdfTarget): Promise<RenderedPdf> {
  const page = await browser.newPage();

  try {
    await page.setViewport({
      width: pdfViewport.width,
      height: pdfViewport.height,
      deviceScaleFactor: pdfViewport.deviceScaleFactor
    });

    await page.emulateMediaType("screen");
    await page.goto(target.url, {
      waitUntil: "domcontentloaded",
      timeout: 20_000
    });
    await prepareHtmlForPdf(page);

    const pageHeight = await getPageHeight(page);
    const pdfHeight = target.kind === "main" ? pdfViewport.height : pageHeight;

    const pdf = await page.pdf({
      width: `${pdfViewport.width}px`,
      height: `${pdfHeight}px`,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0"
      },
      printBackground: true,
      preferCSSPageSize: false
    });
    const pdfBytes = new Uint8Array(pdf);

    return {
      filename: target.filename,
      kind: target.kind,
      url: target.url,
      pdf: await rewriteRelativeNavigationLinks(pdfBytes, target)
    };
  } finally {
    await page.close();
  }
}

async function prepareHtmlForPdf(page: Page) {
  await page.addStyleTag({
    content: `
      html {
        scroll-behavior: auto !important;
      }

      body {
        font-family: "Noto Sans KR Variable", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif !important;
        background: #ffffff !important;
        width: ${pdfViewport.width}px !important;
        min-width: ${pdfViewport.width}px !important;
      }

      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
      }

      .site-header,
      .footer-download-wrap,
      .back-to-top-floating {
        display: none !important;
      }

      .scroll-reveal,
      .scroll-reveal--left,
      .scroll-reveal--right,
      .scroll-reveal--scale,
      .scroll-reveal--line {
        opacity: 1 !important;
        filter: none !important;
        scale: 1 !important;
        translate: 0 0 !important;
      }

      .project-showcase {
        contain: layout paint;
      }

      .section--projects,
      .section--interview,
      .project-detail-page,
      .project-detail-hero,
      .project-detail-page .section,
      .project-detail-page .section--light {
        background: #ffffff !important;
      }

      .section--projects .project-showcase,
      .section--interview .interview-grid,
      .project-side-panel,
      .project-detail-page .detail-kpi-grid,
      .project-detail-page .detail-panel,
      .project-detail-page .project-kpi-card {
        background: #ffffff !important;
        box-shadow: none !important;
      }

      .section--projects .project-card,
      .section--interview .interview-card,
      .project-detail-page .detail-kpi-grid div {
        background: #ffffff !important;
        box-shadow: none !important;
      }

      .project-side {
        position: static !important;
        inset: auto !important;
        width: 100% !important;
        margin-top: 16px !important;
        pointer-events: auto !important;
      }

      .project-side-trigger,
      .project-side-panel__collapse {
        display: none !important;
      }

      .project-side-panel {
        display: block !important;
        width: 100% !important;
        max-height: none !important;
        overflow: visible !important;
        box-shadow: none !important;
      }

      .project-side-panel__top {
        margin-bottom: 12px !important;
      }

      .project-side-panel__scroll {
        display: grid !important;
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        gap: 10px !important;
        max-height: none !important;
        overflow: visible !important;
        padding: 0 !important;
      }

      .project-side-panel .project-card {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
      }

      .section--projects .project-card,
      .section--interview .interview-card,
      .project-detail-page .detail-panel,
      .project-detail-page .project-kpi-card {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
      }
    `
  });

  await page.evaluate(async () => {
    await Promise.all([
      document.fonts.load('400 16px "Noto Sans KR Variable"', "한글"),
      document.fonts.load('700 24px "Noto Sans KR Variable"', "프로젝트"),
      document.fonts.ready
    ]);

    const waitForImages = Promise.all(
      Array.from(document.images).map((image) => {
        if (image.complete) {
          return true;
        }

        return new Promise((resolve) => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        });
      })
    );

    await Promise.race([waitForImages, new Promise((resolve) => window.setTimeout(resolve, 2500))]);
    window.scrollTo(0, 0);
  });
}

function getProjectPdfLinks() {
  return Object.fromEntries(
    projects.map((project, index) => [
      project.slug,
      `projects/${String(index + 1).padStart(2, "0")}-${project.slug}.pdf`
    ])
  );
}

async function rewriteRelativeNavigationLinks(pdf: Uint8Array, target: PdfTarget) {
  const pdfDocument = await PDFDocument.load(pdf);
  const projectPdfLinks = getProjectPdfLinks();
  let didRewrite = false;

  for (const page of pdfDocument.getPages()) {
    const annotations = page.node.Annots();

    if (!annotations) {
      continue;
    }

    for (let index = 0; index < annotations.size(); index += 1) {
      const annotation = pdfDocument.context.lookup(annotations.get(index));

      if (!(annotation instanceof PDFDict)) {
        continue;
      }

      const action = pdfDocument.context.lookup(annotation.get(PDFName.of("A")));

      if (!(action instanceof PDFDict)) {
        continue;
      }

      const uri = decodePdfText(action.get(PDFName.of("URI")));
      const projectLink = target.kind === "main" ? findProjectPdfLink(uri, projectPdfLinks) : null;

      if (projectLink) {
        setRelativeUriAction(action, projectLink);
        didRewrite = true;
        continue;
      }

      if (target.kind === "project" && (uri === "#projects" || uri.endsWith("/#projects"))) {
        setRelativeUriAction(action, "../00-joinseong-portfolio-main.pdf");
        didRewrite = true;
      }
    }
  }

  if (!didRewrite) {
    return pdf;
  }

  return new Uint8Array(await pdfDocument.save({ useObjectStreams: false }));
}

function findProjectPdfLink(uri: string, projectPdfLinks: Record<string, string>) {
  const match = Object.entries(projectPdfLinks).find(
    ([slug, pdfPath]) =>
      uri.endsWith(`/projects/${slug}`) ||
      uri.endsWith(`/projects/${slug}/`) ||
      uri === pdfPath ||
      uri.endsWith(`/${pdfPath}`)
  );

  return match?.[1] ?? null;
}

function setRelativeUriAction(action: PDFDict, filePath: string) {
  action.set(PDFName.of("S"), PDFName.of("URI"));
  action.set(PDFName.of("URI"), PDFString.of(filePath));
  action.delete(PDFName.of("F"));
  action.delete(PDFName.of("D"));
}

function decodePdfText(value: unknown) {
  if (value instanceof PDFString || value instanceof PDFHexString) {
    return value.decodeText();
  }

  return "";
}

async function getPageHeight(page: Page) {
  const height = await page.evaluate(() => {
    const body = document.body;
    const html = document.documentElement;

    return Math.ceil(
      Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
    );
  });

  return Math.max(height, pdfViewport.height);
}

async function launchBrowser() {
  const executablePath = await getExecutablePath();

  return puppeteer.launch({
    args: process.env.VERCEL ? chromiumPack.args : ["--no-sandbox", "--disable-setuid-sandbox"],
    executablePath,
    headless: true,
    defaultViewport: {
      width: pdfViewport.width,
      height: pdfViewport.height,
      deviceScaleFactor: pdfViewport.deviceScaleFactor
    }
  });
}

async function getExecutablePath() {
  if (process.env.VERCEL) {
    return chromiumPack.executablePath();
  }

  const localPath = localChromePaths.find((candidate) => existsSync(candidate));

  if (!localPath) {
    throw new Error("Local Chrome or Chromium executable was not found.");
  }

  return localPath;
}
