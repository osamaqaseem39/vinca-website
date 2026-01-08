'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Customer Service */}
          <div>
            <h3 className="text-xs font-light mb-4 uppercase tracking-wider">CUSTOMER SERVICE</h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/contact" className="hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:underline transition-colors">
                  Frame Size Guide
                </Link>
              </li>
              <li>
                <Link href="/prescription-upload" className="hover:underline transition-colors">
                  Prescription Upload
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:underline transition-colors">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xs font-light mb-4 uppercase tracking-wider">ABOUT US</h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/about" className="hover:underline transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/store-locator" className="hover:underline transition-colors">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="/eye-care" className="hover:underline transition-colors">
                  Eye Care Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:underline transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-light mb-4 uppercase tracking-wider">LEGAL</h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/legal-notice" className="hover:underline transition-colors">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:underline transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xs font-light mb-4 uppercase tracking-wider">FOLLOW US</h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-light">© VINCA {currentYear}</p>
            <div className="text-xs font-light">
              <select 
                className="bg-transparent border-none cursor-pointer focus:outline-none"
                aria-label="Language selector"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

