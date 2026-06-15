import { Milestone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section className="section section--experience" id="experience">
      <Container>
        <SectionHeader
          eyebrow="커리어"
          title="경력 타임라인"
        />
        {experiences.length > 0 ? (
          <div className="timeline">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.title}-${experience.period}`}
                experience={experience}
                revealDelay={index * 110}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Milestone}
            title="경력 원본 대기"
            description="경력 내용 입력 후 타임라인 노출"
          />
        )}
      </Container>
    </section>
  );
}
