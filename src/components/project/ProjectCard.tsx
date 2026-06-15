import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
  revealDelay?: number;
};

export function ProjectCard({ project, compact = false, revealDelay = 0 }: ProjectCardProps) {
  const responsibilityPreview = project.responsibilities.slice(0, 3);
  const visibleTech = compact ? project.tech.slice(0, 4) : project.tech;

  return (
    <ScrollReveal delay={revealDelay}>
      <Link
        className={cn("project-card", compact && "project-card--compact")}
        href={`/projects/${project.slug}`}
        aria-label={`${project.name} 상세 보기`}
      >
        <div className="project-card__meta">
          <span>{project.period}</span>
          <span className="project-card__meta-right">
            <strong>{project.role}</strong>
            <span className="project-card__arrow" aria-hidden="true">
              <ArrowUpRight size={16} />
            </span>
          </span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {!compact && project.kpis.length > 0 ? (
          <div className="project-card__kpis" aria-label={`${project.name} KPI`}>
            {project.kpis.map((kpi) => (
              <span key={`${project.slug}-${kpi.label}`}>
                <small>{kpi.label}</small>
                <strong>{kpi.value}</strong>
              </span>
            ))}
          </div>
        ) : null}
        {visibleTech.length > 0 ? (
          <div className="badge-list project-card__tags" aria-label={`${project.name} 기술 스택`}>
            {visibleTech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        ) : null}
        {!compact && responsibilityPreview.length > 0 ? (
          <div className="project-card__detail">
            <h4>담당 업무</h4>
            <ul className="detail-list">
              {responsibilityPreview.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </Link>
    </ScrollReveal>
  );
}
