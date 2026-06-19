export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
  emptyText: string;
};

export type DeveloperSignal = {
  label: string;
  title: string;
  body: string;
  tags: string[];
};

export type InterviewQna = {
  question: string;
  emphasis: string;
  paragraphs: string[];
};

export type ProjectKpi = {
  label: string;
  value: string;
  detail: string;
};

export type ProjectCaseStudy = {
  label: string;
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  name: string;
  period: string;
  role: string;
  tech: string[];
  description: string;
  sourceUrl?: string;
  kpis: ProjectKpi[];
  caseStudy: ProjectCaseStudy[];
  responsibilities: string[];
  outcomes: string[];
};

export type Experience = {
  title: string;
  period: string;
  organization: string;
  summary: string;
};
