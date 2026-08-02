'use client';

import { useState } from 'react';
import { Layers } from 'lucide-react';

interface Suite {
  id: string;
  title: string;
  badge: 'current' | 'pass';
  badgeLabel: string;
  period: string;
  desc: string;
  chips: string[];
  tags: string[];
}

const suites: Suite[] = [
  {
    id: 'king',
    title: 'King — Live-Ops Mobile Game',
    badge: 'current',
    badgeLabel: 'LIVE OPS',
    period: '01/2023 → present',
    desc: 'Validates live events, feature releases, and A/B experiments during weekly live-ops updates. Coordinates with client QA leads on bug verification and release readiness.',
    chips: ['Android', 'iOS', 'Windows', 'HTML5'],
    tags: ['mobile', 'pc', 'web'],
  },
  {
    id: 'scopely',
    title: 'Scopely — Mobile Game',
    badge: 'pass',
    badgeLabel: 'VERIFIED',
    period: '07/2022 → 12/2022',
    desc: 'Ran feature validation and regression testing through fast-paced development cycles, reporting gameplay, UI, and functional issues for a major mobile release.',
    chips: ['Android', 'iOS', 'Windows'],
    tags: ['mobile', 'pc'],
  },
  {
    id: 'bandainamco',
    title: 'Bandai Namco — Console Game',
    badge: 'pass',
    badgeLabel: 'RELEASED',
    period: '01/2022 → 07/2022',
    desc: 'Tested core combat mechanics and platform-specific features across console environments, then verified bug fixes through milestone regression cycles.',
    chips: ['PS4', 'PS5', 'Xbox', 'Switch', 'Windows'],
    tags: ['console', 'pc'],
  },
  {
    id: 'microids',
    title: 'Microids — Console Title',
    badge: 'pass',
    badgeLabel: 'RELEASED',
    period: '10/2021 → 01/2022',
    desc: 'Executed feature testing and defect validation during intensive gameplay sessions, isolating physics, graphic render, and user interaction issues.',
    chips: ['PS4', 'PS5', 'Xbox', 'Switch', 'Windows'],
    tags: ['console', 'pc'],
  },
  {
    id: 'eidos',
    title: 'Eidos Montreal — Console Title',
    badge: 'pass',
    badgeLabel: 'RELEASED',
    period: '09/2021 → 10/2021',
    desc: 'Executed functional and regression testing across multiple console SKUs ahead of strict master submission deadlines.',
    chips: ['PS4', 'PS5', 'Xbox', 'Windows'],
    tags: ['console', 'pc'],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'mobile' | 'console' | 'pc' | 'web'>('all');

  const filteredSuites = suites.filter((suite) => {
    if (filter === 'all') return true;
    return suite.tags.includes(filter);
  });

  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">Test suites</div>
        <h2>Titles &amp; Projects Tested</h2>
        <p className="section-sub">
          Five global gaming studios, multi-platform coverage across Mobile, Console, PC, and Web platforms. Filter by platform focus below.
        </p>

        <div className="filter-row">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects (5)
          </button>
          <button
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile Focus
          </button>
          <button
            className={`filter-btn ${filter === 'console' ? 'active' : ''}`}
            onClick={() => setFilter('console')}
          >
            Console Focus
          </button>
          <button
            className={`filter-btn ${filter === 'pc' ? 'active' : ''}`}
            onClick={() => setFilter('pc')}
          >
            PC / Windows
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web / HTML5
          </button>
        </div>

        <div className="suites">
          {filteredSuites.map((suite) => (
            <div className="suite-card" key={suite.id}>
              <div>
                <div className="suite-top">
                  <span className="suite-title">{suite.title}</span>
                  <span
                    className={`badge ${
                      suite.badge === 'current' ? 'badge-current' : 'badge-pass'
                    }`}
                  >
                    {suite.badgeLabel}
                  </span>
                </div>
                <div className="suite-period">{suite.period}</div>
                <p className="suite-desc">{suite.desc}</p>
              </div>

              <div className="chip-row">
                {suite.chips.map((chip, idx) => (
                  <span className="chip" key={idx}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
