import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,resetCart, removeFromCart } from '../../ReduxToolKit/CartSlice';

import { Link, useLocation } from "react-router-dom";
import ReviewCarousel from "../carousels/ReviewCarousel";
import { getReviews } from "../../Apis/ecommerceApis/getReviewsApis";
import { getCartData } from '../../Apis/ecommerceApis/getCartDataApis.js';

import axios from "axios";

const ProductDescription = () => {
  const cart = useSelector((state) => state.cart);
  console.log('cart:', cart)
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);
  const [reviews,setReviews] = useState([]);
  // const [cartUpdate, setCartUpdate] =React.useState(cart.cart[0])
  

  const location = useLocation();
  const product = JSON.parse(
    decodeURIComponent(location.pathname.split("/product/")[1])
  );
let userId ="665170c031a0cfe486ddc00b";
  let categories = [];
  try {
    categories = JSON.parse(product.category);
  } catch (error) {
    console.error("Error parsing categories JSON", error);
  }
  console.log("categories:", categories);

  useEffect(() => {
    fetchReview();
  }, []);

  const fetchReview = async () => {
    try {
      const reviewsData = await getReviews(product._id);
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  console.log("reviews:", reviews);
  const [cartProduct, setProductCart] = useState({
    productId: product._id,
    userId,
    quantity,
  });
  useEffect(() => {
    fetchCart();
    // console.log('cartUpdate:', cartUpdate)

  }, []);

  const fetchCart = async () => {
    try {
      const response = await getCartData(userId);
      console.log("response.cartProduct:", response.cartProduct);
      // setCartUpdate(response.cartProduct)
      console.log('ProductDescription cart:', cart.cart[0])




      if (response && response.cartProduct) {
        // dispatch(addToCart(response.cartProduct));

        // dispatch(addToCart([])); 

        dispatch(addToCart(response.cartProduct)); 

      } else {
        // dispatch(addToCart([]));

      }
    }catch (err) {
    console.error("Error fetching cart data:", err);
    // dispatch(addToCart([]));
  }
}
  const addCart = async () => {
    try {
      const updatedCartProduct = { ...cartProduct, quantity: quantity };
      console.log('updatedCartProduct:', updatedCartProduct)

      const response = await axios.post('http://localhost:5000/addToCart', updatedCartProduct);
      console.log("Added to cart successfully", response.data);
      if(response.data){
        console.log("addCart dispatch(addToCart([])):");
            dispatch(resetCart());
            console.log('addCart cart:', cart.cart[0]);



        fetchCart();
      }

    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  
  return (
    <div
      className="rounded-xl min-h-screen bg-secondary-100 flex flex-col justify-center items-center"
      id="product"
    >
      <div className="rounded-xl bg-secondary-300 flex flex-col lg:flex-row w-[70vw] lg:h-[80vh]">
        <div className="rounded-xl lg:min-w-[40%] bg-primary-800">
          <img
            src={product.image.url}
            alt=""
            className="lg:rounded-l-xl rounded-l-none lg:rounded-t-none rounded-t-xl w-full h-full object-cover"
          />
        </div>
        <div className="bg-secondary-300 lg:rounded rounded-t-2xl gap-4 flex flex-col lg:min-w-[60%] md:p-6 p-3 justify-center lg:translate-y-0  -translate-y-12">
          <h2 className="md:text-3xl text-xl font-medium">
            <u>{product.productName}</u>
          </h2>
          <p className="line-clamp-5">{product.productDescription}</p>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto fugiat reiciendis eveniet earum voluptates cum, animi velit repellendus hic harum ipsa perspiciatis. Dolor facilis ut tenetur dolorem incidunt sint repellendus id quisquam rerum adipisci!</p> */}
          <div className="category-container">
            <span className="md:text-lg text-md font-medium">Category: </span>
            {categories.map((category, index) => (
              <Link className="md:text-md text-sm" to="#" key={index}>
                {category.label}
                {index !== categories.length - 1 ? "," : ""}
              </Link>
            ))}
          </div>
          <div className="quantity-container">
            <div className="quantity-detail">
              <h5 className="text-lg font-medium text-md">
                Quantity:{" "}
                <span className="md:text-base text-sm font-normal">
                  {product.stockQuantity} Products in Stock.
                </span>
              </h5>
            </div>
            <div className="quantity-btn bg-primary-700 rounded-md flex justify-center items-center w-fit px-2 py-1">
              <span onClick={() => setQuantity(quantity + 1)}>
                <i className="fa-solid fa-plus p-2 text-neutral-100"></i>
              </span>
              <input
                className="bg-primary-700 w-full text-center placeholder:text-center text-neutral-100 outline-none border-none"
                type="text"
                inputMode="numeric"
                value={quantity}
                min="0"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <span onClick={() => setQuantity(quantity ? quantity - 1 : 0)}>
                <i className="fa-solid fa-minus p-2 text-neutral-100"></i>
              </span>
            </div>
          </div>

          <div className="mt-5 text-primary-800 ">
            <h5 className="mb-4">
              <u>Review of Product By</u>
              <Link to={`/Chat/${product?.userId?._id}`} className="font-bold">
                {" "}
                {product?.userId?.userName}:
              </Link>
            </h5>

            {reviews?.length ? (
              <ReviewCarousel reviews={reviews} />
            ) : (
              <span>No review given yet</span>
            )}
          </div>
        </div>
      </div>
      <Link
        onClick={addCart}
        className="mt-8 bg-primary-800 w-max px-12 py-4 rounded-xl text-white text-xl transition-all duration-500 hover:scale-110 active:scale-50 hover:shadow-lg"
      >
        <span>Add To Cart</span>
        <i class="ms-2 fa-solid fa-cart-shopping text-white"></i>
      </Link>
      {/* <Link to={`/Chat/${product?.userId?._id}`}>Chat</Link> */}

      

    </div>
  );
};

export default ProductDescription;
