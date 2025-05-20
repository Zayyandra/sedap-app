import { useState } from "react";
import productsData from "./products.json";

export default function ProductList() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    // Handle perubahan input
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Normalisasi pencarian
    const _searchTerm = dataForm.searchTerm.toLowerCase();

    // Filter data berdasarkan search & tag
    const filteredProducts = productsData.filter((product) => {
        const matchesSearch =
            product.title.toLowerCase().includes(_searchTerm) ||
            product.description.toLowerCase().includes(_searchTerm);

        const matchesTag = dataForm.selectedTag
            ? product.tags.includes(dataForm.selectedTag)
            : true;

        return matchesSearch && matchesTag;
    });

    // Ambil semua tags unik
    const allTags = [...new Set(productsData.flatMap((product) => product.tags))];

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Product List</h1>
            
            {/* Input Pencarian */}
            <input
                type="text"
                name="searchTerm"
                value={dataForm.searchTerm}
                placeholder="Search product..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={handleChange}
            />

            {/* Dropdown Filter Tag */}
            <select
                name="selectedTag"
                value={dataForm.selectedTag}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={handleChange}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>

            {/* Daftar Produk */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((item) => (
                        <div key={item.id} className="border p-6 rounded-lg shadow-md bg-white">
                            {/* Nama Produk */}
                            <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
                            <p className="text-gray-600 text-sm">{item.description}</p>

                            {/* Harga dan Diskon */}
                            <div className="mt-2 flex items-center gap-2">
                                <span className="text-lg font-semibold text-green-600">
                                    ${item.price}
                                </span>
                                <span className="text-sm text-red-500">
                                    -{item.discountPercentage}%
                                </span>
                            </div>

                            {/* Rating dan Stok */}
                            <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                                <span>⭐ {item.rating}</span>
                                <span>Stock: {item.stock}</span>
                            </div>

                            {/* Brand dan Dimensi */}
                            <div className="mt-2 text-sm text-gray-500">
                                <p><strong>Brand:</strong> {item.brand}</p>
                                <p><strong>Dimensions:</strong> {item.dimensions.width}cm × {item.dimensions.height}cm × {item.dimensions.depth}cm</p>
                            </div>

                            {/* Tags */}
                            <div className="mt-3">
                                {item.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 text-xs rounded-full mr-2">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No products found.</p>
            )}
        </div>
    );
}
