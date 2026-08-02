import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import SkillsCoverage from '@/components/SkillsCoverage';
import SampleWork from '@/components/SampleWork';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Header />
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
