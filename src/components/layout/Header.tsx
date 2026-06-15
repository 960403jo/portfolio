"use client";

import { type MouseEvent, useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { Container } from "./Container";

export function Header() {
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#about");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const viewportMarker = Math.min(window.innerHeight * 0.38, 320);
      let nextActiveHref = navItems[0]?.href ?? "#about";

      navItems.forEach((item) => {
        const section = document.querySelector<HTMLElement>(item.href);

        if (!section) {
          return;
        }

        const sectionRect = section.getBoundingClientRect();

        if (sectionRect.top <= viewportMarker && sectionRect.bottom > 88) {
          nextActiveHref = item.href;
        }
      });

      setActiveHref(nextActiveHref);
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const activeLink = Array.from(navRef.current?.querySelectorAll("a") ?? []).find(
      (link) => link.getAttribute("href") === activeHref
    );

    activeLink?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }, [activeHref]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    setActiveHref(href);
    window.history.pushState(null, "", href);

    const header = document.querySelector<HTMLElement>(".site-header");
    const headerOffset = (header?.getBoundingClientRect().height ?? 72) + 18;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const targetScrollTop = Math.min(
      Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset),
      maxScrollTop
    );

    window.scrollTo({
      top: targetScrollTop,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    });
  };

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="brand" href="#top" aria-label="홈으로 이동">
          <span className="brand__mark">J</span>
          <span className="brand__text">{profile.name}</span>
        </a>
        <nav className="site-nav" aria-label="주요 섹션" ref={navRef}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "page" : undefined}
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
