'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vitals]', metric);
    }

    // In production, metrics are automatically sent to Vercel Analytics
    // For custom analytics, you can send to external service here:
    // Example: fetch('https://your-analytics-endpoint.com/vitals', { method: 'POST', body: JSON.stringify(metric) })
  });

  return null;
}
