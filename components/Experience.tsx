'use client';

import { Building2, MapPin, Bot, Sparkles, Globe } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="eyebrow">Work History</div>
        <h2>Experience</h2>
        <p className="section-sub">
          5+ years of QA game and application testing across mobile, web, PC, and console platforms,
          alongside active AI product evaluation.
        </p>

        <div className="log">
          {/* Senior Test Engineer */}
          <div className="log-entry">
            <div className="log-meta">
              08/2022 <span className="sep">→</span> 10/2026{' '}
              <span className="badge badge-pass">Completed</span>
            </div>
            <div className="log-title">Senior Test Engineer</div>
            <div className="log-company">
              <span className="company-item">
                <Building2 size={14} style={{ color: 'var(--pass)' }} /> GlobalStep Services Private Limited
              </span>
              <span className="sep">·</span>
              <span className="location-item">
                <MapPin size={14} style={{ color: 'var(--warn)' }} /> Pune, India
              </span>
            </div>
            <ul className="log-list">
              <li>Coordinated 5–8 QA testers and managed daily testing activities.</li>
              <li>Designed and executed test cases across mobile, web, PC and console platforms.</li>
              <li>Performed functional, regression, exploratory, compatibility, smoke and sanity testing.</li>
              <li>Reported, tracked and retested defects using Jira.</li>
              <li>Used Charles Proxy, ADB, Logcat and Android Studio for issue investigation.</li>
              <li>Prepared test reports and collaborated with development teams to resolve issues.</li>
              <li>Supported feature validation and release testing.</li>
            </ul>
          </div>

          {/* Test Engineer */}
          <div className="log-entry">
            <div className="log-meta">
              09/2021 <span className="sep">→</span> 07/2022{' '}
              <span className="badge badge-pass">Completed</span>
            </div>
            <div className="log-title">Test Engineer</div>
            <div className="log-company">
              <span className="company-item">
                <Building2 size={14} style={{ color: 'var(--pass)' }} /> GlobalStep Services Private Limited
              </span>
              <span className="sep">·</span>
              <span className="location-item">
                <MapPin size={14} style={{ color: 'var(--warn)' }} /> Pune, India
              </span>
            </div>
            <ul className="log-list">
              <li>Executed manual testing across mobile, web, PC and console platforms.</li>
              <li>Created test cases and reported software defects.</li>
              <li>Performed regression testing and feature validation.</li>
              <li>Verified fixes and collaborated with QA teams to maintain product quality.</li>
            </ul>
          </div>
        </div>

        {/* Additional Experience Section */}
        <div style={{ marginTop: '56px' }}>
          <div className="eyebrow" style={{ color: 'var(--teal)' }}>Part-time Contract</div>
          <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>
            Additional Experience
          </h3>
          <p className="section-sub" style={{ marginBottom: '32px' }}>
            Structured AI evaluation, model and agent behavior assessment across chat and search platforms.
          </p>

          <div className="log">
            <div className="log-entry">
              <div className="log-meta">
                10/2026 <span className="sep">→</span> Present{' '}
                <span className="badge badge-current">Current Role</span>
                <span className="badge badge-minor" style={{ marginLeft: '8px' }}>Part-time Contract</span>
              </div>
              <div className="log-title">AI Product Evaluator</div>
              <div className="log-company">
                <span className="company-item">
                  <Bot size={14} style={{ color: 'var(--teal)' }} /> micro1
                </span>
                <span className="sep">·</span>
                <span className="location-item">
                  <Sparkles size={14} style={{ color: 'var(--accent)' }} /> Titan Equinox Project
                </span>
                <span className="sep">·</span>
                <span className="location-item">
                  <Globe size={14} style={{ color: 'var(--pass)' }} /> Remote
                </span>
              </div>
              <ul className="log-list">
                <li>Evaluate AI chat and search tools under predefined testing scenarios.</li>
                <li>Execute structured tasks to assess AI model and agent behaviour.</li>
                <li>Follow detailed evaluation guidelines and instructions.</li>
                <li>Test platform behaviour, including usage limits and reset procedures.</li>
                <li>Record observations, anomalies and supporting evidence.</li>
                <li>Submit evaluation results through assigned project platforms.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
