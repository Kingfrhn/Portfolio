'use client';

import { useState } from 'react';
import { Mail, Download, Menu, X, CheckCircle } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header>
      <div className="wrap nav">
        <a href="#" className="logo">
          <span className="dot"></span>OMAR.FM // QA
        </a>

        <nav className="links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Coverage</a>
          <a href="#sample-work">Sample work</a>
          <a href="#terminal">CLI Playground</a>
          <a href="#education">Training</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
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
          <a className="btn btn-solid" href="#contact">
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
          <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
            Experience <span>▸</span>
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
            Projects <span>▸</span>
          </a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
            Coverage <span>▸</span>
          </a>
          <a href="#sample-work" onClick={() => setMobileMenuOpen(false)}>
            Sample work <span>▸</span>
          </a>
          <a href="#terminal" onClick={() => setMobileMenuOpen(false)}>
            CLI Playground <span>▸</span>
          </a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)}>
            Training <span>▸</span>
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact <span>▸</span>
          </a>
          <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
            <a
              className="btn btn-solid"
              style={{ width: '100%', justifyContent: 'center' }}
              href="/resume.pdf"
              download="Omar_Farahan_Molla_Resume.pdf"
            >
              <Download size={14} /> Download Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
