import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // State untuk melacak apakah kita sudah menentukan tema atau belum
  const [isInitialized, setIsInitialized] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fungsi untuk menginisialisasi tema berdasarkan preferensi
  const initializeTheme = useCallback(() => {
    if (typeof window === 'undefined') return false;
    
    try {
      // 1. Cek localStorage untuk tema yang disimpan
      const savedTheme = localStorage.getItem('theme');
      
      // 2. Jika ada tema yang disimpan, gunakan itu
      if (savedTheme) {
        const isDark = savedTheme === 'dark';
        setIsDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
        return true;
      }
      
      // 3. Jika tidak ada tema yang disimpan, gunakan preferensi sistem
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
      
      // 4. Simpan preferensi sistem ke localStorage sebagai default
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
      
      return true;
    } catch (error) {
      console.error('Error initializing theme:', error);
      return false;
    }
  }, []);

  // Fungsi untuk toggle tema dengan kontrol penuh
  const toggleTheme = useCallback(() => {
    try {
      const newDarkMode = !isDarkMode;
      setIsDarkMode(newDarkMode);
      
      // Update class di HTML
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  }, [isDarkMode]);

  // Fungsi untuk mengatur tema secara manual
  const setTheme = useCallback((theme) => {
    try {
      if (theme === 'dark') {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else if (theme === 'light') {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else if (theme === 'system') {
        // Reset ke preferensi sistem
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
        document.documentElement.classList.toggle('dark', prefersDark);
        localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
      }
    } catch (error) {
      console.error('Error setting theme:', error);
    }
  }, []);

  // Inisialisasi awal
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const initialized = initializeTheme();
    setIsInitialized(initialized);
    
    // Listen untuk perubahan preferensi sistem (hanya jika tidak ada tema yang disimpan)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Hanya ikuti perubahan sistem jika tidak ada tema yang disimpan di localStorage
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        const prefersDark = e.matches;
        setIsDarkMode(prefersDark);
        document.documentElement.classList.toggle('dark', prefersDark);
        localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [initializeTheme]);

  // Pastikan class dark ada di HTML saat mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Context value
  const value = {
    isDarkMode,
    toggleTheme,
    setTheme,
    isInitialized
  };

  // Render loading state selama inisialisasi
  if (!isInitialized && typeof window !== 'undefined') {
    // Anda bisa menambahkan loading spinner atau null untuk menghindari flash
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook untuk menggunakan tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Hook untuk mendeteksi preferensi sistem
export const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return systemTheme;
};

// Komponen untuk toggle switch yang lebih baik
export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const systemTheme = useSystemTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Current: ${isDarkMode ? 'Dark' : 'Light'} mode | System: ${systemTheme}`}
    >
      <span
        className={`${
          isDarkMode ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

// Komponen untuk memaksa tema tertentu (untuk testing)
export const ThemeDebugger = () => {
  const { isDarkMode, setTheme, toggleTheme } = useTheme();
  const systemTheme = useSystemTheme();
  
  return (
    <div className="fixed bottom-20 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 text-sm">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span>Current: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong></span>
          <button
            onClick={toggleTheme}
            className="ml-2 px-2 py-1 bg-emerald-500 text-white rounded text-xs"
          >
            Toggle
          </button>
        </div>
        <div>System: <strong>{systemTheme}</strong></div>
        <div className="flex space-x-1">
          <button
            onClick={() => setTheme('light')}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs"
          >
            Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className="px-2 py-1 bg-gray-800 text-white rounded text-xs"
          >
            Dark
          </button>
          <button
            onClick={() => setTheme('system')}
            className="px-2 py-1 bg-blue-500 text-white rounded text-xs"
          >
            System
          </button>
        </div>
        <div className="text-xs text-gray-500">
          Saved: {localStorage.getItem('theme') || 'none'}
        </div>
      </div>
    </div>
  );
};