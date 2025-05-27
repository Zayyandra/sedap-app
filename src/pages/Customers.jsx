import React, { useState } from 'react';
import customers from '../data/customers.json';
import PageHeader from "../components/PageHeader";
import { Link } from 'react-router-dom';

export default function Customers() {
  const [page, setPage] = useState(1);
  const customersPerPage = 10;

  const totalPages = Math.ceil(customers.length / customersPerPage);
  const startIdx = (page - 1) * customersPerPage;
  const paginatedCustomers = customers.slice(startIdx, startIdx + customersPerPage);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div id="customers-container" className="p-6">
      <PageHeader />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">New Customers This Month</h2>
          <p className="text-3xl text-green-600 font-extrabold">35</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">Premium Customers</h2>
          <p className="text-3xl text-purple-600 font-extrabold">68</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Customer List</h1>
        <Link
          to="/customers/add"
          className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-sm font-semibold shadow"
        >
          ➕ Add Customer
        </Link>
      </div>

      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="w-full table-auto text-sm text-left border-collapse">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
            <tr>
              <th className="px-4 py-3 border">Customer ID</th>
              <th className="px-4 py-3 border">Customer Name</th>
              <th className="px-4 py-3 border">Email</th>
              <th className="px-4 py-3 border">Phone</th>
              <th className="px-4 py-3 border">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map((cust, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{cust.customerId}</td>
                <td className="px-4 py-2 border">{cust.customerName}</td>
                <td className="px-4 py-2 border">{cust.email}</td>
                <td className="px-4 py-2 border">{cust.phone}</td>
                <td className="px-4 py-2 border">{cust.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
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
    </div>
  );
}
