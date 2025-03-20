import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="/press" className="text-gray-600 hover:text-gray-900">Press</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="/shipping" className="text-gray-600 hover:text-gray-900">Shipping</a></li>
              <li><a href="/returns" className="text-gray-600 hover:text-gray-900">Returns</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/store-locator" className="text-gray-600 hover:text-gray-900">Store Locator</a></li>
              <li><a href="/gift-cards" className="text-gray-600 hover:text-gray-900">Gift Cards</a></li>
              <li><a href="/student-discount" className="text-gray-600 hover:text-gray-900">Student Discount</a></li>
              <li><a href="/sale" className="text-gray-600 hover:text-gray-900">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>© 2024 ShopStyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;