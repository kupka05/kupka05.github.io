import { motion } from 'framer-motion';
import { portfolioData, type Project } from '../data/portfolioData';
import { ExternalLink, Play, Github } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
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
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs font-semibold text-sky-400 border border-sky-400/20">
          {project.genre}
        </div>
      </div>

      <div className="flex flex-col p-6 flex-1">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
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

        <p className="text-sm font-mono text-slate-500 mt-2 mb-4">{project.period}</p>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="text-sm font-medium text-slate-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            Role: <span className="text-slate-200">{project.role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
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
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
