import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
        /* Tambahkan state lain jika diperlukan */
    });

    // Handle perubahan input
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    // Normalisasi pencarian
    const _searchTerm = dataForm.searchTerm.toLowerCase();

    // Filter data berdasarkan search & tag
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name.toLowerCase().includes(_searchTerm) ||
            framework.description.toLowerCase().includes(_searchTerm);

        const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;

        return matchesSearch && matchesTag;
    });

    // Ambil semua tags unik
    const allTags = [...new Set(frameworkData.flatMap((framework) => framework.tags))];

    return (
        <div className="p-8">
            {/* Input Pencarian */}
            <input
                type="text"
                name="searchTerm"
                value={dataForm.searchTerm}
                placeholder="Search framework..."
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

            {/* Daftar Framework */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredFrameworks.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
                        <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>

                        {/* Developer dan Tahun */}
                        <p className="text-gray-600">
                            Developed by: <strong className="font-semibold">{item.details?.developer}</strong> ({item.details?.releaseYear})
                        </p>

                        {/* Link Official Website */}
                        <a
                            href={item.details?.officialWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                        >
                            Visit Website
                        </a>

                        {/* Tags */}
                        <div className="mt-2 flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
