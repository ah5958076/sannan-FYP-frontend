import React from 'react';
import { Link } from 'react-router-dom';

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-3xl font-bold text-center text-[red] mb-6">Payment Canceled</h2>
        <p className="text-lg text-center mb-6">Your payment has been canceled.</p>
        <div className="flex justify-center">
          <Link to="/home"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-lg focus:outline-none"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
