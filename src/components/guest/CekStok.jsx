import React, { useState, useEffect } from 'react';
import produkData from '../../data/produk.json';

export default function CekStok() {
  const [kode, setKode] = useState('');
  const [produk, setProduk] = useState(null);
  const [pesan, setPesan] = useState('');
  const [dataProduk, setDataProduk] = useState([]);

  useEffect(() => {
    setDataProduk(produkData.products); // pastikan struktur JSON-nya memiliki "products"
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = kode.trim();

    if (input === '') {
      setPesan('❌ Kode produk tidak boleh kosong.');
      setProduk(null);
      return;
    }
    if (input.length < 4) {
      setPesan('❌ Kode produk minimal 4 karakter.');
      setProduk(null);
      return;
    }

    const found = dataProduk.find(p => p.kode_produk.toLowerCase() === input.toLowerCase());

    if (!found) {
      setPesan('❌ Kode produk tidak ditemukan.');
      setProduk(null);
    } else if (found.stok > 0) {
      setPesan(`✅ Produk ${found.nama_produk} tersedia dengan harga Rp${found.harga.toLocaleString()}.\nStok tersedia: ${found.stok}`);
      setProduk(found);
    } else {
      setPesan(`⚠️ Produk ${found.nama_produk} saat ini sedang habis.`);
      setProduk(found);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Cek Ketersediaan Produk</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <label className="block text-gray-700 font-medium mb-2">Masukkan Kode Produk</label>
        <input
          type="text"
          value={kode}
          onChange={(e) => setKode(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Contoh: PRD001"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
          Cek Stok
        </button>
      </form>

      {pesan && (
        <div className="max-w-md mx-auto mt-6 bg-white p-5 rounded shadow text-center">
          <p className="text-base text-gray-800 whitespace-pre-line mb-4">{pesan}</p>

          {produk && produk.stok === 0 && (
            <img
              src="https://cdn-icons-png.flaticon.com/512/1045/1045672.png"
              alt="Out of Stock"
              className="w-24 h-24 mx-auto"
            />
          )}

          {produk && produk.stok > 0 && (
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                alt="Shopping Cart"
                className="w-20 h-20 mx-auto"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
