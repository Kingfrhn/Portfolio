'use client';

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="eyebrow">Build history</div>
        <h2>Education &amp; Training</h2>
        <p className="section-sub">
          Academic computer science foundation paired with continuous SDET automation upskilling.
        </p>

        <div className="edu-grid">
          <div className="edu-card">
            <span className="badge badge-current">IN PROGRESS</span>
            <h4>Software Testing with Java Automation (SDET)</h4>
            <div className="edu-meta">QSpiders, Kolkata · 11/2024 → 02/2026</div>
            <p>
              Core Java fundamentals, Object-Oriented Programming, Selenium WebDriver automation frameworks, FireFlink mobile and web test automation, TestNG, and Postman REST API testing.
            </p>
          </div>

          <div className="edu-card">
            <span className="badge badge-pass">PASSED</span>
            <h4>Bachelor of Engineering, CSE</h4>
            <div className="edu-meta">
              University Institute of Technology, Burdwan · 09/2018 → 08/2021 · GPA 7.7 / 10
            </div>
            <p>
              Comprehensive computer science curriculum including Data Structures, Algorithms, Software Engineering, Database Systems, and Computer Networks.
            </p>
          </div>

          <div className="edu-card">
            <span className="badge badge-pass">PASSED</span>
            <h4>Technical Diploma</h4>
            <div className="edu-meta">
              RRK Government Polytechnic, Midnapore · 08/2015 → 06/2018
            </div>
            <p>
              Foundational engineering technical diploma completed prior to engineering degree admission.
            </p>
          </div>

          <div className="edu-card">
            <span className="badge badge-pass">CERTIFIED</span>
            <h4>Professional Certifications</h4>
            <div className="edu-meta">Google &amp; Cisco</div>
            <p>
              • Google Technical Support Fundamentals Certification
              <br />
              • Cisco Cybersecurity Essentials Certification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
