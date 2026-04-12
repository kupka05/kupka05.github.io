export interface BlockBase {
  type: string;
}

export interface OverviewBlock extends BlockBase {
  type: "overview";
  engine: string;
  genre: string;
  roles: string[];
  content: string;
}

export interface MechanicsBlock extends BlockBase {
  type: "mechanics";
  title: string;
  content: string;
  image?: string;
}

export interface LevelDesignBlock extends BlockBase {
  type: "level-design";
  title: string;
  content: string;
  image?: string;
  caption?: string;
}

export type ProjectBlock = OverviewBlock | MechanicsBlock | LevelDesignBlock;

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
  blocks?: ProjectBlock[];
}

export interface Skill {
  name: string;
  level: "상" | "중" | "하";
  category: "Engine" | "Scripting" | "Tools" | "Other";
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  type: string;
  excerpt: string;
  image: string;
}

import portfolioJsonData from "./portfolio.json";

// We explicitly cast the imported JSON to the expected structure
export const portfolioData = {
  ...portfolioJsonData,
  skills: portfolioJsonData.skills as Skill[],
  projects: portfolioJsonData.projects as Project[],
  blog:
    ((portfolioJsonData as unknown as { blog: BlogPost[] })
      .blog as BlogPost[]) || [],
};
