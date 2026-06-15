import { Code2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section className="section section--skills" id="skills">
      <Container>
        <SectionHeader
          eyebrow="Skills"
          title="실무형 기술 스택"
        />
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <ScrollReveal
              key={group.title}
              delay={index * 70}
              variant={index === 0 ? "scale" : "up"}
            >
              <article className="skill-panel">
                <div className="skill-panel__heading">
                  <Code2 size={20} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <p>{group.description}</p>
                {group.items.length > 0 ? (
                  <div className="badge-list">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                ) : (
                  <p>{group.emptyText}</p>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
