import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react'; // Sparkles dihapus karena tidak digunakan
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext.js';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  // Efek scroll untuk header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu saat navigasi
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Demo', path: '/interactive' },
    { label: 'UI Showcase', path: '/ui-showcase' },
    { label: 'Download', path: '/download' },
    { label: 'About', path: '/about' },
  ];

  const handleThemeToggle = () => {
    toggleTheme();
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.classList.add('scale-110');
      setTimeout(() => button.classList.remove('scale-110'), 300);
    }
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white dark:bg-gray-900 shadow-md py-3'
            : 'bg-white dark:bg-gray-900 py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Diganti dengan gambar PNG */}
            <Link to="/" className="flex items-center">
              <img
               src="/assets/images/ziekir_logo.png"
                alt="Ziekir Logo"
                className="h-20 w-auto" // Sesuaikan tinggi sesuai kebutuhan
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) => `
                      relative px-4 py-2 rounded-lg transition-all duration-300
                      ${
                        isActive
                          ? 'text-primary-600 dark:text-primary-400 font-medium'
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                      }
                    `}
                  >
                    {/* Active indicator */}
                    <div
                      className={`
                      absolute bottom-0 left-1/2 transform -translate-x-1/2
                      w-6 h-0.5 bg-primary-500 dark:bg-primary-400
                      rounded-full transition-all duration-300
                      ${
                        location.pathname === item.path
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0'
                      }
                    `}
                    ></div>

                    <span className="relative z-10 font-medium text-sm">
                      {item.label}
                    </span>
                  </NavLink>
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <button
                id="theme-toggle"
                onClick={handleThemeToggle}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              {/* Download Button */}
              <NavLink
                to="/download"
                className={({ isActive }) => `
                  hidden lg:flex items-center px-4 py-2 rounded-lg
                  bg-primary-600 hover:bg-primary-700
                  text-white font-medium transition-all duration-300
                  shadow hover:shadow-md
                  ${isActive ? 'ring-2 ring-primary-400' : ''}
                `}
              >
                <Download className="w-4 h-4 mr-2" />
                <span className="text-sm">Download</span>
              </NavLink>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
          lg:hidden overflow-hidden transition-all duration-300
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => {
                    const baseClasses =
                      'flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300';
                    const activeClasses =
                      'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium';
                    const inactiveClasses =
                      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800';

                    return `${baseClasses} ${
                      isActive ? activeClasses : inactiveClasses
                    }`;
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? 'bg-primary-500 scale-125'
                              : 'bg-gray-400'
                          }`}
                        ></div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.path === '/download' && (
                        <Download className="w-4 h-4" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* Mobile Download Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <NavLink
                  to="/download"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center px-4 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Aplikasi
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;