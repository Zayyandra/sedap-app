import React from 'react';
import PageHeader from "../components/PageHeader";

export default function AddCustomer() {
  return (
    <div className="p-6">
      <PageHeader />
      <h1 className="text-2xl font-bold mb-6">Add New Customer</h1>
      <form className="space-y-5 max-w-xl">
        <div>
          <label className="block mb-1 font-medium">Customer ID</label>
          <input className="w-full border border-gray-300 p-2 rounded" placeholder="CUST001" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Customer Name</label>
          <input className="w-full border border-gray-300 p-2 rounded" placeholder="John Doe" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border border-gray-300 p-2 rounded" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input className="w-full border border-gray-300 p-2 rounded" placeholder="08123456789" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Loyalty</label>
          <select className="w-full border border-gray-300 p-2 rounded">
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>
        </div>
        <button type="button" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-600 cursor-pointer">
          Save
        </button>
      </form>
    </div>
  );
}