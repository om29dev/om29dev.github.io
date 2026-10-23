export type ProjectCategory = 'all' | 'fullstack' | 'ai' | 'iot';

export interface ProjectCaseStudy {
  problem: {
    summary: string;
    points: string[];
  };
  solution: {
    summary: string;
    points: string[];
    architecture?: string[];
  };
  impact: {
    summary: string;
    points: string[];
    metrics?: string[];
  };
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface Milestone {
  id: string;
  title: string;
  competition: string;
  award: string;
  date: string;
  team: string;
  description: string;
  tags: string[];
  grant?: string;
  certificateUrl?: string;
  previewUrl?: string;
}

export type CertificationCategory = 'all' | 'competitions' | 'courses' | 'workshops';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: string;
  details?: string;
  certificateUrl?: string;
  previewUrl: string;
  verificationUrl?: string;
  category: 'competitions' | 'courses' | 'workshops';
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location: string;
  score?: string;
  scoreLabel?: string;
  badge?: string;
  details: string;
  logoUrl?: string;
  previewUrl?: string;
  subjects?: string[];
}


