import { motion } from 'framer-motion';
import { useEditor } from '../context/EditorContext';
import { type Skill } from '../data/portfolioData';

const SkillBar = ({ skill, index, onUpdate }: { skill: Skill; index: number; onUpdate?: (updatedSkill: Skill) => void }) => {
  const { isEditing } = useEditor();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onUpdate) {
      onUpdate({ ...skill, name: e.target.value });
    }
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onUpdate) {
      onUpdate({ ...skill, level: e.target.value as '상' | '중' | '하' });
    }
  };

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
      <div className="flex justify-between items-end gap-4">
        {isEditing ? (
          <input
            type="text"
            value={skill.name}
            onChange={handleNameChange}
            className="bg-slate-800/50 border border-slate-700 rounded px-2 py-1 text-sm md:text-base text-slate-200 focus:outline-none focus:border-sky-500 w-full max-w-[150px]"
          />
        ) : (
          <span className="text-slate-200 font-medium text-sm md:text-base">{skill.name}</span>
        )}

        {isEditing ? (
          <select
            value={skill.level}
            onChange={handleLevelChange}
            className="bg-slate-800/50 border border-slate-700 rounded px-2 py-1 text-xs font-bold text-slate-400 focus:outline-none focus:border-sky-500"
          >
            <option value="상">상</option>
            <option value="중">중</option>
            <option value="하">하</option>
          </select>
        ) : (
          <span className="text-xs font-bold text-slate-500 px-2 py-1 rounded bg-slate-800">
            {skill.level}
          </span>
        )}
      </div>
      {!isEditing && (
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mt-1">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: getLevelPercentage(skill.level) }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
            className={`h-full rounded-full ${getColor(skill.level)}`}
          />
        </div>
      )}
    </motion.div>
  );
};

const Skills = () => {
  const { data, updateSection } = useEditor();
  const { skills } = data;
  const categories = Array.from(new Set(skills.map(s => s.category)));

  const handleUpdateSkill = (indexInArray: number, updatedSkill: Skill) => {
    const newSkills = [...skills];
    newSkills[indexInArray] = updatedSkill;
    updateSection('skills', newSkills);
  };

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
            const categorySkillsWithOriginalIndex = skills
              .map((s, index) => ({ skill: s, originalIndex: index }))
              .filter(item => item.skill.category === category);

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
                  {categorySkillsWithOriginalIndex.map((item, idx) => (
                    <SkillBar
                      key={`${item.skill.name}-${idx}`}
                      skill={item.skill}
                      index={idx}
                      onUpdate={(updatedSkill) => handleUpdateSkill(item.originalIndex, updatedSkill)}
                    />
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
