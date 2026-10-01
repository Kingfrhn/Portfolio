'use client';

import { useState } from 'react';

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
    title: 'King — Mobile/Web Live-Ops',
    badge: 'current',
    badgeLabel: 'Active',
    period: '01/2023 → Present',
    desc: 'Validated live events, feature releases, A/B experiments, and content updates across multiple platforms. Executed functional, regression, exploratory, and cross-platform testing during regular release cycles. Coordinated defect verification and release-readiness validation with client teams.',
    chips: ['Android', 'iOS', 'Windows', 'HTML5'],
    tags: ['mobile', 'pc', 'web'],
  },
  {
    id: 'scopely',
    title: 'Scopely — Mobile Title',
    badge: 'pass',
    badgeLabel: 'Verified',
    period: '07/2022 → 12/2022',
    desc: 'Performed feature validation, functional, and regression testing during fast-paced development cycles. Reported and tracked gameplay, UI, and functional defects using Jira.',
    chips: ['Android', 'iOS', 'Windows'],
    tags: ['mobile', 'pc'],
  },
  {
    id: 'bandainamco',
    title: 'Bandai Namco — Console Game',
    badge: 'pass',
    badgeLabel: 'Released',
    period: '01/2022 → 07/2022',
    desc: 'Tested gameplay mechanics and platform-specific features across console environments. Reported functional and UI defects using Jira and verified bug fixes during regression cycles before milestone builds.',
    chips: ['PS4', 'PS5', 'Xbox', 'Nintendo Switch', 'Windows'],
    tags: ['console', 'pc'],
  },
  {
    id: 'microids',
    title: 'Microids — Console Title',
    badge: 'pass',
    badgeLabel: 'Released',
    period: '10/2021 → 01/2022',
    desc: 'Conducted feature testing and defect validation during gameplay sessions. Reported functional and UI issues using Jira.',
    chips: ['PS4', 'PS5', 'Xbox', 'Nintendo Switch', 'Windows'],
    tags: ['console', 'pc'],
  },
  {
    id: 'eidos',
    title: 'Eidos Montreal — Console Title',
    badge: 'pass',
    badgeLabel: 'Released',
    period: '09/2021 → 10/2021',
    desc: 'Executed functional and regression testing across console platforms ahead of master submission deadlines.',
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
        <div className="eyebrow">Test Suites</div>
        <h2>Titles &amp; Projects Tested</h2>
        <p className="section-sub">
          Five global studios, multi-platform coverage across Mobile, Console, PC, and Web. Filter by platform focus below.
        </p>

        <div className="filter-row">
          {(['all', 'mobile', 'console', 'pc', 'web'] as const).map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag === 'all' ? 'All Projects (5)' : tag === 'mobile' ? 'Mobile' : tag === 'console' ? 'Console' : tag === 'pc' ? 'PC / Windows' : 'Web / HTML5'}
            </button>
          ))}
        </div>

        <div className="suites">
          {filteredSuites.map((suite) => (
            <div className="suite-card" key={suite.id}>
              <div>
                <div className="suite-top">
                  <span className="suite-title">{suite.title}</span>
                  <span className={`badge ${suite.badge === 'current' ? 'badge-current' : 'badge-pass'}`}>
                    {suite.badgeLabel}
                  </span>
                </div>
                <div className="suite-period">{suite.period}</div>
                <p className="suite-desc">{suite.desc}</p>
              </div>

              <div className="chip-row">
                {suite.chips.map((chip, idx) => (
                  <span className="chip" key={idx}>{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
