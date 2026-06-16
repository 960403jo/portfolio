import type { Metadata } from "next";
import {
  aiWorkflow,
  developerSignals,
  experiences,
  heroSignals,
  interviewQna,
  profile,
  projects,
  skillGroups
} from "@/data/portfolio";
import { PrintToolbar } from "@/components/pdf/PrintToolbar";

export const metadata: Metadata = {
  title: "지원서용 PDF",
  description: "조인성 프론트엔드 개발자 지원서용 포트폴리오 PDF 화면"
};

export default function PortfolioPdfPage() {
  return (
    <main className="pdf-page" id="top">
      <PrintToolbar backHref="/" backLabel="포트폴리오" printLabel="지원서 PDF 저장" />
      <article className="pdf-document pdf-document--resume">
        <header className="pdf-cover">
          <div className="pdf-cover__copy">
            <p className="pdf-eyebrow">Frontend Portfolio</p>
            <h1>{profile.name}</h1>
            <p className="pdf-cover__role">{profile.role}</p>
            <strong>{profile.headline}</strong>
            <span>{profile.summary}</span>
          </div>
          <dl className="pdf-cover__meta">
            <div>
              <dt>Email</dt>
              <dd>{profile.email}</dd>
            </div>
            {heroSignals.map((signal) => (
              <div key={signal.label}>
                <dt>{signal.label}</dt>
                <dd>{signal.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section className="pdf-section">
          <div className="pdf-section__title">
            <span>Profile</span>
            <h2>개발 방향</h2>
          </div>
          <div className="pdf-signal-grid">
            {developerSignals.map((signal) => (
              <section className="pdf-signal-card" key={signal.label}>
                <span>{signal.label}</span>
                <h3>{signal.title}</h3>
                <p>{signal.body}</p>
                <div className="pdf-tag-list">
                  {signal.tags.map((tag) => (
                    <span className="pdf-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="pdf-section">
          <div className="pdf-section__title">
            <span>Career</span>
            <h2>경력</h2>
          </div>
          <div className="pdf-career-list">
            {experiences.map((experience) => (
              <section className="pdf-career-item" key={`${experience.organization}-${experience.period}`}>
                <span>{experience.period}</span>
                <h3>{experience.organization} | {experience.title}</h3>
                <p>{experience.summary}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="pdf-section">
          <div className="pdf-section__title">
            <span>Skills</span>
            <h2>기술 스택</h2>
          </div>
          <div className="pdf-skill-grid">
            {skillGroups.map((group) => (
              <section className="pdf-skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="pdf-tag-list">
                  {group.items.map((item) => (
                    <span className="pdf-tag" key={item}>{item}</span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="pdf-section">
          <div className="pdf-section__title">
            <span>Projects</span>
            <h2>프로젝트 요약</h2>
          </div>
          <div className="pdf-project-grid">
            {projects.map((project) => (
              <section className="pdf-project-card" key={project.slug}>
                <div className="pdf-project-card__head">
                  <span>{project.period}</span>
                  <strong>{project.role}</strong>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="pdf-list">
                  {project.responsibilities.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="pdf-project-link" href={`/projects/${project.slug}/pdf`}>
                  프로젝트 상세 PDF
                </a>
              </section>
            ))}
          </div>
        </section>

        <section className="pdf-section pdf-section--compact">
          <div className="pdf-section__title">
            <span>AI Delivery</span>
            <h2>{aiWorkflow.title}</h2>
          </div>
          <p className="pdf-lead">{aiWorkflow.body}</p>
          <ol className="pdf-flow-list">
            {aiWorkflow.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="pdf-section pdf-section--compact">
          <div className="pdf-section__title">
            <span>Q&A</span>
            <h2>인터뷰 노트</h2>
          </div>
          <div className="pdf-qna-list">
            {interviewQna.map((qna) => (
              <section className="pdf-qna-item" key={qna.question}>
                <h3>{qna.question}</h3>
                <strong>{qna.emphasis}</strong>
                {qna.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
