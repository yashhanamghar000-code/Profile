export interface ProfileData {
  name: string;
  handle: string;
  title: string;
  subtitle: string;
  location: string;
  status: string;
  focus: string;
  email: string;
  roles: string[];
  socials: {
    github: string;
    linkedin: string;
    huggingface: string;
    email: string;
    resume: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'flagship' | 'ecosystem' | 'library' | 'research' | 'application';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  pypiUrl?: string;
  highlights?: string[];
  metricsNotice?: string;
  architectureSteps?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  skills: string[];
  descriptionBullets: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  university: string;
  college: string;
  location: string;
  cgpa: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  platform: string;
  year: string;
  skills: string[];
}

export interface SkillCluster {
  name: string;
  category: string;
  skills: {
    name: string;
    context: string;
    proficiencyTag?: string;
  }[];
}

export interface TerminalOutputLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system' | 'link' | 'ascii';
  content: string;
  url?: string;
  urlLabel?: string;
}

export interface CommandResult {
  lines: {
    type: 'output' | 'error' | 'system' | 'link' | 'ascii';
    content: string;
    url?: string;
    urlLabel?: string;
  }[];
  action?: 'clear' | 'matrix' | 'scroll-to' | 'hire';
  target?: string;
}
