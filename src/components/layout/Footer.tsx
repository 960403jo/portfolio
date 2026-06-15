import { ArrowUp, Mail } from "lucide-react";
import { contactLinks } from "@/data/portfolio";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <Container className="site-footer__inner">
        <p>© 2026 조인성</p>
        <div className="site-footer__links" aria-label="연락처">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href}>
              <Mail aria-hidden="true" size={16} />
              <span>{link.value}</span>
            </a>
          ))}
        </div>
      </Container>
      <a className="back-to-top-floating" href="#top" aria-label="맨 위로 이동">
        <ArrowUp aria-hidden="true" size={22} />
      </a>
    </footer>
  );
}
