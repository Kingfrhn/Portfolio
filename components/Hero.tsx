'use client';

import Image from 'next/image';
import { Mail, Download, Linkedin, Github, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="status-line">
              RUN #0847 <span className="sep">▸</span> STATUS:{' '}
              <span style={{ color: 'var(--pass)', fontWeight: 600 }}>STABLE</span>{' '}
              <span className="sep">▸</span> 0 CRITICAL BUGS
              <span className="cursor"></span>
            </div>

            <h1>Omar Farahan Molla</h1>

            <p className="role">
              Senior QA Test Engineer <span className="pipe">/</span> Game &amp; Application Testing{' '}
              <span className="pipe">/</span> Kolkata, India
            </p>

            <p className="bio">
              I break builds before players do. Five years testing games and applications across mobile, console, PC, and web, running functional, regression, and exploratory cycles for global studios including King, Scopely, Bandai Namco, Microids, and Eidos Montreal. Currently on notice period and available for full-time QA roles immediately.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-solid"
                href="/resume.pdf"
                download="Omar_Farahan_Molla_Resume.pdf"
              >
                <Download size={15} /> Download Resume PDF
              </a>
              <a className="btn" href="mailto:omrfrhn@gmail.com">
                <Mail size={15} /> Get in touch
              </a>
              <a
                className="btn"
                href="https://linkedin.com/in/omrfrhn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={15} /> LinkedIn ↗
              </a>
              <a
                className="btn"
                href="https://github.com/Kingfrhn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} /> GitHub ↗
              </a>
            </div>
          </div>

          <div>
            <div className="profile-card">
              <img
                src="/photo_omar.jpg"
                alt="Omar Farahan Molla — Senior QA Test Engineer"
              />
              <div className="profile-card-badge">
                <CheckCircle2 size={16} style={{ color: 'var(--pass)', flexShrink: 0 }} />
                <span>Serving Notice • Immediate Joiner</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="num">
              5<span className="unit">yrs</span>
            </div>
            <div className="label">QA experience</div>
          </div>
          <div className="stat">
            <div className="num">
              1000<span className="unit">+</span>
            </div>
            <div className="label">Test cases written</div>
          </div>
          <div className="stat">
            <div className="num">
              800<span className="unit">+</span>
            </div>
            <div className="label">Bugs logged in Jira</div>
          </div>
          <div className="stat">
            <div className="num">
              8<span className="unit">plat.</span>
            </div>
            <div className="label">Platforms covered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
