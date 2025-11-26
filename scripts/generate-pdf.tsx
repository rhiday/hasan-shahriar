import fs from "fs";
import path from "path";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { ResumeDocument } from "../src/pdf/resume-document";
import { RESUME_DATA } from "../src/data/resume-data";

interface CliOptions {
  output?: string;
  filename?: string;
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const [key, valueFromEquals] = arg.split("=", 2);
    const next = argv[i + 1];

    if (key === "--out-dir" || key === "-o") {
      const value = valueFromEquals ?? next;
      if (value) {
        options.output = value;
        if (!valueFromEquals) i += 1;
      }
    } else if (key === "--filename" || key === "-f") {
      const value = valueFromEquals ?? next;
      if (value) {
        options.filename = value.replace(/\.pdf$/i, "");
        if (!valueFromEquals) i += 1;
      }
    }
  }
  return options;
}

async function ensureDirectory(dir: string) {
  await fs.promises.mkdir(dir, { recursive: true });
}

function resolveAvatarPath() {
  if (!RESUME_DATA.avatarUrl) return null;
  const normalized = RESUME_DATA.avatarUrl.startsWith("/")
    ? RESUME_DATA.avatarUrl.slice(1)
    : RESUME_DATA.avatarUrl;
  const absolute = path.resolve(process.cwd(), "public", normalized);
  if (!fs.existsSync(absolute)) return null;
  return absolute;
}

async function generatePdf() {
  const { output = "exports", filename = "resume" } = parseArgs(
    process.argv.slice(2)
  );
  const outDir = path.resolve(process.cwd(), output);
  await ensureDirectory(outDir);

  const pdfBuffer = await renderToBuffer(
    <ResumeDocument avatarPath={resolveAvatarPath()} />
  );

  const outputPath = path.join(outDir, `${filename}.pdf`);
  await fs.promises.writeFile(outputPath, pdfBuffer);

  console.log(`Resume PDF saved to ${outputPath}`);
}

generatePdf().catch((error) => {
  console.error("Failed to generate PDF:", error);
  process.exitCode = 1;
});
