import React, { useState, useEffect } from "react";
import Pagination from "../table/Pagination";
import PaginationSummary from "../table/PaginationSummary";
import { Link } from "react-router-dom";
import InputSearch from "../form-controls/InputSearch";
import SelectField from "../form-controls/SelectField";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import useGetProduct from "../../hooks/useGetProduct";
import useGetProductByUserId from "../../hooks/useGetProductByUserId";
import { getReviews } from "../../Apis/ecommerceApis/getReviewsApis";
import axios from 'axios';
import { format } from 'date-fns';


const ProductTable = () => {
  const storedResponse = JSON.parse(localStorage.getItem("credential"));
console.log("stored response:", storedResponse);
  const email = storedResponse.email;
 
  const headings = [
    { label: "#", sort: true },
    { label: "Code", sort: true },
    { label: "Name", sort: true },
    { label: "Solds", sort: true },
    { label: "In Stock", sort: true },
    { label: "Earn", sort: true },
    { label: "Rating", sort: true },
    { label: "Review Count", sort: true },
    { label: "Start Date", sort: true },
    { label: "End Date", sort: true },
    { label: "Status", sort: false },
    { label: "Action", sort: false },
  ];

  const categories = [
    { label: "Active", value: "active" },
    { label: "Out of Stock", value: "out_of_stock" },
    { label: "Not Sold", value: "not_sold" },
    { label: "Expire", value: "expire" },
    { label: "Not uploaded", value: "not_upload" },
  ];

  const initialData = [
    {
      id: "1",
      productCode: "PRO5674",
      name: "Landscaping",
      packageSolds: "50",
      inStock: 95,
      earn: "$48765",
      rating: "4.5",
      reviewCount: "25",
      startDate: "2023-02-10T15:35:48.279Z",
      endDate: "2023-02-15T15:35:48.279Z",
      status: true,
    },
    // ... (other initial data)
  ];

  const [productCounts, setProductReviewCounts] = useState({});
  
  const allProducts = useGetProduct() || [];
  const userProducts = useGetProductByUserId() || [];
  const fetchedProduct = email === "admin@gmail.com" ? allProducts : userProducts;
  console.log("ProductTable fetchedProduct:", fetchedProduct);
  console.log("ProductTable fetchedPoduct:",fetchedProduct);
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteModalLebel, setDeleteModalLebel] = useState('');
  const itemsPerPage = 3;
  console.log('fetchedPoduct:', fetchedProduct)

  useEffect(() => {
    setProduct(fetchedProduct);
    setFilteredServices(fetchedProduct);
  }, [fetchedProduct]);

  useEffect(() => {
    const fetchedServices = async () => {
      const reviewCounts = {};
      for (let product of products) {
        try {
          const reviews = await getReviews(product._id);
          reviewCounts[product._id] = reviews.length;
        } catch (error) {
          console.error(`Error fetching reviews for service ${product._id}:`, error);
          reviewCounts[product._id] = 0; // Default to 0 reviews in case of an error
        }
      }
      setProductReviewCounts(reviewCounts);
    };

    if (products.length) {
      fetchedServices();
    }
  }, [products]);

  if (!products.length) {
    return <div>Loading...</div>; // Add a loading state or a message indicating that there are no services
  }

  const handleStatusToggle = async (product) => {
    const newStatus = !product.status;
    try {
      await axios.put(`http://localhost:5000/update-product-status/${product._id}`, { status: newStatus });
      setProduct((prevServices) =>
        prevServices.map((s) =>
          s._id === product._id ? { ...s, status: newStatus } : s
        )
      );
      setFilteredServices((prevServices) =>
        prevServices.map((s) =>
          s._id === product._id ? { ...s, status: newStatus } : s
        )
      );
    } catch (error) {
      console.error(`Error updating status for service ${product._id}:`, error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/deleteProducts/${deleteId}`);
      setProduct((prevServices) => prevServices.filter(service => service._id !== deleteId));
      setFilteredServices((prevServices) => prevServices.filter(service => service._id !== deleteId));
      console.log(`Service with ID ${deleteId} deleted successfully.`);
      setModalOpen(false);
    } catch (error) {
      console.error(`Error deleting service with ID ${deleteId}:`, error);
      window.alert(`Error deleting service with ID ${deleteId}`);
    }
  };

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setModalOpen(true);
    setDeleteModalLebel("Are you sure you want to delete this Product?");
  };

  const closeDeleteModal = () => {
    setModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredServices(products);
    } else {
      const filtered = products.filter((service) =>
        service.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredServices(filtered);
      setCurrentPage(1); // Reset to first page after search
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen bg-secondary-100">
      <div className="max-w-screen-xl h-max md:px-6 px-3">
        <div className="-my-2 py-2 overflow-x-auto xl:w-[70rem] lg:w-[50rem] md:w-[35rem] sm:w-[37rem] w-[18rem]">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white px-8 py-6 rounded-lg">
            <h1 className="text-primary-800 font-bold text-2xl mt-5 mb-5">Products</h1>
            <div className="flex justify-start gap-3 items-center ps-1">
              <InputSearch
                className={"md:w-[30rem] border border-gray-400 mb-5"}
                bg={"bg-neutral-100"}
                handleSearch={handleSearch}
              />
              <SelectField options={categories} className={"mb-4"} />
            </div>
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  {headings.map((head, index) => (
                    <th key={index} className="px-6 py-3 sm:text-sm text-xs text-left leading-4 text-primary-800 tracking-wider">
                      <div className="flex items-center justify-around">
                        <span>{head.label}</span>
                        {head.sort ? <i className="fa-solid fa-sort ms-3"></i> : null}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {currentProducts.map((product, index) => (
                  <tr key={index} className="border-b border-gray-500">
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{indexOfFirstItem + index + 1}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{product.productCode}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{product.productName}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{product.solds}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{product.stockQuantity}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{product.earn}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{product.rating}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{product.reviewCount}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                    <div className="sm:text-sm text-xs leading-5 text-gray-800">{new Date(product.startDate).toLocaleDateString()}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                    <div className="sm:text-sm text-xs leading-5 text-gray-800">{new Date(product.endDate).toLocaleDateString()}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <button
                        onClick={() => handleStatusToggle(product)}
                        className={`sm:text-sm text-[0.6rem] leading-5 font-semibold sm:px-3 px-2 sm:py-2 py-0.5 rounded-3xl ${
                          product.status ? "text-primary-900 bg-primary-500" : "text-red-900 bg-red-500"
                        }`}
                      >
                        {product.status ? "Active" : "Inactive"}
                      </button>
                    </td>
                    <td className="grid gap-5 grid-cols-2 sm:px-6 px-3 sm:py-8 py-4 whitespace-no-wrap">
                      <Link to={''} title="Edit" className="sm:text-sm text-xs text-neutral-200 me-3">
                        <i className="fa-regular fa-pen-to-square bg-yellow-500 rounded-lg px-2 py-2"></i>
                      </Link>
                      <button onClick={() => openDeleteModal(product._id)} title="Delete" className="sm:text-sm text-xs text-neutral-200">
                        <i className="fa-solid fa-trash bg-red-500 rounded-lg px-2 py-2"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
              <Pagination
                currentPage={currentPage}
                totalItems={filteredProducts.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
                display={true}
              />
              <PaginationSummary
                currentPage={currentPage}
                totalItems={filteredProducts.length}
                itemsPerPage={itemsPerPage}
                display={true}
              />
            </div>
          </div>
        </div>
      </div>
      <DeleteConfirmationModal
          isOpen={modalOpen}
          onCancel={closeDeleteModal}
          onConfirm={handleDelete}
          label={deleteModalLebel}
        />
    </div>
  );
};

export default ProductTable;
