import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Book, Calendar, Home, Plus, CheckCircle, Clock, MapPin, School, Users, Target, Award, ChevronRight, Link } from 'lucide-react';

const HeroSection = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [showPrayerModal, setShowPrayerModal] = useState(false);

  const jurusan = ['PPLG', 'TKJT', 'Pemasaran', 'Akuntansi', 'Manajemen Perkantoran'];

  const handleLogIbadah = () => {
    alert('Catat ibadahmu untuk Smartren Ramadhan 1447 H!');
  };

  const handlePrayerNotification = () => {
    setShowPrayerModal(true);
    setTimeout(() => setShowPrayerModal(false), 3000);
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
              Catat ibadah, pantau jadwal, dan tingkatkan kualitas ibadahmu selama Ramadhan bersama aplikasi ini.
            </p>

            {/* Smartren Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Tujuan Smartren</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Meningkatkan pemahaman agama dan akhlak siswa di bulan Ramadhan
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Kegiatan Utama</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Kajian Islam, tadarus Al-Qur'an, shalat berjamaah, dan kegiatan sosial
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Untuk Semua Jurusan</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {jurusan.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
              href='/download'
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
                </svg>
                Download Aplikasi
              </a>
              <a href='/features'
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all"
              >
                Lihat Fitur Lengkap
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Right - Phone Mockup dengan Gambar Saja */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="phone-frame rounded-[2.5rem] p-4 max-w-sm mx-auto border-8 border-gray-900 dark:border-gray-100 shadow-2xl">

              
              {/* Dynamic Screen Content - Gambar Hero */}
              <div className="relative bg-black rounded-[2rem] overflow-hidden h-[600px]">
                <div className="h-full flex flex-col">
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
                      src="/images/hero-screen.png" // Gambar hero utama
                      alt="Tampilan Utama MuslimApp"
                      className="w-full h-full object-contain"
                      style={{ 
                        objectPosition: 'center top',
                        maxHeight: 'calc(100% - 50px)'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/300x550/1a1a2e/ffffff?text=Tampilan+Utama+MuslimApp`;
                      }}
                    />

                  </div>
                  
  
 
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-900/30 dark:bg-gray-100/30 rounded-full"></div>
              </div>
            </div>

 
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Smartren 1446 H</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Telah dibuka pada hari pertama sekolah di bulan Ramadhan
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Tujuan Program</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Meningkatkan keimanan dan ketakwaan siswa Smakzie
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Untuk Semua Siswa</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Semua jurusan di SMKN 1 Cianjur berpartisipasi
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;