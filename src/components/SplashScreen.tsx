'use client';

import { useEffect } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  useEffect(() => {
    // Dynamically import GSAP only when splash screen is shown
    const loadAndAnimate = async () => {
      const gsap = await import('gsap').then(mod => mod.default);
      
      // Initial reveal transition on mount
      const revealTransition = () => {
        return new Promise<void>((resolve) => {
          // Set initial state: overlay covers screen (scaleY: 1, starts from top)
          gsap.set('.transition-overlay', { scaleY: 1, transformOrigin: 'top' });
          
          // Animate overlay to scaleY: 0 (disappears) - reduced to 0.4s for faster load
          gsap.to('.transition-overlay', {
            scaleY: 0,
            duration: 0.4, // Reduced from 0.6s
            stagger: -0.08, // Reduced from -0.1
            ease: 'power2.inOut',
            onComplete: () => {
              resolve();
              if (onComplete) {
                onComplete();
              }
            },
          });
        });
      };

      revealTransition();
    };

    loadAndAnimate();
  }, [onComplete]);

  return (
    <div className="transition">
      <div className="transition-overlay overlay-1"></div>
      <div className="transition-overlay overlay-2"></div>
      <div className="transition-overlay overlay-3"></div>
      <div className="transition-overlay overlay-4"></div>
      <div className="transition-overlay overlay-5"></div>
    </div>
  );
};
