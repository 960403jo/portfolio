import { createPortfolioPdfZip } from "@/lib/pdf-export";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const zip = await createPortfolioPdfZip(origin);

  return new Response(zip, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": "attachment; filename=\"joinseong-portfolio-pdf.zip\"",
      "Cache-Control": "no-store"
    }
  });
}
