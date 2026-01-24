import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  School,
  Calendar,
  Package,
  Cpu,
  Smartphone,
  Info,
  CheckCircle,
  AlertCircle,
  FileDown,
  Zap,
  HelpCircle,
  Shield,
  Smartphone as Phone,
} from "lucide-react";

const CTASection = () => {
  const [selectedArch, setSelectedArch] = useState(null);
  const [showArchInfo, setShowArchInfo] = useState(false);

  const jurusan = [
    "PPLG",
    "TKJT",
    "Pemasaran",
    "Akuntansi",
    "Manajemen Perkantoran",
  ];

  // Data APK
  const universalApk = {
    title: "APK Universal",
    subtitle: "Rekomendasi Utama",
    description:
      "Satu file APK yang kompatibel dengan semua perangkat Android. Solusi terbaik untuk semua siswa Smakzie tanpa perlu khawatir dengan spesifikasi perangkat.",
    fileSize: "~45 MB",
    fileName: "muslimapp-smakzie-universal.apk",
    features: [
      { text: "Kompatibel dengan 99% HP Android", icon: Phone },
      { text: "Mudah dibagikan via WhatsApp/Telegram", icon: Download },
      { text: "Tidak perlu pilih versi arsitektur", icon: Package },
      { text: "Paling aman untuk pengguna awam", icon: Shield },
    ],
    icon: Package,
    color: "from-emerald-500 to-green-500",
  };

  const archApks = [
    {
      arch: "ARM64",
      title: "APK ARM64-v8a",
      description: "Optimized untuk HP Android modern (rilis 2016-sekarang)",
      fileSize: "~32 MB",
      fileName: "muslimapp-smakzie-arm64.apk",
      percentage: "85%",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      recommendedFor: "HP Android Modern",
    },
    {
      arch: "ARM",
      title: "APK ARM-v7a",
      description: "Untuk HP Android lama atau spesifikasi rendah",
      fileSize: "~30 MB",
      fileName: "muslimapp-smakzie-armv7.apk",
      percentage: "10%",
      icon: Smartphone,
      color: "from-amber-500 to-orange-500",
      recommendedFor: "HP Android Lama",
    },
    {
      arch: "x86",
      title: "APK x86_64",
      description: "Khusus emulator atau perangkat berbasis Intel/AMD",
      fileSize: "~35 MB",
      fileName: "muslimapp-smakzie-x86.apk",
      percentage: "5%",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      recommendedFor: "Emulator/PC",
    },
  ];

  // Simulasi download
  const handleDownload = (apkType, fileName) => {
    alert(
      `Download dimulai: ${fileName}\n\nTips: Setelah download, buka file dan izinkan instalasi dari sumber tidak dikenal jika diperlukan.`,
    );
  };

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/20 blur-3xl dark:bg-emerald-500/10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/3 translate-y-1/3 rounded-full bg-green-200/20 blur-3xl dark:bg-green-500/10"></div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Header Section */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 text-emerald-700 dark:text-emerald-300 mb-2"
            >
              <School className="w-4 h-4" />
              <span className="text-sm font-medium">Khusus Siswa Smakzie</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Download MuslimApp
              </h1>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent sm:text-3xl md:text-4xl">
                Smartren Ramadhan 1447 H
              </h2>
            </div>

            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Aplikasi resmi untuk mendukung kegiatan Smartren Ramadhan di SMKN 1 Cianjur. 
              Pilih versi APK yang sesuai dengan kebutuhan perangkat Anda.
            </p>
          </div>

          {/* Universal APK Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 text-emerald-700 dark:text-emerald-300 mb-4">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold">REKOMENDASI UTAMA</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                APK Universal - Solusi Terbaik
              </h3>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="relative">

                <div className="p-6 sm:p-8 md:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column - Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${universalApk.color} flex items-center justify-center shadow-lg`}>
                          <universalApk.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                            {universalApk.title}
                          </h4>
                          <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            {universalApk.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                        {universalApk.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-4">
                        {universalApk.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50"
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              <feature.icon className="w-5 h-5 text-emerald-500" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Download */}
                    <div className="space-y-6">
                      {/* File Info Card */}
                      <div className="bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-700/30 dark:to-emerald-900/10 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                          Informasi File
                        </h5>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              Ukuran File
                            </div>
                            <div className="text-xl font-bold text-gray-900 dark:text-white">
                              {universalApk.fileSize}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              Format
                            </div>
                            <div className="text-xl font-bold text-gray-900 dark:text-white">
                              APK
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            Nama File
                          </div>
                          <div className="font-mono text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 p-2 rounded-lg break-all">
                            {universalApk.fileName}
                          </div>
                        </div>
                      </div>

                      {/* Download Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          handleDownload("universal", universalApk.fileName)
                        }
                        className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r ${universalApk.color} text-white font-bold text-lg flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <Download className="w-6 h-6" />
                        <span>Download APK Universal</span>
                      </motion.button>

                      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Gratis • Tidak ada iklan • 100% aman
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Architecture APKs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8 sm:space-y-10"
          >
            {/* Section Header */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-700 dark:text-blue-300 mb-4">
                <Cpu className="w-4 h-4" />
                <span className="text-sm font-semibold">VERSI SPESIFIK</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                APK per Arsitektur
              </h3>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Untuk pengguna yang memahami spesifikasi perangkat mereka
              </p>
            </div>

            {/* Warning Alert */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 sm:p-8 border border-amber-200 dark:border-amber-700/30">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-800/30 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">

                  <p className="text-gray-700 dark:text-gray-300">
                    Versi arsitektur spesifik hanya direkomendasikan jika Anda memahami 
                    spesifikasi perangkat Android Anda. Jika tidak yakin, gunakan APK Universal.
                  </p>
                  <button
                    onClick={() => setShowArchInfo(!showArchInfo)}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm sm:text-base"
                  >
                    <HelpCircle className="w-4 h-4 mr-2" />
                    {showArchInfo ? "Sembunyikan detail" : "Pelajari perbedaan arsitektur"}
                  </button>
                </div>
              </div>
            </div>

            {/* Architecture Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {archApks.map((apk, index) => (
                <motion.div
                  key={apk.arch}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-300 ${
                    selectedArch === apk.arch
                      ? "border-emerald-500 shadow-emerald-200 dark:shadow-emerald-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                  onClick={() => setSelectedArch(apk.arch)}
                >
                  <div className="p-6 space-y-4">
                    {/* Card Header */}
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${apk.color} flex items-center justify-center shadow-md`}
                        >
                          <apk.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                            {apk.arch}
                          </h4>
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            {apk.recommendedFor}
                          </p>
                        </div>
                      </div>
                      {selectedArch === apk.arch && (
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-emerald-500" />
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {apk.title}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {apk.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Ukuran File
                          </div>
                          <div className="font-bold text-gray-900 dark:text-white">
                            {apk.fileSize}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Pengguna
                          </div>
                          <div className="font-bold text-gray-900 dark:text-white">
                            {apk.percentage}
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          File Name
                        </div>
                        <div className="font-mono text-xs text-gray-900 dark:text-white truncate">
                          {apk.fileName}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  <div
                    className={`h-1 transition-all duration-300 ${
                      selectedArch === apk.arch
                        ? "bg-gradient-to-r from-emerald-500 to-green-500"
                        : "bg-transparent"
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Download Selected Arch Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: selectedArch ? 1 : 0.5, y: 0 }}
              className={`text-center pt-4 ${!selectedArch ? "opacity-50" : ""}`}
            >
              <motion.button
                whileHover={selectedArch ? { scale: 1.02 } : {}}
                whileTap={selectedArch ? { scale: 0.98 } : {}}
                onClick={() => {
                  const selected = archApks.find(
                    (apk) => apk.arch === selectedArch,
                  );
                  if (selected) {
                    handleDownload(selected.arch, selected.fileName);
                  } else {
                    alert("Silakan pilih salah satu arsitektur terlebih dahulu!");
                  }
                }}
                disabled={!selectedArch}
                className={`inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 ${
                  !selectedArch
                    ? "bg-gray-200 dark:bg-gray-700 cursor-not-allowed text-gray-500 dark:text-gray-400"
                    : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white hover:shadow-xl"
                }`}
              >
                <FileDown className="w-6 h-6" />
                <span>
                  {selectedArch
                    ? `Download ${selectedArch} APK`
                    : "Pilih arsitektur di atas"}
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Arch Info Section */}
          {showArchInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    📖 Panduan Memilih APK
                  </h4>
                  <button
                    onClick={() => setShowArchInfo(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 flex items-center justify-center">
                        <Package className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white text-lg">
                          APK Universal
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Untuk semua pengguna
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 ml-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-emerald-600 dark:text-emerald-400 text-sm">
                            ✓
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Build:</span>{" "}
                          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                            flutter build apk --release
                          </code>
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-emerald-600 dark:text-emerald-400 text-sm">
                            ✓
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Kompatibilitas:</span> 99% perangkat Android
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-emerald-600 dark:text-emerald-400 text-sm">
                            ✓
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Ukuran:</span> ~45 MB (lebih besar karena multi-arch)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white text-lg">
                          APK per Arsitektur
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Untuk pengguna teknis
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 ml-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 dark:text-blue-400 text-sm">
                            ⚙️
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Build:</span>{" "}
                          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                            flutter build apk --split-per-abi
                          </code>
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 dark:text-blue-400 text-sm">
                            ⚙️
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">File:</span> 3 APK terpisah (~30 MB masing-masing)
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 dark:text-blue-400 text-sm">
                            ⚙️
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Untuk:</span> Testing, pengguna yang tahu spesifikasi perangkat
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl sm:rounded-4xl shadow-2xl"></div>
            <div className="relative bg-gradient-to-r from-emerald-600/90 to-green-600/90 rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16 overflow-hidden">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                }}></div>
              </div>

              <div className="relative text-center space-y-8 max-w-4xl mx-auto">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                    <Calendar className="w-5 h-5 text-white" />
                    <span className="text-sm font-medium text-white">
                      Smartren Ramadhan 1447 H
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    Siap Sambut Smartren Ramadhan?
                  </h3>

                  <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                    Download MuslimApp sekarang untuk mendukung kegiatan Smartren Ramadhan di SMKN 1 Cianjur.
                    Aplikasi ini mendukung semua kompetensi keahlian:
                  </p>
                </div>

                {/* Jurusan Badges */}
                <div className="flex flex-wrap justify-center gap-3">
                  {jurusan.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDownload("universal", universalApk.fileName)}
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                  >
                    <Download className="w-6 h-6" />
                    <span className="text-lg">Download Sekarang</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;