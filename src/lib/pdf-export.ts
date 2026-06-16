import { existsSync } from "node:fs";
import chromiumPack from "@sparticuz/chromium";
import { zipSync } from "fflate";
import { chromium, type Browser } from "playwright-core";
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
      url: `${origin}/pdf`
    },
    ...projects.map((project, index) => ({
      filename: `projects/${String(index + 1).padStart(2, "0")}-${project.slug}.pdf`,
      url: `${origin}/projects/${project.slug}/pdf`
    }))
  ];
}

async function renderPdf(browser: Browser, target: PdfTarget) {
  const page = await browser.newPage({
    viewport: {
      width: 1240,
      height: 1754
    },
    deviceScaleFactor: 1
  });

  try {
    await page.goto(target.url, {
      waitUntil: "networkidle",
      timeout: 45_000
    });

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

async function launchBrowser() {
  const executablePath = await getExecutablePath();

  return chromium.launch({
    args: process.env.VERCEL ? chromiumPack.args : [],
    executablePath,
    headless: true
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
