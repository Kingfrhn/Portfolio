'use client';

import { Building2, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="eyebrow">STAGE SELECT &amp; CAMPAIGN LOG</div>
        <h2>Experience</h2>
        <p className="section-sub">
          5+ years of continuous QA execution, steadily scaling from test execution to leading multi-platform test cycles for AAA and live-ops studios.
        </p>

        <div className="log">
          <div className="log-entry">
            <div className="log-meta">
              08/2022 <span className="sep">→</span> Present{' '}
              <span className="badge badge-current">STAGE 2 // CURRENT ROLE</span>
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
              <li>
                Led a team of 5–8 testers and coordinated daily QA activities during multi-platform testing cycles.
              </li>
              <li>
                Designed and executed functional and regression test cases to validate feature stability before release.
              </li>
              <li>
                Logged and tracked defects in Jira with detailed reproduction steps, logs, and screenshots.
              </li>
              <li>
                Performed functional, regression, exploratory, UI/UX, compatibility, and cross-platform testing across mobile, web, PC, and console platforms.
              </li>
              <li>
                Retested fixes, performed regression validation, and collaborated with developers to investigate and resolve defects.
              </li>
              <li>
                Used ADB, Logcat, Charles Proxy, and Android Studio for crash, network, and software issue investigation.
              </li>
              <li>
                Reviewed requirements for testability and risk areas and provided QA feedback during development.
              </li>
              <li>
                Supported QA environments with basic hardware, peripheral, software, device, and LAN/Wi-Fi troubleshooting.
              </li>
            </ul>
          </div>

          <div className="log-entry">
            <div className="log-meta">
              08/2021 <span className="sep">→</span> 08/2022{' '}
              <span className="badge badge-pass">STAGE 1 // COMPLETED</span>
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
              <li>
                Performed functional, exploratory, regression, UI/UX, and compatibility testing across mobile, console, and web applications.
              </li>
              <li>
                Created, maintained, and executed test cases based on feature requirements and test scenarios.
              </li>
              <li>
                Identified and documented functional, UI, and edge-case defects with clear reproduction steps.
              </li>
              <li>
                Reported, tracked, retested, and verified defects using Jira and TestRail.
              </li>
              <li>
                Reviewed requirements for testability and risk areas and collaborated with developers to reproduce and close defects.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
