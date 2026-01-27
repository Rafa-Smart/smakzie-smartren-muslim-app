import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  School, Users, Target, Award, ChevronRight, 
  Shield, UserCheck, BarChart, Eye, Download,
  CheckCircle, ChevronLeft, Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [currentDashboardSlide, setCurrentDashboardSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();
  const jurusan = ['PPLG', 'TKJT', 'Pemasaran', 'Akuntansi', 'Manajemen Perkantoran'];
 
  // UPDATE: Gambar mockup HP yang sudah jadi
  const phoneImages = [
    {
      id: 1,
      title: "Dashboard Utama",
      description: "Tampilan utama aplikasi dengan fitur lengkap",
      image: "/assets/images/dashboard-siswa.png" // Ganti dengan gambar mockup yang sudah jadi
    },
    {
      id: 2,
      title: "Dashboard Guru",
      description: "Tampilan dashboard untuk guru/pembina",
      image: "/assets/images/dashboard-guru.png" // Ganti dengan gambar mockup yang sudah jadi
    },
    // Tambahkan lebih banyak mockup jika ada
  ];
 
  const dashboardSlides = [
    {
      id: 1,
      title: "Dashboard Admin Utama",
      subtitle: "Super Admin System",
      description: "Kelola semua user, data master, dan generate laporan komprehensif untuk seluruh sistem",
      features: [
        "User Management",
        "Data Master Management",
        "Report Generation",
        "System Configuration"
      ],
      stats: [
        { label: "Total Users", value: "2" },
        { label: "Active Sessions", value: "320" },
        { label: "Storage Used", value: "2.4 GB" }
      ],
      color: "from-purple-500 to-pink-500",
      icon: Shield,
      adminType: "SUPER ADMIN"
    },
    {
      id: 2,
      title: "Dashboard Guru/Pembina",
      subtitle: "Class Monitoring System",
      description: "Monitor perkembangan siswa, input nilai, dan berikan feedback secara real-time",
      features: [
        "Student Progress Tracking",
        "Grade Management",
        "Attendance Monitoring",
        "Broadcast Announcements"
      ],
      stats: [
        { label: "Total Students", value: "100+" },
        { label: "Active Classes", value: "42" },
        { label: "Avg. Progress", value: "100%" }
      ],
      color: "from-blue-500 to-cyan-500",
      icon: BarChart,
      adminType: "GURU/PEMBINA"
    },
    {
      id: 3,
      title: "Dashboard Siswa",
      subtitle: "Personal Progress Tracker",
      description: "Pantau progress ibadah pribadi, target hafalan, dan pencapaian selama Smartren",
      features: [
        "Ibadah Progress",
        "Target & Goals",
        "Achievement Badges",
        "Personal Reports"
      ],
      stats: [
        { label: "Daily Progress", value: "100%" },
        { label: "Streak Days", value: "14" },
        { label: "Total Points", value: "1,240" }
      ],
      color: "from-emerald-500 to-green-500",
      icon: UserCheck,
      adminType: "SISWA"
    },
    
  ];

  // Auto-play untuk carousel dashboard
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentDashboardSlide((prev) => (prev + 1) % dashboardSlides.length);
      }, 4500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, dashboardSlides.length]);

  // Auto-play untuk gambar HP (berganti setiap 4 detik)
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % phoneImages.length);
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, phoneImages.length]);

  // Fungsi untuk generate placeholder jika gambar tidak ditemukan
  const generatePlaceholder = (title) => {
    const colors = [
      '1a1a2e', '16213e', '0f3460', '533483',
      'e94560', 'f39c12', '27ae60', '8e44ad'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `https://placehold.co/300x550/${randomColor}/ffffff?text=${encodeURIComponent(title)}&font=montserrat`;
  };

  // Cek apakah gambar ada sebelum load
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageError = (id) => {
    console.warn(`Gambar dengan ID ${id} tidak ditemukan. Menggunakan placeholder.`);
    setImageLoaded(prev => ({ ...prev, [id]: false }));
  };

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  const toDownloadPage = () => {
    navigate({ pathname: "/download" });
  };

  const nextDashboardSlide = () => {
    setIsAutoPlaying(false);
    setCurrentDashboardSlide((prev) => (prev + 1) % dashboardSlides.length);
    setTimeout(() => setIsAutoPlaying(true), 500);
  };

  const prevDashboardSlide = () => {
    setIsAutoPlaying(false);
    setCurrentDashboardSlide((prev) => (prev - 1 + dashboardSlides.length) % dashboardSlides.length);
    setTimeout(() => setIsAutoPlaying(true), 500);
  };

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % phoneImages.length);
    setTimeout(() => setIsAutoPlaying(true), 500);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev - 1 + phoneImages.length) % phoneImages.length);
    setTimeout(() => setIsAutoPlaying(true), 500);
  };

  return (
    <section className="section-padding pt-24 lg:pt-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* School Badge */}
        <div className="absolute top-10 right-10 hidden lg:block">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
            <School className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-700 dark:text-emerald-300 mb-6">
              <School className="w-4 h-4" />
              <span className="text-sm font-medium">Khusus Siswa Smakzie</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Aplikasi Resmi</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                Smartren Ramadhan
              </span>
              <span className="block">SMKN 1 Cianjur</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              MuslimApp adalah aplikasi khusus untuk mendukung kegiatan Smartren Ramadhan di SMKN 1 Cianjur. 
              Dengan berbagai dashboard untuk siswa, guru, dan admin.
            </p>

            {/* Features Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <CheckCircle className="w-5 h-5" />, text: "Multi Dashboard" },
                { icon: <BarChart className="w-5 h-5" />, text: "Real-time Analytics" },
                { icon: <UserCheck className="w-5 h-5" />, text: "Progress Tracking" },
                { icon: <Shield className="w-5 h-5" />, text: "Admin Controls" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={toDownloadPage}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Download className="w-6 h-6 mr-2" />
                Download Aplikasi
              </button>
              <button
                onClick={() => navigate("/features")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all"
              >
                Lihat Fitur Lengkap
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>

          {/* Right - Gambar Mockup HP yang Sudah Jadi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Container untuk gambar mockup HP */}
            <div className="relative w-full max-w-xs mx-auto">
              {/* Gambar Mockup HP - langsung tampilkan gambar mockup yang sudah jadi */}
              <div className="relative rounded-lg shadow-2xl overflow-hidden">
                {phoneImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: currentImageIndex === index ? 1 : 0,
                      scale: currentImageIndex === index ? 1 : 0.95
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 ${currentImageIndex === index ? 'z-10' : 'z-0'}`}
                  >
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-auto rounded-lg"
                      onError={() => handleImageError(image.id)}
                      onLoad={() => handleImageLoad(image.id)}
                      style={{
                        display: imageLoaded[image.id] === false ? 'none' : 'block'
                      }}
                    />
                    
                    {/* Placeholder jika gambar error */}
                    {imageLoaded[image.id] === false && (
                      <div className="w-full h-[550px] flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black rounded-lg">
                        <div className="text-white text-4xl mb-2">📱</div>
                        <div className="text-white font-bold text-center mb-1">{image.title}</div>
                        <div className="text-gray-400 text-sm text-center">{image.description}</div>
                        <div className="text-gray-500 text-xs mt-2">Mockup Preview</div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Kontrol navigasi gambar */}
              {phoneImages.length > 1 && (
                <div className="flex justify-center mt-4 space-x-4">
                  <button
                    onClick={prevImage}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                  
                  {/* Indicator dots */}
                  <div className="flex items-center space-x-2">
                    {phoneImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsAutoPlaying(false);
                          setCurrentImageIndex(index);
                          setTimeout(() => setIsAutoPlaying(true), 500);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index ? 'w-6 bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextImage}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              )}
              
              {/* Keterangan gambar */}
              <div className="mt-4 text-center">
                <h3 className="font-bold text-gray-800 dark:text-white">
                  {phoneImages[currentImageIndex]?.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {phoneImages[currentImageIndex]?.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Admin Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-700 dark:text-blue-300 mb-4">
              <BarChart className="w-4 h-4" />
              <span className="text-sm font-medium">Dashboard Admin System</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Multiple Dashboard Interface
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Tersedia dashboard khusus untuk setiap peran: Admin Utama, Guru/Pembina, dan Siswa
            </p>
          </div>

          {/* Dashboard Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black">
              {dashboardSlides.map((slide, index) => {
                if (index !== currentDashboardSlide) return null;
                
                const IconComponent = slide.icon;
                
                return (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 lg:p-12"
                  >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Left - Content */}
                      <div className="space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-black border border-gray-700">
                          <IconComponent className="w-4 h-4" />
                          <span className="text-sm font-medium text-gray-300">{slide.adminType}</span>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                            {slide.title}
                          </h3>
                          <p className="text-gray-400 text-lg">
                            {slide.subtitle}
                          </p>
                        </div>

                        <p className="text-gray-300">
                          {slide.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3">
                          {slide.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center">
                                <CheckCircle className="w-3 h-3 text-emerald-400" />
                              </div>
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800">
                          {slide.stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl font-bold text-white">{stat.value}</div>
                              <div className="text-xs text-gray-400">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right - Dashboard Preview */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 border border-gray-700">
                          {/* Dashboard Header */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${slide.color} flex items-center justify-center`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-white font-bold">{slide.adminType}</div>
                                <div className="text-xs text-gray-400">Dashboard Preview</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-400">Live</div>
                              <div className="text-xs text-emerald-400">●</div>
                            </div>
                          </div>

                          {/* Dashboard Content */}
                          <div className="space-y-4">
                            {/* Chart Placeholder */}
                            <div className="h-32 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl relative overflow-hidden">
                              <div className="absolute inset-0 flex items-end space-x-1 p-4">
                                {[40, 60, 80, 60, 90, 70, 50].map((height, idx) => (
                                  <div
                                    key={idx}
                                    className="flex-1 flex flex-col items-center"
                                  >
                                    <div
                                      className={`w-3 rounded-t-lg ${idx === 4 ? 'bg-gradient-to-t from-emerald-500 to-green-500' : 'bg-gray-700'}`}
                                      style={{ height: `${height}%` }}
                                    ></div>
                                    <div className="text-xs text-gray-500 mt-1">
                                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-3">
                              <div className="bg-gray-800/50 rounded-lg p-3">
                                <div className="text-xs text-gray-400">Users</div>
                                <div className="text-lg font-bold text-white">1.2K</div>
                              </div>
                              <div className="bg-gray-800/50 rounded-lg p-3">
                                <div className="text-xs text-gray-400">Active</div>
                                <div className="text-lg font-bold text-white">450</div>
                              </div>
                              <div className="bg-gray-800/50 rounded-lg p-3">
                                <div className="text-xs text-gray-400">Growth</div>
                                <div className="text-lg font-bold text-emerald-400">+12%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Carousel Controls */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
              <button
                onClick={prevDashboardSlide}
                className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-black border border-gray-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-gray-300" />
              </button>
              
              {/* Progress Indicator */}
              <div className="flex items-center space-x-2">
                {dashboardSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentDashboardSlide(index);
                      setTimeout(() => setIsAutoPlaying(true), 500);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentDashboardSlide === index ? 'w-10 bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-700 hover:bg-gray-600'}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextDashboardSlide}
                className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-black border border-gray-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-gray-300" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Smartren 1447 H</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Telah dibuka pada hari pertama sekolah di bulan Ramadhan
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">3 Dashboard System</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Setiap peran memiliki dashboard yang dioptimalkan
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Untuk Semua Peran</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Admin, Guru, Siswa - Semua memiliki akses yang sesuai
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;