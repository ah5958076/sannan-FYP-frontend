import React from 'react';

const OrderModal = ({ isOpen, onClick, order }) => {

    console.log('order:', order)
   
  if (!order) {
    return null; // If no order is passed, do not render the modal
  }

  let totalAmount = 0.75;
  order.productIdies.map((product, index) => {
    totalAmount+= product.quantity*product.productId.productPrice;
  })
  totalAmount.toFixed(2);
  console.log("totalAmount:",totalAmount);
 totalAmount.toFixed(2);  
  

  return (
    <>
      {isOpen && (
        <div className="absolute z-50 top-0 left-0 w-full h-full grid place-items-center backdrop-blur-sm bg-gray-400 bg-opacity-[0.5] px-3">
          <div className="max-w-screen-xl h-max flex flex-col gap-3 bg-white rounded-xl md:py-10 py-5 shadow-xl lg:w-[35rem]">
            <div>
              <h1 className="text-primary-800 tracking-wider md:px-8 px-6 font-bold text-2xl mb-3">Order Detail</h1>

              <main className="md:px-8 px-6 border-primary-800 my-5 py-5">
                <section className="flex flex-col gap-1 mb-2">
                  <h1 className="text-primary-800 tracking-wide font-bold text-xl mb-1">Order</h1>
                  <div>
                    <strong className="tracking-wide">Order Id:</strong>
                    <span className="ms-1">{order?.orderCode}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Order Status:</strong>
                    <span className="ms-1">{order?.status?"Not Shipped":"Shipped"}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Order Amount:</strong>
                    <span className="ms-1">${totalAmount}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Payment Method:</strong>
                    <span className="ms-1">{order?.payment_method==="pod"?"Pay On Delivery":"Pay On Card"}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Payment Status:</strong>
                    <span className="ms-1">{order?.paymentStatus?"Not Paid":""}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Order Date:</strong>
                    <span className="ms-1">{new Date(order?.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Shipment Address:</strong>
                    <span className="ms-1">{order?.address}</span>
                  </div>
                </section>

                <section className="flex flex-col gap-1 mb-2">
                  <h1 className="text-primary-800 tracking-wide font-bold text-xl mb-1">Customer</h1>
                  <div>
                    <strong className="tracking-wide">Customer Name:</strong>
                    <span className="ms-1">{order?.fname} {order?.lname}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Customer Email:</strong>
                    <span className="ms-1">{order?.email}</span>
                  </div>
                  <div>
                    <strong className="tracking-wide">Customer Contact:</strong>
                    <span className="ms-1">{order?.contact}</span>
                  </div>
                </section>

                <h1 className="text-primary-800 tracking-wide font-bold text-xl mb-1">Product</h1>

                <section className="flex flex-col gap-1 mb-2">

                {order.productIdies.map((product, index) => (
                   
                    <div key={product?.productCode} className="border-b border-gray-400 py-2">
                      <div>
                        <strong className="tracking-wide">Product ID:</strong>
                        <span className="ms-1">{product?.productId?.productCode}</span>
                      </div>
                      <div>
                        <strong className="tracking-wide">Product Name:</strong>
                        <span className="ms-1">{product?.productId?.productName}</span>
                      </div>
                      <div>
                        <strong className="tracking-wide">Product Quantity:</strong>
                        <span className="ms-1">{product?.quantity}</span>
                      </div>
                      <div>
                        <strong className="tracking-wide">Product Unit Price:</strong>
                        <span className="ms-1">${product?.productId?.productPrice}</span>
                      </div>
                    </div>
                  ))}
                </section>
              </main>

              <div className="flex gap-3 justify-end items-center md:px-8 px-6">
                <button className="px-3 py-2 rounded-lg bg-red-500 text-white">Delete</button>
                <button onClick={onClick} className="px-3 py-2 rounded-lg bg-blue-500 text-white">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderModal;
