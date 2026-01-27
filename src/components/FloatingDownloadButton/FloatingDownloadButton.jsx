import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FloatingDownloadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const navigate = useNavigate();
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  // Cek apakah sudah pernah berinteraksi dengan floating button
  useEffect(() => {
    const interacted = localStorage.getItem('floatingButtonInteracted');
    if (interacted) {
      setHasInteracted(true);
    }
  }, []);

  // Close panel ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        panelRef.current &&
        buttonRef.current &&
        !panelRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Simpan interaksi user ke localStorage
  const handleInteraction = () => {
    if (!hasInteracted) {
      localStorage.setItem('floatingButtonInteracted', 'true');
      setHasInteracted(true);
    }
  };

  // Fungsi untuk download file APK
  const downloadAPK = (filename, downloadName) => {
    setDownloading(true);
    
    // Buat element link untuk download
    const link = document.createElement('a');
    link.href = `https://github.com/Rafa-Smart/smakzie-smartren-muslim-app/releases/download/v1.0.0/app-release.apk`;
    link.download = downloadName;
    link.target = '_blank';
    
    // Simulasi delay untuk feedback visual
    setTimeout(() => {
      link.click();
      setDownloading(false);
      
      // Tampilkan notifikasi sukses
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      
      // Simpan interaksi ke localStorage
      handleInteraction();
      setIsOpen(false);
    }, 500);
  };

  // Handle download universal APK
  const handleDownloadUniversal = () => {
    downloadAPK('smakzie-muslim.apk', 'muslimapp-smakzie.apk');
  };

  // Navigate ke halaman download untuk melihat semua versi
  const handleViewAllVersions = () => {
    navigate('/download');
    handleInteraction();
    setIsOpen(false);
  };

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
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Animasi untuk panel
  const panelVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.8
      }
    },
    exit: { 
      opacity: 0, 
      y: 10,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  };

  return (
    <>
      {/* Main Floating Button */}
      <motion.div
        className="fixed z-50"
        style={{
          bottom: '1.5rem',
          right: '1.5rem',
        }}
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        ref={buttonRef}
      >
        <div className="relative">
          {/* Notification Badge (hanya tampil pertama kali) */}
          {!hasInteracted && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1"
            >
              <div className="relative">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></div>
                <div className="relative inline-flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-[10px] font-bold shadow-md">
                  !
                </div>
              </div>
            </motion.div>
          )}

          {/* Main Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              relative flex items-center justify-center 
              w-12 h-12 md:w-14 md:h-14 
              rounded-full shadow-xl 
              ${isOpen 
                ? 'bg-gradient-to-r from-emerald-600 to-green-600' 
                : 'bg-gradient-to-r from-emerald-500 to-green-500'
              } 
              text-white hover:shadow-2xl 
              transition-all duration-200
              active:scale-95
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            animate={!isOpen && !hasInteracted ? "pulse" : ""}
            variants={buttonVariants}
            disabled={downloading}
            aria-label="Download MuslimApp"
          >
            {downloading ? (
              <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : isOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <Download className="w-5 h-5 md:w-6 md:h-6" />
            )}
          </motion.button>
        </div>

        {/* Download Options Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute"
              style={{
                bottom: '4.5rem',
                right: '0',
              }}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              ref={panelRef}
            >
              <div className="
                bg-white dark:bg-gray-800 
                rounded-xl md:rounded-2xl 
                shadow-2xl 
                border border-gray-200 dark:border-gray-700 
                overflow-hidden
                w-64 md:w-72  
                max-w-[calc(100vw-3rem)]
              ">
                {/* Panel Header */}
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 md:p-4 text-white">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <Smartphone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm md:text-base truncate">Download MuslimApp</h3>
                      <p className="text-xs opacity-90 truncate">Smartren Ramadhan 1447 H</p>
                    </div>
                  </div>
                </div>

                {/* Panel Content */}
                <div className="p-3 md:p-4 space-y-2 md:space-y-3">
                  {/* Recommended Option */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/30 rounded-lg p-2 md:p-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <h4 className="font-bold text-gray-900 dark:text-white text-xs md:text-sm">
                          Rekomendasi Utama
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                          Cocok untuk 99% HP Android
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Download Options */}
                  <button
                    onClick={handleDownloadUniversal}
                    disabled={downloading}
                    className="
                      w-full text-left 
                      p-2 md:p-3 
                      rounded-lg md:rounded-xl 
                      bg-gray-50 dark:bg-gray-700/50 
                      hover:bg-gray-100 dark:hover:bg-gray-700 
                      transition-colors duration-150
                      border border-gray-200 dark:border-gray-600 
                      disabled:opacity-50 disabled:cursor-not-allowed
                      active:scale-[0.98]
                    "
                  >
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1 pr-2">
                        <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm truncate">
                          {downloading ? 'Sedang Mendownload...' : 'APK Universal'}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                          {downloading ? 'Tunggu sebentar...' : 'Satu file untuk semua HP'}
                        </div>
                      </div> 
                      <div className="flex-shrink-0">
                        <div className={`
                          text-xs px-2 py-1 rounded-full font-medium
                          ${downloading 
                            ? 'bg-gray-200 dark:bg-gray-600 text-gray-500' 
                            : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                          }
                        `}>
                          {downloading ? '⏳' : '~45 MB'}
                        </div>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handleViewAllVersions}
                    className="
                      w-full text-left 
                      p-2 md:p-3 
                      rounded-lg md:rounded-xl 
                      bg-gray-50 dark:bg-gray-700/50 
                      hover:bg-gray-100 dark:hover:bg-gray-700 
                      transition-colors duration-150
                      border border-gray-200 dark:border-gray-600
                      active:scale-[0.98]
                    "
                  >
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1 pr-2">
                        <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm truncate">
                          Lihat Semua Versi
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                          ARM64, ARM, x86_64
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Direct Link Fallback */}
                  <div className="pt-1">
                    <a
                      href="https://github.com/Rafa-Smart/smakzie-smartren-muslim-app/releases/download/v1.0.0/app-release.apk"
                      download="muslimapp-smakzie-universal.apk"
                      className="
                        inline-flex items-center 
                        text-xs text-emerald-600 dark:text-emerald-400 
                        hover:text-emerald-700 dark:hover:text-emerald-300 
                        transition-colors duration-150
                      "
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        handleInteraction();
                        setIsOpen(false);
                      }}
                    >
                      <ExternalLink className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="truncate">Link langsung untuk APK Universal</span>
                    </a>
                  </div>

                  {/* Warning */}
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 rounded-lg p-2 md:p-3 mt-1">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-3 h-3 md:w-4 md:h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Pastikan izinkan instalasi dari "Sumber Tidak Dikenal" di pengaturan Android
                      </p>
                    </div>
                  </div>
                </div>

                {/* Panel Footer */}
                 
              </div>

              {/* Arrow pointing to button */}
              <div className="
                absolute -bottom-1.5 right-3 md:right-4 
                w-3 h-3 
                bg-white dark:bg-gray-800 
                transform rotate-45 
                border-r border-b border-gray-200 dark:border-gray-700
              "></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Download Success Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 0 }}
            className="fixed z-50"
            style={{
              bottom: '5rem',
              right: '1.5rem',
            }}
          >
            <div className="
              bg-gradient-to-r from-emerald-500 to-green-500 
              text-white rounded-lg md:rounded-xl 
              p-3 md:p-4 shadow-2xl
              w-64 md:w-72
              max-w-[calc(100vw-3rem)]
            ">
              <div className="flex items-center space-x-2 md:space-x-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-bold text-sm md:text-base truncate">Download Berhasil Dimulai!</h4>
                  <p className="text-xs opacity-90 mt-0.5 truncate">
                    File APK sedang diunduh ke folder Downloads
                  </p>
                </div>
              </div>
              
              {/* Tips */}
              <div className="mt-2 pt-2 border-t border-white/20">
                <p className="text-xs opacity-90">
                  <span className="font-semibold">Tips:</span> Jika download tidak otomatis, cek folder Downloads
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Optimization - Background overlay untuk mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingDownloadButton;