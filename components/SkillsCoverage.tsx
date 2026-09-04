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
              <span>QA &amp; Testing &amp; Activities</span>
              <span style={{ color: 'var(--pass)' }}>95%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '95%' }}></div>
            </div>
            <div className="tag-cloud">
              <span className="tag">Functional Testing</span>
              <span className="tag">Regression Testing</span>
              <span className="tag">Exploratory Testing</span>
              <span className="tag">System Testing</span>
              <span className="tag">Smoke Testing</span>
              <span className="tag">Sanity Testing</span>
              <span className="tag">UI/UX Testing</span>
              <span className="tag">Compatibility Testing</span>
              <span className="tag">Cross-Platform Testing</span>
              <span className="tag">Test Case Design</span>
              <span className="tag">Test Execution</span>
              <span className="tag">Test Scenario Analysis</span>
              <span className="tag">Requirements Review</span>
              <span className="tag">Defect Lifecycle Management</span>
              <span className="tag">Defect Verification</span>
              <span className="tag">Bug Reporting &amp; Documentation</span>
              <span className="tag">Retesting</span>
              <span className="tag">Release Validation</span>
              <span className="tag">Reproduction &amp; Issue Investigation</span>
            </div>
          </div>

          <div className="coverage-group">
            <h3>
              <span>Tools &amp; Platforms</span>
              <span style={{ color: 'var(--pass)' }}>92%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '92%' }}></div>
            </div>
            <div className="tag-cloud">
              <span className="tag">Jira</span>
              <span className="tag">TestRail</span>
              <span className="tag">ADB</span>
              <span className="tag">Android Logcat</span>
              <span className="tag">Charles Proxy</span>
              <span className="tag">Android Studio</span>
              <span className="tag">Crash Log Analysis</span>
              <span className="tag">Slack</span>
              <span className="tag">Android</span>
              <span className="tag">iOS</span>
              <span className="tag">Windows</span>
              <span className="tag">macOS</span>
              <span className="tag">PS4 &amp; PS5</span>
              <span className="tag">Xbox</span>
              <span className="tag">Nintendo Switch</span>
              <span className="tag">HTML5/Web</span>
            </div>
          </div>

          <div className="coverage-group">
            <h3>
              <span>Hardware &amp; IT Troubleshooting</span>
              <span style={{ color: 'var(--pass)' }}>90%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '90%' }}></div>
            </div>
            <div className="tag-cloud">
              <span className="tag">Hardware &amp; Peripheral Troubleshooting</span>
              <span className="tag">Test Device Setup &amp; Configuration</span>
              <span className="tag">Software Installation &amp; Configuration</span>
              <span className="tag">Windows Troubleshooting</span>
              <span className="tag">LAN/Wi-Fi Troubleshooting</span>
              <span className="tag">Basic TCP/IP Troubleshooting</span>
              <span className="tag">Device Connectivity Troubleshooting</span>
            </div>
          </div>

          <div className="coverage-group">
            <h3>
              <span>Automation &amp; API (Upskilling)</span>
              <span style={{ color: 'var(--warn)' }}>45%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '45%' }}></div>
            </div>
            <div className="tag-cloud">
              <span className="tag">Selenium WebDriver (Basic)</span>
              <span className="tag">Core Java</span>
              <span className="tag">FireFlink</span>
              <span className="tag">Automation Framework Concepts</span>
              <span className="tag">Web &amp; Mobile Automation</span>
              <span className="tag">API Testing Concepts</span>
              <span className="tag">REST &amp; SOAP</span>
              <span className="tag">JSON &amp; HTTP Methods</span>
              <span className="tag">STLC &amp; SDLC</span>
              <span className="tag">Agile / Scrum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
