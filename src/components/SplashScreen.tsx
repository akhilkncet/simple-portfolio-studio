import { useEffect, memo } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen = memo(function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    let cancelled = false;
    const loadAndAnimate = async () => {
      try {
        const gsap = await import('gsap').then(mod => mod.default);
        if (cancelled) return;
        gsap.set('.transition-overlay', { scaleY: 1, transformOrigin: 'top' });
        gsap.to('.transition-overlay', {
          scaleY: 0,
          duration: 0.4,
          stagger: -0.08,
          ease: 'power2.inOut',
          onComplete: () => { if (!cancelled) onComplete?.(); },
        });
      } catch {
        // Fallback: just complete immediately
        if (!cancelled) onComplete?.();
      }
    };
    loadAndAnimate();
    return () => { cancelled = true; };
  }, [onComplete]);

  return (
    <div className="transition" aria-hidden="true">
      <div className="transition-overlay overlay-1" />
      <div className="transition-overlay overlay-2" />
      <div className="transition-overlay overlay-3" />
      <div className="transition-overlay overlay-4" />
      <div className="transition-overlay overlay-5" />
    </div>
  );
});
