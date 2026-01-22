import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Demo App', href: '#demo' },
    { label: 'Download', href: '#cta' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-emerald-600 flex items-center justify-center">
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
                MuslimApp
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">For Ramadan & Smakzie</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Download Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            
            <a
              href="#cta"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-emerald-600 text-white font-semibold hover:from-primary-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
            >
              Download Now
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-emerald-600 text-white font-semibold hover:from-primary-700 hover:to-emerald-700 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Download Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;