import { motion } from "framer-motion";
import { useEditor } from "../context/EditorContext";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const { isEditing, data, updateSection } = useEditor();
  const { contact } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSection("contact", { ...contact, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 sm:px-12 md:px-24 bg-[var(--color-surface-low)] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-[var(--color-primary)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-5xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="display-text text-5xl md:text-7xl font-extrabold text-[var(--color-on-surface)] mb-6">
            Let's build something.
          </h2>
          <p className="text-xl text-[var(--color-on-surface-muted)] max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or
            just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7 bg-[var(--color-surface-lowest)] p-8 md:p-12 rounded-3xl ambient-shadow border border-[var(--color-outline-variant)]/20"
          >
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-[var(--color-on-surface-muted)] uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="bg-[var(--color-surface-high)] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-[var(--color-on-surface-muted)] uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="bg-[var(--color-surface-high)] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-[var(--color-on-surface-muted)] uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message here..."
                  className="bg-[var(--color-surface-high)] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary py-4 rounded-xl mt-4 flex items-center justify-center gap-2 text-lg"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 flex flex-col gap-10"
          >
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[var(--color-surface-lowest)] ambient-shadow border border-[var(--color-outline-variant)]/20 flex items-center justify-center text-[var(--color-primary)] shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-[var(--color-on-surface-muted)] uppercase tracking-wider">
                    Email
                  </span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="email"
                      value={contact.email}
                      onChange={handleChange}
                      className="bg-transparent border-b border-[var(--color-outline-variant)] focus:outline-none focus:border-[var(--color-primary)] text-lg"
                    />
                  ) : (
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-lg font-medium text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {contact.email}
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[var(--color-surface-lowest)] ambient-shadow border border-[var(--color-outline-variant)]/20 flex items-center justify-center text-[var(--color-primary)] shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-[var(--color-on-surface-muted)] uppercase tracking-wider">
                    Phone
                  </span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={contact.phone}
                      onChange={handleChange}
                      className="bg-transparent border-b border-[var(--color-outline-variant)] focus:outline-none focus:border-[var(--color-primary)] text-lg"
                    />
                  ) : (
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-lg font-medium text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {contact.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-[var(--color-outline-variant)]/30">
              <span className="text-sm font-bold text-[var(--color-on-surface-muted)] uppercase tracking-wider block mb-6">
                Socials
              </span>
              <div className="flex gap-4">
                {isEditing ? (
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      name="github"
                      value={contact.github}
                      onChange={handleChange}
                      placeholder="GitHub URL"
                      className="bg-[var(--color-surface-lowest)] border border-[var(--color-outline-variant)] rounded px-3 py-2 text-sm w-full"
                    />
                    <input
                      type="text"
                      name="linkedin"
                      value={contact.linkedin}
                      onChange={handleChange}
                      placeholder="LinkedIn URL"
                      className="bg-[var(--color-surface-lowest)] border border-[var(--color-outline-variant)] rounded px-3 py-2 text-sm w-full"
                    />
                  </div>
                ) : (
                  <>
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-[var(--color-surface-lowest)] ambient-shadow border border-[var(--color-outline-variant)]/20 flex items-center justify-center text-[var(--color-on-surface)] hover:text-[var(--color-on-surface-lowest)] hover:bg-[var(--color-on-surface)] transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-[var(--color-surface-lowest)] ambient-shadow border border-[var(--color-outline-variant)]/20 flex items-center justify-center text-[var(--color-on-surface)] hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
