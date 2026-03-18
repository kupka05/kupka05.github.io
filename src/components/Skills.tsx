import { motion } from 'framer-motion';
import { portfolioData, type Skill } from '../data/portfolioData';

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const getLevelPercentage = (level: Skill['level']) => {
    switch (level) {
      case '상': return '90%';
      case '중': return '60%';
      case '하': return '30%';
      default: return '50%';
    }
  };

  const getColor = (level: Skill['level']) => {
    switch (level) {
      case '상': return 'bg-sky-400';
      case '중': return 'bg-indigo-400';
      case '하': return 'bg-slate-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col gap-2"
    >
      <div className="flex justify-between items-end">
        <span className="text-slate-200 font-medium text-sm md:text-base">{skill.name}</span>
        <span className="text-xs font-bold text-slate-500 px-2 py-1 rounded bg-slate-800">
          {skill.level}
        </span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: getLevelPercentage(skill.level) }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
          className={`h-full rounded-full ${getColor(skill.level)}`}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = Array.from(new Set(portfolioData.skills.map(s => s.category)));

  return (
    <section id="skills" className="py-24 md:py-32 px-6 sm:px-12 md:px-24 bg-slate-900 relative">
      <div className="container max-w-5xl mx-auto flex flex-col gap-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 flex items-center gap-4">
            <span className="text-sky-500 font-mono text-xl md:text-2xl">02.</span>
            Skills
            <div className="h-px bg-slate-800 flex-1 ml-4 hidden sm:block"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {categories.map((category, catIdx) => {
            const categorySkills = portfolioData.skills.filter(s => s.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.2 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xl font-semibold text-sky-400 border-b border-slate-800 pb-2">
                  {category}
                </h3>
                <div className="flex flex-col gap-6">
                  {categorySkills.map((skill, idx) => (
                    <SkillBar key={skill.name} skill={skill} index={idx} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
