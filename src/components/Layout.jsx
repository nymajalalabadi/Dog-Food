import { Outlet } from 'react-router-dom';
import { FaPaw, FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col animate-fade-in-scale relative overflow-hidden">
      {/* Dynamic Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <Navigation />
      <main className="pt-16 flex-grow px-4 py-8 relative z-10">
        <div className="w-full max-w-7xl mx-auto animate-fade-in-up dynamic-bg-light dark:dynamic-bg-dark rounded-2xl p-6 glass-card shadow-glow">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-card glass-shadow border-t border-white/10 dark:border-black/10 mt-auto animate-fade-in-up animate-stagger-3 shadow-glow-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 animate-fade-in-scale animate-stagger-1">
              <div className="flex items-center space-x-2 mb-4">
                <FaPaw className="text-2xl text-blue-500 animate-float" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Premium Dog Food
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md leading-relaxed">
                Nourishing your furry friend with the finest ingredients for a healthy,
                happy life. Premium quality dog food made with love and science.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse-glow hover:animate-shimmer">
                  <FaFacebook className="text-blue-600" />
                </div>
                <div className="w-10 h-10 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse-glow hover:animate-shimmer">
                  <FaInstagram className="text-pink-500" />
                </div>
                <div className="w-10 h-10 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse-glow hover:animate-shimmer">
                  <FaTwitter className="text-blue-400" />
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animate-stagger-2">
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Home</a></li>
                <li><a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">About Us</a></li>
                <li><a href="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Products</a></li>
                <li><a href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Blog</a></li>
                <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Contact</a></li>
              </ul>
            </div>

            <div className="animate-fade-in-up animate-stagger-3">
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Contact Info
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  <FaPhone className="inline mr-3 text-blue-500 animate-pulse" />+1 (555) 123-4567
                </p>
                <p className="flex items-center hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                  <FaEnvelope className="inline mr-3 text-green-500 animate-pulse" />support@premiumdogfood.com
                </p>
                <p className="flex items-start hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
                  <FaMapMarkerAlt className="inline mr-3 mt-1 text-red-500 animate-pulse" />
                  <span>123 Pet Nutrition Way<br />Dog Food City, DF 12345</span>
                </p>
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
