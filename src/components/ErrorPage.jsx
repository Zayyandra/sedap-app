import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ code = 'Error', title, message }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-100 px-4 text-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-5xl font-extrabold text-green-500 mb-4">{code} Error</h1>
        <p className="text-gray-700 mb-2 text-lg font-medium">{title}</p>
        <p className="text-gray-500 mb-6 text-sm">{message}</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
