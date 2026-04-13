import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useEditor } from "../context/EditorContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isEditing, data, updateSection } = useEditor();
  const { header } = data;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav border-b border-[var(--color-outline-variant)]/20 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#home"
          className="display-text text-xl sm:text-2xl font-bold text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-sm"
        >
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={header.name}
              onChange={(e) =>
                updateSection("header", { ...header, name: e.target.value })
              }
              className="bg-[var(--color-surface-low)] border border-[var(--color-outline-variant)] rounded px-2 py-1 text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-primary)] w-32"
              onClick={(e) => e.preventDefault()}
            />
          ) : (
            header.name
          )}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[var(--color-on-surface-muted)] hover:text-[var(--color-on-surface)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-[var(--color-surface-lowest)] text-[var(--color-on-surface)] text-sm font-bold border border-[var(--color-outline-variant)] hover:border-[var(--color-on-surface)] rounded-full transition-colors ambient-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--color-on-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          title={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-surface)] border-b border-[var(--color-outline-variant)]/20 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-semibold text-[var(--color-on-surface-muted)] hover:text-[var(--color-on-surface)] transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 text-center btn-primary py-3 px-6 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
