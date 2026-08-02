'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import SkillsCoverage from '@/components/SkillsCoverage';
import SampleWork from '@/components/SampleWork';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import ArcadeTitleScreen from '@/components/ArcadeTitleScreen';

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleResetGame = () => {
    setGameStarted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {!gameStarted && (
        <ArcadeTitleScreen onStart={handleStartGame} />
      )}

      <Header onResetGame={handleResetGame} />
      <Hero />
      <Experience />
      <Projects />
      <SkillsCoverage />
      <SampleWork />
      <InteractiveTerminal />
      <Education />
      <Contact />
    </main>
  );
}
