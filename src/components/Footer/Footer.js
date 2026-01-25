import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Aplikasi',
      links: [
        { label: 'Fitur Unggulan', to: '/features' },
        { label: 'Download', to: '/download' },
        { label: 'Tentang Kami', to: '/about' },
        { label: 'UI Showcase', to: '/ui-showcase' }
      ]
    },
    {
      title: 'Smartren',
      links: [
        { label: 'Dashboard Interaktif', to: '/interactive' },
        { label: 'Home', to: '/' },
        { label: 'Kegiatan Ramadhan', to: '/features' },
        { label: 'Tim Developer', to: '/about' }
      ]
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook SMKN 1 Cianjur' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/smkn1cianjur', label: 'Instagram SMKN 1 Cianjur' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube SMKN 1 Cianjur' }
  ];

  const jurusanList = [
    'PPLG',
    'TKJT', 
    'Pemasaran',
    'Akuntansi',
    'MPLB'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Smartren Smakzie</h3>
                <p className="text-gray-400">Aplikasi Pendamping Kegiatan Ramadhan</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Aplikasi resmi untuk mendukung kegiatan Smartren Ramadhan 1446 H di SMKN 1 Cianjur. 
              Membantu siswa-siswi meningkatkan ibadah dan spiritualitas selama bulan suci.
            </p>
            
            {/* Jurusan */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Untuk Semua Jurusan:</h4>
              <div className="flex flex-wrap gap-2">
                {jurusanList.map((jurusan) => (
                  <span 
                    key={jurusan}
                    className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
                  >
                    {jurusan}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-gray-800 hover:bg-emerald-700 transition-colors text-gray-400 hover:text-white"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="text-white font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-gray-400 hover:text-emerald-400 transition-colors text-sm hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
  
          </div>
        </div>

        {/* Info Sekolah */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <h4 className="text-white font-semibold mb-4">SMKN 1 Cianjur</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span className="text-gray-400 text-sm">
                Jl. Raya Cianjur-Bandung KM.10, Kabupaten Cianjur, Jawa Barat
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-gray-400 text-sm">
                info@smkn1cianjur.sch.id
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-gray-400 text-sm">
                (0263) 123456
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Smartren SMKN 1 Cianjur. Hak Cipta Dilindungi.
            </p>
 
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Smartren Ramadhan 1446 H • SMKN 1 Cianjur
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Versi Aplikasi: 1.0.0
            </p>
          </div>

          {/* Download Button */}
          <div>
            <Link
              to="/download"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Download Aplikasi</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;