import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");

// Read the built index.html
const html = fs.readFileSync(indexPath, "utf-8");

// The HTML already has all the meta tags from index.html
// We just need to make sure it's served correctly - Vercel does this already
// This script confirms the build completed and the file exists

console.log("✅ Pre-render check: dist/index.html exists and is ready");
console.log(`   File size: ${(fs.statSync(indexPath).size / 1024).toFixed(1)} KB`);
