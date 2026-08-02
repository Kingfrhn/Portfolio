'use client';

import { useState } from 'react';
import { Search, Bug, FileCheck, X, Terminal, ExternalLink } from 'lucide-react';

interface BugDetail {
  id: string;
  severity: string;
  severityType: 'blocker' | 'major' | 'minor';
  title: string;
  steps: string;
  actual: string;
  expected: string;
  environment: string;
  reproRate: string;
  logSnippet?: string;
}

const nativeBugs: BugDetail[] = [
  {
    id: 'BUG-04',
    severity: 'BLOCKER',
    severityType: 'blocker',
    title: 'Multiplayer match freezes on mobile after a lock-screen interrupt',
    steps: '1. Launch app on Android device.\n2. Join a cross-platform multiplayer match vs Windows PC.\n3. Mid-match, press the device power button to lock screen.\n4. Unlock the device after 5 seconds.',
    actual: 'Desktop player receives "Opponent Disconnected" immediately, while mobile client completely freezes on unlock with unresponsive touch controls.',
    expected: 'Mobile client should attempt automatic session reconnect within 10 seconds or return gracefully to main lobby without app crash/freeze.',
    environment: 'Android 13 (Samsung Galaxy S22), Windows 11 Desktop (v1.0.4 build).',
    reproRate: '5 / 5 (100% reproducible across Android devices).',
    logSnippet: '[CRASH_LOG] NullPointerException: Attempt to invoke virtual method "void com.game.network.SessionClient.resyncState()" on a null object reference at com.game.multiplayer.MatchRoom.onResume(MatchRoom.java:142)',
  },
  {
    id: 'BUG-01',
    severity: 'MAJOR',
    severityType: 'major',
    title: 'Background interactive elements remain clickable on post-match Result Screen',
    steps: '1. Complete a full multiplayer match until Result Screen displays.\n2. Tap/click on background fruit and bomb spawn positions behind the overlay.',
    actual: 'Background touch listeners remain enabled; tapping background items updates the player score counter even after match termination.',
    expected: 'Result Screen modal should block all underlying world touch events; game state input listeners must be disabled upon match completion.',
    environment: 'Android 12, Android 13, Windows 10/11.',
    reproRate: '5 / 5.',
    logSnippet: '[WARN_INPUT] TouchEvent dispatching to active GameScene layer while UIOverlay state == RESULT_MODAL',
  },
  {
    id: 'BUG-05',
    severity: 'MAJOR',
    severityType: 'major',
    title: 'HUD disappears and game board misaligns after exiting fullscreen on mobile',
    steps: '1. Launch any game mode on Android.\n2. Toggle fullscreen mode ON.\n3. Exit fullscreen mode back to windowed orientation.',
    actual: 'Game canvas fails to recalculate viewport aspect ratio; HUD UI elements disappear offscreen.',
    expected: 'HUD elements and game board should resize responsively to windowed resolution bounds.',
    environment: 'Android 12 (Google Pixel 6). Desktop unaffected.',
    reproRate: '5 / 5.',
  },
  {
    id: 'BUG-02',
    severity: 'MINOR',
    severityType: 'minor',
    title: '"Win" text label renders overlapping underneath "Match Draw" text',
    steps: '1. Finish a match with identical final scores resulting in a draw.\n2. Inspect the match result header typography.',
    actual: 'A hidden "Win" label asset renders directly behind the "Match Draw" text causing text blurring artifact.',
    expected: 'Only the single, active result string ("Match Draw") should be instantiated.',
    environment: 'Android, Windows Desktop.',
    reproRate: '5 / 5.',
  },
];

const webappBugs: BugDetail[] = [
  {
    id: 'BUG-W1',
    severity: 'BLOCKER · CRASH',
    severityType: 'blocker',
    title: 'App crashes to blank white screen (Uncaught TypeError) when saving a task with a due date',
    steps: '1. Log into Dashboard.\n2. Click "Create Task".\n3. Fill in Title and select any Due Date using calendar picker.\n4. Click "Save Task".',
    actual: 'Application unmounts entirely leaving a blank screen. Console shows "TypeError: date.toISOString is not a function".',
    expected: 'Task saves successfully and updates task feed cleanly without breaking client state.',
    environment: 'Chrome 126, Windows 11. Also reproduces on Firefox 128.',
    reproRate: '5 / 5.',
    logSnippet: 'Uncaught TypeError: date.toISOString is not a function\n  at TaskForm.handleSubmit (TaskForm.tsx:54)\n  at HTMLButtonElement.dispatch (react-dom.production.min.js:210)',
  },
  {
    id: 'BUG-W2',
    severity: 'MAJOR',
    severityType: 'major',
    title: 'Expired JWT session token throws unhandled error instead of redirecting to login',
    steps: '1. Log into dashboard.\n2. In dev tools, set session expiration timestamp to past.\n3. Click "Edit Task" or "Delete Task".',
    actual: 'Raw 401 Unauthorized API error notification appears; user remains on broken dashboard screen.',
    expected: 'Client should intercept 401 response, clear local storage session, and redirect to /login with toast banner.',
    environment: 'Chrome 126, Windows 11.',
    reproRate: '4 / 5.',
  },
  {
    id: 'BUG-W3',
    severity: 'MAJOR',
    severityType: 'major',
    title: 'Form validation can be bypassed using browser Back / Forward history buttons',
    steps: '1. Open "New Task" form.\n2. Leave Title empty and hit Save to trigger validation error.\n3. Click browser Back button, then Forward button.',
    actual: 'Form submits empty title payload directly to backend bypassing client-side validation check.',
    expected: 'Client state should reset form inputs or maintain validation guard.',
    environment: 'Chrome 126, Windows 11.',
    reproRate: '5 / 5.',
  },
  {
    id: 'BUG-W4',
    severity: 'MINOR',
    severityType: 'minor',
    title: 'Sidebar navigation overlaps main content layout on Safari at 1024px width',
    steps: '1. Open dashboard on Safari macOS.\n2. Resize viewport to exactly 1024px width.',
    actual: 'Sidebar overlay sits directly on top of first 2 columns of task list.',
    expected: 'Sidebar should collapse into mobile hamburger view or shrink responsively.',
    environment: 'Safari 17, macOS Sonoma.',
    reproRate: '5 / 5.',
  },
];

