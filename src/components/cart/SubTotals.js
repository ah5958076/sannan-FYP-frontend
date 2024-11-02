import React from 'react'
import { Link } from 'react-router-dom';

const SubTotals = ({ cartProducts }) => {
    const calculateTotalPrice = () => {
        let itemTotal = 0;
        cartProducts.forEach((cartItem) => {
            itemTotal += cartItem.productId.productPrice * cartItem.quantity;
        });
        return itemTotal.toFixed(2);
    }
    const calculateTotalWithDelivery = () => {
        const deliveryFee = 0.75;
        return (parseFloat(calculateTotalPrice()) + deliveryFee).toFixed(2);
    };
    console.log('SubTotals cartProducts:', cartProducts)
    return (
        <div>
            <div className="max-w-screen-xl mx-auto pt-8">
                <div className="max-w-md p-2">
                    <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
                    <div className="flex justify-between border-b border-gray-400 py-2 text-sm font-light">
                        <span>Subtotals</span>
                        <span>${calculateTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-400 py-2 text-sm font-light">
                        <span>Delivery Fee</span>
                        <span>$0.75</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-400 py-2 text-sm font-light">
                        <span>Totals</span>
                        <span>${calculateTotalWithDelivery()}</span>
                    </div>
                    {cartProducts && cartProducts.length > 0 && (<Link to={`/order-form`}>
                        <button className="text-white bg-primary-700 hover:bg-primary-800
              focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium
              rounded-lg text-sm py-2 px-10 text-white rounded mt-4">

                            <span>Proceed To Checkout</span>  <i className="ms-3 fa-solid fa-basket-shopping text-neutral-100"></i>
                        </button>
                    </Link>)}
                </div>
            </div>
        </div>
    )
}

export default SubTotals