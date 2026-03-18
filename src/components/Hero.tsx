import { motion } from 'framer-motion';
import { useEditor } from '../context/EditorContext';
import { ChevronDown, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const Hero = () => {
  const { isEditing, data, updateSection } = useEditor();
  const { hero, header } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'jobTitle') {
      updateSection('header', { ...header, jobTitle: value });
    } else {
      updateSection('hero', { ...hero, [name]: value });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 px-6 sm:px-12 md:px-24 bg-slate-900"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-50"></div>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <div className="container max-w-5xl mx-auto z-10 flex flex-col items-start gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sky-400 font-semibold tracking-wider text-sm md:text-base uppercase w-full"
        >
          {isEditing ? (
            <input
              type="text"
              name="jobTitle"
              value={header.jobTitle}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded px-3 py-1 text-sky-400 focus:outline-none focus:border-sky-500"
            />
          ) : (
            header.jobTitle
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tighter text-slate-100 w-full"
        >
          {isEditing ? (
            <textarea
              name="greeting"
              value={hero.greeting}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500 min-h-[120px]"
            />
          ) : (
            <>
              <span className="block">{hero.greeting.split("게임 기획자")[0]}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
                {hero.greeting.includes("게임 기획자") ? "게임 기획자 " + (hero.greeting.split("게임 기획자")[1] || "").split("입니다")[0].trim() : ""}
              </span>
              <span className="block text-slate-400 text-3xl sm:text-4xl md:text-5xl mt-2">입니다.</span>
            </>
          )}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg sm:text-xl text-slate-400 mt-4 leading-relaxed prose prose-invert prose-slate prose-a:text-sky-400 prose-lg max-w-none w-full"
        >
          {isEditing ? (
            <textarea
              name="description"
              value={hero.description}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded px-3 py-2 text-slate-400 focus:outline-none focus:border-sky-500 min-h-[150px]"
            />
          ) : (
            <ReactMarkdown>{hero.description}</ReactMarkdown>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 transition-colors flex items-center gap-2"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <FileText size={18} />
            이력서 다운로드
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
