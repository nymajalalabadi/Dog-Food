import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon, FaPaw } from 'react-icons/fa';
import { useDarkMode } from '../contexts/DarkModeContext';

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
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10 dark:border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaPaw className="text-2xl text-blue-500" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Premium Dog Food
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActivePath(item.path) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg glass-button hover:scale-110 transition-transform duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-600" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg glass-button"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10 dark:border-black/10">
              {navItems.map((item) => (
                              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link ${isActivePath(item.path) ? 'active' : ''}`}
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
