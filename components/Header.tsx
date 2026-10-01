'use client';

import { useState, useEffect } from 'react';
import { Mail, Download, Menu, X, CheckCircle, Sun, Moon, Monitor } from 'lucide-react';

interface HeaderProps {
  onResetGame?: () => void;
}

type ThemeMode = 'dark' | 'light' | 'system';

export default function Header({ onResetGame }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const saved = localStorage.getItem('omar_portfolio_theme') as ThemeMode | null;
    if (saved && ['dark', 'light', 'system'].includes(saved)) {
      setThemeMode(saved);
      applyTheme(saved);
    } else {
      applyTheme('light');
    }
  }, []);

  const applyTheme = (mode: ThemeMode) => {
    if (mode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', mode);
    }
  };

  const cycleTheme = () => {
    const nextTheme: Record<ThemeMode, ThemeMode> = {
      dark: 'light',
      light: 'system',
      system: 'dark',
    };
    const next = nextTheme[themeMode];
    setThemeMode(next);
    localStorage.setItem('omar_portfolio_theme', next);
    applyTheme(next);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onResetGame) {
      onResetGame();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="wrap nav">
        <a href="#" className="logo" onClick={handleLogoClick} aria-label="Back to top">
          <span className="dot" />
          <span className="logo-full">Omar Farahan Molla // QA Engineer</span>
          <span className="logo-short">Omar · QA</span>
        </a>

        <nav className="links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#sample-work">Sample Work</a>
          <a href="#terminal">CLI</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button
            className="btn btn-icon"
            onClick={cycleTheme}
            title={`Theme: ${themeMode} — click to cycle`}
            aria-label="Switch theme"
          >
            {themeMode === 'dark' && <Moon size={15} />}
            {themeMode === 'light' && <Sun size={15} />}
            {themeMode === 'system' && <Monitor size={15} />}
          </button>

          <a className="btn btn-text" href="mailto:omrfrhn@gmail.com">
            <Mail size={14} /> Email
          </a>
          <a
            className="btn"
            href="/resume.pdf"
            download="Omar_Farahan_Molla_Resume.pdf"
            title="Download PDF Resume"
          >
            <Download size={14} /> Resume
          </a>
          <a
            className="btn btn-solid"
            href="#contact"
            title="Available as an Immediate Joiner"
          >
            <CheckCircle size={14} /> Immediate Joiner
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#experience" onClick={closeMenu}>Experience <span>▸</span></a>
          <a href="#projects" onClick={closeMenu}>Projects <span>▸</span></a>
          <a href="#skills" onClick={closeMenu}>Skills <span>▸</span></a>
          <a href="#sample-work" onClick={closeMenu}>Sample Work <span>▸</span></a>
          <a href="#terminal" onClick={closeMenu}>CLI <span>▸</span></a>
          <a href="#education" onClick={closeMenu}>Education <span>▸</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>▸</span></a>

          <div className="mobile-drawer-actions">
            <div className="mobile-action-row">
              <button
                className="btn"
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={cycleTheme}
              >
                {themeMode === 'dark' && <Moon size={14} />}
                {themeMode === 'light' && <Sun size={14} />}
                {themeMode === 'system' && <Monitor size={14} />}
                Theme: {themeMode.toUpperCase()}
              </button>
              <a
                className="btn"
                style={{ flex: 1, justifyContent: 'center' }}
                href="mailto:omrfrhn@gmail.com"
                onClick={closeMenu}
              >
                <Mail size={14} /> Email Me
              </a>
            </div>

            <a
              className="btn btn-solid"
              style={{ width: '100%', justifyContent: 'center' }}
              href="/resume.pdf"
              download="Omar_Farahan_Molla_Resume.pdf"
              onClick={closeMenu}
            >
              <Download size={14} /> Download Resume PDF
            </a>

            <a
              className="btn"
              style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--pass)', color: 'var(--pass)' }}
              href="#contact"
              onClick={closeMenu}
            >
              <CheckCircle size={14} /> Immediate Joiner
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
