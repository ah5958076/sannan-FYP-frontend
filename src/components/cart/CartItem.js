import React, { useState } from "react";

const CartItem = ({ product, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(product._id);
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="transition-all duration-500 hover:bg-neutral-100 hover:shadow-lg rounded-xl md:p-4 max-w-3xl md:w-[30rem] flex items-center justify-between gap-6 sm:mb-0 mb-3">
        <div className="flex gap-3 justify-center items-center">
          <img
            src={product?.productId?.image?.url}
            alt=""
            className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-lg"
          />
          <div className="flex flex-col md:gap-3">
            <strong className="md:text-base text-sm">{product.productId.productName}</strong>
            {/* <small>Product Id: {product.id}</small> */}
          </div>
        </div>
        <div>
          <span>{product.quantity}</span>
        </div>
        <div>
          <span>${product.productId.productPrice*product.quantity}</span>
        </div>
        <button onClick={handleDeleteClick}>
          <i className="fa-solid fa-trash text-red-600"></i>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={handleCancelDelete}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
