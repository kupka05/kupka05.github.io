import { motion } from "framer-motion";
import { useEditor } from "../context/EditorContext";
import { FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";

const Hero = () => {
  const { isEditing, data, updateSection } = useEditor();
  const { hero, header } = data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "jobTitle") {
      updateSection("header", { ...header, jobTitle: value });
    } else {
      updateSection("hero", { ...hero, [name]: value });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center pt-20 px-6 sm:px-12 md:px-24 bg-[var(--color-surface)]"
    >
      {/* Active Whitespace Container */}
      <div className="container max-w-7xl mx-auto z-10 flex flex-col items-start gap-8 mt-12 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {isEditing ? (
            <input
              type="text"
              name="jobTitle"
              value={header.jobTitle}
              onChange={handleChange}
              aria-label="Job title"
              className="bg-[var(--color-surface-low)] border border-[var(--color-outline-variant)] rounded px-3 py-1 text-[var(--color-on-surface-muted)] focus:outline-none focus:border-[var(--color-primary)] font-semibold tracking-wider text-sm md:text-base uppercase"
            />
          ) : (
            <span className="inline-block px-4 py-2 bg-[var(--color-surface-low)] text-[var(--color-on-surface-muted)] font-semibold tracking-widest text-xs md:text-sm uppercase rounded-full">
              {header.jobTitle}
            </span>
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="display-text text-5xl sm:text-7xl md:text-[5.5rem] font-extrabold leading-[1.1] text-[var(--color-on-surface)] w-full max-w-4xl"
        >
          {isEditing ? (
            <textarea
              name="greeting"
              value={hero.greeting}
              onChange={handleChange}
              aria-label="Greeting"
              className="w-full bg-[var(--color-surface-low)] border border-[var(--color-outline-variant)] rounded px-3 py-2 text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-primary)] min-h-[120px]"
            />
          ) : (
            <span className="block">{hero.greeting}</span>
          )}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-xl sm:text-2xl text-[var(--color-on-surface-muted)] mt-2 leading-relaxed prose prose-slate max-w-none w-full"
        >
          {isEditing ? (
            <textarea
              name="description"
              value={hero.description}
              onChange={handleChange}
              aria-label="Description"
              className="w-full bg-[var(--color-surface-low)] border border-[var(--color-outline-variant)] rounded px-3 py-2 text-[var(--color-on-surface-muted)] focus:outline-none focus:border-[var(--color-primary)] min-h-[150px]"
            />
          ) : (
            <ReactMarkdown>{hero.description}</ReactMarkdown>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-6 mt-8"
        >
          <a
            href="#projects"
            className="btn-primary px-10 py-4 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full border-2 border-[var(--color-outline-variant)]/50 text-[var(--color-on-surface-muted)] font-bold hover:text-[var(--color-on-surface)] hover:border-[var(--color-on-surface)] transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <FileText size={20} />
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-12 left-12 text-[var(--color-outline-variant)] hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-bold rotate-[-90deg] origin-bottom-left mb-8 whitespace-nowrap">
          Scroll Down
        </span>
        <div className="w-px h-16 bg-[var(--color-outline-variant)]/50 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-[var(--color-primary)] absolute top-0"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
