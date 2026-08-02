'use client';

import { useState, useEffect } from 'react';
import { Mail, Download, Menu, X, CheckCircle, Volume2, VolumeX, RotateCcw, Sun, Moon, Monitor } from 'lucide-react';
import { retroSound } from '@/utils/audio';

interface HeaderProps {
  onResetGame?: () => void;
}

type ThemeMode = 'dark' | 'light' | 'system';

export default function Header({ onResetGame }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('omar_portfolio_theme') as ThemeMode | null;
    if (saved && ['dark', 'light', 'system'].includes(saved)) {
      setThemeMode(saved);
      applyTheme(saved);
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
    retroSound.playSelect();
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

  const toggleMenu = () => {
    retroSound.playSelect();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAudio = () => {
    const muted = retroSound.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      retroSound.playCoin();
    }
  };

  const handleNavClick = () => {
    retroSound.playSelect();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    retroSound.playCoin();
    if (onResetGame) {
      onResetGame();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="wrap nav">
        <a href="#" className="logo" onClick={handleLogoClick} title="Return to Arcade Title Screen">
          <span className="dot"></span>PRESS START // OMAR.FM
        </a>

        <nav className="links">
          <a href="#experience" onClick={handleNavClick} onMouseEnter={() => retroSound.playSelect()}>Experience</a>
          <a href="#projects" onClick={handleNavClick} onMouseEnter={() => retroSound.playSelect()}>Projects</a>
          <a href="#skills" onClick={handleNavClick} onMouseEnter={() => retroSound.playSelect()}>Coverage</a>
          <a href="#sample-work" onClick={handleNavClick} onMouseEnter={() => retroSound.playSelect()}>Sample work</a>
          <a href="#terminal" onClick={handleNavClick} onMouseEnter={() => retroSound.playSelect()}>CLI Playground</a>
          <a href="#education" onClick={handleNavClick} onMouseEnter={() => retroSound.playSelect()}>Training</a>
          <a href="#contact" onClick={handleNavClick} onMouseEnter={() => retroSound.playSelect()}>Contact</a>
        </nav>

        <div className="nav-actions">
          {/* Theme Mode Switcher */}
          <button
            className="btn btn-icon"
            onClick={cycleTheme}
            title={`Current Theme: ${themeMode.toUpperCase()} (Click to switch)`}
            aria-label="Switch theme mode"
            style={{ padding: '8px 10px', color: 'var(--accent)' }}
          >
            {themeMode === 'dark' && <Moon size={15} />}
            {themeMode === 'light' && <Sun size={15} />}
            {themeMode === 'system' && <Monitor size={15} />}
          </button>

          {onResetGame && (
            <button
              className="btn btn-icon"
              onClick={onResetGame}
              title="Arcade Title Screen / Insert Coin"
              aria-label="Arcade title screen"
              style={{ padding: '8px 10px', color: 'var(--warn)' }}
            >
              <RotateCcw size={15} />
            </button>
          )}
          <button
            className="btn btn-icon"
            onClick={toggleAudio}
            title={isMuted ? "Enable 8-Bit Arcade Sound" : "Mute Sound"}
            aria-label="Toggle retro audio"
            style={{ padding: '8px 10px', color: isMuted ? 'var(--text-faint)' : 'var(--pass)' }}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
          <a
            className="btn btn-text"
            href="mailto:omrfrhn@gmail.com"
            onClick={handleNavClick}
          >
            <Mail size={14} /> Email
          </a>
          <a
            className="btn"
            href="/resume.pdf"
            download="Omar_Farahan_Molla_Resume.pdf"
            title="Download PDF Resume"
            onClick={() => retroSound.playCoin()}
          >
            <Download size={14} /> Resume
          </a>
          <a
            className="btn btn-solid"
            href="#contact"
            onClick={handleNavClick}
          >
            <CheckCircle size={14} /> Notice Period
          </a>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#experience" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }}>
            Experience <span>▸</span>
          </a>
          <a href="#projects" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }}>
            Projects <span>▸</span>
          </a>
          <a href="#skills" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }}>
            Coverage <span>▸</span>
          </a>
          <a href="#sample-work" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }}>
            Sample work <span>▸</span>
          </a>
          <a href="#terminal" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }}>
            CLI Playground <span>▸</span>
          </a>
          <a href="#education" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }}>
            Training <span>▸</span>
          </a>
          <a href="#contact" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }}>
            Contact <span>▸</span>
          </a>
          <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
            <button
              className="btn"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={cycleTheme}
            >
              Theme: {themeMode.toUpperCase()}
            </button>
            <a
              className="btn btn-solid"
              style={{ width: '100%', justifyContent: 'center' }}
              href="/resume.pdf"
              download="Omar_Farahan_Molla_Resume.pdf"
              onClick={() => retroSound.playCoin()}
            >
              <Download size={14} /> Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
