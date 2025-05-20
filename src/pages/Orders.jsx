import React, { useState, useEffect } from 'react';
import orders from '../data/orders.json';
import { Link } from 'react-router-dom';

export default function Orders() {
  const [page, setPage] = useState(1);
  const ordersPerPage = 10;

  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const startIdx = (page - 1) * ordersPerPage;
  const paginatedOrders = orders.slice(startIdx, startIdx + ordersPerPage);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
        Order Management
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
        <Link to="/orders/add" className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
          Add Order
        </Link>
      </div>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-100 text-left text-gray-700 uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3 border">Order ID</th>
              <th className="px-4 py-3 border">Customer Name</th>
              <th className="px-4 py-3 border">Status</th>
              <th className="px-4 py-3 border">Total Price</th>
              <th className="px-4 py-3 border">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{order.orderId}</td>
                <td className="px-4 py-2 border">{order.customerName}</td>
                <td className="px-4 py-2 border">{order.status}</td>
                <td className="px-4 py-2 border">Rp{order.totalPrice.toLocaleString()}</td>
                <td className="px-4 py-2 border">{order.orderDate}</td>
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
    </div>
  );
}
