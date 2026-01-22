import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Clock, Calendar, Target, 
  Trophy, BarChart, Users, Shield,
  Zap, Heart, CheckCircle, Star,
  Compass, Moon, TrendingUp, FileText
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Al-Quran Lengkap',
      description: 'Baca Al-Quran dengan terjemahan bahasa Indonesia untuk pemahaman lebih baik',
      gradient: 'from-emerald-500 to-green-500',
      stats: '114 Surah'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Jadwal Sholat',
      description: 'Jadwal sholat akurat khusus untuk wilayah Cianjur dan sekitarnya',
      gradient: 'from-blue-500 to-cyan-500',
      stats: 'Presisi Tinggi'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Kumpulan Doa',
      description: 'Doa harian lengkap untuk berbagai aktivitas sehari-hari',
      gradient: 'from-purple-500 to-pink-500',
      stats: '100+ Doa'
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Arah Kiblat',
      description: 'Penunjuk arah kiblat real-time dengan teknologi terkini',
      gradient: 'from-amber-500 to-orange-500',
      stats: 'Realtime'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Jadwal Smartren',
      description: 'Jadwal lengkap kegiatan Smartren selama Ramadhan',
      gradient: 'from-red-500 to-rose-500',
      stats: 'Terupdate'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Laporan Ibadah',
      description: 'Pantau laporan puasa, sholat, tadarus, dan hafalan harian',
      gradient: 'from-indigo-500 to-blue-500',
      stats: 'Detail Lengkap'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Leaderboard',
      description: 'Peringkat prestasi ibadah siswa dari semua jurusan',
      gradient: 'from-yellow-500 to-amber-500',
      stats: 'Kompetitif'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Target Ibadah',
      description: 'Atur target ibadah harian dan pantau pencapaiannya',
      gradient: 'from-teal-500 to-emerald-500',
      stats: 'Terukur'
    }
  ];

  const additionalFeatures = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Dashboard Siswa',
      description: 'Pantau progress ibadah pribadi dengan grafik interaktif'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Dashboard Guru',
      description: 'Monitor perkembangan seluruh siswa secara real-time'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Dashboard Admin',
      description: 'Kelola data dan laporan seluruh peserta Smartren'
    }
  ];

  const stats = [
    { icon: <Users />, value: '1.200+', label: 'Siswa Aktif' },
    { icon: <BookOpen />, value: '30+', label: 'Kegiatan' },
    { icon: <Star />, value: '100%', label: 'Gratis' },
    { icon: <CheckCircle />, value: '24/7', label: 'Akses' }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(feature.icon, { className: 'w-7 h-7 text-white' })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {feature.stats}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 transition-colors">
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Fitur Tambahan untuk <span className="text-emerald-600 dark:text-emerald-400">Smartren Optimal</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    {React.cloneElement(feature.icon, { className: 'w-6 h-6 text-emerald-600 dark:text-emerald-400' })}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-2xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Catatan Infaq',
                'Pantau Pola Tidur',
                'Laporan Ceramah',
                'Hafalan Al-Quran',
                'Tadarus Harian',
                'Buku Saku Digital',
                'Notifikasi Kegiatan',
                'Forum Diskusi'
              ].map((item, index) => (
                <div key={item} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Tanpa Iklan</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Fokus beribadah tanpa gangguan iklan
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 mb-4 border border-emerald-200 dark:border-emerald-700">
                <Moon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Mode Malam</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tampilan nyaman untuk mata di malam hari
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 mb-4 border border-emerald-200 dark:border-emerald-700">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Update Rutin</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Pembaruan fitur dan konten secara berkala
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;