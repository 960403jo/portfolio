import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrintToolbar } from "@/components/pdf/PrintToolbar";
import { projects } from "@/data/portfolio";
import { getProjectBySlug } from "@/lib/projects";

type ProjectPdfPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPdfPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project PDF Not Found"
    };
  }

  return {
    title: `${project.name} PDF`,
    description: `${project.name} 프로젝트 상세 PDF 화면`
  };
}

export default async function ProjectPdfPage({ params }: ProjectPdfPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pdf-page" id="top">
      <PrintToolbar
        backHref={`/projects/${project.slug}`}
        backLabel="프로젝트 상세"
        printLabel="프로젝트 PDF 저장"
      />
      <article className="pdf-document pdf-document--project">
        <header className="pdf-project-cover">
          <p className="pdf-eyebrow">Project Detail PDF</p>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <dl className="pdf-project-meta">
            <div>
              <dt>Period</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
          </dl>
        </header>

        <section className="pdf-section">
          <div className="pdf-section__title">
            <span>KPI</span>
            <h2>프로젝트 핵심 지표</h2>
          </div>
          <div className="pdf-kpi-grid">
            {project.kpis.map((kpi) => (
              <section className="pdf-kpi-card" key={`${project.slug}-${kpi.label}`}>
                <span>{kpi.label}</span>
                <h3>{kpi.value}</h3>
                <p>{kpi.detail}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="pdf-section">
          <div className="pdf-section__title">
            <span>Scope</span>
            <h2>담당 업무</h2>
          </div>
          <ul className="pdf-list pdf-list--columns">
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="pdf-section">
          <div className="pdf-section__title">
            <span>Impact</span>
            <h2>성과와 경험</h2>
          </div>
          <ul className="pdf-list pdf-list--columns">
            {project.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="pdf-section">
          <div className="pdf-section__title">
            <span>Stack</span>
            <h2>기술 스택</h2>
          </div>
          <div className="pdf-tag-list">
            {project.tech.map((tech) => (
              <span className="pdf-tag" key={tech}>{tech}</span>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
