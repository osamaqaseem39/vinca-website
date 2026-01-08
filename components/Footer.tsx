'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-900 mt-20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wide">NEWSLETTER</h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/newsletter" className="underline hover:opacity-70 transition-opacity">
                  Subscribe to our newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Services */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wide">CLIENT SERVICES</h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/faq" className="hover:underline transition-opacity">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:underline transition-opacity">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline transition-opacity">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:underline transition-opacity">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:underline transition-opacity">
                  Payment
                </Link>
              </li>
            </ul>
          </div>

          {/* The Company */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wide">THE COMPANY</h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/careers" className="hover:underline transition-opacity">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/careers-design" className="hover:underline transition-opacity">
                  Careers - Design
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:underline transition-opacity">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:underline transition-opacity">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies-settings" className="hover:underline transition-opacity">
                  Cookies Settings
                </Link>
              </li>
              <li>
                <Link href="/world-food-programme" className="hover:underline transition-opacity">
                  World Food Programme
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wide">FOLLOW US</h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-opacity"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-opacity"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-opacity"
                >
                  Tiktok
                </a>
              </li>
              <li>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-opacity"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-opacity"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          {/* Boutiques */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wide">BOUTIQUES</h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/store-locator" className="hover:underline transition-opacity">
                  Find a store nearby
                </Link>
              </li>
              <li className="mt-4">
                <p className="text-xs font-light">Country / Region: International Version</p>
              </li>
              <li>
                <p className="text-xs font-light">Language: English</p>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wide">CONTACT US</h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <p className="text-xs font-light">CALL US AT</p>
              </li>
              <li>
                <a href="tel:+442033186032" className="underline hover:opacity-70 transition-opacity">
                  +44 20 33 18 60 32
                </a>
              </li>
              <li className="mt-4">
                <Link href="/contact" className="underline hover:opacity-70 transition-opacity">
                  SEND US AN EMAIL
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900 mt-12 pt-6">
          <div className="flex justify-end">
            <p className="text-xs font-light">© {currentYear} VINCA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

