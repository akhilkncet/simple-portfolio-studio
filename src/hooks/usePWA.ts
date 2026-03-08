import { useEffect } from 'react';

const clearServiceWorkersAndCaches = async () => {
  if (!('serviceWorker' in navigator)) return;

  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.all(registrations.map((registration) => registration.unregister()));

  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((name) => caches.delete(name)));
  }
};

export function usePWA() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    // Don't run Service Worker in development
    if (!import.meta.env.PROD) {
      clearServiceWorkersAndCaches().catch((error) => {
        console.warn('[PWA] Cleanup failed:', error);
      });
      return;
    }

    let updateInterval: number | undefined;

    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('[PWA] Service Worker registered:', registration.scope);

        updateInterval = window.setInterval(() => {
          registration.update();
        }, 60000);

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('[PWA] New content available, please refresh.');
            }
          });
        });
      })
      .catch((error) => {
        console.error('[PWA] Service Worker registration failed:', error);
      });

    return () => {
      if (updateInterval) window.clearInterval(updateInterval);
    };
  }, []);
}

