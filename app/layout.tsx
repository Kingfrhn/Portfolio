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
    'ADB',
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
    <html lang="en">
      <body>
        <div className="bg-grid" />
        <div className="ambient-light" />
        {children}
      </body>
    </html>
  );
}
