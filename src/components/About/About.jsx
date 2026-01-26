import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Code,
  Award,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Heart,
  Star,
  Zap,
  Target,
  Calendar,
  Clock,
  Layers,
  Rocket,
  Smartphone,
  Palette,
  Database,
  Terminal,
  ChevronRight,
} from "lucide-react";

const AboutPage = () => {
  // State untuk track index teknologi yang ditampilkan
  const [techIndex, setTechIndex] = useState(0);

  // Developer data dengan Bapak Fajar di tengah
  const developers = [
    {
      name: "Muhammad Haidar Almer Rafif",
      role: "Fullstack Developer",
      description:
        "Spesialis dalam pengembangan aplikasi mobile dan web dengan fokus pada clean code dan best practices.",
      skills: ["Flutter", "React js", "Firebase", "supabase"],
      avatarColor: "from-purple-500 to-pink-500",
      social: {
        github: "https://github.com/mdhrarrf",
        instagram: "@mdhrarrf",
        linkedin: "https://www.linkedin.com/in/muhammad-haidar-almer-rafif-4aa260398/",
        email: "haidarmeeting@gmail.com",
      },
      quote:
        "sepintar pintarnya kalian, jangan lupa tidur!",
    },

    {
      name: "Muhammad Fajar Sukmawijaya",
      role: "Tech Lead",
      description:
        "Memimpin tim pengembangan dengan pengalaman 10+ tahun. Spesialisasi dalam arsitektur sistem dan manajemen proyek.",
      skills: [
        "System Architecture",
        "Project Management",
        "Technical Strategy",
      ],
      avatarColor: "from-emerald-500 to-green-500",
      social: {
        github: "#",
        instagram: "#",
        linkedin: "#",
        email: "fajar@smakzie.edu",
      },
      quote:
        "Membangun aplikasi bukan hanya tentang kode, tapi tentang menciptakan solusi yang berarti.",
    },
    {
      name: "Rafa Khadafi",
      role: "Fullstack Developer",
      description:
        "fullstack aja",
      skills: ["React/Next.js", "Node.js", "Flutter", "UI/UX"],
      avatarColor: "from-blue-500 to-cyan-500",
      social: {
        github: "https://github.com/Rafa-Smart",
        instagram: "rk_khadafi",
        linkedin: "#",
        email: "rafaoffice@gmail.com",
      },
      quote:
        "Setiap baris kode adalah kesempatan untuk membuat sesuatu yang berguna bagi banyak orang.",
    },
  ];

  // Tech stack yang akan digeser otomatis (ditambah duplikat untuk efek smooth)
  const technologies = [
    {
      name: "Flutter",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "React",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Dart",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="w-6 h-6" />,
      color: "from-teal-400 to-emerald-500",
    },
    {
      name: "Node.js",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Firebase",
      icon: <Database className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Supabase",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "Vite",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },

    {
      name: "Git",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "VS Code",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-400 to-purple-500",
    },
    {
      name: "Android Studio",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
    },
  ];

  // Timeline 3 minggu (15 hari kerja)
  const timeline = [
    {
      week: "Minggu 1",
      days: [
        {
          day: "Hari 1-2",
          title: "Research & Planning",
          description: "Analisis kebutuhan, wireframing, dan planning teknis",
        },
        {
          day: "Hari 3-4",
          title: "UI/UX Design",
          description: "Membuat design system dan prototype aplikasi",
        },
        {
          day: "Hari 5",
          title: "Setup Project",
          description: "Initialize project dengan stack yang dipilih",
        },
      ],
    },
    {
      week: "Minggu 2",
      days: [
        {
          day: "Hari 6-7",
          title: "Core Development",
          description: "Membangun fitur utama dan core functionality",
        },
        {
          day: "Hari 7-8",
          title: "Backend Development",
          description: "Setup database, API, dan authentication",
        },
        {
          day: "Hari 8-10",
          title: "FrontEnd Development",
          description: "Setup Package, API, dan Android Studio",
        },
      ],
    },
    {
      week: "Minggu 3",
      days: [
        {
          day: "Hari 11-13",
          title: "Feature Polish",
          description: "Menyempurnakan fitur dan implementasi detail",
        },
        {
          day: "Hari 14",
          title: "Testing & Debugging",
          description: "Comprehensive testing dan bug fixing",
        },
        {
          day: "Hari 15",
          title: "Deployment",
          description: "Launch aplikasi untuk Smartren 1447 H",
        },
      ],
    },
  ];

  // Duplikat teknologi untuk efek infinite scroll yang smooth
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="py-12 px-4 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">
              Tim Pengembang MuslimApp
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="block">Meet The</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
              Development Team
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Tim ahli di balik MuslimApp yang berdedikasi menciptakan pengalaman
            terbaik untuk kegiatan Smartren Ramadhan di SMKN 1 Cianjur.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-medium">
              <span className="flex items-center text-sm">
                <Code className="w-4 h-4 mr-2" />3 Developers
              </span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
              <span className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2" />3 Weeks
              </span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">
              <span className="flex items-center text-sm">
                <Heart className="w-4 h-4 mr-2" />
                Made with Passion
              </span>
            </div>
          </div>
        </motion.div>

        {/* Team Section - Layout yang lebih rapi */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
            Our{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Core Team
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
            {developers.map((dev, index) => (
              <motion.div
                key={dev.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex-1 flex flex-col ${index === 1 ? "md:mt-0" : ""}`}
              >
                {/* Card Container */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full relative overflow-hidden">
                  {/* Decorative Element */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 blur-xl"></div>

                  {/* Avatar Section - Dipisahkan dari konten */}
                  <div className="relative mb-8 flex flex-col items-center">
                    <div
                      className={`w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-r ${dev.avatarColor} mx-auto flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-105`}
                    >
                      {dev.name.charAt(0)}
                    </div>

                    {/* Role Badge - Dipindah ke bawah avatar */}
                    <div className="mt-6 mb-4">
                      <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-700">
                        <span className="font-bold text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-sm">
                          <Award className="w-4 h-4 mr-2" />
                          {dev.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col">
                    {/* Name */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">
                      {dev.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-center text-sm md:text-base mb-6 flex-1">
                      {dev.description}
                    </p>

                    {/* Quote */}
                    <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50/50 to-green-50/50 dark:from-emerald-900/10 dark:to-green-900/10 border border-emerald-100 dark:border-emerald-800">
                      <div className="flex items-start">
                        <Sparkles className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                        <p className="italic text-gray-700 dark:text-gray-300 text-sm">
                          "{dev.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center text-sm">
                        <Zap className="w-4 h-4 mr-2 text-emerald-500" />
                        Keahlian
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dev.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 text-emerald-700 dark:text-emerald-300 text-xs font-medium border border-emerald-200 dark:border-emerald-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="border-t border-gray-100 dark:border-gray-700 pt-6 mt-auto">
                      <div className="flex justify-center space-x-4">
                        <a
                          href={dev.social.github}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors transform hover:scale-110"
                        >
                          <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </a>
                        <a
                          href={dev.social.instagram}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors transform hover:scale-110"
                        >
                          <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </a>
                        <a
                          href={dev.social.linkedin}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors transform hover:scale-110"
                        >
                          <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </a>
                        <a
                          href={`mailto:${dev.social.email}`}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors transform hover:scale-110"
                        >
                          <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack dengan Auto Scroll Horizontal */}
        <div className="mb-16 md:mb-20 overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
            Tech{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Stack
            </span>
          </h2>

          {/* Animated Auto-scroll Container */}
          <div className="relative">
            {/* Gradient Overlay untuk efek fade */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

            {/* Auto-scrolling Tech Stack */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6 py-4"
                animate={{
                  x: [0, -1800], // Animate horizontally
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedTechnologies.map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 w-40"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full transform hover:-translate-y-1">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${tech.color} mb-4 text-white`}
                      >
                        {tech.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {tech.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Development Timeline */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
            Development{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Timeline
            </span>
          </h2>

          <div className="relative">
            {/* Timeline Line - hanya tampil di desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {timeline.map((week, weekIndex) => (
                <div key={week.week} className="relative">
                  {/* Week Header */}
                  <div className="flex items-center mb-6 md:mb-8">
                    <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 md:hidden"></div>
                    <div className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold text-sm md:text-base mx-4 md:mx-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      {week.week}
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 md:hidden"></div>
                  </div>

                  {/* Days Grid */}
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {week.days.map((day, dayIndex) => (
                      <motion.div
                        key={day.day}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: weekIndex * 0.3 + dayIndex * 0.1 }}
                        className={`${dayIndex === 0 ? "md:col-start-1" : dayIndex === 1 ? "md:col-start-2" : "md:col-start-3"} ${weekIndex % 2 === 0 ? "" : "md:row-start-1"}`}
                      >
                        <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full hover:shadow-xl transition-shadow">
                          {/* Timeline Dot untuk desktop */}
                          <div className="absolute top-6 -left-3 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-800 hidden md:block"></div>

                          <div className="md:ml-6">
                            <div className="flex items-center mb-3">
                              <div className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold">
                                {day.day}
                              </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                              {day.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {day.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white text-center overflow-hidden relative"
        >
          {/* Animated Background Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Our Mission</span>
            </div>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
              "Membantu setiap siswa Smakzie menjalankan ibadah Ramadhan dengan
              lebih baik melalui teknologi."
            </h3>

            <p className="text-base md:text-lg opacity-90 mb-6 md:mb-8">
              Kami percaya bahwa teknologi harus menjadi alat yang memudahkan,
              bukan mempersulit. MuslimApp adalah wujud komitmen kami untuk
              memberikan kontribusi nyata dalam pendidikan agama di sekolah.
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto">
              <div className="px-3 py-3 md:px-4 md:py-3 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-xl md:text-2xl font-bold">3</div>
                <div className="text-xs md:text-sm opacity-90">Developers</div>
              </div>
              <div className="px-3 py-3 md:px-4 md:py-3 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-xl md:text-2xl font-bold">15</div>
                <div className="text-xs md:text-sm opacity-90">Days</div>
              </div>
              <div className="px-3 py-3 md:px-4 md:py-3 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-xl md:text-2xl font-bold">100%</div>
                <div className="text-xs md:text-sm opacity-90">Passion</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
