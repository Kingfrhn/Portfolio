'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, HelpCircle, Download } from 'lucide-react';

interface HistoryLine {
  id: number;
  text: string;
  type?: 'input' | 'output' | 'error' | 'success';
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryLine[]>([
    { id: 1, text: 'OMAR QA ENGINE CLI v2.4.0 initialized.', type: 'output' },
    { id: 2, text: 'Type "help" or click quick chips below to execute commands.', type: 'output' },
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
        text: 'Available Commands:\n  status   - View availability & notice period status\n  skills   - Output top QA & debugging skills\n  bugs     - Output total bug metrics logged\n  contact  - Output contact email & phone\n  download - Trigger PDF resume download\n  clear    - Clear terminal screen',
        type: 'output',
      });
    } else if (trimmed === 'status') {
      newHistory.push({
        id: Date.now() + 1,
        text: 'STATUS: OPEN TO WORK\nNOTICE PERIOD: Serving Notice • Available Immediately\nLOCATION: Kolkata / Remote / Open to Relocation\nEXPERIENCE: 5 Years Senior QA Test Engineer',
        type: 'success',
      });
    } else if (trimmed === 'skills') {
      newHistory.push({
        id: Date.now() + 1,
        text: 'SKILLS: Functional, Regression, Exploratory, Smoke & Sanity, Cross-Platform\nTOOLS: Jira, TestRail, ADB, Android Logcat, Charles Proxy, Android Studio\nAUTOMATION TRACK: Core Java, Selenium WebDriver, FireFlink, Postman API',
        type: 'output',
      });
    } else if (trimmed === 'bugs') {
      newHistory.push({
        id: Date.now() + 1,
        text: 'METRICS:\n  [✓] Test Cases Authored: 1000+\n  [✓] Defects Logged in Jira: 800+\n  [✓] Platforms Covered: Android, iOS, Windows, macOS, PS4, PS5, Xbox, Switch',
        type: 'success',
      });
    } else if (trimmed === 'contact') {
      newHistory.push({
        id: Date.now() + 1,
        text: 'EMAIL: omrfrhn@gmail.com\nPHONE: +91 95475 08846\nLINKEDIN: linkedin.com/in/omrfrhn\nGITHUB: github.com/Kingfrhn',
        type: 'output',
      });
    } else if (trimmed === 'download') {
      newHistory.push({
        id: Date.now() + 1,
        text: 'Downloading Omar_Farahan_Molla_Resume.pdf...',
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
        text: `Command not recognized: "${cmdStr}". Type "help" for a list of valid commands.`,
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
        <h2>QA Tester Playground</h2>
        <p className="section-sub">
          Test out the interactive command line interface below to query candidate status, metrics, or download the resume.
        </p>

        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
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
                      ? 'var(--pass)'
                      : line.type === 'error'
                      ? 'var(--bug)'
                      : line.type === 'success'
                      ? 'var(--pass)'
                      : 'var(--text-dim)',
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
                placeholder="Type command ('help', 'status', 'skills', 'bugs', 'download')..."
              />
            </form>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
          <button className="btn" onClick={() => handleCommand('status')}>
            $ status
          </button>
          <button className="btn" onClick={() => handleCommand('skills')}>
            $ skills
          </button>
          <button className="btn" onClick={() => handleCommand('bugs')}>
            $ bugs
          </button>
          <button className="btn" onClick={() => handleCommand('contact')}>
            $ contact
          </button>
          <button className="btn btn-solid" onClick={() => handleCommand('download')}>
            <Download size={13} /> $ download resume
          </button>
        </div>
      </div>
    </section>
  );
}
