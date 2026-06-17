import { createPortfolioPdfZip } from "@/lib/pdf-export";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const revealEmailParam = requestUrl.searchParams.get("revealEmail");
  const zip = await createPortfolioPdfZip(requestUrl.origin, {
    linkMode: requestUrl.searchParams.get("viewer") === "preview" ? "preview" : "web",
    revealEmail: revealEmailParam === "0" ? false : true
  });

  return new Response(zip, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": "attachment; filename=\"joinseong-portfolio-pdf.zip\"",
      "Cache-Control": "no-store"
    }
  });
}
