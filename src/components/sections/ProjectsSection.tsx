"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, FolderKanban } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/project/ProjectCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredProjects, remainingProjects } from "@/lib/projects";

export function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const projectCount = featuredProjects.length + remainingProjects.length;

  return (
    <section className="section section--light section--projects" id="projects">
      <Container>
        <SectionHeader
          eyebrow="Projects"
          title="프로젝트"
        />
        {projectCount > 0 ? (
          <div className="project-showcase">
            <div className="project-grid project-grid--featured">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  revealDelay={index * 90}
                />
              ))}
            </div>
            {remainingProjects.length > 0 ? (
              <aside
                className={isExpanded ? "project-side project-side--open" : "project-side"}
                aria-label="추가 프로젝트"
              >
                {!isExpanded ? (
                  <button
                    className="project-side-trigger"
                    type="button"
                    aria-expanded="false"
                    onClick={() => setIsExpanded(true)}
                  >
                    <span>더보기</span>
                    <ChevronRight aria-hidden="true" size={18} />
                  </button>
                ) : (
                  <div className="project-side-panel">
                    <div className="project-side-panel__top">
                      <div>
                        <span>추가 프로젝트</span>
                        <strong>{remainingProjects.length}개</strong>
                      </div>
                      <button
                        className="project-side-panel__collapse"
                        type="button"
                        aria-label="추가 프로젝트 접기"
                        onClick={() => setIsExpanded(false)}
                      >
                        <ChevronLeft aria-hidden="true" size={16} />
                        <span>접기</span>
                      </button>
                    </div>
                    <div className="project-side-panel__scroll">
                      {remainingProjects.map((project, index) => (
                        <ProjectCard
                          key={project.slug}
                          project={project}
                          compact
                          revealDelay={index * 45}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            ) : null}
          </div>
        ) : (
          <div className="project-empty-board">
            <EmptyState
              icon={FolderKanban}
              title="프로젝트 원본 대기"
              description="프로젝트 내용 입력 후 case study 노출"
            />
            <div className="case-strip" aria-hidden="true">
              <span>Case 01</span>
              <span>Case 02</span>
              <span>Case 03</span>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
