import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Omar Farahan Molla — Senior QA Test Engineer',
  description:
    'Senior QA Test Engineer specializing in game and application testing across mobile, console, PC, and web platforms. 5+ years experience with King, Scopely, Bandai Namco, Eidos Montreal.',
  keywords: [
    'Omar Farahan Molla',
    'QA Test Engineer',
    'Senior QA Engineer',
    'Game Testing',
    'Mobile QA',
    'Console QA',
    'Jira',
    'TestRail',
    'Event Testing',
    'Events Tracking',
    'Logcat',
    'Charles Proxy',
    'Selenium',
    'SDET',
  ],
  authors: [{ name: 'Omar Farahan Molla' }],
  openGraph: {
    title: 'Omar Farahan Molla — Senior QA Test Engineer Portfolio',
    description:
      'Senior QA Test Engineer specializing in game and application testing across mobile, console, PC, and web platforms.',
    url: 'https://github.com/Kingfrhn/Portfolio',
    siteName: 'Omar Farahan Molla Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&family=VT323&family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="bg-grid" />
        <div className="ambient-light" />
        <div className="crt-lines" />
        {children}
      </body>
    </html>
  );
}
