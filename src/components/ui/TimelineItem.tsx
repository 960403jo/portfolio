import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Experience } from "@/types/portfolio";

type TimelineItemProps = {
  experience: Experience;
  revealDelay?: number;
};

export function TimelineItem({ experience, revealDelay = 0 }: TimelineItemProps) {
  const [start, rawEnd] = experience.period.split("~").map((period) => period.trim());
  const end = rawEnd || "현재";

  return (
    <ScrollReveal delay={revealDelay} variant="left">
      <article className="timeline-item">
        <div className="timeline-item__period" aria-label={`근무 기간 ${experience.period}`}>
          <span>{start}</span>
          <i aria-hidden="true" />
          <strong>{end}</strong>
        </div>
        <div className="timeline-item__content">
          <h3>
            {experience.organization} | {experience.title}
          </h3>
          <p>{experience.summary}</p>
        </div>
      </article>
    </ScrollReveal>
  );
}
