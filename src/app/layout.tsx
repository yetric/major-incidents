import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'History Unfiltered — Major Historical Events',
  description: 'Explore the major events that shaped our world. Educational, neutral, and factual.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0F0F0F] text-white antialiased font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
