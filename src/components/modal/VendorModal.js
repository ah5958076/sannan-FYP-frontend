import React from "react";

const VendorModal = ({ isOpen, onClick, vendor }) => {
  return (
    <>
      {isOpen && vendor && (
        <div className="absolute z-50 top-0 left-0 w-full h-full grid place-items-center backdrop-blur-sm bg-gray-400 bg-opacity-[0.5] px-3 ">
          <div
            className={`${
              isOpen ? "modal-fade" : ""
            } max-w-screen-xl h-max flex flex-col gap-3 bg-white rounded-xl md:py-10 py-5 shadow-xl lg:w-[35rem]`}
          >
            <div>
              <h1 className="text-primary-800 tracking-wider md:px-8 px-6 font-bold text-2xl mb-3">
                Vendor Detail
              </h1>

              <main className="md:px-8 px-6 border-primary-800 my-5 py-5">
                <section className="flex flex-col gap-3 mb-2">
                  <div>
                    <strong className="tracking-wide">Name:</strong>
                    <span className="ms-1">{vendor.businessName}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Email:</strong>
                    <span className="ms-1">{vendor.businessEmail}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Complains:</strong>
                    <span className="ms-1">{vendor.complain || 0}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Contact:</strong>
                    <span className="ms-1">{vendor.businessContact}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Address:</strong>
                    <span className="ms-1">{vendor.businessAddress}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Shipment Address:</strong>
                    <span className="ms-1">{vendor.pickupAddress}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Date:</strong>
                    <span className="ms-1">
                      {new Date(vendor.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Description:</strong>
                    <span className="ms-1">{vendor.businessDescription}</span>
                  </div>
                </section>
              </main>

              <div className="flex gap-3 justify-end items-center md:px-8 px-6">
                <button className="px-3 py-2 rounded-lg bg-red-500 text-white">
                  Delete
                </button>
                <button className="px-3 py-2 rounded-lg bg-yellow-500 text-white">
                  Contact
                </button>
                <button
                  onClick={onClick}
                  className="px-3 py-2 rounded-lg bg-blue-500 text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VendorModal;
