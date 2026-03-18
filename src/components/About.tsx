import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { User, Code, PenTool, Database } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 sm:px-12 md:px-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container max-w-5xl mx-auto flex flex-col items-start gap-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 flex items-center gap-4">
            <span className="text-sky-500 font-mono text-xl md:text-2xl">01.</span>
            {portfolioData.about.title}
            <div className="h-px bg-slate-800 flex-1 ml-4 hidden sm:block"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-24 items-start w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6 text-slate-300 text-base md:text-lg leading-relaxed"
          >
            <div className="prose prose-invert prose-slate prose-a:text-sky-400 max-w-none prose-p:mb-4">
              {portfolioData.about.content ? (
                <ReactMarkdown>{portfolioData.about.content}</ReactMarkdown>
              ) : (
                <>
                  <p>
                    안녕하세요! 저는 데이터를 기반으로 유저 경험을 설계하는 <span className="text-sky-400 font-semibold">게임 기획자</span>입니다.
                  </p>
                  <p>
                    3년 동안 다양한 장르(RPG, 퍼즐, 전략)의 게임을 개발하며 시스템 기획부터 레벨 디자인, 그리고 밸런싱까지 다방면의 경험을 쌓았습니다. 단순히 기획서를 작성하는 것을 넘어, 팀원들과 끊임없이 소통하며 완성도 높은 게임을 만드는 과정 자체를 즐깁니다.
                  </p>
                  <p>
                    현재는 유저가 게임의 핵심 루프에 자연스럽게 몰입할 수 있도록 돕는 <span className="text-slate-100 font-medium">디테일한 레벨 디자인</span>과 <span className="text-slate-100 font-medium">정교한 밸런싱 구조</span>를 설계하는 데 큰 관심을 두고 있습니다.
                  </p>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: <PenTool size={20} />, label: "시스템 기획" },
                { icon: <Database size={20} />, label: "데이터 밸런싱" },
                { icon: <Code size={20} />, label: "스크립팅" },
                { icon: <User size={20} />, label: "UI/UX 기획" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm md:text-base text-slate-400 font-medium">
                  <span className="text-sky-500">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-sm mx-auto group"
          >
            {/* Image Placeholder Frame */}
            <div className="absolute inset-0 border-2 border-sky-500/50 rounded-xl translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative aspect-square md:aspect-[3/4] bg-slate-800 rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0 bg-sky-900/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
              {/* Replace src with real image later */}
              <img
                src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop"
                alt="Profile Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
