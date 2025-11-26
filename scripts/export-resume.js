#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");
const { PDFDocument } = require("pdf-lib");

function parseArgs(argv) {
  let url = "http://localhost:3000";
  let outDir = "exports";
  let baseName = "resume";
  let fullPage = true;
  let selector = null;
  let padding = 0;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];

    switch (arg) {
      case "--url":
      case "-u":
        if (next) {
          url = next;
          i += 1;
        }
        break;
      case "--out-dir":
      case "-o":
        if (next) {
          outDir = next;
          i += 1;
        }
        break;
      case "--filename":
      case "-f":
        if (next) {
          baseName = next.replace(/\.png$|\.pdf$/i, "");
          i += 1;
        }
        break;
      case "--viewport":
        if (next) {
          fullPage = false;
          const [width, height] = next.split("x").map((value) => Number.parseInt(value, 10));
          if (Number.isFinite(width) && Number.isFinite(height)) {
            fullPage = { width, height };
          }
          i += 1;
        }
        break;
      case "--selector":
        if (next) {
          selector = next;
          i += 1;
        }
        break;
      case "--padding":
        if (next) {
          const parsedPadding = Number.parseInt(next, 10);
          if (Number.isFinite(parsedPadding)) {
            padding = parsedPadding;
          }
          i += 1;
        }
        break;
      default:
        break;
    }
  }

  return { url, outDir, baseName, fullPage, selector, padding };
}

async function ensureDir(dirPath) {
  await fs.promises.mkdir(dirPath, { recursive: true });
}

async function createPdfFromPng(pngPath, pdfPath) {
  const pngBytes = await fs.promises.readFile(pngPath);
  const pdfDoc = await PDFDocument.create();
  const pngImage = await pdfDoc.embedPng(pngBytes);
  const page = pdfDoc.addPage([pngImage.width, pngImage.height]);
  page.drawImage(pngImage, {
    x: 0,
    y: 0,
    width: pngImage.width,
    height: pngImage.height,
  });

  const pdfBytes = await pdfDoc.save();
  await fs.promises.writeFile(pdfPath, pdfBytes);
}

async function captureResume() {
  const { url, outDir, baseName, fullPage, selector, padding } = parseArgs(
    process.argv.slice(2)
  );
  const outputDirectory = path.resolve(process.cwd(), outDir);
  const viewport =
    fullPage && fullPage !== true ? fullPage : { width: 1200, height: 1550 };
  const captureFullPage = fullPage === true;

  await ensureDir(outputDirectory);

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport,
    deviceScaleFactor: 2,
  });

  await page.goto(url, { waitUntil: "networkidle" });

  await page.evaluate(async () => {
    if (document.fonts && "ready" in document.fonts) {
      try {
        await document.fonts.ready;
      } catch {
        /* fonts may not be supported; ignore */
      }
    }
  });

  // Allow any fonts or layout shifts to settle
  await page.waitForTimeout(1000);

  const pngPath = path.join(outputDirectory, `${baseName}.png`);
  let clip;

  if (selector) {
    const target = page.locator(selector).first();
    const box = await target.boundingBox();
    if (!box) {
      throw new Error(`Could not find bounding box for selector "${selector}"`);
    }
    clip = {
      x: Math.max(box.x - padding, 0),
      y: Math.max(box.y - padding, 0),
      width: box.width + padding * 2,
      height: box.height + padding * 2,
    };
  }

  await page.screenshot({
    path: pngPath,
    fullPage: captureFullPage,
    clip,
  });

  const pdfPath = path.join(outputDirectory, `${baseName}.pdf`);
  await createPdfFromPng(pngPath, pdfPath);

  await browser.close();

  console.log(`Screenshot saved to ${pngPath}`);
  console.log(`PDF saved to ${pdfPath}`);
}

captureResume().catch((error) => {
  console.error("Failed to export resume:", error);
  process.exitCode = 1;
});
