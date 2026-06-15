import { MessageCircleQuestion } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { interviewQna } from "@/data/portfolio";

export function InterviewSection() {
  return (
    <section className="section section--interview" id="interview">
      <Container>
        <SectionHeader
          eyebrow="Q&A"
          title="인터뷰 노트"
        />
        <div className="interview-grid" aria-label="개발자 Q&A">
          {interviewQna.map((item, index) => (
            <ScrollReveal key={item.question} delay={index * 90}>
              <article className="interview-card">
                <div className="interview-card__question">
                  <div className="interview-card__top">
                    <MessageCircleQuestion size={19} aria-hidden="true" />
                    <span>Q {String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{item.question}</h3>
                </div>
                <div className="interview-card__answer">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <strong>{item.emphasis}</strong>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
