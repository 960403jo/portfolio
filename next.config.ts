import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  devIndicators: false,
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
  outputFileTracingIncludes: {
    "/api/portfolio-pdf-zip": ["./node_modules/@sparticuz/chromium/bin/**/*"]
  }
};

export default nextConfig;
