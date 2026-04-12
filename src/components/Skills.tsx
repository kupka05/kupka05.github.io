import { motion } from "framer-motion";
import { useEditor } from "../context/EditorContext";
import { type Skill } from "../data/portfolioData";

const SkillCard = ({ name, level, category }: Skill) => {
  return (
    <div className="flex flex-col gap-2 p-6 bg-[var(--color-surface-lowest)] rounded-2xl border border-[var(--color-outline-variant)]/30 hover:border-[var(--color-primary)]/50 transition-colors group ambient-shadow">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-[var(--color-on-surface)] text-lg group-hover:text-[var(--color-primary)] transition-colors">
          {name}
        </span>
        <span className="text-xs uppercase tracking-widest text-[var(--color-on-surface-muted)] font-semibold">
          {category}
        </span>
      </div>

      {/* Level indicators instead of bars for a cleaner look */}
      <div className="flex gap-1.5">
        <div
          className={`h-2 flex-1 rounded-full ${level === "상" || level === "중" || level === "하" ? "bg-[var(--color-primary)]" : "bg-[var(--color-surface-container)]"}`}
        ></div>
        <div
          className={`h-2 flex-1 rounded-full ${level === "상" || level === "중" ? "bg-[var(--color-primary)]" : "bg-[var(--color-surface-container)]"}`}
        ></div>
        <div
          className={`h-2 flex-1 rounded-full ${level === "상" ? "bg-[var(--color-primary)]" : "bg-[var(--color-surface-container)]"}`}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { data } = useEditor();
  const { skills } = data;

  const engineSkills = skills.filter((s) => s.category === "Engine");
  const scriptingSkills = skills.filter((s) => s.category === "Scripting");
  const toolSkills = skills.filter((s) => s.category === "Tools");

  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 sm:px-12 md:px-24 bg-[var(--color-surface)] relative"
    >
      <div className="container max-w-7xl mx-auto flex flex-col gap-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="display-text text-4xl md:text-5xl font-extrabold text-[var(--color-on-surface)] mb-4">
            Technical Arsenal
          </h2>
          <p className="text-lg text-[var(--color-on-surface-muted)] max-w-2xl mx-auto">
            The tools and languages I use to bring game mechanics to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-[var(--color-on-surface-muted)] mb-2 px-2 border-l-4 border-[var(--color-primary)]">
              Game Engines
            </h3>
            {engineSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-[var(--color-on-surface-muted)] mb-2 px-2 border-l-4 border-[var(--color-primary-container)]">
              Scripting
            </h3>
            {scriptingSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-[var(--color-on-surface-muted)] mb-2 px-2 border-l-4 border-[var(--color-outline-variant)]">
              Design Tools
            </h3>
            {toolSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
