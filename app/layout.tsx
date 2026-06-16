import type { Metadata, Viewport } from "next";
import "@fontsource-variable/noto-sans-kr/index.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "조인성 | Frontend Developer Portfolio",
    template: "%s | 조인성 Portfolio"
  },
  description:
    "경력 5년 프론트엔드 개발자 조인성 포트폴리오. React, Next.js, TypeScript 기반 웹 서비스와 백오피스 개발 경험.",
  icons: {
    icon: [
      {
        url: "/icons/favicon.svg",
        type: "image/svg+xml"
      }
    ]
  },
  openGraph: {
    title: "조인성 | Frontend Developer Portfolio",
    description: "React, TypeScript, Next.js 기반 경력 5년 프론트엔드 개발자 포트폴리오",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/portfolio-workspace.png",
        width: 1680,
        height: 960,
        alt: "개발 워크스페이스와 포트폴리오 구조를 보여주는 이미지"
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f8f7"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
