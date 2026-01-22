import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Book, Calendar, Home, Plus, CheckCircle, Clock, MapPin, School, Users, Target, Award, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [showPrayerModal, setShowPrayerModal] = useState(false);
  const [prayerTimes] = useState([
    { name: 'Subuh', time: '04:29', passed: false, next: true },
    { name: 'Dzuhur', time: '12:06', passed: false },
    { name: 'Ashar', time: '15:29', passed: false },
    { name: 'Maghrib', time: '18:20', passed: false },
    { name: 'Isha', time: '19:33', passed: false }
  ]);

  const handleLogIbadah = () => {
    alert('Catat ibadahmu untuk Smartren Ramadhan 1447 H!');
  };

  const handlePrayerNotification = () => {
    setShowPrayerModal(true);
    setTimeout(() => setShowPrayerModal(false), 3000);
  };

  const jurusan = ['PPLG', 'TKJT', 'Pemasaran', 'Akuntansi', 'Manajemen Perkantoran'];

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
                href="#cta"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
                </svg>
                Download Aplikasi
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all"
              >
                Lihat Fitur Lengkap
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="phone-frame rounded-[2.5rem] p-4 max-w-sm mx-auto">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black rounded-b-lg z-20"></div>
              
              {/* Screen Content - PERSIS SEPERTI GAMBAR */}
              <div className="relative bg-gradient-to-b from-emerald-700 via-green-600 to-emerald-800 rounded-[2rem] overflow-hidden h-[600px]">
                
                {/* Status Bar */}
                <div className="pt-2 px-4 flex justify-between items-center text-white text-xs">
                  <div>22:12</div>
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-3 bg-white"></div>
                    <div className="w-1 h-3 bg-white"></div>
                    <div className="w-1 h-3 bg-white"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="px-6 pt-4">
                  <div className="text-white mb-6">
                    <div className="text-sm opacity-90">Assalamualaikum,</div>
                    <div className="text-xl font-bold">PUTRI MAULIDIA YUSUF</div>
                    <div className="text-xs opacity-80 mt-1">Siswa PPLG - Smakzie</div>
                  </div>

                  {/* Prayer Notification Card */}
                  <div 
                    className="bg-white rounded-2xl p-4 mb-6 shadow-lg relative overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={handlePrayerNotification}
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="flex items-start space-x-3 relative z-10">
                      <div className="p-2 rounded-full bg-emerald-100">
                        <Bell className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">🔔 MENJELANG</div>
                        <div className="flex items-baseline justify-between">
                          <div>
                            <div className="text-lg font-bold text-gray-800">Subuh</div>
                            <div className="flex items-center space-x-1 text-sm text-gray-600">
                              <Clock className="w-3 h-3" />
                              <span>04:29</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <MapPin className="w-3 h-3" />
                            <span>KAB. CIANJUR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Countdown Bar */}
                    <div className="mt-3">
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500" style={{ width: '65%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>4 jam 17 menit lagi</span>
                        <span>05:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content - SMARTREN */}
                <div className="px-6">
                  <div className="text-center mb-8">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-2">
                      SMARTREN 2026
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Catat Ibadahmu Disini!</h2>
                    
                    {/* Ibadah Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                        <div className="text-white text-xs mb-1">Shalat</div>
                        <div className="text-xl font-bold text-white">5/5</div>
                        <div className="h-1 bg-white/20 rounded-full mt-1">
                          <div className="h-full bg-emerald-300 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                        <div className="text-white text-xs mb-1">Quran</div>
                        <div className="text-xl font-bold text-white">1/30</div>
                        <div className="h-1 bg-white/20 rounded-full mt-1">
                          <div className="h-full bg-emerald-300 rounded-full" style={{ width: '3%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                        <div className="text-white text-xs mb-1">Puasa</div>
                        <div className="text-xl font-bold text-white">12/30</div>
                        <div className="h-1 bg-white/20 rounded-full mt-1">
                          <div className="h-full bg-emerald-300 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Log Ibadah Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleLogIbadah}
                      className="w-full py-3 rounded-xl bg-white text-emerald-700 font-bold text-lg shadow-lg hover:shadow-xl transition-shadow mb-6"
                    >
                      <Plus className="w-5 h-5 inline mr-2" />
                      Catat Ibadah Hari Ini
                    </motion.button>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { icon: <Book className="w-6 h-6" />, label: 'Al-Quran', color: 'from-blue-500 to-cyan-500' },
                      { icon: <Calendar className="w-6 h-6" />, label: 'Jadwal', color: 'from-purple-500 to-pink-500' },
                      { icon: <Home className="w-6 h-6" />, label: 'Home', color: 'from-emerald-500 to-green-500', active: true }
                    ].map((action) => (
                      <motion.button
                        key={action.label}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex flex-col items-center p-3 rounded-xl ${
                          action.active 
                            ? 'bg-white shadow-lg' 
                            : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                        } transition-colors`}
                        onClick={() => setActiveMenu(action.label)}
                      >
                        <div className={`p-2 rounded-lg ${
                          action.active 
                            ? `bg-gradient-to-r ${action.color}` 
                            : 'bg-white/20'
                        }`}>
                          {React.cloneElement(action.icon, {
                            className: `w-5 h-5 ${action.active ? 'text-white' : 'text-white'}`
                          })}
                        </div>
                        <span className={`mt-2 text-sm font-medium ${
                          action.active ? 'text-emerald-700' : 'text-white'
                        }`}>
                          {action.label}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Today's Prayer Times */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-white font-medium">Waktu Shalat Hari Ini</div>
                      <div className="text-xs text-white/70">KAB. CIANJUR</div>
                    </div>
                    <div className="space-y-2">
                      {prayerTimes.map((prayer) => (
                        <div key={prayer.name} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${
                              prayer.next ? 'bg-emerald-300 animate-pulse' : 'bg-white/50'
                            }`}></div>
                            <span className={`text-sm ${
                              prayer.next ? 'text-emerald-300 font-semibold' : 'text-white/90'
                            }`}>
                              {prayer.name}
                            </span>
                          </div>
                          <span className={`font-mono ${
                            prayer.next ? 'text-emerald-300 font-bold' : 'text-white/80'
                          }`}>
                            {prayer.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Prayer Modal */}
                {showPrayerModal && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/70 flex items-center justify-center z-30"
                  >
                    <div className="bg-white rounded-2xl p-6 mx-4">
                      <div className="text-center">
                        <Bell className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Waktu Subuh Menjelang!</h3>
                        <p className="text-gray-600 mb-4">
                          Subuh dimulai pukul <span className="font-bold">04:29</span>
                        </p>
                        <div className="text-sm text-gray-500">
                          Siapkan diri untuk shalat Subuh berjamaah di Smakzie
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-green-400 opacity-10 animate-pulse-slow"></div>
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 opacity-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
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