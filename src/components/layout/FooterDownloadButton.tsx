"use client";

import { useState } from "react";
import { FileArchive } from "lucide-react";

const zipFileName = "joinseong-portfolio-pdf.zip";

export function FooterDownloadButton() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleDownload = async () => {
    if (status === "loading") {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/portfolio-pdf-zip", {
        cache: "no-store"
      });

      if (!response.ok) {
        throw new Error(`PDF zip download failed: ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = zipFileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  const label = status === "loading" ? "PDF 생성 중..." : "PDF 다운로드";

  return (
    <div className="footer-download-wrap">
      <button
        className="footer-download"
        type="button"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        onClick={handleDownload}
      >
        <FileArchive aria-hidden="true" size={18} />
        <span>{label}</span>
      </button>
      {status === "error" ? (
        <span className="footer-download-error" role="status">
          다운로드 실패. 다시 시도해주세요.
        </span>
      ) : null}
    </div>
  );
}
