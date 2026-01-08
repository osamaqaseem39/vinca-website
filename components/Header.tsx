'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Main Header with Logo and Actions */}
      <div className="border-b border-gray-200">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-light tracking-[0.2em] uppercase">
              VINCA
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 text-xs font-normal tracking-wide">
              <a href="#" className="hover:underline uppercase">WOMEN</a>
              <a href="#" className="hover:underline uppercase">MEN</a>
              <a href="#" className="hover:underline uppercase">KIDS</a>
              <a href="#" className="hover:underline uppercase">PRESCRIPTION</a>
              <a href="#" className="hover:underline uppercase font-semibold">SUNGLASSES</a>
              <a href="#" className="hover:underline uppercase">READING</a>
              <a href="#" className="hover:underline uppercase">FRAMES</a>
              <a href="#" className="hover:underline uppercase">LENSES</a>
              <a href="#" className="hover:underline uppercase">ACCESSORIES</a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-6">
              <button className="hover:opacity-70 transition-opacity" aria-label="Search">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hover:opacity-70 transition-opacity" aria-label="Store Locator">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <button className="hover:opacity-70 transition-opacity" aria-label="Account">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="hover:opacity-70 transition-opacity" aria-label="Shopping Bag">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="max-w-full mx-auto px-6 py-2">
          <nav className="text-xs font-light tracking-wide">
            <span className="hover:underline">HOME</span>
            <span className="mx-2">/</span>
            <span className="hover:underline">MEN</span>
            <span className="mx-2">/</span>
            <span>SUNGLASSES</span>
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <div className="text-center py-8">
        <h1 className="text-2xl font-light tracking-widest uppercase">SUNGLASSES FOR MEN</h1>
      </div>
    </header>
  );
}

