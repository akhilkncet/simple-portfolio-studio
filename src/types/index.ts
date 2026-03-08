export interface GitHubStats {
  public_repos: number;
  followers: number;
  created_at: string;
}

export interface TechSkill {
  name: string;
  category: string;
  color: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  color: string;
  responsibilities: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  color: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  color: string;
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
  category: 'internship' | 'hackathon' | 'certification';
  color: string;
  description?: string;
}
