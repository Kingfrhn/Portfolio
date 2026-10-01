'use client';

import { Mail, Download, Linkedin, Github, Briefcase, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="status-line">
              <span className="dot-status" />
              Open to Opportunities &nbsp;·&nbsp; Immediate Joiner
            </div>

            <h1>Omar Farahan Molla</h1>

            <div className="role-tags">
              <span className="role-tag">
                <Briefcase size={15} style={{ color: 'var(--accent)' }} /> Senior QA Test Engineer
              </span>
              <span className="role-tag">
                <Clock size={15} style={{ color: 'var(--pass)' }} /> 5+ Years Experience
              </span>
              <span className="role-tag">
                <MapPin size={15} style={{ color: 'var(--warn)' }} /> Kolkata, India
              </span>
            </div>

            <p className="bio">
              Manual QA specialist with 5+ years testing software across mobile, console, PC, and web platforms.
              Experienced in functional, regression, exploratory, and cross-platform test cycles for global studios
              including King, Scopely, Bandai Namco, Microids, and Eidos Montreal. Currently available as an
              immediate joiner and actively seeking Manual Testing &amp; Senior QA Engineer roles.
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
                <Briefcase size={14} style={{ color: 'var(--teal)', flexShrink: 0 }} />
                <span>Immediate Joiner</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="num">5<span className="unit">yrs+</span></div>
            <div className="label">QA experience</div>
          </div>
          <div className="stat">
            <div className="num">600<span className="unit">+</span></div>
            <div className="label">Test cases written</div>
          </div>
          <div className="stat">
            <div className="num">900<span className="unit">+</span></div>
            <div className="label">Bugs logged in Jira</div>
          </div>
          <div className="stat">
            <div className="num">8<span className="unit">plat.</span></div>
            <div className="label">Platforms covered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
