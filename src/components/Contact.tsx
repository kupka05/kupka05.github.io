import { motion } from 'framer-motion';
import { useEditor } from '../context/EditorContext';
import { Mail, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { isEditing, data, updateSection } = useEditor();
  const { contact } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSection('contact', { ...contact, [e.target.name]: e.target.value });
  };

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
            href={`mailto:${contact.email}`}
            aria-label="Say Hello"
            className="px-8 py-4 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30 font-bold hover:bg-sky-500 hover:text-slate-950 transition-all duration-300 flex items-center gap-3 text-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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
          className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-12 mt-8 w-full max-w-2xl border-t border-slate-800 pt-12"
        >
          {isEditing ? (
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-slate-400" />
                <input type="email" name="email" value={contact.email} onChange={handleChange} aria-label="Email address" className="flex-1 bg-slate-800/50 border border-slate-700 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-sky-500" placeholder="Email" />
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-slate-400" />
                <input type="text" name="phone" value={contact.phone} onChange={handleChange} aria-label="Phone number" className="flex-1 bg-slate-800/50 border border-slate-700 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-sky-500" placeholder="Phone" />
              </div>
              <div className="flex items-center gap-4">
                <Github size={24} className="text-slate-400" />
                <input type="url" name="github" value={contact.github} onChange={handleChange} aria-label="GitHub URL" className="flex-1 bg-slate-800/50 border border-slate-700 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-sky-500" placeholder="GitHub URL" />
              </div>
              <div className="flex items-center gap-4">
                <Linkedin size={24} className="text-slate-400" />
                <input type="url" name="linkedin" value={contact.linkedin} onChange={handleChange} aria-label="LinkedIn URL" className="flex-1 bg-slate-800/50 border border-slate-700 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-sky-500" placeholder="LinkedIn URL" />
              </div>
            </div>
          ) : (
            [
              { icon: <Mail size={24} />, label: contact.email, href: `mailto:${contact.email}`, ariaLabel: "Email address" },
              { icon: <Phone size={24} />, label: contact.phone, href: `tel:${contact.phone.replace(/-/g, '')}`, ariaLabel: "Phone number" },
              { icon: <Github size={24} />, label: "GitHub", href: contact.github, ariaLabel: "GitHub profile" },
              { icon: <Linkedin size={24} />, label: "LinkedIn", href: contact.linkedin, ariaLabel: "LinkedIn profile" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                aria-label={item.ariaLabel}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-full"
              >
                <div className="p-3 rounded-full bg-slate-800 border border-slate-700">
                  {item.icon}
                </div>
                <span className="font-medium sr-only sm:not-sr-only">{item.label}</span>
              </a>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
