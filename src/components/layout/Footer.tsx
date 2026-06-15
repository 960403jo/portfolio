import { ArrowUp } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p>© 2026 조인성</p>
      </Container>
      <a className="back-to-top-floating" href="#top" aria-label="맨 위로 이동">
        <ArrowUp aria-hidden="true" size={22} />
      </a>
    </footer>
  );
}
