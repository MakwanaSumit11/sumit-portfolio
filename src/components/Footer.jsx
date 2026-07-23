import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] py-10">
      <div className="section-container flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-[var(--text-muted)]">
          Made with <span className="text-[var(--color-accent-purple)]">❤</span> by Sumit Makwana
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:makwanasumit011@gmail.com" aria-label="Email" className="text-[var(--text-faint)] transition-colors hover:text-[var(--color-accent-cyan)]">
            <FiMail />
          </a>
          <a href="https://github.com/MakwanaSumit11" aria-label="GitHub" className="text-[var(--text-faint)] transition-colors hover:text-[var(--color-accent-cyan)]">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/sumit-makwana-08523524b/" aria-label="LinkedIn" className="text-[var(--text-faint)] transition-colors hover:text-[var(--color-accent-cyan)]">
            <FiLinkedin />
          </a>
        </div>
        <p className="text-xs text-[var(--text-faint)]">© {new Date().getFullYear()} sumit11.tech</p>
      </div>
    </footer>
  );
}
