import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="glass-card border-t border-white/10 dark:border-black/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🐕</div>
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
                  📘
                </div>
                <div className="w-10 h-10 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  📷
                </div>
                <div className="w-10 h-10 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  🐦
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
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ support@premiumdogfood.com</p>
                <p>📍 123 Pet Nutrition Way<br />Dog Food City, DF 12345</p>
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
