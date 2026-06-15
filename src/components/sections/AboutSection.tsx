import { Code2, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aboutContent, developerSignals } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="section section--light section--about" id="about">
      <Container>
        <SectionHeader
          eyebrow="Developer Value"
          title="개발자 포지셔닝"
        />
        <div className="developer-board">
          <ScrollReveal variant="left">
            <article className="about-card about-card--lead">
              <div className="about-card__icon" aria-hidden="true">
                <FileText size={24} />
              </div>
              <div>
                <h3>{aboutContent.title}</h3>
                <p className="about-card__lead">{aboutContent.body}</p>
                <div className="badge-list">
                  {aboutContent.highlights.map((highlight) => (
                    <span className="badge badge--neutral" key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>

          <div className="developer-signal-grid" aria-label="개발자 포인트">
            {developerSignals.slice(0, 3).map((signal, index) => (
              <ScrollReveal
                key={signal.label}
                delay={90 + index * 70}
                variant="right"
              >
                <article className="developer-signal-card">
                  <div className="developer-signal-card__top">
                    <span>{signal.label}</span>
                    <Code2 size={18} aria-hidden="true" />
                  </div>
                  <h3>{signal.title}</h3>
                  <p>{signal.body}</p>
                  <div className="badge-list">
                    {signal.tags.map((tag) => (
                      <span className="badge badge--accent" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
