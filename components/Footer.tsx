'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-black mt-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16">
          {/* Newsletter */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4">NEWSLETTER</h3>
            <ul className="space-y-2 text-xs tracking-widest uppercase">
              <li>
                <Link href="/newsletter" className="hover:opacity-60 transition-opacity">
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Services */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4">CLIENT SERVICES</h3>
            <ul className="space-y-2 text-xs tracking-widest uppercase">
              <li>
                <Link href="/faq" className="hover:opacity-60 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:opacity-60 transition-opacity">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:opacity-60 transition-opacity">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:opacity-60 transition-opacity">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:opacity-60 transition-opacity">
                  Payment
                </Link>
              </li>
            </ul>
          </div>

          {/* The Company */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4">THE COMPANY</h3>
            <ul className="space-y-2 text-xs tracking-widest uppercase">
              <li>
                <Link href="/careers" className="hover:opacity-60 transition-opacity">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/careers-design" className="hover:opacity-60 transition-opacity">
                  Careers - Design
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:opacity-60 transition-opacity">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:opacity-60 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:opacity-60 transition-opacity">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies-settings" className="hover:opacity-60 transition-opacity">
                  Cookies Settings
                </Link>
              </li>
              <li>
                <Link href="/world-food-programme" className="hover:opacity-60 transition-opacity">
                  World Food Programme
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4">FOLLOW US</h3>
            <ul className="space-y-2 text-xs tracking-widest uppercase">
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  Tiktok
                </a>
              </li>
              <li>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          {/* Boutiques */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4">BOUTIQUES</h3>
            <ul className="space-y-2 text-xs tracking-widest uppercase">
              <li>
                <Link href="/store-locator" className="hover:opacity-60 transition-opacity">
                  Find a store nearby
                </Link>
              </li>
              <li className="mt-4 text-xs tracking-widest uppercase">
                Country / Region: International Version
              </li>
              <li className="text-xs tracking-widest uppercase">
                Language: English
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-xs tracking-widest uppercase">
              <li>CALL US AT</li>
              <li>
                <a href="tel:+442033186032" className="hover:opacity-60 transition-opacity">
                  +44 20 33 18 60 32
                </a>
              </li>
              <li className="mt-4">
                <Link href="/contact" className="hover:opacity-60 transition-opacity">
                  SEND US AN EMAIL
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black mt-12 pt-6">
          <div className="flex justify-end">
            <p className="text-xs tracking-widest uppercase">© {currentYear} VINCA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
