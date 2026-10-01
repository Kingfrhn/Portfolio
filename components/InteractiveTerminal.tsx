'use client';

import { useState, useRef, useEffect } from 'react';
import { Download } from 'lucide-react';

interface HistoryLine {
  id: number;
  text: string;
  type?: 'input' | 'output' | 'error' | 'success';
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryLine[]>([
    { id: 1, text: 'Omar QA Portfolio CLI v1.0.0 — initialized.', type: 'output' },
    { id: 2, text: 'Type "help" or click a quick command below.', type: 'output' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory: HistoryLine[] = [
      ...history,
      { id: Date.now(), text: `$ ${cmdStr}`, type: 'input' },
    ];

    if (trimmed === 'help') {
      newHistory.push({
        id: Date.now() + 1,
        text: 'Available commands:\n  status   — View availability & current status\n  skills   — List top QA skills & tools\n  bugs     — Show career metrics\n  contact  — Output contact details\n  download — Trigger resume PDF download\n  clear    — Clear terminal',
        type: 'output',
      });
    } else if (trimmed === 'status') {
      newHistory.push({
        id: Date.now() + 1,
        text: 'STATUS: Immediate Joiner\nSEEKING: Manual Testing & Senior QA Engineer Roles\nLOCATION: Kolkata / Remote / Open to Relocation\nEXPERIENCE: 5+ Years — Senior QA Test Engineer',
        type: 'success',
      });
    } else if (trimmed === 'skills') {
      newHistory.push({
        id: Date.now() + 1,
        text: 'SKILLS: Functional, Regression, Exploratory, Smoke & Sanity, UI/UX, Cross-Platform Testing\nTOOLS: Jira, TestRail, ADB, Android Logcat, Charles Proxy, Android Studio\nUPSKILLING: Core Java, Selenium WebDriver, FireFlink, Postman API',
        type: 'output',
      });
    } else if (trimmed === 'bugs') {
      newHistory.push({
        id: Date.now() + 1,
        text: 'QA METRICS:\n  [✓] Test Cases Authored: 600+\n  [✓] Defects Logged in Jira: 900+\n  [✓] Platforms Covered: Android, iOS, Windows, macOS, PS4, PS5, Xbox, Switch',
        type: 'success',
      });
    } else if (trimmed === 'contact') {
      newHistory.push({
        id: Date.now() + 1,
        text: 'EMAIL:    omrfrhn@gmail.com\nPHONE:    +91 95475 08846\nLINKEDIN: linkedin.com/in/omrfrhn\nGITHUB:   github.com/Kingfrhn',
        type: 'output',
      });
    } else if (trimmed === 'download') {
      newHistory.push({
        id: Date.now() + 1,
        text: '→ Downloading Omar_Farahan_Molla_Resume.pdf...',
        type: 'success',
      });
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Omar_Farahan_Molla_Resume.pdf';
      link.click();
    } else if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      newHistory.push({
        id: Date.now() + 1,
        text: `Unknown command: "${cmdStr}". Type "help" for available commands.`,
        type: 'error',
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <section id="terminal">
      <div className="wrap">
        <div className="eyebrow">Interactive CLI</div>
        <h2>QA Portfolio Terminal</h2>
        <p className="section-sub">
          Query candidate status, skills, metrics, or download the resume directly from the command line.
        </p>

        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="terminal-title">omar@qa-workstation: ~/portfolio</span>
          </div>

          <div className="terminal-body" ref={terminalBodyRef}>
            {history.map((line) => (
              <div
                className="terminal-line"
                key={line.id}
                style={{
                  color:
                    line.type === 'input'
                      ? '#38bdf8'
                      : line.type === 'error'
                      ? '#f87171'
                      : line.type === 'success'
                      ? '#34d399'
                      : '#e6edf3',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {line.text}
              </div>
            ))}

            <form onSubmit={onSubmit} className="terminal-input-row">
              <span className="terminal-prompt">$</span>
              <input
                type="text"
                className="terminal-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type a command..."
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
          <button className="btn" onClick={() => handleCommand('status')}>$ status</button>
          <button className="btn" onClick={() => handleCommand('skills')}>$ skills</button>
          <button className="btn" onClick={() => handleCommand('bugs')}>$ bugs</button>
          <button className="btn" onClick={() => handleCommand('contact')}>$ contact</button>
          <button className="btn btn-solid" onClick={() => handleCommand('download')}>
            <Download size={13} /> $ download resume
          </button>
        </div>
      </div>
    </section>
  );
}
