import { useState } from 'react';
import { useCursor } from '@/hooks/useCursor';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePWA } from '@/hooks/usePWA';
import { SplashScreen } from '@/components/SplashScreen';
import { StructuredData } from '@/components/StructuredData';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useCursor();
  useScrollReveal();
  useScrollProgress();
  usePWA();

  return (
    <>
      <StructuredData />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Custom Cursor */}
      <div
        id="cursor"
        className="w-6 h-6 bg-white rounded-full border-2 border-black hidden lg:block"
      />

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-2 bg-neo-green z-[60] border-b-2 border-black"
        id="progressBar"
        style={{ width: '0%' }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
