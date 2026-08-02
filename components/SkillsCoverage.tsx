'use client';

export default function SkillsCoverage() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">Test coverage</div>
        <h2>Skills &amp; Competencies</h2>
        <p className="section-sub">
          Deep domain expertise in manual testing, cross-platform mobile/console debugging, combined with active automation upskilling in Java &amp; Selenium.
        </p>

        <div className="coverage-grid">
          <div className="coverage-group">
            <h3>
              <span>Core QA &amp; Execution</span>
              <span style={{ color: 'var(--pass)' }}>95%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '95%' }}></div>
            </div>
            <div className="tag-cloud">
              <span className="tag">Functional Testing</span>
              <span className="tag">Regression Testing</span>
              <span className="tag">Exploratory Testing</span>
              <span className="tag">Smoke &amp; Sanity</span>
              <span className="tag">UI/UX Testing</span>
              <span className="tag">Test Case Design</span>
              <span className="tag">Cross-Platform Validation</span>
              <span className="tag">Live-Ops Testing</span>
              <span className="tag">Boundary Value Analysis</span>
            </div>
          </div>

          <div className="coverage-group">
            <h3>
              <span>Tools &amp; Technical Debugging</span>
              <span style={{ color: 'var(--pass)' }}>90%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '90%' }}></div>
            </div>
            <div className="tag-cloud">
              <span className="tag">Jira</span>
              <span className="tag">TestRail</span>
              <span className="tag">ADB (Android Debug Bridge)</span>
              <span className="tag">Android Logcat</span>
              <span className="tag">Charles Proxy</span>
              <span className="tag">Android Studio</span>
              <span className="tag">Console Log Extraction</span>
              <span className="tag">Crash Log Analysis</span>
              <span className="tag">Slack</span>
            </div>
          </div>

          <div className="coverage-group">
            <h3>
              <span>SDLC &amp; Methodologies</span>
              <span style={{ color: 'var(--pass)' }}>88%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '88%' }}></div>
            </div>
            <div className="tag-cloud">
              <span className="tag">Agile / Scrum</span>
              <span className="tag">STLC</span>
              <span className="tag">SDLC</span>
              <span className="tag">Defect Lifecycle Mgmt</span>
              <span className="tag">UAT</span>
              <span className="tag">Sprint Planning</span>
              <span className="tag">RCA (Root Cause Analysis)</span>
            </div>
          </div>

          <div className="coverage-group">
            <h3>
              <span>API &amp; Automation (Upskilling Track)</span>
              <span style={{ color: 'var(--warn)' }}>30%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '30%' }}></div>
            </div>
            <div className="tag-cloud">
              <span className="tag">Selenium WebDriver</span>
              <span className="tag">Core Java</span>
              <span className="tag">FireFlink Automation</span>
              <span className="tag">API Testing (REST)</span>
              <span className="tag">Postman</span>
              <span className="tag">TestNG Fundamentals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
