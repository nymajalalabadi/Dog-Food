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
            <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-all duration-300">
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
              className="p-3 rounded-lg glass-button"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-400 text-lg" />
              ) : (
                <FaMoon className="text-lg" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-3 rounded-lg glass-button"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
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
