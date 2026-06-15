import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { ScrollReveal } from "./ScrollReveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <ScrollReveal>
      <div className="section-header">
        <Badge tone="accent">{eyebrow}</Badge>
        <h2 className="sr-only">{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </ScrollReveal>
  );
}
