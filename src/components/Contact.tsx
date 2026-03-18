import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 sm:px-12 md:px-24 bg-slate-900 relative">
      <div className="container max-w-4xl mx-auto flex flex-col items-center gap-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col items-center gap-4"
        >
          <div className="text-sky-500 font-mono text-xl md:text-2xl mb-2">04. Contact</div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed mb-8">
            새로운 프로젝트 제안, 커피챗, 혹은 간단한 인사 모두 환영합니다!
            언제든지 편하게 연락 주시면 확인 후 답변드리겠습니다.
          </p>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="px-8 py-4 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30 font-bold hover:bg-sky-500 hover:text-slate-950 transition-all duration-300 flex items-center gap-3 text-lg group"
          >
            <MessageSquare size={20} className="group-hover:animate-bounce" />
            Say Hello
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8 w-full max-w-2xl border-t border-slate-800 pt-12"
        >
          {[
            { icon: <Mail size={24} />, label: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
            { icon: <Phone size={24} />, label: portfolioData.contact.phone, href: `tel:${portfolioData.contact.phone.replace(/-/g, '')}` },
            { icon: <Github size={24} />, label: "GitHub", href: portfolioData.contact.github },
            { icon: <Linkedin size={24} />, label: "LinkedIn", href: portfolioData.contact.linkedin },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors"
            >
              <div className="p-3 rounded-full bg-slate-800 border border-slate-700">
                {item.icon}
              </div>
              <span className="font-medium hidden sm:block">{item.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
