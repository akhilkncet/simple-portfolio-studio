import { useState, useCallback, lazy, Suspense } from 'react';
import { useCursor } from '@/hooks/useCursor';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePWA } from '@/hooks/usePWA';
import { SplashScreen } from '@/components/SplashScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

// Lazy load below-fold sections
const About = lazy(() => import('@/components/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('@/components/Skills').then(m => ({ default: m.Skills })));
const Experience = lazy(() => import('@/components/Experience').then(m => ({ default: m.Experience })));
const Projects = lazy(() => import('@/components/Projects').then(m => ({ default: m.Projects })));
const Achievements = lazy(() => import('@/components/Achievements').then(m => ({ default: m.Achievements })));
const Contact = lazy(() => import('@/components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const hideSplash = useCallback(() => setShowSplash(false), []);

  useCursor();
  useScrollReveal();
  useScrollProgress();
  usePWA();

  return (
    <>
      {showSplash && <SplashScreen onComplete={hideSplash} />}

      <div
        id="cursor"
        className="w-6 h-6 bg-white rounded-full border-2 border-black hidden lg:block"
      />

      <div
        className="fixed top-0 left-0 h-2 bg-neo-green z-[60] border-b-2 border-black"
        id="progressBar"
        style={{ width: '0%' }}
      />

      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
