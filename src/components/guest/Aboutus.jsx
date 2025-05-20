import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-10">
        {/* Gambar Kiri */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="img/ramai.png"
            alt="Tim Sedap"
            className="rounded-3xl shadow-xl w-full max-w-md object-cover"
          />
        </div>

        {/* Teks Kanan */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 leading-snug">
            Kenali Sedap Lebih Dekat
          </h2>
          <p className="text-base text-gray-700 max-w-md mx-auto md:mx-0 mb-6">
            <strong>Sedap</strong> adalah solusi digital modern yang menghubungkan pencari kerja dan pemberi kerja secara efisien. Dengan antarmuka yang simpel dan fitur pintar, proses rekrutmen jadi jauh lebih cepat dan tepat sasaran.
          </p>
          <p className="text-base text-gray-700 max-w-md mx-auto md:mx-0 mb-6">
            Kami hadir dengan fitur pencarian lowongan terkini, pemberitahuan instan, dan tampilan ramah pengguna. Jadikan perjalanan karier Anda lebih mudah bersama Sedap.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-lg shadow-md transition">
              Cari Lowongan
            </button>
            <button className="text-emerald-700 font-semibold hover:underline">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
