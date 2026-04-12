import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import portfolioJsonData from "../data/portfolio.json";

// We explicitly cast the imported JSON to the expected structure
import type { Skill, Project, BlogPost } from "../data/portfolioData";

export type PortfolioDataType = {
  header: typeof portfolioJsonData.header;
  hero: typeof portfolioJsonData.hero;
  about: typeof portfolioJsonData.about;
  skills: Skill[];
  projects: Project[];
  contact: typeof portfolioJsonData.contact;
  blog: BlogPost[];
};

interface EditorContextType {
  isEditing: boolean;
  toggleEditing: () => void;
  data: PortfolioDataType;
  updateData: (newData: PortfolioDataType) => void;
  updateSection: <K extends keyof PortfolioDataType>(
    section: K,
    sectionData: PortfolioDataType[K],
  ) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState<PortfolioDataType>({
    ...portfolioJsonData,
    skills: portfolioJsonData.skills as Skill[],
    projects: portfolioJsonData.projects as Project[],
    blog: (portfolioJsonData as unknown as { blog: BlogPost[] }).blog || [],
  });

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const updateData = (newData: PortfolioDataType) => {
    setData(newData);
  };

  const updateSection = <K extends keyof PortfolioDataType>(
    section: K,
    sectionData: PortfolioDataType[K],
  ) => {
    setData((prev) => ({
      ...prev,
      [section]: sectionData,
    }));
  };

  return (
    <EditorContext.Provider
      value={{ isEditing, toggleEditing, data, updateData, updateSection }}
    >
      {children}
    </EditorContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEditor = () => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
};
