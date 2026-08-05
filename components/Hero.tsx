'use client';

import { Mail, Download, Linkedin, Github, Gamepad2, Briefcase, MapPin } from 'lucide-react';
import { retroSound } from '@/utils/audio';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="status-line">
              <span style={{ color: 'var(--warn)' }}>1UP: 084700</span>{' '}
              <span className="sep">▸</span> HIGH SCORE:{' '}
              <span style={{ color: 'var(--pass)' }}>999990</span>{' '}
              <span className="sep">▸</span> STAGE: <span style={{ color: 'var(--accent)' }}>QA MASTER</span>{' '}
              <span className="sep">▸</span> LIVES: <span style={{ color: 'var(--bug)' }}>❤ ❤ ❤</span>
              <span className="cursor"></span>
            </div>

            <h1>Omar Farahan Molla</h1>

            <div className="role-tags">
              <span className="role-tag">
                <Briefcase size={15} style={{ color: 'var(--accent)' }} /> Senior QA Test Engineer
              </span>
              <span className="role-tag">
                <Gamepad2 size={15} style={{ color: 'var(--pass)' }} /> Game &amp; Application Testing
              </span>
              <span className="role-tag">
                <MapPin size={15} style={{ color: 'var(--warn)' }} /> Kolkata, India
              </span>
            </div>

            <p className="bio">
              I break builds before players do. 4.5+ years testing games and applications across mobile, console, PC, and web, running functional, regression, and exploratory cycles for global studios including King, Scopely, Bandai Namco, Microids, and Eidos Montreal. Currently on notice period and actively looking for Manual Testing &amp; QA Engineer roles.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-solid"
                href="/resume.pdf"
                download="Omar_Farahan_Molla_Resume.pdf"
                onClick={() => retroSound.playCoin()}
              >
                <Download size={15} /> Download Resume PDF
              </a>
              <a 
                className="btn" 
                href="mailto:omrfrhn@gmail.com"
                onClick={() => retroSound.playSelect()}
              >
                <Mail size={15} /> Get in touch
              </a>
              <a
                className="btn"
                href="https://linkedin.com/in/omrfrhn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => retroSound.playSelect()}
              >
                <Linkedin size={15} /> LinkedIn ↗
              </a>
              <a
                className="btn"
                href="https://github.com/Kingfrhn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => retroSound.playSelect()}
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
                <Gamepad2 size={16} style={{ color: 'var(--pass)', flexShrink: 0 }} />
                <span>P1 READY • Manual Testing Roles</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="num">
              4.5<span className="unit">+ yrs</span>
            </div>
            <div className="label">QA experience</div>
          </div>
          <div className="stat">
            <div className="num">
              600<span className="unit">+</span>
            </div>
            <div className="label">Test cases written</div>
          </div>
          <div className="stat">
            <div className="num">
              900<span className="unit">+</span>
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
