import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ClientLayout } from './ClientLayout';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://akhilr.web.app'),
  title: {
    default: 'AKHIL R | Cybersecurity & Backend Developer',
    template: '%s | Akhil R',
  },
  description: 'Computer Science Student specializing in Cybersecurity, Backend Development, and Machine Learning. Building secure, intelligent systems.',
  keywords: ['Akhil R', 'Cybersecurity', 'Backend Developer', 'Machine Learning', 'Python', 'Django', 'Portfolio', 'Security Engineer', 'Penetration Testing', 'Full Stack Developer'],
  authors: [{ name: 'Akhil R', url: 'https://akhilr.web.app' }],
  creator: 'Akhil R',
  publisher: 'Akhil R',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akhilr.web.app',
    title: 'AKHIL R | Cybersecurity & Backend Developer',
    description: 'Computer Science Student specializing in Cybersecurity, Backend Development, and Machine Learning.',
    siteName: 'Akhil R Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Akhil R - Cybersecurity & Backend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AKHIL R | Cybersecurity & Backend Developer',
    description: 'Computer Science Student specializing in Cybersecurity, Backend Development, and Machine Learning.',
    creator: '@akhilr',
    images: ['/images/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://akhilr.web.app',
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#FFFDF5" />
        <link rel="icon" type="image/png" href="/title_icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        {/* Preload critical images for LCP optimization */}
        <link rel="preload" as="image" href="/images/akhil.jpg" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans text-neo-black antialiased selection:bg-neo-black selection:text-neo-yellow`}
      >
        <StructuredData />
        <ClientLayout>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
