import { motion } from 'framer-motion';
import { useEditor } from '../context/EditorContext';
import { type Project } from '../data/portfolioData';
import { ExternalLink, Play, Github } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ProjectCard = ({ project, index, onUpdate }: { project: Project; index: number; onUpdate?: (updatedProject: Project) => void }) => {
  const { isEditing } = useEditor();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      className="flex flex-col rounded-2xl bg-slate-800 border border-slate-700/50 overflow-hidden shadow-xl hover:border-sky-500/30 transition-colors group"
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        {isEditing ? (
          <div className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-slate-900/80">
            <input
              type="text"
              name="imageUrl"
              value={project.imageUrl}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-sky-500"
            />
          </div>
        ) : null}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 z-20">
          {isEditing ? (
            <input
              type="text"
              name="genre"
              value={project.genre}
              onChange={handleChange}
              className="bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-sky-400 border border-sky-400/20 focus:outline-none focus:border-sky-500 max-w-[120px]"
            />
          ) : (
            <div className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs font-semibold text-sky-400 border border-sky-400/20">
              {project.genre}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col p-6 flex-1">
        <div className="flex justify-between items-start gap-4">
          {isEditing ? (
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded px-2 py-1 text-2xl font-bold text-slate-100 focus:outline-none focus:border-sky-500"
            />
          ) : (
            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
              {project.title}
            </h3>
          )}
          <div className="flex gap-2 shrink-0">
            {project.links?.play && (
              <a href={project.links.play} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
            {project.links?.video && (
              <a href={project.links.video} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-400 transition-colors">
                <Play size={20} />
              </a>
            )}
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        {isEditing ? (
          <input
            type="text"
            name="period"
            value={project.period}
            onChange={handleChange}
            className="w-full bg-slate-800/50 border border-slate-700 rounded px-2 py-1 text-sm font-mono text-slate-500 mt-2 mb-4 focus:outline-none focus:border-sky-500"
          />
        ) : (
          <p className="text-sm font-mono text-slate-500 mt-2 mb-4">{project.period}</p>
        )}

        <div className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 flex-1 prose prose-invert prose-slate prose-a:text-sky-400 prose-sm max-w-none w-full">
          {isEditing ? (
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              className="w-full h-full min-h-[120px] bg-slate-800/50 border border-slate-700 rounded px-3 py-2 text-slate-300 focus:outline-none focus:border-sky-500"
            />
          ) : (
            <ReactMarkdown>{project.description}</ReactMarkdown>
          )}
        </div>

        <div className="mt-auto">
          <div className="text-sm font-medium text-slate-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
            Role:
            {isEditing ? (
              <input
                type="text"
                name="role"
                value={project.role}
                onChange={handleChange}
                className="flex-1 bg-slate-800/50 border border-slate-700 rounded px-2 py-1 text-slate-200 focus:outline-none focus:border-sky-500"
              />
            ) : (
              <span className="text-slate-200">{project.role}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { data, updateSection } = useEditor();
  const { projects } = data;

  const handleUpdateProject = (index: number, updatedProject: Project) => {
    const newProjects = [...projects];
    newProjects[index] = updatedProject;
    updateSection('projects', newProjects);
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-6 sm:px-12 md:px-24 bg-slate-950 relative">
      <div className="container max-w-6xl mx-auto flex flex-col gap-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 flex items-center gap-4">
            <span className="text-sky-500 font-mono text-xl md:text-2xl">03.</span>
            Projects
            <div className="h-px bg-slate-800 flex-1 ml-4 hidden sm:block"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onUpdate={(updatedProject) => handleUpdateProject(index, updatedProject)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
