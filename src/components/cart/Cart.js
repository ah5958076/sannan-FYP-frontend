import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, resetCart, removeFromCart } from '../../ReduxToolKit/CartSlice';
import { getCartData } from '../../Apis/ecommerceApis/getCartDataApis.js';
import { deleteCartProducts } from "../../Apis/ecommerceApis/deleteCartproductApis";
import SubTotals from "./SubTotals.js";

const Cart = () => {
  const storedResponse = JSON.parse(localStorage.getItem("credential"));
console.log("Cart stored response:", storedResponse._id);

  let userId = storedResponse._id;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log('cart', cart);

  const [cartProducts, setCartProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCart();

  }, []);

  const fetchCart = async () => {
    try {
      const response = await getCartData(userId);
      if (response && response.cartProduct) {
        setCartProducts(response.cartProduct);
        dispatch(addToCart(response.cartProduct));
      } else {
        setCartProducts([]);
      }
    } catch (err) {
      console.error("Error fetching cart data:", err);
      setError("No Product Selected Yet.");
      setCartProducts([]);
    }
  };

  const handleDeleteCartProduct = async (cartProductId) => {
    try {
      await deleteCartProducts(cartProductId);
      setCartProducts(prevItems => prevItems.filter(item => item._id !== cartProductId));
      dispatch(resetCart());
      fetchCart();

    } catch (err) {
      console.error("Error deleting cart product:", err);
      setError("No Product Selected Yet.");
    }
  };

  

  return (
    <div className="min-h-screen bg-secondary-100 flex flex-col justify-center md:p-6 p-3" id="cart">
      <div className="max-w-screen-2xl h-fit bg-neutral-200 rounded-lg shadow flex flex-col md:gap-6 gap-3 md:p-12 p-6">
        <h1 className="text-primary-900 font-medium md:text-2xl text-xl mt-5 mb-5">
          <u>Items in Cart:</u>
        </h1>
        {error && <h1 className="text-xl">{error}</h1>}
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product, index) => (
            <CartItem key={index} product={product} onDelete={handleDeleteCartProduct} />
          ))
        ) : (
          !error && <h1 className="text-xl">No Product Selected Yet</h1>
        )}
        {/* {cartProducts && cartProducts.length > 0 && (
          <div className="w-full flex items-center justify-center">
            <Link to={'/order-form'}
              className="text-white bg-primary-700 hover:bg-primary-800
              focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium
              rounded-lg text-sm w-full sm:w-max px-5 py-2.5 text-center
              dark:bg-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <span>Check Out</span>
              <i className="ms-3 fa-solid fa-basket-shopping text-neutral-100"></i>
            </Link>
          </div>
        )} */}
      </div>

      <div>
        <SubTotals cartProducts={cartProducts}/>
      </div>

    </div>
  );
};

export default Cart;
