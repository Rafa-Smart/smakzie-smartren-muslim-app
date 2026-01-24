import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, School, Calendar, Package, Cpu, Smartphone, Info, CheckCircle, AlertCircle, FileDown, Zap } from 'lucide-react';

const CTASection = () => {
  const [selectedArch, setSelectedArch] = useState(null);
  const [showArchInfo, setShowArchInfo] = useState(false);
  
  const jurusan = ['PPLG', 'TKJT', 'Pemasaran', 'Akuntansi', 'Manajemen Perkantoran'];

  // Data APK
  const universalApk = {
    title: 'APK Universal (Rekomendasi Utama)',
    description: 'Satu file untuk semua HP Android. Pilihan terbaik untuk semua siswa Smakzie.',
    fileSize: '~45 MB',
    fileName: 'muslimapp-smakzie-universal.apk',
    command: 'flutter build apk --release',
    features: [
      'Cocok untuk 99% HP Android',
      'Mudah diinstal dari WhatsApp/Telegram',
      'Tidak perlu pilih versi',
      'Paling aman untuk user awam'
    ],
    icon: <Package className="w-6 h-6" />,
    color: 'from-emerald-500 to-green-500',
    badge: 'PALING DIREKOMENDASIKAN'
  };

  const archApks = [
    {
      arch: 'ARM64',
      title: 'APK ARM64-v8a',
      description: 'Untuk HP Android modern (2016-sekarang)',
      fileSize: '~32 MB',
      fileName: 'muslimapp-smakzie-arm64.apk',
      percentage: '85%',
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      arch: 'ARM',
      title: 'APK ARM-v7a',
      description: 'Untuk HP Android lama atau spesifikasi rendah',
      fileSize: '~30 MB',
      fileName: 'muslimapp-smakzie-armv7.apk',
      percentage: '10%',
      icon: <Smartphone className="w-5 h-5" />,
      color: 'from-amber-500 to-orange-500'
    },
    {
      arch: 'x86',
      title: 'APK x86_64',
      description: 'Khusus emulator atau perangkat Intel/AMD',
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
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:via-green-500/10 dark:to-teal-500/10"></div>
      
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-700 dark:text-emerald-300 mb-6">
              <School className="w-4 h-4" />
              <span className="text-sm font-medium">Khusus Siswa Smakzie</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="block">Download MuslimApp</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                Smartren Ramadhan 1447 H
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Aplikasi resmi untuk mendukung kegiatan Smartren Ramadhan di SMKN 1 Cianjur. 
              Pilih versi APK yang sesuai dengan kebutuhan Anda.
            </p>
          </div>

          {/* APK Download Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-700 dark:text-emerald-300 mb-4">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Download APK Manual</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Pilih Versi APK
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Untuk kemudahan dan keamanan, gunakan <span className="font-semibold text-emerald-600 dark:text-emerald-400">APK Universal</span>.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Universal APK - Kolom Lebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-gradient-to-br from-white to-emerald-50 dark:from-gray-800 dark:to-emerald-900/20 rounded-3xl p-8 shadow-2xl border-2 border-emerald-200 dark:border-emerald-700/30 relative overflow-hidden">
                  {/* Recommended Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold">
                      <Zap className="w-3 h-3" />
                      <span>{universalApk.badge}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${universalApk.color} flex items-center justify-center`}>
                      {universalApk.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {universalApk.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {universalApk.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {universalApk.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-white dark:bg-gray-700/50">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* File Info */}
                  <div className="mb-8 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Ukuran File</div>
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          {universalApk.fileSize}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Nama File</div>
                        <div className="text-lg font-semibold text-gray-900 dark:text-white font-mono text-sm">
                          {universalApk.fileName}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Download Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDownload('universal', universalApk.fileName)}
                    className={`w-full py-4 rounded-xl bg-gradient-to-r ${universalApk.color} text-white font-bold text-lg flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <Download className="w-6 h-6" />
                    <span>Download APK Universal</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Architecture APKs - Kolom Kanan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl h-full">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">APK per Arsitektur</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Untuk kebutuhan khusus</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm">Perhatian!</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Hanya untuk pengguna yang paham teknis.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Architecture Options */}
                    {archApks.map((apk, index) => (
                      <motion.div
                        key={apk.arch}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * (index + 1) }}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedArch === apk.arch ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`}
                        onClick={() => setSelectedArch(apk.arch)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${apk.color} flex items-center justify-center`}>
                              {apk.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 dark:text-white">{apk.title}</h4>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                                  {apk.percentage} pengguna
                                </span>
                                <span className="text-xs text-gray-500">{apk.fileSize}</span>
                              </div>
                            </div>
                          </div>
                          {selectedArch === apk.arch && (
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {apk.description}
                        </p>
                      </motion.div>
                    ))}

                    {/* Download Selected Arch */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        const selected = archApks.find(apk => apk.arch === selectedArch);
                        if (selected) {
                          handleDownload(selected.arch, selected.fileName);
                        } else {
                          alert('Pilih salah satu arsitektur terlebih dahulu!');
                        }
                      }}
                      disabled={!selectedArch}
                      className={`w-full py-3 rounded-xl flex items-center justify-center space-x-2 ${!selectedArch ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'} text-white font-semibold transition-all`}
                    >
                      <FileDown className="w-5 h-5" />
                      <span>
                        {selectedArch ? `Download ${selectedArch}` : 'Pilih arsitektur'}
                      </span>
                    </motion.button>

                    <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                      <button 
                        onClick={() => setShowArchInfo(!showArchInfo)}
                        className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                      >
                        <Info className="w-4 h-4 mr-1" />
                        {showArchInfo ? 'Sembunyikan' : 'Tampilkan'} perbedaan APK
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Arch Info (Collapsible) */}
            {showArchInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-8"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Perbedaan APK Universal vs APK per Arsitektur
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">📦 APK Universal</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">
                            <span className="font-semibold">Build Command:</span> flutter build apk --release
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">
                            <span className="font-semibold">File Output:</span> app-release.apk
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">
                            <span className="font-semibold">Penggunaan:</span> Landing page, download manual, user awam
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">⚙️ APK per Arsitektur</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <Cpu className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">
                            <span className="font-semibold">Build Command:</span> flutter build apk --split-per-abi
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Cpu className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">
                            <span className="font-semibold">File Output:</span> app-arm64-v8a-release.apk (dan lainnya)
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Cpu className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">
                            <span className="font-semibold">Penggunaan:</span> Testing, user teknis
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white mb-8"
            >
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 mb-6">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Smartren 1447 H</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Siap Sambut Smartren Ramadhan?
                </h3>
                <p className="text-lg opacity-90 mb-8">
                  Download MuslimApp sekarang untuk mendukung kegiatan Smartren Ramadhan di SMKN 1 Cianjur.
                </p>

                {/* Jurusan Badges */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold opacity-90 mb-4">
                    Untuk Semua Kompetensi Keahlian:
                  </h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {jurusan.map((item, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 rounded-full bg-white/20 text-white font-medium"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;