export default function SampleWork() {
  const [category, setCategory] = useState<'native' | 'webapp'>('native');
  const [panel, setPanel] = useState<'scenarios' | 'bugs'>('scenarios');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBug, setSelectedBug] = useState<BugDetail | null>(null);

  const activeBugs = category === 'native' ? nativeBugs : webappBugs;

  return (
    <section id="sample-work">
      <div className="wrap">
        <div className="eyebrow">Evidence &amp; Artifacts</div>
        <h2>Sample Test Cases &amp; Defect Reports</h2>
        <p className="section-sub">
          Real hands-on QA artifacts from two complete test passes: a native multiplayer game title and a web application pass.
        </p>

        <div className="category-tabs">
          <button
            className={`category-tab-btn ${category === 'native' ? 'active' : ''}`}
            onClick={() => {
              setCategory('native');
              setSearchQuery('');
            }}
          >
            Native App · Game QA Pass
          </button>
          <button
            className={`category-tab-btn ${category === 'webapp' ? 'active' : ''}`}
            onClick={() => {
              setCategory('webapp');
              setSearchQuery('');
            }}
          >
            Web App · Manual QA Pass
          </button>
        </div>

        <div>
          <div className="sample-tabs">
            <button
              className={`sample-tab-btn ${panel === 'scenarios' ? 'active' : ''}`}
              onClick={() => setPanel('scenarios')}
            >
              Sample test cases
            </button>
            <button
              className={`sample-tab-btn ${panel === 'bugs' ? 'active' : ''}`}
              onClick={() => setPanel('bugs')}
            >
              Sample bugs
            </button>
          </div>

          {panel === 'scenarios' && (
            <div>
              <div className="tc-table-container">
                <table className="tc-table">
                  <thead>
                    <tr>
                      <th className="tc-id">#</th>
                      <th>Test Scenario Description</th>
                      <th>Target Environment</th>
                      <th className="tc-result">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category === 'native' ? (
                      <>
                        <tr className="tc-group">
                          <td colSpan={4}>Easy Bot Mode — Execution Suite</td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-01</td>
                          <td>Launch app, initialize engine, and check home UI rendering</td>
                          <td>Android &amp; Windows</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-02</td>
                          <td>Select Easy Bot mode and play full match from start to finish</td>
                          <td>Android &amp; Windows</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-03</td>
                          <td>Win match against Easy Bot and verify final score calculation</td>
                          <td>Android / PC</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-04</td>
                          <td>Lose match against Easy Bot and verify defeat screen display</td>
                          <td>Android / PC</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>

                        <tr className="tc-group">
                          <td colSpan={4}>Hard Bot Mode — Execution Suite</td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-05</td>
                          <td>Confirm AI difficulty scaling and reaction latency vs Easy Mode</td>
                          <td>Android &amp; Windows</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-06</td>
                          <td>Verify scoring multipliers and combo streak reset logic</td>
                          <td>Android &amp; Windows</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>

                        <tr className="tc-group">
                          <td colSpan={4}>Multiplayer Cross-Platform Suite</td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-07</td>
                          <td>Create multiplayer room lobby and wait for 2nd player to join</td>
                          <td>Android &amp; Windows</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-08</td>
                          <td>Execute Mobile vs Mobile online match session</td>
                          <td>Android vs Android</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-09</td>
                          <td>Execute Cross-Platform match (Desktop PC vs Android Mobile)</td>
                          <td>Windows vs Android</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-10</td>
                          <td>Simulate phone lock interrupt mid-multiplayer match</td>
                          <td>Android</td>
                          <td className="tc-result">
                            <span className="badge badge-fail">FAIL</span>
                          </td>
                        </tr>
                      </>
                    ) : (
                      <>
                        <tr className="tc-group">
                          <td colSpan={4}>Authentication &amp; Session Management</td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-W1</td>
                          <td>Log in with valid email/password credentials</td>
                          <td>Chrome / Safari</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-W2</td>
                          <td>Submit login with invalid password — verify error banner</td>
                          <td>Chrome / Firefox</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-W3</td>
                          <td>Session persistence check on hard page reload</td>
                          <td>Chrome / Edge</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-W4</td>
                          <td>Logout action clears local tokens and blocks back navigation</td>
                          <td>Chrome / Safari</td>
                          <td className="tc-result">
                            <span className="badge badge-fail">FAIL</span>
                          </td>
                        </tr>

                        <tr className="tc-group">
                          <td colSpan={4}>Task Operations &amp; Validation</td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-W5</td>
                          <td>Create task with title, description, and priority tag</td>
                          <td>All Browsers</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-W6</td>
                          <td>Set due date on task and save changes</td>
                          <td>Chrome / Firefox</td>
                          <td className="tc-result">
                            <span className="badge badge-fail">FAIL</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-W7</td>
                          <td>Search task feed by keyword query</td>
                          <td>All Browsers</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tc-id">TC-W8</td>
                          <td>Filter task feed by status tag (Completed, In Progress)</td>
                          <td>All Browsers</td>
                          <td className="tc-result">
                            <span className="badge badge-pass">PASS</span>
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {panel === 'bugs' && (
            <div className="bug-list">
              {activeBugs.map((bug) => (
                <div
                  className="bug-card"
                  key={bug.id}
                  onClick={() => setSelectedBug(bug)}
                >
                  <div className="bug-top">
                    <span className="bug-id">{bug.id}</span>
                    <span
                      className={`badge ${
                        bug.severityType === 'blocker'
                          ? 'badge-blocker'
                          : bug.severityType === 'major'
                          ? 'badge-major'
                          : 'badge-minor'
                      }`}
                    >
                      {bug.severity}
                    </span>
                    <span
                      style={{
                        marginLeft: 'auto',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11.5px',
                        color: 'var(--pass)',
                        cursor: 'pointer',
                      }}
                    >
                      Click to inspect report ↗
                    </span>
                  </div>

                  <div className="bug-title">{bug.title}</div>

                  <div className="bug-body">
                    <div>
                      <div className="label">Actual Result</div>
                      {bug.actual}
                    </div>
                    <div>
                      <div className="label">Expected Result</div>
                      {bug.expected}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Inspector */}
        {selectedBug && (
          <div className="modal-overlay" onClick={() => setSelectedBug(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setSelectedBug(null)}
              >
                <X size={18} />
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                }}
              >
                <span className="bug-id" style={{ fontSize: '14px' }}>
                  {selectedBug.id}
                </span>
                <span
                  className={`badge ${
                    selectedBug.severityType === 'blocker'
                      ? 'badge-blocker'
                      : selectedBug.severityType === 'major'
                      ? 'badge-major'
                      : 'badge-minor'
                  }`}
                >
                  {selectedBug.severity}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  marginBottom: '20px',
                }}
              >
                {selectedBug.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  fontSize: '14px',
                  color: 'var(--text-dim)',
                }}
              >
                <div>
                  <div className="label" style={{ color: 'var(--text-faint)' }}>
                    STEPS TO REPRODUCE
                  </div>
                  <pre
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12.5px',
                      background: 'var(--surface-2)',
                      padding: '12px',
                      borderRadius: '6px',
                      whiteSpace: 'pre-wrap',
                      color: 'var(--text)',
                      marginTop: '6px',
                    }}
                  >
                    {selectedBug.steps}
                  </pre>
                </div>

                <div>
                  <div className="label" style={{ color: 'var(--bug)' }}>
                    ACTUAL OBSERVED BEHAVIOR
                  </div>
                  <p style={{ marginTop: '4px', color: 'var(--text)' }}>
                    {selectedBug.actual}
                  </p>
                </div>

                <div>
                  <div className="label" style={{ color: 'var(--pass)' }}>
                    EXPECTED CORRECT BEHAVIOR
                  </div>
                  <p style={{ marginTop: '4px', color: 'var(--text)' }}>
                    {selectedBug.expected}
                  </p>
                </div>

                <div>
                  <div className="label">TEST ENVIRONMENT &amp; REPRO RATE</div>
                  <p style={{ marginTop: '4px' }}>{selectedBug.environment}</p>
                  <p style={{ color: 'var(--warn)', fontWeight: 500 }}>
                    Reproduction Rate: {selectedBug.reproRate}
                  </p>
                </div>

                <div>
                  <div className="label" style={{ color: 'var(--accent)' }}>
                    ATTACHMENTS
                  </div>
                  <div
                    style={{
                      background: '#090c10',
                      border: '1px solid var(--border)',
                      padding: '12px',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--text-faint)',
                      marginTop: '6px',
                      minHeight: '38px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
