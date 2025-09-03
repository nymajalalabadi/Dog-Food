import { Outlet } from 'react-router-dom';
import { FaPaw, FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black flex flex-col">
      <Navigation />
      <main className="pt-16 flex-grow px-4 py-8 relative z-10">
        <div className="w-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-card border-t border-white/10 dark:border-black/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <FaPaw className="text-2xl text-blue-500" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Premium Dog Food
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
                Nourishing your furry friend with the finest ingredients for a healthy,
                happy life. Premium quality dog food made with love and science.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaFacebook className="text-blue-600" />
                </div>
                <div className="w-10 h-10 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaInstagram className="text-pink-500" />
                </div>
                <div className="w-10 h-10 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaTwitter className="text-blue-400" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a></li>
                <li><a href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Contact Info
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p><FaPhone className="inline mr-2 text-blue-500" />+1 (555) 123-4567</p>
                <p><FaEnvelope className="inline mr-2 text-green-500" />support@premiumdogfood.com</p>
                <p><FaMapMarkerAlt className="inline mr-2 text-red-500" />123 Pet Nutrition Way<br />Dog Food City, DF 12345</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 dark:border-black/10 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2024 Premium Dog Food. All rights reserved. Made with ❤️ for dogs everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
