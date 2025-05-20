import { useState, useEffect } from "react";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs"; 
import { ImSpinner2 } from "react-icons/im"; 

export default function UserList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://dummyjson.com/users");
        if (response.status === 200) {
          setUsers(response.data.users);
        } else {
          setError("Failed to load users.");
        }
      } catch (err) {
        setError(err.response ? err.response.data.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIdx = (page - 1) * usersPerPage;
  const paginatedUsers = users.slice(startIdx, startIdx + usersPerPage);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
        User Management
      </h2>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm">
            Filter
          </button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm">
            Sort
          </button>
        </div>
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm">
          Add User
        </button>
      </div>

      {error && (
        <div className="bg-red-200 mb-5 p-5 text-sm text-gray-700 rounded flex items-center">
          <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
          {error}
        </div>
      )}

      {loading ? (
        <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
          <ImSpinner2 className="me-2 animate-spin" />
          Mohon Tunggu...
        </div>
      ) : (
        <>
          <div className="overflow-x-auto shadow rounded-lg">
            <table className="w-full table-auto border-collapse text-sm">
              <thead className="bg-gray-100 text-left text-gray-700 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 border">ID</th>
                  <th className="px-4 py-3 border">Name</th>
                  <th className="px-4 py-3 border">Email</th>
                  <th className="px-4 py-3 border">Age</th>
                  <th className="px-4 py-3 border">Address</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{user.id}</td>
                    <td className="px-4 py-2 border">{user.firstName} {user.lastName}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                    <td className="px-4 py-2 border">{user.age}</td>
                    <td className="px-4 py-2 border">
                      {user.address ? user.address.address : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end items-center gap-2 mt-4">
            <button
              onClick={handlePrevious}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700 text-sm">Page {page} of {totalPages}</span>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
