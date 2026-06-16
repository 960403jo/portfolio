"use client";

import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";

type PrintToolbarProps = {
  backHref: string;
  backLabel: string;
  printLabel?: string;
};

export function PrintToolbar({
  backHref,
  backLabel,
  printLabel = "PDF 저장"
}: PrintToolbarProps) {
  return (
    <div className="pdf-toolbar" aria-label="PDF 화면 도구">
      <Link className="pdf-toolbar__link" href={backHref}>
        <ArrowLeft aria-hidden="true" size={18} />
        <span>{backLabel}</span>
      </Link>
      <button className="pdf-toolbar__button" type="button" onClick={() => window.print()}>
        <Printer aria-hidden="true" size={18} />
        <span>{printLabel}</span>
      </button>
    </div>
  );
}
