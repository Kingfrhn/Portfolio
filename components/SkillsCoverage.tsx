'use client';

export default function SkillsCoverage() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">Test coverage</div>
        <h2>Skills &amp; Competencies</h2>
        <p className="section-sub">
          5+ years of experience in manual software and game testing across mobile, web, PC and console platforms.
          Skilled in test execution, defect management, cross-platform validation and AI product evaluation,
          with foundational knowledge of automation and API testing.
        </p>

        <div className="coverage-grid">
          {/* QA & Testing Activities */}
          <div className="coverage-group">
            <h3>
              <span>QA &amp; Testing Activities</span>
              <span style={{ color: 'var(--pass)' }}>98%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '98%' }} />
            </div>
            <div className="tag-cloud">
              <span className="tag">Manual Testing</span>
              <span className="tag">Functional Testing</span>
              <span className="tag">Regression Testing</span>
              <span className="tag">Exploratory Testing</span>
              <span className="tag">Smoke Testing</span>
              <span className="tag">Sanity Testing</span>
              <span className="tag">Integration Testing</span>
              <span className="tag">Compatibility Testing</span>
              <span className="tag">Cross-Browser Testing</span>
              <span className="tag">Cross-Platform Testing</span>
              <span className="tag">UI/UX Testing</span>
              <span className="tag">Web &amp; Mobile Testing</span>
              <span className="tag">Test Case Design</span>
              <span className="tag">Test Scenario Analysis</span>
              <span className="tag">Requirements Review</span>
              <span className="tag">Test Execution</span>
              <span className="tag">Defect Reporting &amp; Documentation</span>
              <span className="tag">Defect Tracking</span>
              <span className="tag">Defect Verification</span>
              <span className="tag">Defect Lifecycle Management</span>
              <span className="tag">Retesting</span>
              <span className="tag">Release Validation</span>
              <span className="tag">Root Cause Analysis (RCA)</span>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="coverage-group">
            <h3>
              <span>Tools &amp; Platforms</span>
              <span style={{ color: 'var(--pass)' }}>94%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '94%' }} />
            </div>
            <div className="tag-cloud">
              <span className="tag">Jira</span>
              <span className="tag">TestRail</span>
              <span className="tag">Charles Proxy</span>
              <span className="tag">ADB</span>
              <span className="tag">Android Logcat</span>
              <span className="tag">Android Studio</span>
              <span className="tag">Postman (Basic)</span>
              <span className="tag">Selenium WebDriver (Basic)</span>
              <span className="tag">Android</span>
              <span className="tag">iOS</span>
              <span className="tag">Windows</span>
              <span className="tag">macOS</span>
              <span className="tag">HTML5/Web</span>
              <span className="tag">PlayStation 4 &amp; 5</span>
              <span className="tag">Xbox</span>
              <span className="tag">Nintendo Switch</span>
            </div>
          </div>

          {/* AI Product Evaluation */}
          <div className="coverage-group">
            <h3>
              <span>AI Product Evaluation</span>
              <span style={{ color: 'var(--teal)' }}>92%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '92%' }} />
            </div>
            <div className="tag-cloud">
              <span className="tag">AI Chat Evaluation</span>
              <span className="tag">AI Search Evaluation</span>
              <span className="tag">AI Model &amp; Agent Evaluation</span>
              <span className="tag">Structured Scenario Testing</span>
              <span className="tag">Instruction Following Evaluation</span>
              <span className="tag">Response Quality Assessment</span>
              <span className="tag">Usage Limit Testing</span>
              <span className="tag">Platform Behaviour Testing</span>
              <span className="tag">Result Documentation</span>
            </div>
          </div>

          {/* Technical Knowledge & Upskilling */}
          <div className="coverage-group">
            <h3>
              <span>Technical Knowledge &amp; Upskilling</span>
              <span style={{ color: 'var(--warn)' }}>80%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '80%' }} />
            </div>
            <div className="tag-cloud">
              <span className="tag">Basic SQL</span>
              <span className="tag">Database Concepts</span>
              <span className="tag">Core Java (Basic)</span>
              <span className="tag">API Testing Concepts</span>
              <span className="tag">REST &amp; SOAP Concepts</span>
              <span className="tag">Automation Testing Concepts</span>
              <span className="tag">Agile &amp; Scrum</span>
              <span className="tag">SDLC</span>
              <span className="tag">STLC</span>
            </div>
          </div>

          {/* Additional IT Support Skills */}
          <div className="coverage-group">
            <h3>
              <span>Additional IT Support Skills</span>
              <span style={{ color: 'var(--pass)' }}>90%</span>
            </h3>
            <div className="coverage-bar-track">
              <div className="coverage-bar-fill" style={{ width: '90%' }} />
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
        </div>
      </div>
    </section>
  );
}
