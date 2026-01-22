import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users, BookOpen, Calendar, Bell, Target } from 'lucide-react';

const UIShowcase = () => {
  const appFeatures = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Jadwal Lengkap',
      description: 'Pantau seluruh jadwal Smartren dengan mudah dan teratur',
      features: ['Jadwal harian', 'Sesi kajian', 'Waktu tadarus']
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Materi Terstruktur',
      description: 'Akses materi kajian dan panduan ibadah dengan sistematis',
      features: ['Materi harian', 'Kumpulan doa', 'Panduan praktis']
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Pengingat Aktif',
      description: 'Tidak ketinggalan kegiatan dengan notifikasi tepat waktu',
      features: ['Pengingat kajian', 'Waktu ibadah', 'Kegiatan khusus']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Kolaborasi Siswa',
      description: 'Interaksi antar siswa dari berbagai jurusan dalam satu platform',
      features: ['Forum diskusi', 'Kelompok belajar', 'Sharing pengalaman']
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Smartren Smakzie 1446 H</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Aplikasi Pendamping <span className="gradient-text">Smartren Ramadhan</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Platform digital untuk mendukung kegiatan Smartren siswa-siswi SMKN 1 Cianjur
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Fitur Aplikasi */}
          <div>
            <div className="space-y-8">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                      {React.cloneElement(feature.icon, { className: 'w-6 h-6 text-white' })}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.features.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300"
                        >
                          <Check className="w-3 h-3 mr-1" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Jurusan yang Terlibat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Untuk Semua Jurusan</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'PPLG', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
                  { name: 'TKJT', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
                  { name: 'Pemasaran', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' },
                  { name: 'Akuntansi', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
                  { name: 'MPLB', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
                  { name: 'Semua Siswa', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' }
                ].map((jurusan) => (
                  <span
                    key={jurusan.name}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${jurusan.color}`}
                  >
                    {jurusan.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mockup Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="phone-frame rounded-[3rem] p-6 max-w-sm mx-auto">
              <div className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-[2.5rem] overflow-hidden h-[600px]">
                {/* App Demo */}
                <div className="p-6">
                  <div className="text-center mb-8">
                    <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Smartren Hari Ini
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Senin, 10 Maret 2025
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 mb-6">
                    <div className="mb-4">
                      <div className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                        Kajian Ramadhan
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        "Menjaga Konsistensi Ibadah di Bulan Ramadhan"
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4 mr-1" />
                        <span>Oleh: Ust. Ahmad Fauzi</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
                        Lihat Materi
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90 transition-opacity text-sm">
                        Absensi Kehadiran
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-800 dark:text-white">Daftar Kegiatan</h4>
                    {[
                      { task: 'Sholat Dhuha Berjamaah', completed: true },
                      { task: 'Tadarus Al-Quran (30 menit)', completed: true },
                      { task: 'Kajian Ramadhan Sesi 1', completed: false },
                      { task: 'Sholat Dzuhur Berjamaah', completed: false },
                      { task: 'Muhasabah Diri', completed: false }
                    ].map((item) => (
                      <div key={item.task} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${item.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 dark:border-gray-600'}`}>
                            {item.completed && (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className={`font-medium text-sm ${item.completed ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-700 dark:text-gray-300'}`}>
                            {item.task}
                          </span>
                        </div>
                        {item.completed && (
                          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                            Selesai
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Progress Hari Ini</span>
                      <span className="font-medium text-emerald-600 dark:text-emerald-400">40%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 opacity-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UIShowcase;