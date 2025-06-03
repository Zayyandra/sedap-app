import { useState, useEffect } from "react"
import { AiFillDelete, AiFillEdit } from "react-icons/ai" // Import Edit Icon
import { notesAPI } from "../services/notesApi"
import AlertBox from "../components/AlertBox"
import LoadingSpinner from "../components/LoadingSpinner"
import EmptyState from "../components/EmptyState"
import GenericTable from "../components/GenericTable"

export default function Notes() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [notes, setNotes] = useState([])
    const [dataForm, setDataForm] = useState({
        title: "", content: ""  // Tanpa status
    })
    const [editingNoteId, setEditingNoteId] = useState(null) // Menandakan catatan yang sedang diedit

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            if (editingNoteId) {
                // Jika sedang mengedit, update catatan
                await notesAPI.updateNote(editingNoteId, dataForm)
                setSuccess("Catatan berhasil diperbarui!")
            } else {
                // Jika menambah catatan baru
                await notesAPI.createNote(dataForm)
                setSuccess("Catatan berhasil ditambahkan!")
            }

            setDataForm({ title: "", content: "" }) // Reset form
            setEditingNoteId(null) // Reset editing mode
            loadNotes()

        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    // Handle untuk aksi hapus data
    const handleDelete = async (id) => {
        const konfirmasi = confirm("Yakin ingin menghapus catatan ini?")
        if (!konfirmasi) return

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.deleteNote(id)

            // Refresh data
            loadNotes()
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    // Fungsi untuk mengedit catatan
    const handleEdit = (note) => {
        setDataForm({ title: note.title, content: note.content }) // Isi form dengan data catatan
        setEditingNoteId(note.id) // Tandai catatan yang sedang diedit
    }

    useEffect(() => {
        loadNotes()
    }, [])

    const loadNotes = async () => {
        try {
            setLoading(true)
            setError("")
            const data = await notesAPI.fetchNotes()
            setNotes(data)
        } catch (err) {
            setError("Gagal memuat catatan")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
            </div>

            {error && <AlertBox type="error">{error}</AlertBox>}
            {success && <AlertBox type="success">{success}</AlertBox>}

            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {editingNoteId ? "Edit Catatan" : "Tambah Catatan Baru"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={dataForm.title}
                        placeholder="Judul catatan"
                        disabled={loading}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    />

                    <textarea
                        name="content"
                        value={dataForm.content}
                        placeholder="Isi catatan"
                        disabled={loading}
                        onChange={handleChange}
                        required
                        rows="2"
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                    />

                    <button
                        type="submit"
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                    >
                        {loading ? "Mohon Tunggu..." : editingNoteId ? "Perbarui Catatan" : "Tambah Data"}
                    </button>
                </form>
            </div>

            {/* Conditional rendering untuk data notes */}
            {loading && <LoadingSpinner text="Memuat catatan..." />}

            {!loading && notes.length === 0 && !error && (
                <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
            )}

            {!loading && notes.length === 0 && error && (
                <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
            )}

            {!loading && notes.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
                    <div className="px-6 py-4">
                        <h3 className="text-lg font-semibold">
                            Daftar Catatan ({notes.length})
                        </h3>
                    </div>

                    <GenericTable
                        columns={["#", "Judul", "Isi Catatan", "Aksi"]}
                        data={notes}
                        renderRow={(note, index) => (
                            <>
                                <td className="px-6 py-4 font-medium text-gray-700">
                                    {index + 1}.
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-emerald-600">
                                        {note.title}
                                    </div>
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    <div className="truncate text-gray-600">
                                        {note.content}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {/* Edit button */}
                                    <button
                                        onClick={() => handleEdit(note)}
                                        disabled={loading}
                                        className="mr-2"
                                    >
                                        <AiFillEdit className="text-blue-500 text-2xl hover:text-blue-700 transition-colors" />
                                    </button>
                                    {/* Delete button */}
                                    <button
                                        onClick={() => handleDelete(note.id)}
                                        disabled={loading}
                                    >
                                        <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                                    </button>
                                </td>
                            </>
                        )}
                    />
                </div>
            )}
        </div>
    )
}
