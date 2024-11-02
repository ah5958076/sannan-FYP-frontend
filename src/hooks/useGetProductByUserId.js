import React, { useState, useEffect } from "react";
import { getProductByuserId } from "../Apis/ecommerceApis/getProductByuserIdAps";

const useGetProductByUserId = () => {
  const storedResponse = JSON.parse(localStorage.getItem("credential"));
  const userId = storedResponse?._id; 

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchProducts();
    }
  }, [userId]);

  const fetchProducts = async () => {
    try {
      const productData = await getProductByuserId(userId);
      setProducts(productData.data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return products;
};

export default useGetProductByUserId;
