import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // atau gunakan useNavigate jika tidak pakai router
import {
  Home,
  AlertTriangle,
  Search,
  Compass,
  ArrowLeft,
  Frown,
  MapPin,
  Route,
  Sparkles,
} from "lucide-react";

const Anjay = () => {
  return (
    <section className="py-12 px-4 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl">
        {/* Badge atas */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">404 - Halaman Hilang</span>
          </div>
        </motion.div>

        {/* Konten Utama */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          {/* Angka 404 dengan gradient */}
          <h1 className="text-8xl sm:text-9xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
              404
            </span>
          </h1>

          {/* Pesan Utama */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Halaman Tidak Ditemukan
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Sepertinya halaman yang Anda cari tersesat di alam digital. 
            Mungkin URL-nya salah atau halaman tersebut telah dipindahkan.
          </p>

          {/* Ilustrasi / Ikon Bergerak */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center gap-6 mb-10"
          >
            <div className="p-4 rounded-2xl bg-amber-100 dark:bg-amber-900/20">
              <Compass className="w-12 h-12 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-900/20">
              <MapPin className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="p-4 rounded-2xl bg-blue-100 dark:bg-blue-900/20">
              <Route className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </motion.div>

          {/* Saran dan Tombol */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-medium hover:shadow-lg transform transition hover:scale-105"
            >
              <Home className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Halaman Sebelumnya
            </button>
          </div>

          {/* Card Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1 flex items-center">
                    Tips Pencarian
                    <Sparkles className="w-4 h-4 ml-2 text-emerald-500" />
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Periksa kembali URL Anda atau gunakan navigasi di atas untuk menemukan konten yang Anda butuhkan. Tim pengembang Ziekir+ selalu siap membantu!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Anjay;