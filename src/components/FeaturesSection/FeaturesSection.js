import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Clock, Calendar, Target, 
  Trophy, BarChart, Users, Shield,
  Zap, Heart, CheckCircle, Star,
  Compass, Moon, TrendingUp, FileText,
  ChevronLeft, ChevronRight, Smartphone,
  ArrowRight, ArrowLeft, Cpu, Globe,
  Battery, Wifi, Signal
} from 'lucide-react';

const FeaturesSection = () => {
  const [upperActiveIndex, setUpperActiveIndex] = useState(0);
  const [lowerActiveIndex, setLowerActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('right');
  const upperRef = useRef(null);
  const lowerRef = useRef(null);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Al-Quran Digital',
      description: '114 surah lengkap dengan terjemahan, tafsir, dan pencarian ayat',
      gradient: 'from-emerald-500 to-green-500',
      stats: '6,236 Ayat',
      color: 'bg-gradient-to-r from-emerald-500 to-green-500',
      badge: 'FULL OFFLINE'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Jadwal Sholat',
      description: 'Presisi tinggi khusus wilayah Cianjur dengan notifikasi waktu sholat',
      gradient: 'from-blue-500 to-cyan-500',
      stats: 'Presisi 99.9%',
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      badge: 'REAL-TIME'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Kumpulan Doa',
      description: 'Doa harian lengkap dengan audio dan transliterasi untuk memudahkan',
      gradient: 'from-purple-500 to-pink-500',
      stats: '200+ Doa',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      badge: 'AUDIO INCLUDE'
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Arah Kiblat',
      description: 'Penunjuk arah kiblat real-time dengan sensor kompas digital',
      gradient: 'from-amber-500 to-orange-500',
      stats: 'Real-time',
      color: 'bg-gradient-to-r from-amber-500 to-orange-500',
      badge: 'GPS ENABLED'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Jadwal Smartren',
      description: 'Kalender kegiatan Smartren lengkap dengan notifikasi reminder',
      gradient: 'from-rose-500 to-pink-500',
      stats: '30+ Kegiatan',
      color: 'bg-gradient-to-r from-rose-500 to-pink-500',
      badge: 'SYNC'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Laporan Ibadah',
      description: 'Statistik ibadah harian dengan grafik interaktif dan progress tracking',
      gradient: 'from-indigo-500 to-blue-500',
      stats: 'Detail Lengkap',
      color: 'bg-gradient-to-r from-indigo-500 to-blue-500',
      badge: 'ANALYTICS'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Leaderboard',
      description: 'Peringkat prestasi siswa dengan sistem poin dan achievement badges',
      gradient: 'from-yellow-500 to-amber-500',
      stats: 'Kompetitif',
      color: 'bg-gradient-to-r from-yellow-500 to-amber-500',
      badge: 'GAMIFICATION'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Target Ibadah',
      description: 'Set goals harian dan pantau pencapaian dengan progress tracker',
      gradient: 'from-teal-500 to-emerald-500',
      stats: '100% Terukur',
      color: 'bg-gradient-to-r from-teal-500 to-emerald-500',
      badge: 'SMART GOALS'
    }
  ];

  const additionalFeatures = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Dashboard Siswa',
      description: 'Monitor progress ibadah pribadi dengan grafik dan analisis detail',
      stats: 'Personal Analytics',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Dashboard Guru',
      description: 'Pantau perkembangan seluruh kelas dengan sistem monitoring real-time',
      stats: 'Class Management',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Dashboard Admin',
      description: 'Kelola semua data, user, dan generate laporan sistem secara lengkap',
      stats: 'Full Control',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-Platform',
      description: 'Akses dari berbagai perangkat dengan sinkronisasi data real-time',
      stats: 'Cross-Platform',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile First',
      description: 'Desain responsif dan optimal untuk penggunaan di smartphone',
      stats: 'Touch Optimized',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'High Performance',
      description: 'Engineered untuk performa tinggi dan pengalaman pengguna yang smooth',
      stats: 'Fast & Lightweight',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const stats = [
    { icon: <Users />, value: '1.200+', label: 'Siswa Aktif' },
    { icon: <BookOpen />, value: '30+', label: 'Kegiatan' },
    { icon: <Star />, value: '100%', label: 'Gratis' },
    { icon: <CheckCircle />, value: '24/7', label: 'Akses' }
  ];

  // Auto-play untuk carousel atas (geser kanan)
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setUpperActiveIndex((prev) => {
          const nextIndex = prev + 1;
          return nextIndex >= features.length ? 0 : nextIndex;
        });
      }, 3000); // 3 detik
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, features.length]);

  // Auto-play untuk carousel bawah (geser kiri)
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setLowerActiveIndex((prev) => {
          const nextIndex = prev - 1;
          return nextIndex < 0 ? additionalFeatures.length - 1 : nextIndex;
        });
      }, 3500); // 3.5 detik
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, additionalFeatures.length]);

  const nextUpperSlide = () => {
    setIsAutoPlaying(false);
    setUpperActiveIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= features.length ? 0 : nextIndex;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevUpperSlide = () => {
    setIsAutoPlaying(false);
    setUpperActiveIndex((prev) => {
      const nextIndex = prev - 1;
      return nextIndex < 0 ? features.length - 1 : nextIndex;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextLowerSlide = () => {
    setIsAutoPlaying(false);
    setLowerActiveIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= additionalFeatures.length ? 0 : nextIndex;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevLowerSlide = () => {
    setIsAutoPlaying(false);
    setLowerActiveIndex((prev) => {
      const nextIndex = prev - 1;
      return nextIndex < 0 ? additionalFeatures.length - 1 : nextIndex;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Fitur Unggulan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Semua yang Dibutuhkan untuk <span className="gradient-text">Smartren Sukses</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Aplikasi lengkap untuk mendukung kegiatan Ramadhan siswa-siswi SMKN 1 Cianjur
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                {React.cloneElement(stat.icon, { className: 'w-6 h-6' })}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Upper Carousel - Geser ke Kanan */}
        <div className="relative mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Fitur Utama Aplikasi
              </h3>
     
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={prevUpperSlide}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <div className="flex items-center space-x-1">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${upperActiveIndex === index ? 'w-6 bg-gradient-to-r from-emerald-500 to-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  />
                ))}
              </div>
              <button
                onClick={nextUpperSlide}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" ref={upperRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={upperActiveIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {features.slice(upperActiveIndex, upperActiveIndex + 2).map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
                          <div className="flex items-start justify-between mb-6">
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                              {React.cloneElement(feature.icon, { className: 'w-8 h-8 text-white' })}
                            </div>
                            <div className="text-right">
                              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                {feature.badge}
                              </span>
                              <div className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                                {feature.stats}
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            {feature.description}
                          </p>
                          
                          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">Active</span>
                              </div>
                              <div className="text-sm text-gray-500">•</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">100% Compatible</div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
                                Explore
                              </div>
                              <ArrowRight className="w-4 h-4 text-emerald-500" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Auto-play Indicator */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-xs text-gray-700 dark:text-gray-300">
                  Auto • {upperActiveIndex + 1}/{features.length}
                </span>
              </div>
            </div>
          </div>

          {/* Preview Cards */}
          <div className="flex overflow-x-auto space-x-4 mt-6 pb-4 scrollbar-hide">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setUpperActiveIndex(index);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`flex-shrink-0 flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${upperActiveIndex === index ? 'bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-700' : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center`}>
                  {React.cloneElement(feature.icon, { className: 'w-5 h-5 text-white' })}
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-white text-sm">
                    {feature.title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {feature.stats}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lower Carousel - Geser ke Kiri */}
        <div className="relative mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Sistem Dashboard & Platform
              </h3>
 
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={prevLowerSlide}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <div className="flex items-center space-x-1">
                {additionalFeatures.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${lowerActiveIndex === index ? 'w-6 bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  />
                ))}
              </div>
              <button
                onClick={nextLowerSlide}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" ref={lowerRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={lowerActiveIndex}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    {additionalFeatures.slice(lowerActiveIndex, lowerActiveIndex + 3).map((feature, index) => {
                      const IconComponent = feature.icon.type;
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-500 hover:shadow-xl"
                        >
                          <div className="flex items-start space-x-4 mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 dark:text-white text-lg">{feature.title}</h4>
                              <div className="inline-flex items-center mt-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
                                {feature.stats}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                Included in all plans
                              </div>
                              <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></div>
                                <div className="text-xs text-emerald-600 dark:text-emerald-400">Active</div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Auto-play Indicator */}
            <div className="absolute top-4 left-4">
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-xs text-gray-700 dark:text-gray-300">
                  Auto • {lowerActiveIndex + 1}/{additionalFeatures.length}
                </span>
              </div>
            </div>
          </div>

          {/* Preview Cards */}
          <div className="flex overflow-x-auto space-x-4 mt-6 pb-4 scrollbar-hide justify-end">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon.type;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setLowerActiveIndex(index);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }}
                  className={`flex-shrink-0 flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${lowerActiveIndex === index ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700' : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                      {feature.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Other Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-2xl p-8"
        >
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              Fitur Lainnya yang Tersedia
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Semua yang dibutuhkan untuk pengalaman Smartren terbaik
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { text: 'Catatan Infaq & Sedekah', icon: '💰' },
              { text: 'Pantau Pola Tidur', icon: '😴' },
              { text: 'Laporan Ceramah Harian', icon: '📝' },
              { text: 'Hafalan Al-Quran Digital', icon: '📖' },
              { text: 'Tadarus Harian Tracker', icon: '🎯' },
              { text: 'Buku Saku Digital', icon: '📱' },
              { text: 'Notifikasi Kegiatan', icon: '🔔' },
              { text: 'Forum Diskusi Siswa', icon: '💬' }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 md:p-12 border border-emerald-100 dark:border-emerald-800/30"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 mb-4 border border-emerald-200 dark:border-emerald-700">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">No Ads</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Fokus beribadah tanpa gangguan iklan sama sekali
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 mb-4 border border-emerald-200 dark:border-emerald-700">
                <Moon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Dark Mode</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tampilan nyaman untuk mata di malam hari dan hemat baterai
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 mb-4 border border-emerald-200 dark:border-emerald-700">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Regular Updates</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Pembaruan fitur dan konten secara berkala untuk pengalaman terbaik
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;