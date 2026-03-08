'use client';

import { useState } from 'react';
import { useCursor } from '@/hooks/useCursor';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePWA } from '@/hooks/usePWA';
import { SplashScreen } from '@/components/SplashScreen';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useCursor();
  useScrollReveal();
  useScrollProgress();
  usePWA(); // Register service worker for PWA support

  return (
    <>
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {/* Custom Cursor */}
      <div
        id="cursor"
        className="w-6 h-6 bg-white rounded-full border-2 border-black hidden lg:block"
      ></div>

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-2 bg-neo-green z-[60] border-b-2 border-black"
        id="progressBar"
        style={{ width: '0%' }}
      ></div>

      {children}
    </>
  );
}
