import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  Book, 
  Clock, 
  Heart, 
  Compass, 
  Moon, 
  Calendar, 
  Users, 
  BookOpen, 
  Repeat, 
  Mic, 
  Home, 
  Activity, 
  GraduationCap, 
  CheckCircle, 
  TrendingUp, 
  DollarSign,
  Dumbbell,
  Brain,
  UserCheck,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

const InteractiveDemo = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  
  // Semua fitur yang diminta
  const screens = [
    {
      id: 0,
      title: 'Al-Quran',
      description: 'Baca Quran dengan terjemahan',
      image: '/assets/images/al-quran-screen.png',
      icon: <Book className="w-5 h-5" />,
      color: 'from-emerald-500 to-green-500',
      category: 'Ibadah'
    },
    {
      id: 1,
      title: 'Jadwal Shalat',
      description: 'Waktu shalat tepat waktu',
      image: '/assets/images/sholat-screen.png',
      icon: <Clock className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Ibadah'
    },
    {
      id: 2,
      title: 'Kumpulan Doa',
      description: 'Doa harian dan zikir',
      image: '/assets/images/doa-screen.png',
      icon: <Heart className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      category: 'Ibadah'
    },
    {
      id: 3,
      title: 'Arah Kiblat',
      description: 'Penunjuk arah shalat',
      image: '/assets/images/qiblat-screen.png',
      icon: <Compass className="w-5 h-5" />,
      color: 'from-amber-500 to-orange-500',
      category: 'Ibadah'
    },
    {
      id: 4,
      title: 'Pola Tidur',
      description: 'Monitor waktu tidur',
      image: '/assets/images/tidur-screen.png',
      icon: <Moon className="w-5 h-5" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'Kesehatan'
    },
    {
      id: 5,
      title: 'Smartren Ramadhan',
      description: 'Jadwal kegiatan Ramadhan',
      image: '/assets/images/calender-screen.png',
      icon: <Calendar className="w-5 h-5" />,
      color: 'from-teal-500 to-emerald-500',
      category: 'Kegiatan'
    },
    {
      id: 6,
      title: 'Smartren 2026',
      description: 'Persiapan Ramadhan 1447 H',
      image: '/assets/images/smartren2026-screen.png',
      icon: <Target className="w-5 h-5" />,
      color: 'from-rose-500 to-pink-500',
      category: 'Kegiatan'
    },
    {
      id: 7,
      title: 'Absensi Siswa',
      description: 'Presensi harian peserta',
      image: '/assets/images/absensi-screen.png',
      icon: <UserCheck className="w-5 h-5" />,
      color: 'from-red-500 to-rose-500',
      category: 'Administrasi'
    },
    {
      id: 8,
      title: 'Daily Kegiatan',
      description: 'Aktivitas harian Smartren',
      image: '/assets/images/kegiatan-screen.png',
      icon: <Activity className="w-5 h-5" />,
      color: 'from-sky-500 to-blue-500',
      category: 'Kegiatan'
    },
    {
      id: 9,
      title: 'Laporan Puasa',
      description: 'Catatan puasa Ramadhan',
      image: '/assets/images/puasa-screen.png',
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'from-lime-500 to-emerald-500',
      category: 'Laporan'
    },
    {
      id: 10,
      title: 'Laporan Sholat',
      description: 'Catatan shalat harian',
      image: '/assets/images/laporan-sholat-screen.png',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-violet-500 to-purple-500',
      category: 'Laporan'
    },
    {
      id: 11,
      title: 'Tadarus',
      description: 'Membaca Al-Quran harian',
      image: '/assets/images/ngaji-screen.png',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'from-amber-500 to-yellow-500',
      category: 'Ibadah'
    },
    {
      id: 12,
      title: 'Hafalan',
      description: 'Menghafal ayat Al-Quran',
      image: '/assets/images/hafalan-screen.png',
      icon: <Repeat className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      category: 'Ibadah'
    },
    {
      id: 13,
      title: 'Ceramah',
      description: 'Kumpulan ceramah agama',
      image: '/assets/images/laporan-ceramah-screen.png',
      icon: <Mic className="w-5 h-5" />,
      color: 'from-fuchsia-500 to-pink-500',
      category: 'Edukasi'
    },
    {
      id: 14,
      title: 'Infak',
      description: 'Sedekah dan donasi',
      image: '/assets/images/infaq-screen.png',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'from-green-500 to-teal-500',
      category: 'Sosial'
    },
    {
      id: 15,
      title: 'Bantu Orang Tua',
      description: 'Kegiatan membantu orang tua',
      image: '/assets/images/bantu-ortu-screen.png',
      icon: <Home className="w-5 h-5" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'Sosial'
    },
    {
      id: 16,
      title: 'Olahraga Ringan',
      description: 'Aktivitas fisik sehat',
      image: '/assets/images/olahraga-screen.png',
      icon: <Dumbbell className="w-5 h-5" />,
      color: 'from-red-500 to-orange-500',
      category: 'Kesehatan'
    },
    {
      id: 17,
      title: 'Gemar Belajar',
      description: 'Materi pembelajaran Islam',
      image: '/assets/images/belajar-screen.png',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-purple-500 to-indigo-500',
      category: 'Edukasi'
    },
    {
      id: 18,
      title: 'Papan peringkat',
      description: 'berlomba lomba dalam kebaikan',
      image: '/assets/images/papan-peringkat-screen.png',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-purple-500 to-indigo-500',
      category: 'Sosial'
    }
  ];

  // Kategori untuk filter
  const categories = [
    { id: 'semua', label: 'Semua', count: screens.length, color: 'from-gray-500 to-gray-600' },
    { id: 'ibadah', label: 'Ibadah', count: screens.filter(s => s.category === 'Ibadah').length, color: 'from-emerald-500 to-green-500' },
    { id: 'kegiatan', label: 'Kegiatan', count: screens.filter(s => s.category === 'Kegiatan').length, color: 'from-teal-500 to-emerald-500' },
    { id: 'laporan', label: 'Laporan', count: screens.filter(s => s.category === 'Laporan').length, color: 'from-lime-500 to-emerald-500' },
    { id: 'kesehatan', label: 'Kesehatan', count: screens.filter(s => s.category === 'Kesehatan').length, color: 'from-indigo-500 to-purple-500' },
    { id: 'edukasi', label: 'Edukasi', count: screens.filter(s => s.category === 'Edukasi').length, color: 'from-purple-500 to-indigo-500' },
    { id: 'sosial', label: 'Sosial', count: screens.filter(s => s.category === 'Sosial').length, color: 'from-cyan-500 to-blue-500' },
    { id: 'administrasi', label: 'Admin', count: screens.filter(s => s.category === 'Administrasi').length, color: 'from-red-500 to-rose-500' }
  ];

  // Filter screens berdasarkan kategori dan pencarian
  const filteredScreens = screens.filter(screen => {
    const matchesCategory = selectedCategory === 'Semua' || screen.category === selectedCategory;
    const matchesSearch = screen.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         screen.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="demo" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Interactive Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Jelajahi <span className="gradient-text">Semua Fitur</span> MuslimApp
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Temukan semua alat yang Anda butuhkan untuk Ramadan yang lebih bermakna
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 justify-center">
          {/* Left Panel - Fitur dan Navigasi */}
          <div className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-4"
              >
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{screens.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Fitur</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-800/20 rounded-2xl p-4"
              >
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Kategori</div>
              </motion.div>
 
            </div>

            {/* Search and Controls */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari fitur..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all"
                  />
                </div>
                
                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-700 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-gray-800 shadow-sm' : 'hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                  >
                    <Grid className={`w-5 h-5 ${viewMode === 'grid' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'}`} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white dark:bg-gray-800 shadow-sm' : 'hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                  >
                    <List className={`w-5 h-5 ${viewMode === 'list' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'}`} />
                  </button>
                </div>
              </div>

              {/* Category Filter Chips */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Filter Kategori:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id === 'semua' ? 'Semua' : cat.label)}
                      className={`group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        (selectedCategory === cat.label || (cat.id === 'semua' && selectedCategory === 'Semua'))
                          ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {cat.label}
                        <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                          (selectedCategory === cat.label || (cat.id === 'semua' && selectedCategory === 'Semua'))
                            ? 'bg-white/20'
                            : 'bg-gray-200 dark:bg-gray-600'
                        }`}>
                          {cat.count}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Features Grid/List */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {filteredScreens.map((screen) => (
                    <motion.button
                      key={screen.id}
                      onClick={() => setActiveScreen(screen.id)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all relative overflow-hidden group ${
                        activeScreen === screen.id
                          ? `border-gradient bg-gradient-to-br ${screen.color} text-white shadow-2xl`
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-500 dark:hover:border-primary-500'
                      }`}
                    >
                      {/* Active Indicator */}
                      {activeScreen === screen.id && (
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white animate-pulse"></div>
                      )}
                      
                      {/* Icon */}
                      <div className={`p-3 rounded-lg mb-3 transition-transform group-hover:scale-110 ${
                        activeScreen === screen.id
                          ? 'bg-white/20'
                          : `bg-gradient-to-br ${screen.color}`
                      }`}>
                        {React.cloneElement(screen.icon, { 
                          className: `w-6 h-6 ${activeScreen === screen.id ? 'text-white' : 'text-white'}`
                        })}
                      </div>
                      
                      {/* Title */}
                      <span className={`text-xs font-semibold text-center line-clamp-2 leading-tight ${
                        activeScreen === screen.id ? 'text-white' : 'text-gray-800 dark:text-white'
                      }`}>
                        {screen.title}
                      </span>
                      
   
                    </motion.button>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredScreens.map((screen) => (
                    <motion.button
                      key={screen.id}
                      onClick={() => setActiveScreen(screen.id)}
                      whileHover={{ x: 4 }}
                      className={`flex items-center p-3 rounded-xl border transition-all ${
                        activeScreen === screen.id
                          ? `border-gradient bg-gradient-to-r ${screen.color} text-white shadow-lg`
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-500 dark:hover:border-primary-500'
                      }`}
                    >
                      <div className={`p-2 rounded-lg mr-3 ${
                        activeScreen === screen.id
                          ? 'bg-white/20'
                          : `bg-gradient-to-br ${screen.color}`
                      }`}>
                        {screen.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-sm">{screen.title}</div>
                        <div className={`text-xs ${
                          activeScreen === screen.id ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {screen.description}
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activeScreen === screen.id
                          ? 'bg-white/20'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        {screen.category}
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Navigation and Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{filteredScreens.length}</span> dari <span className="font-medium">{screens.length}</span> fitur
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setActiveScreen(prev => prev > 0 ? prev - 1 : screens.length - 1)}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      disabled={filteredScreens.length === 0}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {activeScreen + 1} / {screens.length}
                    </span>
                    <button
                      onClick={() => setActiveScreen(prev => prev < screens.length - 1 ? prev + 1 : 0)}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      disabled={filteredScreens.length === 0}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Feature Detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${screens[activeScreen].color}`}>
                      {React.cloneElement(screens[activeScreen].icon, { className: 'w-6 h-6 text-white' })}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                        {screens[activeScreen].title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {screens[activeScreen].description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${screens[activeScreen].color} text-white`}>
                      {screens[activeScreen].category}
                    </div>
                    <div className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300">
                      #{activeScreen + 1}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">Aktif</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Preview</div>
                    <div className="text-lg font-bold text-primary-600 dark:text-primary-400">Live</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Panel - Phone Mockup (Tetap sama) */}
          <div className="relative lg:sticky lg:top-24">
            {/* Phone Frame */}
            <div className="phone-frame rounded-[2.5rem] max-w-sm mx-auto border-8 border-gray-900 dark:border-gray-100 shadow-2xl">
              
              {/* Dynamic Screen Content */}
              <div className="relative bg-black rounded-[2rem] overflow-hidden h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    {/* Status Bar Simulation */}
                    <div className="flex justify-between items-center px-6 pt-2 pb-1 bg-black">
                      <div className="text-white text-xs">22:01</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-gray-600 rounded-sm"></div>
                        <div className="w-3 h-3 rounded-full border border-gray-500"></div>
                        <div className="w-6 h-2 bg-gray-600 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Screen Image */}
                    <div className="flex-1 relative overflow-hidden">
                      <img
                        src={screens[activeScreen].image}
                        alt={screens[activeScreen].title}
                        className="w-full h-full object-contain"
                        style={{ 
                          objectPosition: 'center top',
                          maxHeight: 'calc(100% - 50px)'
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://placehold.co/300x550/1a1a2e/ffffff?text=${encodeURIComponent(screens[activeScreen].title)}`;
                        }}
                      />
                      
                      {/* Fallback jika gambar tidak ditemukan */}
                      {!screens[activeScreen].image.startsWith('/assets/images/') && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                          <div className="text-center p-6">
                            <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${screens[activeScreen].color} flex items-center justify-center mx-auto mb-4`}>
                              {React.cloneElement(screens[activeScreen].icon, { className: 'w-10 h-10 text-white' })}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{screens[activeScreen].title}</h3>
                            <p className="text-gray-300 mb-4">{screens[activeScreen].description}</p>
                            <div className="text-sm text-gray-400">
                              Screenshot akan muncul di sini
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    

                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Home Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-900/30 dark:bg-gray-100/30 rounded-full"></div>
            </div>

            {/* Quick Controls */}
            <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-medium text-gray-800 dark:text-white">Kontrol Cepat</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Navigasi fitur</div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveScreen(prev => prev > 0 ? prev - 1 : screens.length - 1)}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-white" />
                  </button>
                  <button
                    onClick={() => setActiveScreen(prev => prev < screens.length - 1 ? prev + 1 : 0)}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-800 dark:text-white" />
                  </button>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                  <span>Progress</span>
                  <span>{Math.round(((activeScreen + 1) / screens.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeScreen + 1) / screens.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Fitur {activeScreen + 1}</span>
                  <span>dari {screens.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </section>
  );
};

export default InteractiveDemo;