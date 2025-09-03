import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon, FaPaw } from 'react-icons/fa';
import { useDarkMode } from '../contexts/useDarkMode';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card glass-shadow border-b border-white/10 dark:border-black/10 animate-fade-in-scale shadow-glow-hover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <FaPaw className="text-2xl text-blue-500 group-hover:animate-float transition-all duration-300" />
            <span className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-all duration-300">
              Premium Dog Food
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link animate-fade-in-up animate-stagger-${index + 1} ${isActivePath(item.path) ? 'active animate-pulse-glow' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-lg glass-button hover:scale-110 transition-all duration-300 animate-float group relative overflow-hidden"
              aria-label="Toggle dark mode"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              {isDarkMode ? (
                <FaSun className="text-yellow-400 text-lg relative z-10 group-hover:animate-spin" />
              ) : (
                <FaMoon className="text-gray-600 text-lg relative z-10 group-hover:text-purple-400 transition-colors duration-300" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-3 rounded-lg glass-button hover:scale-110 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <FaTimes className="text-lg group-hover:animate-spin transition-transform duration-300" />
                ) : (
                  <FaBars className="text-lg group-hover:animate-pulse transition-all duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-scale">
            <div className="px-2 pt-2 pb-3 space-y-2 border-t border-white/10 dark:border-black/10 glass-card mx-2 mt-2 rounded-lg">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link block animate-fade-in-up animate-stagger-${index + 1} ${isActivePath(item.path) ? 'active animate-pulse-glow' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
