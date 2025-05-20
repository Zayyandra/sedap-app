import React, { useEffect, useState } from 'react';
import productData from '../../data/products.json';

export default function ProdukUnggulan() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData.products);
  }, []);

  return (
    <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Produk Unggulan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-[4/3] object-contain bg-gray-100"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-green-600 font-bold text-base mt-2">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
