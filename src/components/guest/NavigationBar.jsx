import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Ganti teks dengan logo jika diperlukan */}
          <span id="logo-title" className="font-poppins-ExtraBold text-[30px] text-gray-900">
          Sedap <b id="logo-dot" className="text-hijau">.</b>
        </span>
          <nav className="hidden md:flex space-x-6">
            {/* Sesuaikan warna dan gaya teks */}
            <Link to="/" className="text-gray-800 hover:text-emerald-500 font-Montserrat">Home</Link>
            <Link to="/" className="text-gray-800 hover:text-emerald-500 font-Montserrat">About Us</Link>
            <Link to="/" className="text-gray-800 hover:text-emerald-500 font-Montserrat">Produk</Link>
            <Link to="/" className="text-gray-800 hover:text-emerald-500 font-Montserrat">Testimoni</Link>
            <Link to="/" className="text-gray-800 hover:text-emerald-500 font-Montserrat">Blog</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="px-4 py-2 bg-emerald-600 text-white font-OpenSans rounded-md hover:bg-emerald-700 transition"
            >
              Post a Job
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-emerald-500 text-white font-OpenSans rounded-md hover:bg-emerald-600 transition font"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
