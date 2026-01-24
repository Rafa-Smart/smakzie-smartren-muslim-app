import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, School, Calendar, Package, Cpu, Smartphone, Info, CheckCircle, AlertCircle, FileDown, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const CTASection = () => {
  const [selectedArch, setSelectedArch] = useState(null);
  const [showArchInfo, setShowArchInfo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const jurusan = ['PPLG', 'TKJT', 'Pemasaran', 'Akuntansi', 'Manajemen Perkantoran'];

  // Data APK
  const universalApk = {
    title: 'APK Universal (Rekomendasi Utama)',
    description: 'Satu file untuk semua HP Android. Pilihan terbaik untuk semua siswa Smakzie.',
    fileSize: '~45 MB',
    fileName: 'muslimapp-smakzie-universal.apk',
    features: [
      'Cocok untuk 99% HP Android',
      'Mudah diinstal dari WhatsApp/Telegram',
      'Tidak perlu pilih versi',
      'Paling aman untuk user awam'
    ],
    icon: <Package className="w-6 h-6" />,
    color: 'from-emerald-500 to-green-500',
    badge: 'REKOMENDASI'
  };

  const archApks = [
    {
      arch: 'ARM64',
      title: 'APK ARM64',
      description: 'HP Android modern (2016-sekarang)',
      fileSize: '~32 MB',
      fileName: 'muslimapp-smakzie-arm64.apk',
      percentage: '85%',
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      arch: 'ARM',
      title: 'APK ARM-v7a',
      description: 'HP Android lama/spesifikasi rendah',
      fileSize: '~30 MB',
      fileName: 'muslimapp-smakzie-armv7.apk',
      percentage: '10%',
      icon: <Smartphone className="w-5 h-5" />,
      color: 'from-amber-500 to-orange-500'
    },
    {
      arch: 'x86',
      title: 'APK x86_64',
      description: 'Emulator atau Intel/AMD',
      fileSize: '~35 MB',
      fileName: 'muslimapp-smakzie-x86.apk',
      percentage: '5%',
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Simulasi download
  const handleDownload = (apkType, fileName) => {
    alert(`Download dimulai: ${fileName}\n\nTips: Setelah download, buka file dan izinkan instalasi dari sumber tidak dikenal jika diperlukan.`);
  };

  return (
    <section id="cta" className="py-8 px-4 sm:py-12 relative overflow-hidden">
      {/* Background untuk mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-black"></div>

      <div className="container mx-auto relative z-10">
        {/* Header Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Badge Mobile */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-700 dark:text-emerald-300">
              <School className="w-4 h-4" />
              <span className="text-sm font-medium">Siswa Smakzie</span>
            </div>
          </div>

          {/* Title untuk mobile */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-3">
              <span className="block">Download MuslimApp</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent mt-2">
                Smartren Ramadhan
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm px-4">
              Aplikasi resmi untuk Smartren Ramadhan SMKN 1 Cianjur
            </p>
          </div>

          {/* Mobile Toggle untuk Arsitektur */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white">Versi APK Lain</div>
                  <div className="text-xs text-gray-500">ARM64, ARM, x86</div>
                </div>
              </div>
              {isMobileMenuOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {/* Grid untuk Desktop, Stack untuk Mobile */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
            {/* Universal APK - Selalu ditampilkan di atas di mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 w-full"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-xl border border-emerald-100 dark:border-emerald-800/30 relative">
                {/* Recommended Badge - Mobile Friendly */}
                <div className="absolute top-3 right-3">
                  <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold">
                    <Zap className="w-3 h-3" />
                    <span className="hidden sm:inline">{universalApk.badge}</span>
                    <span className="sm:hidden">REKOM</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${universalApk.color} flex items-center justify-center flex-shrink-0`}>
                    {universalApk.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      APK Universal
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {universalApk.description}
                    </p>
                  </div>
                </div>

                {/* Features Grid - Mobile Optimized */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {universalApk.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-50 dark:bg-gray-700/50">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* File Info - Mobile Layout */}
                <div className="mb-6 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-left">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Ukuran File</div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {universalApk.fileSize}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Format</div>
                      <div className="text-sm font-mono text-gray-900 dark:text-white">
                        .apk
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    📱 {universalApk.fileName}
                  </div>
                </div>

                {/* Main Download Button - Mobile Optimized */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleDownload('universal', universalApk.fileName)}
                  className={`w-full py-4 rounded-xl bg-gradient-to-r ${universalApk.color} text-white font-bold text-base flex items-center justify-center space-x-3 shadow-lg`}
                >
                  <Download className="w-5 h-5" />
                  <span>Download APK Universal</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Architecture APKs - Hidden in mobile unless toggled */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block lg:col-span-1`}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-5"
              >
                {/* Mobile warning hanya ditampilkan di versi mobile */}
                <div className="lg:hidden p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">Hati-hati!</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Pilih salah satu arsitektur yang cocok dengan HP Anda.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Architecture Options - Mobile Scrollable */}
                <div className="max-h-[400px] lg:max-h-none overflow-y-auto lg:overflow-visible">
                  {archApks.map((apk, index) => (
                    <motion.div
                      key={apk.arch}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all mb-3 ${selectedArch === apk.arch ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10' : 'border-gray-200 dark:border-gray-700'}`}
                      onClick={() => setSelectedArch(apk.arch)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${apk.color} flex items-center justify-center`}>
                            {apk.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">{apk.title}</h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                                {apk.percentage}%
                              </span>
                              <span className="text-xs text-gray-500">{apk.fileSize}</span>
                            </div>
                          </div>
                        </div>
                        {selectedArch === apk.arch && (
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                        {apk.description}
                      </p>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        📱 {apk.fileName}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Download Selected Arch - Mobile Full Width */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => {
                    const selected = archApks.find(apk => apk.arch === selectedArch);
                    if (selected) {
                      handleDownload(selected.arch, selected.fileName);
                    } else {
                      alert('Pilih salah satu arsitektur terlebih dahulu!');
                    }
                  }}
                  disabled={!selectedArch}
                  className={`w-full py-4 rounded-xl flex items-center justify-center space-x-3 ${!selectedArch ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-cyan-500'} text-white font-semibold transition-all`}
                >
                  <FileDown className="w-5 h-5" />
                  <span className="text-base">
                    {selectedArch ? `Download ${selectedArch}` : 'Pilih Arsitektur'}
                  </span>
                </motion.button>

                {/* Info Toggle - Mobile Centered */}
                <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={() => setShowArchInfo(!showArchInfo)}
                    className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    {showArchInfo ? 'Sembunyikan Perbedaan' : 'Lihat Perbedaan APK'}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Arch Info (Collapsible) - Mobile Optimized */}
          {showArchInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Perbedaan APK
                </h3>
                
                {/* Mobile Accordion Style */}
                <div className="space-y-4">
                  {/* Universal APK Section */}
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/10">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Package className="w-4 h-4 mr-2 text-emerald-500" />
                      APK Universal
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">Satu file untuk semua HP</span>
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">Cocok untuk user awam</span>
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">File lebih besar (45MB)</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Architecture APK Section */}
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Cpu className="w-4 h-4 mr-2 text-blue-500" />
                      APK per Arsitektur
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5">•</div>
                        <span className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">File lebih kecil (30-35MB)</span>
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5">•</div>
                        <span className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">Harus pilih sesuai HP</span>
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5">•</div>
                        <span className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">Untuk user teknis</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>


      </div>
    </section>
  );
};

export default CTASection;