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
            <span className="badge badge-pass">TRAINED</span>
            <h4>Software Testing with Java Automation (SDET)</h4>
            <div className="edu-meta">QSpiders · Kolkata, India</div>
            <p>
              Core Java Fundamentals, Selenium WebDriver, Automation Framework Concepts, and Web &amp; Mobile Automation using FireFlink.
            </p>
          </div>

          <div className="edu-card">
            <span className="badge badge-pass">TRAINED</span>
            <h4>CCNA Training</h4>
            <div className="edu-meta">Evision Technoserve · Kolkata, India</div>
            <p>
              TCP/IP, Routing &amp; Switching, VLAN, DNS, DHCP, Virtualization, AD DS, OSPF, and Network Troubleshooting.
            </p>
          </div>

          <div className="edu-card">
            <span className="badge badge-pass">PASSED</span>
            <h4>Bachelor of Engineering (B.E)</h4>
            <div className="edu-meta">
              University Institute of Technology · 09/2018 → 08/2021 · Burdwan, West Bengal, India
            </div>
            <p>
              Bachelor of Engineering degree program completed with comprehensive technical coursework.
            </p>
          </div>

          <div className="edu-card">
            <span className="badge badge-pass">PASSED</span>
            <h4>Diploma</h4>
            <div className="edu-meta">
              RRK Government Polytechnic · 08/2015 → 06/2018 · Midnapore, West Bengal, India
            </div>
            <p>
              Foundational engineering polytechnic technical diploma.
            </p>
          </div>

          <div className="edu-card" style={{ gridColumn: 'span 1' }}>
            <span className="badge badge-pass">CERTIFIED</span>
            <h4>Certifications &amp; Workshops</h4>
            <div className="edu-meta">Be10X, Google, Cisco</div>
            <p>
              • AI Tools Workshop | Be10X
              <br />
              • Technical Support Fundamentals | Google
              <br />
              • Cybersecurity Essentials | Cisco
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
