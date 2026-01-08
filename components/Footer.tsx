export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 mt-20">
      <div className="max-w-full mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Customer Service */}
          <div>
            <h3 className="text-xs font-light mb-4 uppercase tracking-wider">CUSTOMER SERVICE</h3>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:underline transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:underline transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:underline transition-colors">Frame Size Guide</a></li>
              <li><a href="#" className="hover:underline transition-colors">Prescription Upload</a></li>
              <li><a href="#" className="hover:underline transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:underline transition-colors">Shipping</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xs font-medium mb-4 uppercase tracking-wider">ABOUT US</h3>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:underline transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:underline transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:underline transition-colors">Eye Care Services</a></li>
              <li><a href="#" className="hover:underline transition-colors">Careers</a></li>
              <li><a href="#" className="hover:underline transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-medium mb-4 uppercase tracking-wider">LEGAL</h3>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:underline transition-colors">Legal Notice</a></li>
              <li><a href="#" className="hover:underline transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:underline transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xs font-medium mb-4 uppercase tracking-wider">FOLLOW US</h3>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:underline transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:underline transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:underline transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:underline transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:underline transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8 flex items-center justify-between">
          <p className="text-xs font-light">© VINCA 2025</p>
          <div className="text-xs font-light">
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

