'use client';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="eyebrow">STAGE SELECT &amp; CAMPAIGN LOG</div>
        <h2>Experience</h2>
        <p className="section-sub">
          Five years of continuous QA execution, steadily scaling from test execution to leading multi-platform test cycles for AAA and live-ops studios.
        </p>

        <div className="log">
          <div className="log-entry">
            <div className="log-meta">
              08/2022 <span className="sep">→</span> present{' '}
              <span className="badge badge-current">STAGE 2 // CURRENT ROLE</span>
            </div>
            <div className="log-title">Senior Test Engineer</div>
            <div className="log-company">
              GlobalStep Services Private Limited · Pune / Kolkata, India
            </div>
            <ul className="log-list">
              <li>
                Led a dedicated team of 5 to 8 QA testers across multi-platform release cycles, optimizing task allocation and daily execution output.
              </li>
              <li>
                Executed 200+ functional, integration, and regression test cases per sprint to guarantee release stability ahead of production deployment.
              </li>
              <li>
                Logged and managed 150+ defects per release cycle in Jira with precise reproduction steps, video captures, and attached system/crash logs.
              </li>
              <li>
                Validated cross-platform builds across Android, iOS, Windows, macOS, PS4, PS5, Xbox, and Nintendo Switch.
              </li>
              <li>
                Leveraged ADB, Logcat, and Charles Proxy to capture stack traces, diagnose API payload errors, and isolate network bandwidth bottlenecks.
              </li>
              <li>
                Conducted technical onboarding, KT sessions, and test plan reviews for incoming QA engineers to enforce testing standards.
              </li>
              <li>
                Participated in live-ops release validation sessions with remote client producers and leads to greenlight build shipments.
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
              GlobalStep Services Private Limited · Pune, India
            </div>
            <ul className="log-list">
              <li>
                Conducted functional, exploratory, boundary value, and regression testing across mobile, console, and web game titles.
              </li>
              <li>
                Uncovered critical edge-case gameplay and UI/UX defects early in development sprints to reduce build breakage risk.
              </li>
              <li>
                Authored and updated structured test suites, test matrices, and execution reports in TestRail and Jira.
              </li>
              <li>
                Reviewed technical specification documents to ensure feature testability and highlight risk areas before cycle kickoff.
              </li>
              <li>
                Collaborated directly with client leads and development teams to verify fixed defects and resolve blocking issues.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
