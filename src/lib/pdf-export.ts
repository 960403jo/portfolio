import { existsSync } from "node:fs";
import chromiumPack from "@sparticuz/chromium";
import { zipSync } from "fflate";
import puppeteer, { type Browser, type Page } from "puppeteer-core";
import { projects } from "@/data/portfolio";

type PdfTarget = {
  filename: string;
  url: string;
};

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
    const batchSize = 3;

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
      width: 1240,
      height: 1754,
      deviceScaleFactor: 1
    });

    await page.emulateMediaType("print");
    await page.goto(target.url, {
      waitUntil: "domcontentloaded",
      timeout: 20_000
    });
    await waitForPrintableHtml(page);

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true
    });

    return {
      filename: target.filename,
      pdf: new Uint8Array(pdf)
    };
  } finally {
    await page.close();
  }
}

async function waitForPrintableHtml(page: Page) {
  await page.evaluate(async () => {
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

    await Promise.race([
      Promise.all([document.fonts.ready, waitForImages]),
      new Promise((resolve) => window.setTimeout(resolve, 2500))
    ]);
  });
}

async function launchBrowser() {
  const executablePath = await getExecutablePath();

  return puppeteer.launch({
    args: process.env.VERCEL ? chromiumPack.args : ["--no-sandbox", "--disable-setuid-sandbox"],
    executablePath,
    headless: true,
    defaultViewport: {
      width: 1240,
      height: 1754,
      deviceScaleFactor: 1
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
