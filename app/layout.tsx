import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Omar Farahan Molla — Senior QA Test Engineer',
  description:
    'Senior QA Test Engineer with 5+ years of experience in manual testing, functional, regression, and exploratory testing across mobile, console, PC, and web platforms. Currently serving notice period (LWD: 9th October 2026).',
  keywords: [
    'Omar Farahan Molla',
    'QA Test Engineer',
    'Senior QA Engineer',
    'Manual Testing',
    'Software Testing',
    'Mobile QA',
    'Cross-Platform Testing',
    'Jira',
    'TestRail',
    'Functional Testing',
    'Regression Testing',
    'Logcat',
    'Charles Proxy',
    'Selenium',
    'SDET',
  ],
  authors: [{ name: 'Omar Farahan Molla' }],
  openGraph: {
    title: 'Omar Farahan Molla — Senior QA Test Engineer Portfolio',
    description:
      'Senior QA Test Engineer with 5+ years experience in manual testing across mobile, console, PC, and web platforms.',
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
    <html lang="en" data-theme="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
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
