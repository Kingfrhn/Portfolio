'use client';

import { useState } from 'react';
import { Gamepad2, ShieldCheck, Play, Award, Sparkles } from 'lucide-react';
import { retroSound } from '@/utils/audio';

interface ArcadeTitleScreenProps {
  onStart: () => void;
}

export default function ArcadeTitleScreen({ onStart }: ArcadeTitleScreenProps) {
  const [isWarping, setIsWarping] = useState(false);

  const handlePressStart = () => {
    retroSound.playStartGame();
    setIsWarping(true);
    setTimeout(() => {
      onStart();
    }, 700);
  };

  return (
    <div className={`arcade-title-overlay ${isWarping ? 'crt-warp-out' : ''}`}>
      <div className="arcade-cabinet-frame">
        <div className="arcade-header-marquee">
          <Sparkles className="arcade-star" size={18} />
          <span>Omar the QA</span>
          <Sparkles className="arcade-star" size={18} />
        </div>

        <h1 className="arcade-main-title">
          PRESS START
        </h1>
        <p className="arcade-subtitle">
          GAME &amp; APPLICATION TESTING CAMPAIGN
        </p>

        <div className="arcade-coin-prompt">
          <span className="blink-text">★ INSERT COIN (01/01) CREDITS: 99 ★</span>
        </div>

        {/* Character Select HUD */}
        <div className="arcade-char-card">
          <div className="char-card-header">
            <Gamepad2 size={20} style={{ color: 'var(--pass)' }} />
            <span>CHARACTER SELECT — PLAYER 1</span>
          </div>

          <div className="char-card-body">
            <div className="char-portrait">
              <img src="/photo_omar.jpg" alt="Omar Farahan Molla" />
              <span className="p1-tag">P1 READY</span>
            </div>

            <div className="char-stats">
              <div className="char-name">OMAR FARAHAN MOLLA</div>
              <div className="char-class">Senior QA Test Engineer</div>
              
              <div className="char-stat-list">
                <div className="char-stat-item">
                  <span className="label">EXP LEVEL:</span>
                  <span className="val">5+ YEARS (LVL 99)</span>
                </div>
                <div className="char-stat-item">
                  <span className="label">SPECIALTY:</span>
                  <span className="val">GAME &amp; APP QA</span>
                </div>
                <div className="char-stat-item">
                  <span className="label">PLATFORMS:</span>
                  <span className="val">MOBILE • CONSOLE • PC • WEB</span>
                </div>
                <div className="char-stat-item">
                  <span className="label">PREFERENCE:</span>
                  <span className="val" style={{ color: '#00e5ff' }}>MANUAL TESTING ROLES</span>
                </div>
                <div className="char-stat-item">
                  <span className="label">STATUS:</span>
                  <span className="val" style={{ color: '#00ff66' }}>SERVING NOTICE (LWD: 9th OCT 2026)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Game Action */}
        <div className="arcade-start-action">
          <button
            className="arcade-start-btn"
            onClick={handlePressStart}
          >
            <Play size={20} fill="currentColor" />
            <span>PRESS START TO ENTER WORLD</span>
          </button>
          
          <div className="arcade-instructions">
            [ CLICK TO UNLOCK WORLD • 8-BIT AUDIO ENABLED ]
          </div>
        </div>
      </div>
    </div>
  );
}
