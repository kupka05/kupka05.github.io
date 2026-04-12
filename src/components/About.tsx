import { motion } from "framer-motion";
import { useEditor } from "../context/EditorContext";
import { PenTool, Database, Code, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

const iconMap = {
  PenTool,
  Database,
  Code,
  User,
};

const About = () => {
  const { isEditing, data, updateSection } = useEditor();
  const { about } = data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    updateSection("about", { ...about, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 sm:px-12 md:px-24 bg-[var(--color-surface-low)] relative overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto flex flex-col gap-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
        >
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            <div>
              <h2 className="display-text text-4xl md:text-5xl font-extrabold text-[var(--color-on-surface)] mb-8">
                {isEditing ? (
                  <input
                    type="text"
                    name="title"
                    value={about.title}
                    onChange={handleChange}
                    className="bg-[var(--color-surface-lowest)] border border-[var(--color-outline-variant)] rounded px-3 py-1 focus:outline-none focus:border-[var(--color-primary)] w-full"
                  />
                ) : (
                  about.title
                )}
              </h2>
              <div className="text-[var(--color-on-surface-muted)] text-lg md:text-xl leading-relaxed prose prose-slate max-w-none">
                {isEditing ? (
                  <textarea
                    name="content"
                    value={about.content}
                    onChange={handleChange}
                    className="w-full h-48 bg-[var(--color-surface-lowest)] border border-[var(--color-outline-variant)] rounded px-3 py-2 focus:outline-none focus:border-[var(--color-primary)]"
                  />
                ) : (
                  <ReactMarkdown>{about.content}</ReactMarkdown>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {about.roles.map((role, index) => {
                const IconComponent =
                  iconMap[role.icon as keyof typeof iconMap] || PenTool;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[var(--color-surface-lowest)] rounded-2xl border border-[var(--color-outline-variant)]/30 ambient-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary-container)]/20 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                      <IconComponent size={20} />
                    </div>
                    <span className="font-semibold text-[var(--color-on-surface)] text-sm">
                      {role.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ambient-shadow max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent z-10 mix-blend-overlay"></div>
              {isEditing ? (
                <div className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-[var(--color-surface)]/80">
                  <input
                    type="text"
                    name="imageUrl"
                    value={about.imageUrl}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="w-full bg-[var(--color-surface-lowest)] border border-[var(--color-outline-variant)] rounded px-3 py-2 text-sm text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-primary)]"
                  />
                </div>
              ) : null}
              <img
                src={about.imageUrl}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
