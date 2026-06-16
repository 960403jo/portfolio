"use client";

import {
  cloneElement,
  isValidElement,
  useEffect,
  useId,
  useState,
  type CSSProperties,
  type ReactElement
} from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "left" | "right" | "scale" | "line";

type RevealChildProps = {
  className?: string;
  "data-scroll-reveal-id"?: string;
  style?: CSSProperties;
};

type ScrollRevealProps = {
  children: ReactElement<RevealChildProps>;
  className?: string;
  delay?: number;
  threshold?: number;
  variant?: RevealVariant;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  threshold = 0.16,
  variant = "up"
}: ScrollRevealProps) {
  const revealId = useId().replaceAll(":", "");
  const [hasMounted, setHasMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setHasMounted(true));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hasMounted) {
      return;
    }

    const element = document.querySelector<HTMLElement>(
      `[data-scroll-reveal-id="${revealId}"]`
    );

    if (!element) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches || !("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));

      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasMounted, revealId, threshold]);

  if (!isValidElement(children)) {
    return children;
  }

  if (!hasMounted) {
    return children;
  }

  return cloneElement(children, {
    "data-scroll-reveal-id": revealId,
    className: cn(
      children.props.className,
      "scroll-reveal",
      `scroll-reveal--${variant}`,
      isVisible && "is-visible",
      className
    ),
    style: {
      ...children.props.style,
      "--reveal-delay": `${delay}ms`
    } as CSSProperties
  });
}
