export type ProjectCategory = 'all' | 'fullstack' | 'ai' | 'iot';

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
}

export type CertificationCategory = 'all' | 'competitions' | 'courses' | 'workshops';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: string;
  details?: string;
  certificateUrl: string;
  previewUrl: string;
  verificationUrl?: string;
  category: 'competitions' | 'courses' | 'workshops';
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

