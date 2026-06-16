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
      const entries = await Promise.all(batch.map((target) => renderPdf(browser, target)));

      entries.forEach(({ filename, pdf }) => {
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

async function renderPdf(browser: Browser, target: PdfTarget) {
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
      pdf: target.kind === "main" ? await rewriteProjectLinkAnnotations(pdfBytes) : pdfBytes
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

async function rewriteProjectLinkAnnotations(pdf: Uint8Array) {
  const pdfDocument = await PDFDocument.load(pdf);
  const projectPdfLinks = Object.values(getProjectPdfLinks());
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

      const uriObject = action.get(PDFName.of("URI"));
      const uri = decodePdfText(uriObject);
      const relativePdfPath = projectPdfLinks.find((link) => uri.endsWith(`/${link}`));

      if (relativePdfPath) {
        action.set(PDFName.of("S"), PDFName.of("GoToR"));
        action.set(PDFName.of("F"), PDFString.of(relativePdfPath));
        action.set(PDFName.of("D"), pdfDocument.context.obj([0, PDFName.of("Fit")]));
        action.delete(PDFName.of("URI"));
        didRewrite = true;
      }
    }
  }

  if (!didRewrite) {
    return pdf;
  }

  return new Uint8Array(await pdfDocument.save({ useObjectStreams: false }));
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
