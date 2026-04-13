import { useEffect } from "react";
import portfolioData from "../data/portfolio.json";

// Utility for scroll to top on mount
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

// Generic Block Interfaces
interface BlockBase {
  type: string;
}

interface OverviewBlock extends BlockBase {
  type: "overview";
  engine: string;
  genre: string;
  roles: string[];
  content: string;
}

interface MechanicsBlock extends BlockBase {
  type: "mechanics";
  title: string;
  content: string;
  image?: string;
}

interface LevelDesignBlock extends BlockBase {
  type: "level-design";
  title: string;
  content: string;
  image?: string;
  caption?: string;
}

type ProjectBlock = OverviewBlock | MechanicsBlock | LevelDesignBlock;

interface Project {
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

interface Props {
  projectId: string;
  onBack: () => void;
}

export default function ProjectDetail({ projectId, onBack }: Props) {
  const project = portfolioData.projects.find((p) => p.id === projectId) as
    | Project
    | undefined;

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h2 className="display-text text-4xl mb-6">
          프로젝트를 찾을 수 없습니다.
        </h2>
        <button onClick={onBack} className="btn-primary px-8 py-4">
          목록으로 돌아가기
        </button>
      </div>
    );
  }

  // Extensible Block Renderer
  const renderBlock = (block: ProjectBlock, index: number) => {
    switch (block.type) {
      case "overview":
        return (
          <section key={index} className="mb-24 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h3 className="headline-text text-2xl font-bold mb-8">
                  Overview
                </h3>
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-[var(--color-on-surface-muted)] text-xs uppercase tracking-widest font-bold mb-2">
                      Engine
                    </h4>
                    <p className="font-medium text-lg">{block.engine}</p>
                  </div>
                  <div>
                    <h4 className="text-[var(--color-on-surface-muted)] text-xs uppercase tracking-widest font-bold mb-2">
                      Genre
                    </h4>
                    <p className="font-medium text-lg">{block.genre}</p>
                  </div>
                  <div>
                    <h4 className="text-[var(--color-on-surface-muted)] text-xs uppercase tracking-widest font-bold mb-2">
                      Roles
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {block.roles.map((r, i) => (
                        <span
                          key={i}
                          className="bg-[var(--color-surface-container)] text-[var(--color-primary)] px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl leading-relaxed text-[var(--color-on-surface-muted)]">
                  {block.content}
                </p>
              </div>
            </div>
          </section>
        );

      case "mechanics":
        return (
          <section
            key={index}
            className="mb-24 md:mb-32 bg-[var(--color-surface-low)] -mx-6 md:-mx-12 px-6 md:px-12 py-16 md:py-24 rounded-[var(--color-surface-lowest)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="display-text text-3xl font-bold mb-6">
                  {block.title}
                </h3>
                <p className="text-lg leading-relaxed text-[var(--color-on-surface-muted)]">
                  {block.content}
                </p>
              </div>
              {block.image && (
                <div className="rounded-2xl overflow-hidden ambient-shadow">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </section>
        );

      case "level-design":
        return (
          <section key={index} className="mb-24 md:mb-32">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h3 className="display-text text-3xl font-bold mb-6">
                {block.title}
              </h3>
              <p className="text-lg leading-relaxed text-[var(--color-on-surface-muted)]">
                {block.content}
              </p>
            </div>
            {block.image && (
              <div className="max-w-6xl mx-auto">
                <div className="rounded-2xl overflow-hidden bg-[var(--color-surface-low)] border border-[var(--color-outline-variant)]/20 p-2 md:p-4">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
                {block.caption && (
                  <p className="text-center mt-6 text-[var(--color-on-surface-muted)] text-sm italic">
                    {block.caption}
                  </p>
                )}
              </div>
            )}
          </section>
        );

      default:
        console.warn(`Unsupported block type: ${(block as ProjectBlock).type}`);
        return null;
    }
  };

  return (
    <article className="pt-24 pb-32 bg-[var(--color-surface)] min-h-screen">
      <ScrollToTop />

      {/* Navigation Bar for Detail View */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[var(--color-outline-variant)]/20">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[var(--color-on-surface-muted)] hover:text-[var(--color-primary)] transition-colors font-semibold"
            aria-label="목록으로 돌아가기"
            title="목록으로 돌아가기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Projects
          </button>
          <div className="font-bold display-text text-xl text-[var(--color-primary)]">
            {project.title}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 mt-12 mb-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary-container)]/20 text-[var(--color-primary)] rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            Case Study
          </span>
          <h1 className="display-text text-5xl md:text-7xl font-extrabold mb-6 text-[var(--color-on-surface)] leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-on-surface-muted)] max-w-2xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden ambient-shadow h-[400px] md:h-[600px] relative">
          <img
            src={project.imageUrl}
            alt={`${project.title} cover`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-on-surface)]/40 to-transparent"></div>
        </div>
      </header>

      {/* Dynamic Content Blocks */}
      <div className="container mx-auto px-6 max-w-6xl">
        {project.blocks && project.blocks.length > 0 ? (
          project.blocks.map((block, index) => renderBlock(block, index))
        ) : (
          <div className="text-center py-32 text-[var(--color-on-surface-muted)]">
            <p className="text-xl">
              이 프로젝트의 상세 내용이 아직 작성되지 않았습니다.
            </p>
          </div>
        )}
      </div>

      {/* Call to Action Footer */}
      <footer className="mt-32 border-t border-[var(--color-outline-variant)]/20 pt-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="display-text text-4xl font-bold mb-8">
            Ready to see it in action?
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {project.links?.play && (
              <a
                href={project.links.play}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-10 py-5 text-lg inline-flex items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Play the Game
              </a>
            )}
            {project.links?.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-10 py-5 text-lg inline-flex items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
                Watch Trailer
              </a>
            )}
            {!project.links?.play && !project.links?.video && (
              <button
                onClick={onBack}
                className="bg-[var(--color-surface-high)] text-[var(--color-on-surface)] px-10 py-5 rounded-full font-bold hover:bg-[var(--color-outline-variant)] transition-colors text-lg"
              >
                Return to Portfolio
              </button>
            )}
          </div>
        </div>
      </footer>
    </article>
  );
}
