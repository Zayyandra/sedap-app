import React from 'react';
import PageHeader from "../components/PageHeader";

export default function AddOrder() {
  return (
    <div className="p-6">
      <PageHeader />
      <h1 className="text-2xl font-bold mb-6">Add New Order</h1>
      <form className="space-y-5 max-w-xl">
        <div>
          <label className="block mb-1 font-medium">Order ID</label>
          <input className="w-full border border-gray-300 p-2 rounded" placeholder="ORD001" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Customer Name</label>
          <input className="w-full border border-gray-300 p-2 rounded" placeholder="John Doe" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select className="w-full border border-gray-300 p-2 rounded">
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Total Price</label>
          <input type="number" className="w-full border border-gray-300 p-2 rounded" placeholder="100000" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Order Date</label>
          <input type="date" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <button type="button" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Save
        </button>
      </form>
    </div>
  );
}
