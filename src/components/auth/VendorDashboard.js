import React, { useEffect, useState } from "react";
import ProductSalesLineChart from "../chart/ProductSalesLineChart";
import ServiceSalesLineChart from "../chart/ServiceSalesLineChart";
import { getOrders } from "../../Apis/ecommerceApis/getOrdersApi";
import { getProducts } from "../../Apis/ecommerceApis/getProductsApis";
import { getServices } from "../../Apis/ecommerceApis/getServicesApis";

const VendorDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await getOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    const fetchProducts = async () => {
      const productData = await getProducts();
      setProducts(productData.data.products);
    };
    const fetchServices = async () => {
      try {
        const servicesData = await getServices();
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
    fetchOrders();
    fetchProducts();
  }, []);
  console.log("VendorDashboard Orders fetched:", orders);

  const storedResponse = JSON.parse(localStorage.getItem("credential"));
  console.log("Cart stored response:", storedResponse._id);
  let userId = storedResponse._id;
  let totalEarnings = 0.0;
  let totalOrders = 0;
  let totalProducts = 0;
  let totalServices = 0;

  const uniqueOrderIds = new Set();

  orders?.forEach((item) => {
    let orderHasMatchingProduct = false;

    item?.productIdies.forEach((productIdItem) => {
      if (productIdItem?.productId?.userId === userId) {
        const amount =
          parseFloat(
            productIdItem?.quantity * productIdItem?.productId?.productPrice
          ) || 0;
        totalEarnings += amount;
        orderHasMatchingProduct = true;
      }
    });

    if (orderHasMatchingProduct) {
      uniqueOrderIds.add(item._id);
    }
  });

  // The total number of unique orders that contain at least one matching product
  totalOrders = uniqueOrderIds.size;

  console.log("totalEarnings:", totalEarnings.toFixed(2));
  console.log("totalOrders:", totalOrders);

  console.log("products:", products);
  products.map((product) => {
    if (product?.userId._id === userId) {
      totalProducts += 1;
    }
  });
  console.log("totalProducts:", totalProducts);

  console.log("services:", services);
  services.map((service) => {
    if (service?.userId._id === userId) {
      totalServices += 1;
    }
  });
  console.log("totalServices:", totalServices);

  return (
    <div className=" min-h-screen bg-secondary-100 flex flex-col py-6">
      <div className="px-3">
        <h4 className="sm:text-3xl text-2xl font-semibold text-start text-primary-800 ps-4 mb-3">
          Dashboard
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-4 ">
          <div className="col-span-1 flex items-center gap-6 px-6 py-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col gap-1 md:text-sm lg:text-base">
              <span>Total</span>
              <span>Earning</span>
              <span className="text-primary-500 text-lg font-medium">
                ${totalEarnings}
              </span>
            </div>
            <figure className="">
              <img
                src="/assets/images/dashboard/earning.svg"
                alt=""
                className="object-fit w-[120px]"
              />
            </figure>
          </div>

          <div className="col-span-1 flex items-center gap-6 px-6 py-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col gap-1">
              <span>Total</span>
              <span>Order</span>
              <span className="text-blue-500 text-lg font-medium">
                {totalOrders} <i class="fa-solid fa-truck-ramp-box"></i>
              </span>
            </div>
            <figure className="">
              <img
                src="/assets/images/dashboard/order.jpg"
                alt=""
                className="object-fit w-[140px]"
              />
            </figure>
          </div>

          <div className="col-span-1 flex items-center gap-6 px-6 py-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col gap-1">
              <span>Store</span>
              <span>Rating</span>
              <span className="text-yellow-500 text-lg font-medium flex items-center">
                4.4<i class="fas fa-star ms-1 text-xs"></i>
              </span>
              <span className="text-yellow-500 text-xs">34 reviews</span>
            </div>
            <figure className="">
              <img
                src="/assets/images/dashboard/rating.jpg"
                alt=""
                className="object-fit w-[120px]"
              />
            </figure>
          </div>

          <div className="col-span-1 flex items-center gap-6 px-6 py-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col gap-1">
              <span>Total</span>
              <span>Products</span>
              <span className="text-purple-500 text-lg font-medium">
                {totalProducts} <i class="fa-solid fa-boxes-packing"></i>
              </span>
            </div>
            <figure className="">
              <img
                src="/assets/images/dashboard/product.svg"
                alt=""
                className="object-fit w-[120px]"
              />
            </figure>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
          <div className="col-span-2 flex justify-between items-center gap-6 px-6 py-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col gap-1 sm:text-lg">
              <span>Total</span>
              <span>Services</span>
              <span className="text-red-500 sm:text-xl text-lg font-medium">
                {totalServices} <i class="fa-solid fa-gear"></i>
              </span>
            </div>
            <figure className="">
              <img
                src="/assets/images/dashboard/service.svg"
                alt=""
                className="object-fit w-[240px]"
              />
            </figure>
          </div>
          <div className="col-span-2 flex items-center justify-between gap-6 px-6 py-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col gap-1  sm:text-lg">
              <span>Total</span>
              <span>Complains</span>
              <span className="text-amber-600 sm:text-xl text-lg font-medium">
                34 <i class="fa-solid fa-file-circle-exclamation"></i>
              </span>
            </div>
            <figure className="">
              <img
                src="/assets/images/dashboard/complain.jpg"
                alt=""
                className="object-fit w-[240px]"
              />
            </figure>
          </div>
        </div>
        <div className=" px-6 py-6 bg-white rounded-xl shadow-lg mt-5 overflow-x-auto ">
          <ProductSalesLineChart />
        </div>
        <div className=" px-6 py-6 bg-white rounded-xl shadow-lg mt-5 overflow-x-auto ">
          <ServiceSalesLineChart />
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
