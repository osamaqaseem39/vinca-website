export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">NEWSLETTER</h3>
            <p className="text-sm text-gray-400">Subscribe to our newsletter</p>
          </div>

          {/* Client Services */}
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">CLIENT SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment</a></li>
            </ul>
          </div>

          {/* The Company */}
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">THE COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies - Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies Settings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">World Food Programme</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">FOLLOW US</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Boutiques */}
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">BOUTIQUES</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Find a store nearby</a></li>
              <li className="pt-2">Country / Region: International Version</li>
              <li>Language: English</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">CONTACT US</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>CALL 00 47 +44 20 73 18 02 22</li>
              <li><a href="#" className="hover:text-white transition-colors">SEND US AN EMAIL</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2025 Balenciaga</p>
        </div>
      </div>
    </footer>
  );
}

