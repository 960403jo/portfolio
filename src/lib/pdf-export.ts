import { existsSync } from "node:fs";
import chromiumPack from "@sparticuz/chromium";
import { zipSync } from "fflate";
import puppeteer, { type Browser, type Page } from "puppeteer-core";
import { projects } from "@/data/portfolio";

type PdfTarget = {
  filename: string;
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
      url: `${origin}/`
    },
    ...projects.map((project, index) => ({
      filename: `projects/${String(index + 1).padStart(2, "0")}-${project.slug}.pdf`,
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
    await prepareHtmlForPdf(page);

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

    return {
      filename: target.filename,
      pdf: new Uint8Array(pdf)
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
