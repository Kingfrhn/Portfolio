'use client';

import { Mail, Phone, Linkedin, Github, Download, CheckCircle } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--pass)' }}>
            Status: Serving Notice Period • Last Working Day (LWD): 9th October 2026
          </div>

          <h2>Let's Ship High-Quality, Stable Builds Together</h2>

          <p className="section-sub">
            Senior QA Test Engineer with 5+ years of experience. Currently serving notice period with <strong>Last Working Day (LWD): 9th October 2026</strong>. Actively seeking Manual Testing &amp; Senior QA Test Engineer roles in game testing or application software. Available for technical QA interviews and joining immediately upon release.
          </p>

          <div className="contact-actions">
            <a className="btn btn-solid" href="mailto:omrfrhn@gmail.com">
              <Mail size={15} /> omrfrhn@gmail.com
            </a>
            <a className="btn" href="tel:+919547508846">
              <Phone size={15} /> +91 95475 08846
            </a>
            <a
              className="btn"
              href="/resume.pdf"
              download="Omar_Farahan_Molla_Resume.pdf"
            >
              <Download size={15} /> Download PDF Resume
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
      </section>

      <footer className="wrap">
        <span>© {new Date().getFullYear()} Omar Farahan Molla — Senior QA Test Engineer (5+ Years Exp)</span>
        <span>Serving Notice Period • LWD: 9th October 2026 | Kolkata, India</span>
      </footer>
    </>
  );
}
