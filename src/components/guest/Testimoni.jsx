import React, { useEffect, useState } from 'react';
import testimoniData from '../../data/testimoni.json';

export default function Testimoni() {
  const [testimoni, setTestimoni] = useState([]);

  useEffect(() => {
    setTestimoni(testimoniData.testimoni); // pastikan struktur JSON-nya memiliki "testimoni"
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Testimoni Pengguna</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
        {testimoni.map((testimoni) => (
          <div
            key={testimoni.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border p-6"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimoni.avatar}
                alt={testimoni.name}
                className="w-16 h-16 object-cover rounded-full border-2 border-gray-200"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{testimoni.name}</h3>
              </div>
            </div>
            <p className="text-gray-600">{testimoni.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
