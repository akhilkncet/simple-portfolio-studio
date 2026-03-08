import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const clearDevCaches = async () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return false;

  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.all(registrations.map((registration) => registration.unregister()));

  if ('caches' in window) {
    const names = await caches.keys();
    await Promise.all(names.map((name) => caches.delete(name)));
  }

  return registrations.length > 0;
};

const bootstrap = async () => {
  if (!import.meta.env.PROD) {
    const reloadFlag = 'dev-cache-reset-done';
    if (!sessionStorage.getItem(reloadFlag)) {
      const hadRegistrations = await clearDevCaches();
      sessionStorage.setItem(reloadFlag, '1');
      if (hadRegistrations) {
        window.location.reload();
        return;
      }
    }
  }

  createRoot(document.getElementById('root')!).render(<App />);
};

void bootstrap();
