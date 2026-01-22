import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users, BookOpen, Calendar, Home, School, Award, Heart, Sparkles, Star, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const smartrenActivities = [
    { icon: <BookOpen />, text: 'Kajian Islam & Tadarus' },
    { icon: <Home />, text: 'Shalat Berjamaah' }, // Changed from Mosque to Home
    { icon: <Heart />, text: 'Kegiatan Sosial' },
    { icon: <Award />, text: 'Kompetisi Keagamaan' } // Changed from Trophy to Award
  ];

  const jurusan = ['PPLG', 'TKJT', 'Pemasaran', 'Akuntansi', 'Manajemen Perkantoran'];

  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:via-green-500/10 dark:to-teal-500/10"></div>
      
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-700 dark:text-emerald-300 mb-6">
              <School className="w-4 h-4" />
              <span className="text-sm font-medium">Khusus Siswa Smakzie</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="block">Smartren Ramadhan</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                SMKN 1 Cianjur
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Smartren Ramadhan di Smakzie adalah kegiatan tahunan untuk meningkatkan keimanan dan ketakwaan siswa. 
              Aplikasi MuslimApp akan menjadi teman setia ibadahmu selama program ini.
            </p>
          </div>

          {/* Smartren Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left - About Smartren */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tentang Smartren</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Program Ibadah Ramadhan Smakzie</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Smartren Ramadhan di SMKN 1 Cianjur (Smakzie) merupakan kegiatan keagamaan tahunan 
                  yang diadakan saat bulan Ramadhan untuk meningkatkan keimanan dan ketakwaan siswa.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 dark:text-white">Kegiatan Utama:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {smartrenActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                          {React.cloneElement(activity.icon, { className: 'w-4 h-4 text-emerald-600 dark:text-emerald-400' })}
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{activity.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white">Diikuti oleh semua jurusan:</h4>
                  <div className="flex flex-wrap gap-2">
                    {jurusan.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - App Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Kenapa Harus Pakai MuslimApp?
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: 'Catat Ibadah Otomatis',
                      description: 'Semua ibadah Smartren bisa dicatat langsung di app'
                    },
                    {
                      title: 'Jadwal Shalat Akurat',
                      description: 'Tidak akan ketinggalan waktu shalat selama Smartren'
                    },
                    {
                      title: 'Materi Kajian Lengkap',
                      description: 'Akses materi Smartren dan catatan kajian'
                    },
                    {
                      title: 'Kompetisi Digital',
                      description: 'Ikuti lomba-lomba Smartren melalui aplikasi'
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{benefit.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">1446 H</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Smartren Terakhir</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">30+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Hari Kegiatan</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Siswa Terlibat</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white mb-8"
            >
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 mb-6">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Smartren 1447 H Telah Dibuka!</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Siap Sambut Smartren Ramadhan 1447 H?
                </h3>
                <p className="text-lg opacity-90 mb-8">
                  Download MuslimApp sekarang dan jadilah bagian dari Smartren Ramadhan 
                  yang lebih bermakna di SMKN 1 Cianjur.
                </p>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white text-emerald-700 font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-6 h-6 mr-3" />
                    <div className="text-left">
                      <div className="text-sm opacity-90">Download di</div>
                      <div className="text-lg">App Store</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-emerald-800 text-white font-semibold hover:bg-emerald-900 transition-all shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 20.5V3.5C3 2.91 3.34 2.5 3.5 2.5C3.66 2.5 10 8.33 10 8.33L15 6.33L20 2.5C20.5 2.5 21 3 21 3.5V20.5C21 21 20.5 21.5 20 21.5L15 17.67L10 19.67L3.5 21.5C3.16 21.5 3 21.08 3 20.5Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-sm opacity-90">Download di</div>
                      <div className="text-lg">Google Play</div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Additional Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Star className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Informasi Terbaru</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Smartren Ramadhan 1446 H telah dibuka pada hari pertama sekolah di bulan tersebut. 
                    Pantau media sosial resmi SMK Negeri 1 Cianjur untuk info terbaru.
                  </p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#" className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
                    Instagram Smakzie
                  </a>
                  <a href="#" className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
                    YouTube Channel
                  </a>
                  <a href="#" className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
                    Website Sekolah
                  </a>
                </div>
              </div>
            </div>

            {/* Jurusan Badges */}
            <div className="mt-8">
              <h4 className="text-center font-bold text-gray-900 dark:text-white mb-4">
                Diikuti oleh Seluruh Kompetensi Keahlian:
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {jurusan.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-medium shadow-lg"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;