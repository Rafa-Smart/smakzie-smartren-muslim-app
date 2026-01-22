import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Book, Clock, Heart, Compass, Moon, Calendar, Search, Bookmark, Target, CheckCircle, Activity, Users, Star, TrendingUp } from 'lucide-react';

const InteractiveDemo = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  
  const screens = [
    {
      id: 0,
      title: 'Al-Quran Digital',
      icon: <Book className="w-6 h-6" />,
      color: 'from-emerald-500 to-green-500',
      description: 'Baca Quran dengan terjemahan',
      content: (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Al-Quran Digital</h2>
            <div className="mt-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari Surat (Contoh: Yasin)..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Surah List */}
          <div className="flex-1 overflow-y-auto p-3">
            <div className="space-y-2">
              {[
                { number: '1', arabic: 'الفاتحة', name: 'Al-Fatihah', ayat: '7 Ayat', meaning: 'Pembukaan' },
                { number: '2', arabic: 'البقرة', name: 'Al-Baqarah', ayat: '286 Ayat', meaning: 'Sapi' },
                { number: '3', arabic: 'آل عمران', name: "Ali 'Imran", ayat: '200 Ayat', meaning: 'Keluarga Imran' },
                { number: '4', arabic: 'النساء', name: "An-Nisa'", ayat: '176 Ayat', meaning: 'Wanita' },
                { number: '5', arabic: 'المائدة', name: "Al-Ma'idah", ayat: '120 Ayat', meaning: 'Hidangan' }
              ].map((surah) => (
                <div
                  key={surah.number}
                  className="flex items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mr-2">
                    <span className="text-xs text-white font-bold">{surah.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{surah.name}</h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{surah.ayat}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-arabic text-gray-700 dark:text-gray-300">{surah.arabic}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{surah.meaning}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between">
              <button className="px-3 py-1 text-sm rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Terakhir Dibaca
              </button>
              <button className="px-3 py-1 text-sm rounded-md bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:opacity-90 transition-opacity">
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: 'Jadwal Shalat',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Waktu shalat tepat waktu',
      content: (
        <div className="h-full flex flex-col">
          {/* Time Header */}
          <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
            <div className="text-3xl font-bold mb-1">22.01</div>
            <div className="text-md font-semibold">Jadwal Shalat</div>
          </div>

          {/* Location & Date */}
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <h3 className="font-bold text-gray-800 dark:text-white">KAB. CIANJUR</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Kamis, 22/01/2026</p>
            </div>
          </div>

          {/* Prayer Times */}
          <div className="flex-1 p-3">
            <div className="space-y-3">
              {[
                { name: 'Subuh', time: '04:29', passed: false },
                { name: 'Dzuhur', time: '12:06', passed: true },
                { name: 'Ashar', time: '15:29', passed: true },
                { name: 'Maghrib', time: '18:20', current: true },
                { name: 'Isya', time: '19:33', passed: false }
              ].map((prayer) => (
                <div
                  key={prayer.name}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    prayer.current
                      ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800'
                      : prayer.passed
                      ? 'bg-gray-50/50 dark:bg-gray-800/30'
                      : 'bg-white dark:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      prayer.current ? 'bg-blue-500' : 
                      prayer.passed ? 'bg-gray-400' : 'bg-green-500'
                    }`}></div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{prayer.name}</div>
                      {prayer.current && (
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Shalat Berikutnya</div>
                      )}
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 dark:text-gray-200">{prayer.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-2">
              <button className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-center">
                <div className="text-xs font-medium">Pengaturan</div>
              </button>
              <button className="p-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 transition-opacity text-center">
                <div className="text-xs font-medium">Notifikasi</div>
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Kumpulan Doa',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Doa harian dan zikir',
      content: (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Kumpulan Doa</h2>
            <div className="mt-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari doa..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Doa List */}
          <div className="flex-1 overflow-y-auto p-3">
            <div className="space-y-4">
              {/* Doa Sebelum Tidur */}
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-gray-800 dark:text-white">Doa sebelum tidur</h3>
                  <Bookmark className="w-4 h-4 text-purple-500" />
                </div>
                <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
              </div>

              {/* Doa Bangun Tidur */}
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-gray-800 dark:text-white">Doa bangun tidur</h3>
                  <Bookmark className="w-4 h-4 text-purple-500" />
                </div>
                <div className="h-px bg-purple-200 dark:bg-purple-800 my-2"></div>
                <div className="text-right mb-3">
                  <div className="text-lg font-arabic leading-relaxed mb-2">
                    الْحَمْدُ لِلَّهِ الَّذِي
                   أَحْيَانَا بَعْدَ مَا
                 أَمَاتَنَا وَإِلَيْهِ النُّشُورُ
                  </div>
                  <div className="text-xs text-gray-700 dark:text-gray-300 mb-1">
                    <em>Alhamdu lillahil ladzii ahyanaa ba'da maa amaatanaa wa ilaihin nusyuur</em>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Segala puji bagi Allah yang telah menghidupkan kami sesudah kami mati (membangunkan dari tidur) dan hanya kepada-Nya kami dikembalikan
                  </div>
                </div>
              </div>

              {/* Doa Masuk Kamar Mandi */}
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-gray-800 dark:text-white">Doa masuk kamar mandi</h3>
                  <Bookmark className="w-4 h-4 text-purple-500" />
                </div>
                <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex overflow-x-auto space-x-2 pb-1">
              {['Pagi', 'Petang', 'Makan', 'Perjalanan', 'Semua'].map((category) => (
                <button
                  key={category}
                  className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap text-xs"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Arah Kiblat',
      icon: <Compass className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-500',
      description: 'Penunjuk arah shalat',
      content: (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 text-center">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Arah Kiblat</h2>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cianjur</div>
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mt-1">153°</div>
          </div>

          {/* Compass */}
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="relative w-48 h-48">
              {/* Compass Outer Circle */}
              <div className="absolute inset-0 rounded-full border-3 border-gray-300 dark:border-gray-600"></div>
              
              {/* Directions */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                {/* North */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-center">
                    <div className="w-0 h-0 border-l-6 border-r-6 border-b-10 border-b-red-500 border-transparent"></div>
                    <div className="text-xs font-bold mt-1">N</div>
                  </div>
                </div>
                
                {/* South */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="text-center">
                    <div className="text-xs font-bold mb-1">S</div>
                    <div className="w-0 h-0 border-l-6 border-r-6 border-t-10 border-t-gray-500 border-transparent"></div>
                  </div>
                </div>
                
                {/* East */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="text-center">
                    <div className="text-xs font-bold">M</div>
                  </div>
                </div>
                
                {/* West */}
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-center">
                    <div className="text-xs font-bold">B</div>
                  </div>
                </div>
                
                {/* Kaaba Icon at Qibla Direction */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <span className="text-white text-sm">🕋</span>
                  </div>
                </div>
              </div>
              
              {/* Center Point */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="p-4 text-center border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Putar HP sampai ikon Ka'bah sejalan dengan panah atas
            </p>
            <button className="px-4 py-2 text-sm rounded-md bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:opacity-90 transition-opacity">
              Kalibrasi Ulang
            </button>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Pola Tidur',
      icon: <Moon className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      description: 'Monitor waktu tidur',
      content: (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <h2 className="text-lg font-bold mb-1">Pola Tidur</h2>
            <div className="text-sm opacity-90">Selamat Beraktivitas!</div>
            <div className="text-3xl font-bold mt-1">22:02:57</div>
          </div>

          {/* Start Sleep Button */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity">
              MULAI TIDUR
            </button>
          </div>

          {/* Sleep Data */}
          <div className="flex-1 p-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                Belum ada data tidur
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                <p className="mb-1">Mulai tidur dengan menekan tombol 'MULAI TIDUR' di atas</p>
                <p>Data tidur akan tercatat dan dapat Anda lihat riwayatnya di sini</p>
              </div>
              
              {/* Sleep Stats Placeholder */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <div className="text-lg font-bold text-gray-800 dark:text-white">--:--</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Waktu Tidur</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <div className="text-lg font-bold text-gray-800 dark:text-white">--:--</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Waktu Bangun</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <div className="text-lg font-bold text-gray-800 dark:text-white">-- jam</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Durasi</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-600 dark:text-gray-400">
              💡 <span className="font-medium">Tips:</span> Tidur yang cukup membantu kesehatan selama Ramadan
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: 'Smartren Ramadhan',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-teal-500 to-emerald-500',
      description: 'Jadwal kegiatan Ramadhan',
      content: (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Jadwal Smartren Ramadhan</h2>
            <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              Ramadhan 1447 H / 2026 • 6 Februari - 7 Maret 2026
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">14 hari memiliki jadwal</span>
              <div className="px-2 py-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs">
                Hari 1
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <div className="text-center mb-3">
              <div className="font-bold text-gray-800 dark:text-white">Februari 2026</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Bulan Ramadhan</div>
            </div>
            
            {/* Week Days */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {['M', 'S', 'S', 'R', 'K', 'J', 'S'].map((day, i) => (
                <div key={i} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {[
                { day: 26, ramadan: false },
                { day: 27, ramadan: false },
                { day: 28, ramadan: false },
                { day: 29, ramadan: false },
                { day: 30, ramadan: false },
                { day: 31, ramadan: false },
                { day: 1, ramadan: false },
                { day: 2, ramadan: true, dayNum: 4 },
                { day: 3, ramadan: true, dayNum: 5 },
                { day: 4, ramadan: true, dayNum: 6 },
                { day: 5, ramadan: true, dayNum: 7 },
                { day: 6, ramadan: true, dayNum: 8 },
                { day: 7, ramadan: true, dayNum: 9 },
                { day: 8, ramadan: true, dayNum: 10 },
                { day: 9, ramadan: true, dayNum: 11 },
                { day: 10, ramadan: true, dayNum: 12 },
                { day: 11, ramadan: true, dayNum: 13 },
                { day: 12, ramadan: true, dayNum: 14 },
                { day: 13, ramadan: true, dayNum: 15 },
                { day: 14, ramadan: true, dayNum: 16 },
                { day: 15, ramadan: true, dayNum: 17 },
                { day: 16, ramadan: true, dayNum: 18 },
                { day: 17, ramadan: true, dayNum: 19 },
                { day: 18, ramadan: true, dayNum: 20 },
                { day: 19, ramadan: true, dayNum: 21 },
                { day: 20, ramadan: true, dayNum: 22 },
                { day: 21, ramadan: true, dayNum: 23 },
                { day: 22, ramadan: true, dayNum: 1 }
              ].map((date, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-md flex flex-col items-center justify-center text-xs ${
                    date.ramadan
                      ? 'bg-gradient-to-br from-teal-500 to-emerald-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  <span className={`font-medium ${date.ramadan ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                    {date.day}
                  </span>
                  {date.ramadan && date.dayNum && (
                    <span className="text-[10px] opacity-90">Hari {date.dayNum}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Schedule for Today */}
          <div className="flex-1 overflow-y-auto p-3">
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-800 dark:text-white">Sabtu, 7 Februari 2026</h3>
                <div className="text-xs text-gray-600 dark:text-gray-400">19 Kegiatan</div>
              </div>
              <div className="flex space-x-2 mt-1">
                <button className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                  Kemarin
                </button>
                <button className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                  Besok
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {/* Activity 1 */}
              <div className="p-2 rounded-lg bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 border border-teal-200 dark:border-teal-800">
                <div className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">03:30 - 04:00</div>
                <div className="flex items-center mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-1.5"></div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Ibadah</span>
                </div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-1">Sahur & Ibadah Malam</h4>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-0.5">
                  <div>Ustadz Abdullah</div>
                  <div>Aula Utama</div>
                  <div>Kegiatan ibadah dan spiritual</div>
                </div>
              </div>

              {/* Activity 2 */}
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">04:00 - 04:20</div>
                <div className="flex items-center mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-1.5"></div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Ibadah</span>
                </div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-1">Shalat Subuh Berjamaah</h4>
                <div className="text-xs text-gray-600 dark:text-gray-400">Musholla Al-Ikhlas</div>
              </div>
            </div>
          </div>


        </div>
      )
    },
    {
      id: 6,
      title: 'Smartren 2026',
      icon: <Target className="w-6 h-6" />,
      color: 'from-rose-500 to-pink-500',
      description: 'Persiapan Ramadhan 1447 H',
      content: (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
            <div className="text-3xl font-bold mb-1">22.40</div>
            <div className="text-lg font-bold">SMARTREN 2026</div>
          </div>

          {/* Countdown */}
          <div className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
            <div className="mb-3">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">MENUJU RAMADHAN 1447 H</div>
              <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">27 Hari Lagi</div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-2">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"
                  style={{ width: '45%' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>Hari ke-12</span>
                <span>40%</span>
                <span>Hari ke-27</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {/* Jadwal Kegiatan */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border border-rose-200 dark:border-rose-800">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-1">Jadwal Kegiatan</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Rundown aktivitas Smartren Senin - Jumat.
                    </p>
                    <div className="flex items-center text-xs text-rose-600 dark:text-rose-400">
                      <Activity className="w-3 h-3 mr-1" />
                      <span>19 kegiatan hari ini</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laporan Puasa */}
              <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-1">Laporan Puasa</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Jurnal puasa harian Ramadhan.
                    </p>
                    <div className="flex items-center text-xs text-emerald-600 dark:text-emerald-400">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      <span>12/30 hari puasa</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laporan Shalat */}
              <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-1">Laporan Shalat</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Checklist shalat wajib & sunnah.
                    </p>
                    <div className="flex items-center text-xs text-blue-600 dark:text-blue-400">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      <span>95% shalat tepat waktu</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laporan Tadarus */}
              <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                    <Book className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-1">Laporan Tadarus</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Catat perkembangan mengaji harianmu.
                    </p>
                    <div className="flex items-center text-xs text-purple-600 dark:text-purple-400">
                      <Users className="w-3 h-3 mr-1" />
                      <span>1 juz per hari rata-rata</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="text-lg font-bold text-rose-600 dark:text-rose-400">12</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Hari Aktif</div>
              </div>
              <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">95%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Kehadiran</div>
              </div>
              <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">1.2K</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Poin Ibadah</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

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
            Jelajahi <span className="gradient-text">Fitur Lengkap</span> MuslimApp
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Temukan semua alat yang Anda butuhkan untuk Ramadan yang lebih bermakna
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Screen Navigation */}
          <div className="space-y-3">
            {screens.map((screen) => (
              <motion.button
                key={screen.id}
                onClick={() => setActiveScreen(screen.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-3 rounded-lg text-left transition-all ${
                  activeScreen === screen.id
                    ? `bg-gradient-to-r ${screen.color} text-white shadow-xl`
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-md ${
                    activeScreen === screen.id
                      ? 'bg-white/20'
                      : `bg-gradient-to-r ${screen.color}`
                  }`}>
                    {React.cloneElement(screen.icon, {
                      className: `w-4 h-4 ${activeScreen === screen.id ? 'text-white' : 'text-white'}`
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold text-sm ${
                        activeScreen === screen.id ? 'text-white' : 'text-gray-800 dark:text-white'
                      }`}>
                        {screen.title}
                      </h3>
                      {activeScreen === screen.id && (
                        <div className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-medium">
                          Aktif
                        </div>
                      )}
                    </div>
                    <p className={`text-xs mt-0.5 ${
                      activeScreen === screen.id ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {screen.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Phone Mockup with Screen */}
          <div className="relative">
            <div className="phone-frame rounded-[2.5rem] p-4 max-w-sm mx-auto">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black rounded-b-lg z-20"></div>
              
              {/* Dynamic Screen Content */}
              <div className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-[2rem] overflow-hidden h-[600px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    {screens[activeScreen].content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -left-4 -right-4 flex justify-between transform -translate-y-1/2">
              <button
                onClick={() => setActiveScreen((prev) => (prev === 0 ? screens.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveScreen((prev) => (prev === screens.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;