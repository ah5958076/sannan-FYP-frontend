import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../../Apis/ecommerceApis/getReviewsApis";

const Product = ({ product }) => {
  const [reviews,setReviews] = useState([]);
  useEffect(() => {
    fetchReview();
  }, []);

  const fetchReview = async() => {
    const reviewsData =await getReviews(product._id);
    setReviews(reviewsData);
  };
  console.log("reviews:", reviews);




  return (
    <Link
      to={`/product/${encodeURIComponent(JSON.stringify(product))}`}
      class="bg-white rounded-lg overflow-hidden transition-all duration-300 shadow hover:scale-[1.02] hover:shadow-2xl xl:w-[20rem] md:max-w-[18rem] sm:w-[27rem] w-[18rem] "
    >
      <img
        class="h-48 w-full object-cover object-end"
        src={product.image.url}
        alt="Home in Countryside"
      />
      <div class="p-6">
        <div class="flex items-baseline">
          <span class="inline-block bg-primary-200 text-primary-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide truncate line-clamp-1">
            {product?.userId?.userName}
          </span>
        </div>
        <h4 class="mt-2 font-semibold text-lg leading-tight truncate">
          {product.productName}
        </h4>
        <p className="line-clamp-2">{product.productDescription}</p>
        <div class="mt-1">
          <span className="font-bold">${product.productPrice}</span>
        </div>
        <div class="mt-2 flex items-center">
          <span class="text-primary-600 font-semibold">
            <span>
              <span>4.8</span>
              <i class="fas fa-star ms-1"></i>
            </span>
            <span class="ml-3 text-gray-600 text-sm">
              {reviews?(<>{reviews?.length} Reviews</>):('0 Reviews' )}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
