import React, { useState, useEffect } from "react";
import Pagination from "../table/Pagination";
import PaginationSummary from "../table/PaginationSummary";
import { Link } from "react-router-dom";
import InputSearch from "../form-controls/InputSearch";
import SelectField from "../form-controls/SelectField";
import OrderModal from "../modal/OrderModal";
import { getOrders } from "../../Apis/ecommerceApis/getOrdersApi";
import DeleteConfirmationModal from "../service/DeleteConfirmationModal";

import axios from "axios";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteModalLebel, setDeleteModalLebel] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await getOrders();
        setOrders(ordersData);
        setFilteredOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);
  console.log("Orders fetched:",orders);

  let totalAmount = 0.75;
  orders?.productIdies?.map((product, index) => {
    totalAmount += product.quantity * product.productId.productPrice;
  })
  totalAmount.toFixed(2);
  console.log("totalAmount:", totalAmount);

  const handleOrderModal = (order) => {
    setSelectedOrder(order);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedOrder(null);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredOrders(orders);
    } else {
      const filtered = orders.filter((order) =>
        order.orderCode.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOrders(filtered);
      setCurrentPage(1);
    }
  };

  const handleStatusToggle = async (order) => {
    const newStatus = !order.status;
    try {
      await axios.put(`http://localhost:5000/updateOrder-status/${order._id}`, { status: newStatus });
      setOrders((prevOrders) =>
        prevOrders.map((s) =>
          s._id === order._id ? { ...s, status: newStatus } : s
        )
      );
      setFilteredOrders((prevVenders) =>
        prevVenders.map((s) =>
          s._id === order._id ? { ...s, status: newStatus } : s
        )
      );
    } catch (error) {
      console.error(`Error updating status for service ${order._id}:`, error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  const headings = [
    { label: "#", sort: true },
    { label: "Order Id", sort: true },
    { label: "Customer Name", sort: true },
    { label: "Customer Email", sort: true },
    { label: "Date", sort: true },
    { label: "Total Amount", sort: true },
    { label: "Status", sort: false },
    { label: "Action", sort: false },
  ];

  const categories = [
    { label: "Paid", value: "paid" },
    { label: "Un-paid", value: "un-paid" },
    { label: "Delivered", value: "delivered" },
    { label: "Refund", value: "refunded" },
  ];


  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/deleteOrder/${deleteId}`);
      setOrders((prevOrders) => prevOrders.filter(order => order._id !== deleteId));
      setFilteredOrders((prevOrders) => prevOrders.filter(order => order._id !== deleteId));
      console.log(`Order with ID ${deleteId} deleted successfully.`);
      setModalOpen(false);
    } catch (error) {
      console.error(`Error deleting order with ID ${deleteId}:`, error);
      window.alert(`Error deleting order with ID ${deleteId}`);
    }
  };

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setModalOpen(true);
    setDeleteModalLebel("Are you sure you want to delete this Order?");
  };

  const closeDeleteModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <DeleteConfirmationModal
        isOpen={modalOpen}
        onCancel={closeDeleteModal}
        onConfirm={handleDelete}
        label={deleteModalLebel}
      />
      <OrderModal isOpen={openModal} onClick={closeModal} order={selectedOrder} />
      <div className="min-h-screen bg-secondary-100">
        <div className="max-w-screen-xl h-max md:px-6 px-3">
          <div className="-my-2 py-2 overflow-x-auto xl:w-[70rem] lg:w-[50rem] md:w-[35rem] sm:w-[37rem] w-[18rem]">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white px-8 py-6 rounded-lg">
              <h1 className="text-primary-800 font-bold text-2xl mt-5 mb-5">
                Orders
              </h1>
              <div className="flex justify-start gap-3 items-center ps-1">
                <InputSearch
                  className={"md:w-[30rem] border border-gray-400 mb-5"}
                  bg={"bg-neutral-100"}
                  handleSearch={handleSearch}
                />
                <SelectField options={categories} className={"mb-4"} />
              </div>
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-300">
                    {headings.map((head, index) => (
                      <th
                        key={index}
                        className="px-6 py-3 sm:text-sm text-xs text-left leading-4 text-primary-800 tracking-wider"
                      >
                        <div className="flex items-center justify-around">
                          <span>{head.label}</span>
                          {head.sort ? (
                            <i className="fa-solid fa-sort ms-3 cursor-pointer"></i>
                          ) : null}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {currentOrders.map((order, index) => (
                    <tr key={index} className="border-b border-gray-500">
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {index + 1}
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {order.orderCode}
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {order.fname} {order.lname}
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {order.email}
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      {/* <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {order.productName}
                      </td> */}
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {order.totalAmount || "0"}
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        <button
                          className={`sm:text-sm text-[0.6rem] leading-5 font-semibold sm:px-3 px-2 sm:py-2 py-0.5 rounded-3xl ${order.status ? 'text-primary-900 bg-primary-500' : 'text-red-900 bg-red-500'}`}
                          onClick={() => handleStatusToggle(order)}
                        >
                          {order.status ? 'Paid' : 'Unpaid'}
                        </button>
                      </td>
                      <td className="grid gap-5 grid-cols-2 sm:px-6 px-3 sm:py-8 py-4 whitespace-no-wrap">
                        <Link
                          onClick={() => openDeleteModal(order._id)}
                          title="Delete"
                          className="sm:text-sm text-xs text-neutral-200"
                        >
                          <i className="fa-solid fa-trash bg-red-500 rounded-lg px-2 py-2"></i>
                        </Link>
                        <button
                          title="View"
                          className="sm:text-sm text-xs text-neutral-200"
                          onClick={() => handleOrderModal(order)}
                        >
                          <i className="fa-solid fa-eye bg-blue-500 rounded-lg px-2 py-2"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                <Pagination
                  display={true}
                  currentPage={currentPage}
                  totalPages={Math.ceil(filteredOrders.length / itemsPerPage)}
                  onPageChange={handlePageChange}
                />
                <PaginationSummary
                  display={true}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  totalItems={filteredOrders.length}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTable;
