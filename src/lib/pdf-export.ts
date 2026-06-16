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
    const entries: RenderedPdf[] = [];
    const batchSize = 2;

    for (let index = 0; index < targets.length; index += batchSize) {
      const batch = targets.slice(index, index + batchSize);
      const batchEntries = await Promise.all(batch.map((target) => renderPdf(browser, target)));

      entries.push(...batchEntries);
    }

    const mainEntry = entries.find((entry) => entry.kind === "main");
    const projectEntries = entries.filter((entry) => entry.kind === "project");
    const files: Record<string, Uint8Array> = {};

    for (const entry of entries) {
      files[entry.filename] = entry.pdf;
    }

    if (mainEntry) {
      files[mainEntry.filename] = await createLinkedPortfolioPdf(mainEntry.pdf, projectEntries);
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
    await prepareHtmlForPdf(page, target);

    const pageHeight = await getPageHeight(page);

    const pdf = await page.pdf({
      width: `${pdfViewport.width}px`,
      height: `${pageHeight}px`,
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
      pdf: pdfBytes
    };
  } finally {
    await page.close();
  }
}

async function prepareHtmlForPdf(page: Page, target: PdfTarget) {
  await page.addStyleTag({
    content: `
      html {
        scroll-behavior: auto !important;
      }

      body {
        font-family: "Noto Sans KR Variable", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif !important;
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
    `
  });

  const projectPdfLinks = getProjectPdfLinks();

  await page.evaluate(async ({ kind, links }) => {
    if (kind === "main") {
      document.querySelectorAll<HTMLAnchorElement>('a[href^="/projects/"]').forEach((anchor) => {
        const slug = anchor.getAttribute("href")?.replace(/^\/projects\//, "").split(/[?#]/)[0];
        const pdfPath = slug ? links[slug] : undefined;

        if (pdfPath) {
          anchor.setAttribute("href", pdfPath);
        }
      });
    }

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
  }, {
    kind: target.kind,
    links: projectPdfLinks
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

async function createLinkedPortfolioPdf(mainPdf: Uint8Array, projectEntries: RenderedPdf[]) {
  const pdfDocument = await PDFDocument.load(mainPdf);
  const projectStartPageByLink = new Map<string, number>();
  let nextProjectPageIndex = pdfDocument.getPageCount();

  for (const entry of projectEntries) {
    const projectPdf = await PDFDocument.load(entry.pdf);
    const copiedPages = await pdfDocument.copyPages(projectPdf, projectPdf.getPageIndices());

    projectStartPageByLink.set(entry.filename, nextProjectPageIndex);
    copiedPages.forEach((page) => pdfDocument.addPage(page));
    nextProjectPageIndex += copiedPages.length;
  }

  rewriteProjectLinkAnnotations(pdfDocument, projectStartPageByLink);

  return new Uint8Array(await pdfDocument.save({ useObjectStreams: false }));
}

function rewriteProjectLinkAnnotations(
  pdfDocument: PDFDocument,
  projectStartPageByLink: Map<string, number>
) {
  const projectPdfLinks = Object.values(getProjectPdfLinks());

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

      const uriObject = action.get(PDFName.of("URI"));
      const fileObject = action.get(PDFName.of("F"));
      const uri = decodePdfText(uriObject);
      const filePath = decodePdfText(fileObject);
      const relativePdfPath = projectPdfLinks.find(
        (link) => uri === link || uri.endsWith(`/${link}`) || filePath === link
      );
      const startPageIndex = relativePdfPath
        ? projectStartPageByLink.get(relativePdfPath)
        : undefined;

      if (startPageIndex !== undefined) {
        const targetPage = pdfDocument.getPage(startPageIndex);

        action.set(PDFName.of("S"), PDFName.of("GoTo"));
        action.set(PDFName.of("D"), pdfDocument.context.obj([targetPage.ref, PDFName.of("Fit")]));
        action.delete(PDFName.of("URI"));
        action.delete(PDFName.of("F"));
        continue;
      }

      if (uri === "#projects" || uri.endsWith("/#projects")) {
        const targetPage = pdfDocument.getPage(0);

        action.set(PDFName.of("S"), PDFName.of("GoTo"));
        action.set(PDFName.of("D"), pdfDocument.context.obj([targetPage.ref, PDFName.of("Fit")]));
        action.delete(PDFName.of("URI"));
        action.delete(PDFName.of("F"));
      }
    }
  }
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
