import { motion } from "framer-motion";
import { useEditor } from "../context/EditorContext";
import { type BlogPost } from "../data/portfolioData";

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col group cursor-pointer"
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl mb-6 ambient-shadow bg-[var(--color-surface-low)]">
        <div className="absolute inset-0 bg-[var(--color-on-surface)]/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-widest bg-[var(--color-primary-container)]/20 px-3 py-1 rounded-full">
          {post.type}
        </span>
        <span className="text-sm font-medium text-[var(--color-on-surface-muted)]">
          {post.date}
        </span>
      </div>
      <h3 className="display-text text-2xl font-bold text-[var(--color-on-surface)] mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-[var(--color-on-surface-muted)] text-base leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>
    </motion.div>
  );
};

const Blog = () => {
  const { data } = useEditor();
  const { blog } = data;

  if (!blog || blog.length === 0) return null;

  return (
    <section
      id="blog"
      className="py-24 md:py-32 px-6 sm:px-12 md:px-24 bg-[var(--color-surface)] relative"
    >
      <div className="container max-w-7xl mx-auto flex flex-col gap-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--color-outline-variant)]/30 pb-8"
        >
          <div>
            <h2 className="display-text text-4xl md:text-5xl font-extrabold text-[var(--color-on-surface)] mb-4">
              Devlogs & Analysis
            </h2>
            <p className="text-lg text-[var(--color-on-surface-muted)] max-w-xl">
              Thoughts on game design, post-mortems of past projects, and
              breakdowns of mechanics.
            </p>
          </div>
          <button className="text-[var(--color-primary)] font-bold hover:text-[var(--color-primary-container)] transition-colors whitespace-nowrap self-start md:self-auto mt-4 md:mt-0">
            View All Articles →
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
          {blog.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
