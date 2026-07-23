import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ currentView, onViewProjects, onViewHome }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = currentView === "projects-hub" ? "projects" : useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (id) => {
    setOpen(false);
    if (id === "projects") {
      onViewProjects();
    } else {
      onViewHome();
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home");
          }}
          className="font-display text-lg font-semibold tracking-tight"
        >
          <span className="text-gradient">SM</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? "text-[var(--text)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-[var(--surface-strong)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-[var(--text)] transition-transform hover:scale-105"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href="/resume.pdf"
            download
            className="hidden rounded-full px-5 py-2.5 text-sm font-medium text-white transition-shadow bg-[linear-gradient(120deg,var(--color-accent-violet),var(--color-accent-purple))] hover:shadow-[0_8px_24px_-8px_var(--color-accent-purple)] md:inline-flex"
          >
            Resume
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-[var(--text)] md:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      active === link.id ? "bg-[var(--surface-strong)] text-[var(--text)]" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="block rounded-full px-4 py-3 text-center text-sm font-medium text-white bg-[linear-gradient(120deg,var(--color-accent-violet),var(--color-accent-purple))]"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
