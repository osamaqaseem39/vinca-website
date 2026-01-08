'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Main Header with Logo and Actions */}
      <div className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-light tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
            >
              VINCA
            </Link>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs font-normal tracking-wide">
              <Link 
                href="/women" 
                className="hover:underline uppercase transition-opacity hover:opacity-70"
              >
                WOMEN
              </Link>
              <Link 
                href="/men" 
                className="hover:underline uppercase transition-opacity hover:opacity-70"
              >
                MEN
              </Link>
              <Link 
                href="/kids" 
                className="hover:underline uppercase transition-opacity hover:opacity-70"
              >
                KIDS
              </Link>
              <Link 
                href="/prescription" 
                className="hover:underline uppercase transition-opacity hover:opacity-70"
              >
                PRESCRIPTION
              </Link>
              <Link 
                href="/sunglasses" 
                className="hover:underline uppercase font-semibold transition-opacity hover:opacity-70"
              >
                SUNGLASSES
              </Link>
              <Link 
                href="/reading" 
                className="hover:underline uppercase transition-opacity hover:opacity-70"
              >
                READING
              </Link>
              <Link 
                href="/frames" 
                className="hover:underline uppercase transition-opacity hover:opacity-70"
              >
                FRAMES
              </Link>
              <Link 
                href="/lenses" 
                className="hover:underline uppercase transition-opacity hover:opacity-70"
              >
                LENSES
              </Link>
              <Link 
                href="/accessories" 
                className="hover:underline uppercase transition-opacity hover:opacity-70"
              >
                ACCESSORIES
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:opacity-70 transition-opacity p-1" 
                aria-label="Search"
                title="Search"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link
                href="/store-locator"
                className="hidden md:block hover:opacity-70 transition-opacity p-1" 
                aria-label="Store Locator"
                title="Store Locator"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
              <Link 
                href="/account"
                className="hover:opacity-70 transition-opacity p-1" 
                aria-label="Account"
                title="Account"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              <Link 
                href="/cart"
                className="hover:opacity-70 transition-opacity relative p-1" 
                aria-label="Shopping Bag"
                title="Shopping Bag"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {/* Cart badge can be added here when cart count is available */}
                {/* <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span> */}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar (when search is open) */}
      {isSearchOpen && (
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <form className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 text-sm font-light focus:outline-none focus:border-gray-500 transition-colors"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:opacity-70 transition-opacity"
                aria-label="Submit search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu Button */}
      <div className="lg:hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xs font-light uppercase tracking-wide hover:opacity-70 transition-opacity flex items-center space-x-2"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            <span>{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white">
          <nav className="max-w-7xl mx-auto px-6 py-6 space-y-4 text-xs font-normal tracking-wide">
            <Link 
              href="/women" 
              className="block hover:underline uppercase py-2 transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              WOMEN
            </Link>
            <Link 
              href="/men" 
              className="block hover:underline uppercase py-2 transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              MEN
            </Link>
            <Link 
              href="/kids" 
              className="block hover:underline uppercase py-2 transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              KIDS
            </Link>
            <Link 
              href="/prescription" 
              className="block hover:underline uppercase py-2 transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              PRESCRIPTION
            </Link>
            <Link 
              href="/sunglasses" 
              className="block hover:underline uppercase font-semibold py-2 transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              SUNGLASSES
            </Link>
            <Link 
              href="/reading" 
              className="block hover:underline uppercase py-2 transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              READING
            </Link>
            <Link 
              href="/frames" 
              className="block hover:underline uppercase py-2 transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              FRAMES
            </Link>
            <Link 
              href="/lenses" 
              className="block hover:underline uppercase py-2 transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              LENSES
            </Link>
            <Link 
              href="/accessories" 
              className="block hover:underline uppercase py-2 transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              ACCESSORIES
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


