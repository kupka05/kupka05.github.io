export interface Project {
  id: string;
  title: string;
  genre: string;
  role: string;
  period: string;
  description: string;
  imageUrl: string;
  links?: {
    play?: string;
    video?: string;
    github?: string;
  };
}

export interface Skill {
  name: string;
  level: '상' | '중' | '하';
  category: 'Engine' | 'Scripting' | 'Tools' | 'Other';
}

import portfolioJsonData from './portfolio.json';

// We explicitly cast the imported JSON to the expected structure
export const portfolioData = {
  ...portfolioJsonData,
  skills: portfolioJsonData.skills as Skill[],
  projects: portfolioJsonData.projects as Project[]
};
