import { ArrowUp, FileArchive } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p>© 2026 조인성</p>
        <a
          className="footer-download"
          href="/api/portfolio-pdf-zip"
          download="joinseong-portfolio-pdf.zip"
        >
          <FileArchive aria-hidden="true" size={18} />
          <span>PDF 다운로드</span>
        </a>
      </Container>
      <a className="back-to-top-floating" href="#top" aria-label="맨 위로 이동">
        <ArrowUp aria-hidden="true" size={22} />
      </a>
    </footer>
  );
}
