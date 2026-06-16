import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/portfolio";
import { getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.name,
    description: `${project.description} - ${project.period} ${project.role} 프로젝트 상세`
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="project-detail-page" id="top">
        <section className="project-detail-hero">
          <Container className="project-detail-hero__inner">
            <Link className="back-link" href="/#projects">
              <ArrowLeft aria-hidden="true" size={18} />
              <span>프로젝트 목록</span>
            </Link>
            <div className="project-detail-hero__copy">
              <h1>{project.name}</h1>
              <p>{project.description}</p>
            </div>
            <div className="detail-kpi-grid" aria-label={`${project.name} 핵심 정보`}>
              <div>
                <span>Period</span>
                <strong>{project.period}</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>{project.role}</strong>
              </div>
            </div>
          </Container>
        </section>

        <section className="section section--light">
          <Container className="project-detail-layout">
            <article className="detail-panel detail-panel--kpis">
              <div className="detail-panel__header">
                <span>KPI</span>
                <h2>프로젝트 핵심 지표</h2>
              </div>
              <div className="project-kpi-grid">
                {project.kpis.map((kpi) => (
                  <div className="project-kpi-card" key={`${project.slug}-${kpi.label}`}>
                    <span>{kpi.label}</span>
                    <strong>{kpi.value}</strong>
                    <p>{kpi.detail}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="detail-panel detail-panel--main">
              <div className="detail-panel__header">
                <span>Scope</span>
                <h2>담당 업무</h2>
              </div>
              <ul className="detail-check-list">
                {project.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="detail-panel detail-panel--main">
              <div className="detail-panel__header">
                <span>Impact</span>
                <h2>성과와 경험</h2>
              </div>
              <ul className="detail-check-list detail-check-list--accent">
                {project.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <aside className="detail-panel detail-panel--side">
              <div className="detail-panel__header">
                <h2>기술 스택</h2>
              </div>
              <div className="badge-list">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </aside>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
