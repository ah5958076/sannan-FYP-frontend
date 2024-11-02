import React, { useEffect, useState } from 'react'
import TrafficLineChart from '../chart/TrafficLineChart'

import { getOrders } from '../../Apis/ecommerceApis/getOrdersApi';
import { getProducts } from '../../Apis/ecommerceApis/getProductsApis';
import { getVenders } from '../../Apis/ecommerceApis/getVendersApis';
import { getServices } from '../../Apis/ecommerceApis/getServicesApis';
import { getUsers } from '../../Apis/ecommerceApis/getUsersApis';



const AdminDashboard = () => {
    const [order, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [venders, setVenders] = useState([]);
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
        }
        const fetchUser = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching usersData:", error);
            }
        };
        const fetchVenders = async () => {
            try {
                const vendersData = await getVenders();
                setVenders(vendersData);
            } catch (error) {
                console.error("Error fetching vendersData:", error);
            }
        };
        const fetchServices = async () => {
            try {
                const servicesData = await getServices();
                setServices(servicesData);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };

        fetchOrders();
        fetchProducts();
        fetchUser();
        fetchVenders();
        fetchServices();
    }, []);
    console.log("Orders fetched:", order);
    console.log("products fetched:", products);
    console.log("users fetched:", users);  
    console.log("venders fetched:", venders);
    console.log("services fetched:", services);

    let totalEarnings = 0.0;
order.forEach((item) => {
    const amount = parseFloat(item.totalAmount) || 0; 
    console.log(amount);
    totalEarnings += amount;
});
console.log("totalEarnings:", totalEarnings);


    return (
        <div className=' min-h-screen bg-secondary-100 flex flex-col py-6'>
            <div className='px-3'>
                <h4 className='sm:text-3xl text-2xl font-semibold text-start text-primary-800 ps-4 mb-3'>
                    Dashboard
                </h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-4 '>
                    <div className='col-span-1 flex items-center gap-6 px-6 py-6 bg-white rounded-xl shadow-lg'>
                        <div className='flex flex-col gap-1 md:text-sm lg:text-base'>
                            <span>Total</span>
                            <span>Earning</span>
                            <span className='text-primary-500 text-lg font-medium'>${totalEarnings}</span>
                        </div>
                        <figure className=''>
                            <img src="/assets/images/dashboard/earning.svg" alt="" className='object-fit w-[120px]' />
                        </figure>
                    </div>


                    <div className='col-span-1 flex items-center gap-6 px-6 py-6 bg-white rounded-xl shadow-lg'>
                        <div className='flex flex-col gap-1'>
                            <span>Total</span>
                            <span>Products</span>
                            <span className='text-purple-500 text-lg font-medium'>{products?.length} <i class="fa-solid fa-boxes-packing"></i></span>
                        </div>
                        <figure className=''>
                            <img src="/assets/images/dashboard/product.svg" alt="" className='object-fit w-[120px]' />
                        </figure>
                    </div>

                    <div className='col-span-1 flex items-center gap-6 px-6 py-6 bg-white rounded-xl shadow-lg'>
                        <div className='flex flex-col gap-1'>
                            <span>Total</span>
                            <span>Vendor</span>
                            <span className='text-yellow-500 text-lg font-medium'>{venders?.length} <i class="fa-solid fa-store"></i></span>
                        </div>
                        <figure className=''>
                            <img src="/assets/images/dashboard/rating.jpg" alt="" className='object-fit w-[120px]' />
                        </figure>
                    </div>

                    <div className='col-span-1 flex items-center gap-6 px-6 py-6 bg-white rounded-xl shadow-lg'>
                        <div className='flex flex-col gap-1'>
                            <span>Total</span>
                            <span>User</span>
                            <span className='text-blue-500 text-lg font-medium'>{users.user?.length} <i class="fa-solid fa-user"></i></span>
                        </div>
                        <figure className=''>
                            <img src="/assets/images/dashboard/order.jpg" alt="" className='object-fit w-[140px]' />
                        </figure>
                    </div>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4'>
                    <div className='col-span-2 flex justify-between items-center gap-6 px-6 py-6 bg-white rounded-xl shadow-lg'>
                        <div className='flex flex-col gap-1 sm:text-lg'>
                            <span>Total</span>
                            <span>Services</span>
                            <span className='text-red-500 sm:text-xl text-lg font-medium'>{services?.length} <i class="fa-solid fa-gear"></i> </span>
                        </div>
                        <figure className=''>
                            <img src="/assets/images/dashboard/service.svg" alt="" className='object-fit w-[240px]' />
                        </figure>
                    </div>
                    {/* <div className='col-span-2 flex items-center justify-between gap-6 px-6 py-6 bg-white rounded-xl shadow-lg'>
                        <div className='flex flex-col gap-1  sm:text-lg'>
                            <span>Total</span>
                            <span>Complains</span>
                            <span className='text-amber-600 sm:text-xl text-lg font-medium'>34 <i class="fa-solid fa-file-circle-exclamation"></i></span>
                        </div>
                        <figure className=''>
                            <img src="/assets/images/dashboard/complain.jpg" alt="" className='object-fit w-[240px]' />
                        </figure>
                    </div> */}

                </div>
                {/* <div className=' px-6 py-6 bg-white rounded-xl shadow-lg mt-5 overflow-x-auto '>
                    <TrafficLineChart />
                </div> */}
            </div>
        </div>
    )
}

export default AdminDashboard
