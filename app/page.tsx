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
  const [splashDone, setSplashDone] = useState(false);

  const handleEnter = () => {
    setSplashDone(true);
  };

  const handleReset = () => {
    setSplashDone(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {!splashDone && (
        <ArcadeTitleScreen onStart={handleEnter} />
      )}

      <Header onResetGame={handleReset} />
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
