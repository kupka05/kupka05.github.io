import { motion } from "framer-motion";
import { useEditor } from "../context/EditorContext";
import { type Project } from "../data/portfolioData";
import ReactMarkdown from "react-markdown";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onUpdate?: (updatedProject: Project) => void;
  onSelect: (id: string) => void;
}

const ProjectCard = ({
  project,
  index,
  onUpdate,
  onSelect,
}: ProjectCardProps) => {
  const { isEditing } = useEditor();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (onUpdate) {
      onUpdate({ ...project, [e.target.name]: e.target.value });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-[var(--color-surface-lowest)] rounded-none overflow-hidden group mb-16 md:mb-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Project Image - 7 columns */}
        <div
          className="lg:col-span-7 relative aspect-video lg:aspect-[4/3] overflow-hidden rounded-2xl ambient-shadow cursor-pointer"
          onClick={() => onSelect(project.id)}
        >
          <div className="absolute inset-0 bg-[var(--color-on-surface)]/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          {isEditing ? (
            <div className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-[var(--color-surface)]/80">
              <input
                type="text"
                name="imageUrl"
                value={project.imageUrl}
                onChange={handleChange}
                placeholder="Image URL"
                aria-label="Project image URL"
                className="w-full bg-[var(--color-surface-lowest)] border border-[var(--color-outline-variant)] rounded px-3 py-2 text-sm text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-primary)]"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ) : null}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Project Info - 5 columns */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-6">
            {isEditing ? (
              <input
                type="text"
                name="genre"
                value={project.genre}
                onChange={handleChange}
                aria-label="Project genre"
                className="bg-[var(--color-surface-low)] rounded px-3 py-1 text-xs font-semibold text-[var(--color-on-surface-muted)] border border-[var(--color-outline-variant)] focus:outline-none focus:border-[var(--color-primary)] max-w-[150px] mb-4 uppercase tracking-widest"
              />
            ) : (
              <span className="inline-block text-xs font-bold text-[var(--color-on-surface-muted)] uppercase tracking-widest mb-4">
                {project.genre}
              </span>
            )}

            {isEditing ? (
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={handleChange}
                aria-label="Project title"
                className="w-full bg-transparent border-b border-[var(--color-outline-variant)] px-2 py-1 text-3xl md:text-4xl font-extrabold display-text text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-primary)] mb-4"
              />
            ) : (
              <h3 className="text-3xl md:text-5xl font-extrabold display-text text-[var(--color-on-surface)] mb-6">
                {project.title}
              </h3>
            )}
          </div>

          <div className="text-[var(--color-on-surface-muted)] text-base md:text-lg leading-relaxed mb-8 flex-1 prose prose-slate max-w-none w-full">
            {isEditing ? (
              <textarea
                name="description"
                value={project.description}
                onChange={handleChange}
                aria-label="Project description"
                className="w-full h-full min-h-[120px] bg-[var(--color-surface-low)] border border-[var(--color-outline-variant)] rounded px-3 py-2 text-[var(--color-on-surface-muted)] focus:outline-none focus:border-[var(--color-primary)]"
              />
            ) : (
              <ReactMarkdown>{project.description}</ReactMarkdown>
            )}
          </div>

          <div className="flex items-center justify-between mt-auto pt-8 border-t border-[var(--color-outline-variant)]/30">
            <div className="text-sm font-semibold text-[var(--color-on-surface)] uppercase tracking-wider">
              {isEditing ? (
                <input
                  type="text"
                  name="role"
                  value={project.role}
                  onChange={handleChange}
                  aria-label="Project role"
                  className="bg-transparent border-b border-[var(--color-outline-variant)] px-2 py-1 focus:outline-none focus:border-[var(--color-primary)]"
                />
              ) : (
                project.role
              )}
            </div>

            <button
              onClick={() => onSelect(project.id)}
              className="flex items-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-primary-container)] transition-colors"
              aria-label={`View details for ${project.title}`}
            >
              View Case Study <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectsProps {
  onSelectProject?: (id: string) => void;
}

const Projects = ({ onSelectProject }: ProjectsProps) => {
  const { data, updateSection } = useEditor();
  const { projects } = data;

  const handleUpdateProject = (index: number, updatedProject: Project) => {
    const newProjects = [...projects];
    newProjects[index] = updatedProject;
    updateSection("projects", newProjects);
  };

  const handleSelect = (id: string) => {
    if (onSelectProject) {
      onSelectProject(id);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 sm:px-12 md:px-24 bg-[var(--color-surface-lowest)] relative"
    >
      <div className="container max-w-7xl mx-auto flex flex-col gap-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="display-text text-5xl md:text-7xl font-extrabold text-[var(--color-on-surface)] mb-6">
            Selected Works
          </h2>
          <p className="text-xl text-[var(--color-on-surface-muted)] max-w-2xl mx-auto">
            A collection of digital experiences designed with purpose and
            precision.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onUpdate={(updatedProject) =>
                handleUpdateProject(index, updatedProject)
              }
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
