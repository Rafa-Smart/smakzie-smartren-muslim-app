import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone, CheckCircle, AlertCircle } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router';

const FloatingDownloadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const navigate = useNavigate()

  // Cek apakah sudah pernah berinteraksi dengan floating button
  useEffect(() => {
    const interacted = localStorage.getItem('floatingButtonInteracted');
    if (interacted) {
      setHasInteracted(true);
    }
  }, []);

  // Simpan interaksi user ke localStorage
  const handleInteraction = () => {
    if (!hasInteracted) {
      localStorage.setItem('floatingButtonInteracted', 'true');
      setHasInteracted(true);
    }
  };

  // Simulasi download
  const handleDownload = (type = 'universal') => {
    const apkFiles = {
      universal: 'muslimapp-smakzie-universal.apk',
      arm64: 'muslimapp-smakzie-arm64.apk',
      arm: 'muslimapp-smakzie-armv7.apk',
      x86: 'muslimapp-smakzie-x86.apk'
    };

    const fileName = apkFiles[type] || apkFiles.universal;
    
    // Simulasi download
    alert(`Download dimulai: ${fileName}\n\nFile akan tersimpan di folder Downloads perangkat Anda.`);
    
    // Show success notification
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    setIsOpen(false);
    handleInteraction();
  };

  // Scroll to CTA section
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
    handleInteraction();
  };

  const toDownloadPage = () => {
        navigate({
            pathname:"/download "
        })
  }

  // Animasi untuk floating button
  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Animasi untuk panel
  const panelVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {/* Main Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
      >
        <div className="relative">
          {/* Notification Badge (hanya tampil pertama kali) */}
          {!hasInteracted && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2"
            >
              <div className="relative">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></div>
                <div className="relative inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold shadow-lg">
                  !
                </div>
              </div>
            </motion.div>
          )}

          {/* Main Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl ${isOpen ? 'bg-gradient-to-r from-emerald-600 to-green-600' : 'bg-gradient-to-r from-emerald-500 to-green-500'} text-white hover:shadow-3xl transition-all duration-300`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={!isOpen && !hasInteracted ? "pulse" : ""}
            variants={buttonVariants}
          >
            {isOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Download className="w-7 h-7" />
            )}
          </motion.button>
        </div>

        {/* Download Options Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-20 right-0 w-72 sm:w-80"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Panel Header */}
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5" />
                      <div>
                        <h3 className="font-bold text-lg">Download MuslimApp</h3>
                        <p className="text-sm opacity-90">Smartren Ramadhan 1447 H</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panel Content */}
                <div className="p-4 space-y-3">
                  {/* Recommended Option */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/30 rounded-xl p-3">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                          Rekomendasi Utama
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          Cocok untuk 99% HP Android
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Download Options */}
                  <button
                    onClick={() => handleDownload('universal')}
                    className="w-full text-left p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">
                          APK Universal
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Satu file untuk semua HP
                        </div>
                      </div>
                      <div className="text-xs px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-medium">
                        ~45 MB
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={scrollToCTA}
                    className="w-full text-left p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600"
                  >
                    <div
                    onClick={toDownloadPage}
                     className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">
                          Lihat Semua Versi
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          ARM64, ARM, x86_64
                        </div>
                      </div>
                      <div className="text-emerald-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Warning */}
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 rounded-xl p-3">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Pastikan izinkan instalasi dari sumber tidak dikenal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Panel Footer */}
                <div className="border-t border-gray-200 dark:border-gray-700 p-3">
                  <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                    Untuk Siswa SMKN 1 Cianjur
                  </p>
                </div>
              </div>

              {/* Arrow pointing to button */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45 border-r border-b border-gray-200 dark:border-gray-700"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Download Success Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 0 }}
            className="fixed bottom-24 right-6 z-50 w-72"
          >
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl p-4 shadow-2xl">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-white" />
                <div>
                  <h4 className="font-bold">Download Dimulai!</h4>
                  <p className="text-sm opacity-90 mt-1">
                    File APK sedang diunduh ke perangkat Anda
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Optimization - Hide on very small screens if panel is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingDownloadButton;