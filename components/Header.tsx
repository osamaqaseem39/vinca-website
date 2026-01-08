'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-center space-x-8 text-xs font-normal tracking-wide">
            <a href="#" className="hover:underline uppercase">SPRING 26</a>
            <a href="#" className="hover:underline uppercase">GIFTS</a>
            <a href="#" className="hover:underline uppercase">FRAGRANCES</a>
            <a href="#" className="hover:underline uppercase">BAGS</a>
            <a href="#" className="hover:underline uppercase">WOMEN</a>
            <a href="#" className="hover:underline uppercase">MEN</a>
            <a href="#" className="hover:underline uppercase">COUTURE</a>
            <a href="#" className="hover:underline uppercase">EXPLORE</a>
          </div>
        </div>
      </nav>

      {/* Spring 26 Title */}
      <div className="text-center py-8">
        <h1 className="text-xl font-light tracking-widest uppercase">SPRING 26</h1>
      </div>

      {/* Main Header with Logo and Actions */}
      <div className="border-t border-b border-gray-200">
        <div className="max-w-full mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-light tracking-[0.2em] uppercase">
              BALENCIAGA
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-8">
              <a href="#" className="text-xs hover:underline uppercase tracking-wide">CLIENT SERVICES</a>
              <a href="#" className="text-xs hover:underline uppercase tracking-wide">LOGIN</a>
              <button className="hover:opacity-70 transition-opacity">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hover:opacity-70 transition-opacity">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

