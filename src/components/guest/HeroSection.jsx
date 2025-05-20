import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position for animation
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative bg-[#F9F9FF] py-16 md:py-24 overflow-hidden">
      {/* Container tanpa padding horizontal agar melebar */}
      <div className="max-w-full mx-auto px-0 relative z-10">
        {/* Grid dengan max-width agar tidak terlalu melebar */}
        <div className="max-w-5xl mx-auto text-left md:text-left grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column dengan margin negatif ke kiri */}
          <div className="-ml-8">
            {/* Badge */}
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-100 text-blue-700 font-semibold text-sm">
              BEST FOOD PLACE
            </span>
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              The Easiest Way to<br />Get Your Own Food
            </h1>
            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Setiap bulan, lebih dari 3 juta pengguna mengandalkan aplikasi Sedap untuk menemukan pilihan makanan terbaik, dengan ribuan rekomendasi dikunjungi setiap hari.            </p>

            {/* Job Search Form */}
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row gap-4 max-w-2xl">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Nama Makanan..."
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 font-OpenSans"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Lokasi"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 font-OpenSans"
                />
              </div>
              <div className="w-full md:w-auto">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-md transition whitespace-nowrap font-OpenSans">
                  Find now
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="mt-8">
              <span className="text-gray-600 font-semibold">Popular Searches: </span>
              <span className="text-gray-800">Delicious Food Nearby</span>
            </div>
          </div>

          {/* Right Column: Visual Elements */}
          <div className="relative flex justify-center items-center md:relative">
            {/* Combined Background and Person Image */}
            <div
              className="absolute inset-0 w-full h-full bg-emerald-100 rounded-3xl md:w-[420px] md:h-[520px] transform transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateY(${scrollY * 0.1}px)` // Moves the background and image up/down based on scroll
              }}
            />
            {/* Person with laptop */}
            <img
              src="img/hero.png"
              alt="Person with laptop"
              className="w-[350px] rounded-xl shadow-md relative z-10"
              style={{
                transform: `translateY(${scrollY * 0.1}px)` // Moves the image up/down based on scroll
              }}
            />
            {/* Notification Cards (Example) */}
            <div className="absolute top-0 right-[-80px] bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-600 rounded-full p-1 text-xs font-bold">🎓</span>
              <span className="text-xs">10000+ Interactive Courses</span>
            </div>
            <div className="absolute bottom-0 right-[-120px] bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="bg-green-100 text-green-600 rounded-full p-1 text-xs font-bold">👤</span>
              <span className="text-xs">Web Development Class<br />Tomorrow at 10.00 AM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
