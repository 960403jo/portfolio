import { Workflow } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aiWorkflow } from "@/data/portfolio";

export function AIWorkflowSection() {
  return (
    <section className="section section--light section--ai" id="ai-workflow">
      <Container>
        <SectionHeader
          eyebrow="AI Delivery"
          title="AI 활용 방식"
        />
        <ScrollReveal variant="scale">
          <article className="workflow-card">
            <div className="workflow-card__icon" aria-hidden="true">
              <Workflow size={24} />
            </div>
            <div>
              <h3 className="sr-only">{aiWorkflow.title}</h3>
              <p>{aiWorkflow.body}</p>
              <ol className="workflow-steps">
                {aiWorkflow.steps.map((step, index) => (
                  <ScrollReveal key={step} delay={120 + index * 70} variant="up">
                    <li>{step}</li>
                  </ScrollReveal>
                ))}
              </ol>
            </div>
          </article>
        </ScrollReveal>
      </Container>
    </section>
  );
}
