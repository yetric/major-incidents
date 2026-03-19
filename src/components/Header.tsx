'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isEventPage = pathname.startsWith('/event/');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tight text-white">
              History<span className="text-indigo-400">Unfiltered</span>
            </span>
          </Link>
          <nav className="flex items-center space-x-4">
            {isEventPage && (
              <Link
                href="/"
                className="flex items-center space-x-1 text-sm text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Timeline</span>
              </Link>
            )}
            <span className="text-xs text-white/40 hidden sm:block">
              Major Historical Events
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}
