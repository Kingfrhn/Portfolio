'use client';

import { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface ArcadeTitleScreenProps {
  onStart: () => void;
}

export default function ArcadeTitleScreen({ onStart }: ArcadeTitleScreenProps) {
  const [isWarping, setIsWarping] = useState(false);

  const handleEnter = () => {
    setIsWarping(true);
    setTimeout(() => {
      onStart();
    }, 650);
  };

  return (
    <div className={`qa-splash-overlay ${isWarping ? 'crt-warp-out' : ''}`}>
      <div className="qa-splash-card">
        <div className="qa-splash-badge">
          <span className="qa-splash-badge-dot" />
          Senior QA Test Engineer · Portfolio
        </div>

        <h1 className="qa-splash-title">
          Welcome to <span className="qa-splash-name">Omar&apos;s</span> QA Portfolio
        </h1>
        <p className="qa-splash-role">Manual Testing · Quality Assurance · Test Engineering</p>

        <div className="qa-splash-profile">
          <img
            src="/photo_omar.jpg"
            alt="Omar Farahan Molla"
            className="qa-splash-photo"
          />
          <div className="qa-splash-meta">
            <div className="qa-splash-meta-name">Omar Farahan Molla</div>
            <div className="qa-splash-meta-item">
              <span>Role:</span> Senior QA Test Engineer
            </div>
            <div className="qa-splash-meta-item">
              <span>Exp:</span> 5+ Years
            </div>
            <div className="qa-splash-meta-item">
              <span>Status:</span> Immediate Joiner
            </div>
            <div className="qa-splash-meta-item">
              <span>Based:</span> Kolkata, India
            </div>
          </div>
        </div>

        <button className="qa-splash-enter-btn" onClick={handleEnter}>
          <ShieldCheck size={18} />
          View Portfolio
          <ArrowRight size={16} />
        </button>
        <div className="qa-splash-hint">Click to load portfolio →</div>
      </div>
    </div>
  );
}
