import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  School,
  Users,
  Target,
  Award,
  ChevronRight,
  Shield,
  UserCheck,
  BarChart,
  Download,
  CheckCircle,
  ChevronLeft,
  Smartphone,
  Globe,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [currentDashboardSlide, setCurrentDashboardSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const navigate = useNavigate();

  // Daftar gambar mockup aplikasi
  const appScreens = [
    {
      id: 1,
      title: "Dashboard Utama",
      description: "Tampilan utama dengan semua fitur penting",
      image: "/assets/images/dashboard-siswa.png",
      badge: "Siswa",
      color: "emerald"
    },
    {
      id: 2,
      title: "Dashboard Guru",
      description: "Monitoring dan manajemen kelas",
      image: "/assets/images/dashboard-guru.png",
      badge: "Guru",
      color: "blue"
    },
 
  ];

  const dashboardSlides = [
    {
      id: 1,
      title: "Dashboard Admin Utama",
      subtitle: "Super Admin System",
      description:
        "Kelola semua user, data master, dan generate laporan komprehensif untuk seluruh sistem",
      features: [
        "User Management",
        "Data Master Management",
        "Report Generation",
        "System Configuration",
      ],
      stats: [
        { label: "Total Users", value: "2" },
        { label: "Active Sessions", value: "320" },
        { label: "Storage Used", value: "2.4 GB" },
      ],
      color: "from-purple-500 to-pink-500",
      icon: Shield,
      adminType: "SUPER ADMIN",
    },
    {
      id: 2,
      title: "Dashboard Guru/Pembina",
      subtitle: "Class Monitoring System",
      description:
        "Monitor perkembangan siswa, input nilai, dan berikan feedback secara real-time",
      features: [
        "Student Progress Tracking",
        "Grade Management",
        "Attendance Monitoring",
        "Broadcast Announcements",
      ],
      stats: [
        { label: "Total Students", value: "100+" },
        { label: "Active Classes", value: "42" },
        { label: "Avg. Progress", value: "100%" },
      ],
      color: "from-blue-500 to-cyan-500",
      icon: BarChart,
      adminType: "GURU/PEMBINA",
    },
    {
      id: 3,
      title: "Dashboard Siswa",
      subtitle: "Personal Progress Tracker",
      description:
        "Pantau progress ibadah pribadi, target hafalan, dan pencapaian selama Smartren",
      features: [
        "Ibadah Progress",
        "Target & Goals",
        "Achievement Badges",
        "Personal Reports",
      ],
      stats: [
        { label: "Daily Progress", value: "100%" },
        { label: "Streak Days", value: "14" },
        { label: "Total Points", value: "1,240" },
      ],
      color: "from-emerald-500 to-green-500",
      icon: UserCheck,
      adminType: "SISWA",
    },
  ];

  // Auto-play untuk gambar aplikasi
  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isHoveringImage) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % appScreens.length);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, appScreens.length, isHoveringImage]);

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

  const handleImageError = (e, title) => {
    console.error("Failed to load image:", e.target.src);
    e.target.src = `https://via.placeholder.com/300x600/1a1a2e/ffffff?text=${encodeURIComponent(title || "App Preview")}`;
  };

  const handleImageLoad = (imgSrc) => {
    console.log("Image loaded successfully:", imgSrc);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % appScreens.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + appScreens.length) % appScreens.length);
  };

  const nextDashboardSlide = () => {
    setCurrentDashboardSlide((prev) => (prev + 1) % dashboardSlides.length);
  };

  const prevDashboardSlide = () => {
    setCurrentDashboardSlide((prev) => (prev - 1 + dashboardSlides.length) % dashboardSlides.length);
  };

  const goToDownloadPage = () => {
    navigate("/download");
  };

  const goToFeaturesPage = () => {
    navigate("/features");
  };

  const getColorClass = (color) => {
    const colors = {
      emerald: "bg-emerald-500 text-white",
      blue: "bg-blue-500 text-white",
      purple: "bg-purple-500 text-white",
      green: "bg-green-500 text-white"
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px'
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
              <School className="w-4 h-4" />
              <span className="text-sm font-medium">SMKN 1 Cianjur</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-gray-900 dark:text-white">Aplikasi Resmi</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mt-2">
                Smartren Ramadhan
              </span>
              <span className="block text-gray-600 dark:text-gray-300 text-2xl md:text-3xl mt-4">
                Persiapan Ramadan 1447 H
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              MuslimApp adalah platform digital lengkap untuk mendukung kegiatan Smartren Ramadhan. 
              Dilengkapi dengan berbagai fitur untuk siswa, guru, dan admin dalam satu aplikasi terintegrasi.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Dashboard</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Fitur</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Gratis</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToDownloadPage}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  <span>Download Aplikasi</span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToFeaturesPage}
                className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 font-semibold rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Lihat Fitur</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Device Mockup */}
            <div className="relative mx-auto max-w-xs">
              {/* Phone Frame */}
              <div 
                className="relative rounded-[2rem] overflow-hidden "
                onMouseEnter={() => setIsHoveringImage(true)}
                onMouseLeave={() => setIsHoveringImage(false)}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6  "></div>
                
                {/* Screen Content */}
                <div className="pt-6 pb-8 px-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <div className="relative aspect-[9/19] rounded-xl overflow-hidden">
                        <img
                          src={appScreens[currentImageIndex].image}
                          alt={appScreens[currentImageIndex].title}
                          className="w-full h-full object-cover"
                          onError={(e) => handleImageError(e, appScreens[currentImageIndex].title)}
                          onLoad={() => handleImageLoad(appScreens[currentImageIndex].image)}
                        />
                        
                        {/* Overlay Badge */}
                        <div className="absolute top-3 right-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getColorClass(appScreens[currentImageIndex].color)}`}>
                            {appScreens[currentImageIndex].badge}
                          </span>
                        </div>
                        
        
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevImage}
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
                
                {/* Indicators */}
                <div className="flex items-center gap-2">
                  {appScreens.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all ${
                        currentImageIndex === index 
                          ? 'w-8 h-2 bg-emerald-500 rounded-full' 
                          : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextImage}
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24"
        >
          

          {/* Carousel */}
          <div className="relative">
          
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg">
              <AnimatePresence mode="wait">
                {dashboardSlides.map((slide, index) => {
                  if (index !== currentDashboardSlide) return null;
                  
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
                        {/* Content */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${slide.color} flex items-center justify-center`}>
                              <slide.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{slide.subtitle}</div>
                              <div className="text-xl font-bold text-gray-900 dark:text-white">{slide.adminType}</div>
                            </div>
                          </div>

                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                            {slide.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-300">
                            {slide.description}
                          </p>

                          <div className="grid grid-cols-2 gap-3">
                            {slide.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Stats Preview */}
                        <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {slide.stats.map((stat, idx) => (
                              <div key={idx} className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Mini Chart */}
                          <div className="h-32 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4">
                            <div className="flex items-end justify-between h-full gap-1">
                              {[65, 80, 45, 90, 70, 85, 60].map((height, idx) => (
                                <div key={idx} className="flex-1 flex flex-col items-center">
                                  <div
                                    className={`w-3 rounded-t-lg ${idx === 3 ? 'bg-gradient-to-t from-emerald-500 to-green-400' : 'bg-gray-300 dark:bg-gray-600'}`}
                                    style={{ height: `${height}%` }}
                                  />
                                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {['S', 'S', 'R', 'K', 'J', 'S', 'M'][idx]}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevDashboardSlide}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              
              <div className="flex items-center gap-2">
                {dashboardSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDashboardSlide(index)}
                    className={`transition-all ${
                      currentDashboardSlide === index 
                        ? 'w-8 h-2 bg-blue-500 rounded-full' 
                        : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextDashboardSlide}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Smartren 1447 H</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Program resmi sekolah untuk persiapan Ramadhan
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">3 Dashboard System</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dashboard khusus untuk Admin, Guru, dan Siswa
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Untuk Semua</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Admin, Guru, dan Siswa memiliki akses sesuai kebutuhan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;