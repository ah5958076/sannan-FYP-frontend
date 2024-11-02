import React, { useEffect, useState } from "react";
import axios from 'axios';
import Pagination from "../table/Pagination";
import PaginationSummary from "../table/PaginationSummary";
import { Link } from "react-router-dom";
import InputSearch from "../form-controls/InputSearch";
import SelectField from "../form-controls/SelectField";
import useGetServices from '../../hooks/useGetServices';
import useGetservicesByuserId from "../../hooks/useGetservicesByuserId";
import { getReviews } from '../../Apis/ecommerceApis/getReviewsApis';
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const ServiceTable = () => {
  const storedResponse = JSON.parse(localStorage.getItem("credential"));
  console.log("Cart stored response:", storedResponse._id);
    let userId = storedResponse._id; 
    const email = storedResponse.email;

  const headings = [
    { label: "#", sort: true },
    { label: "Name", sort: true },
    { label: "Sold", sort: true },
    { label: "Rating", sort: true },
    { label: "Review Count", sort: true },
    { label: "Start Date", sort: true },
    { label: "End Date", sort: true },
    { label: "Status", sort: false },
    { label: "Action", sort: false },
  ];

  const categories = [
    { label: "Active", value: "active" },
    { label: "Not Sold", value: "not_sold" },
    { label: "Expire", value: "expire" },
    { label: "Not uploaded", value: "not_upload" },
  ];

  const [reviewCounts, setReviewCounts] = useState({});
  const allServices = useGetServices() || [];
  const userSevices = useGetservicesByuserId() || [];
  const fetchedServices = email === "admin@gmail.com" ? allServices : userSevices;
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteModalLebel, setDeleteModalLebel] = useState('');
  const itemsPerPage = 3;
  console.log('fetchedServices:', fetchedServices)

  useEffect(() => {
    setServices(fetchedServices);
    setFilteredServices(fetchedServices);
  }, [fetchedServices]);

  useEffect(() => {
    const fetchedServices = async () => {
      const reviewCounts = {};
      for (let service of services) {
        try {
          const reviews = await getReviews(service._id);
          reviewCounts[service._id] = reviews.length;
        } catch (error) {
          console.error(`Error fetching reviews for service ${service._id}:`, error);
          reviewCounts[service._id] = 0; // Default to 0 reviews in case of an error
        }
      }
      setReviewCounts(reviewCounts);
    };

    if (services.length) {
      fetchedServices();
    }
  }, [services]);

  if (!services.length) {
    return <div>Loading...</div>; // Add a loading state or a message indicating that there are no services
  }

  const handleStatusToggle = async (service) => {
    const newStatus = !service.status;
    try {
      await axios.put(`http://localhost:5000/update-status/${service._id}`, { status: newStatus });
      setServices((prevServices) =>
        prevServices.map((s) =>
          s._id === service._id ? { ...s, status: newStatus } : s
        )
      );
      setFilteredServices((prevServices) =>
        prevServices.map((s) =>
          s._id === service._id ? { ...s, status: newStatus } : s
        )
      );
    } catch (error) {
      console.error(`Error updating status for service ${service._id}:`, error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/deleteServices/${deleteId}`);
      setServices((prevServices) => prevServices.filter(service => service._id !== deleteId));
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
    setDeleteModalLebel("Are you sure you want to delete this service?");
  };

  const closeDeleteModal = () => {
    setModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredServices(services);
    } else {
      const filtered = services.filter((service) =>
        service.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
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
  const currentServices = filteredServices.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen bg-secondary-100">
      <div className="max-w-screen-xl h-max md:px-6 px-3">
        <div className="-my-2 py-2 overflow-x-auto xl:w-[70rem] lg:w-[50rem] md:w-[35rem] sm:w-[37rem] w-[18rem]">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white px-8 py-6 rounded-lg">
            <h1 className="text-primary-800 font-bold text-2xl mt-5 mb-5">Services</h1>
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
                {currentServices.map((services, index) => (
                  <tr key={index} className="border-b border-gray-500">
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{indexOfFirstItem + index + 1}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{services.serviceName}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{services.sold || 0}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{services.rating || 0}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{reviewCounts[services._id] || 0}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{new Date(services.startDate).toLocaleDateString()}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <div className="sm:text-sm text-xs leading-5 text-gray-800">{new Date(services.endDate).toLocaleDateString()}</div>
                    </td>
                    <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                      <button
                        className={`sm:text-sm text-[0.6rem] leading-5 font-semibold sm:px-3 px-2 sm:py-2 py-0.5 rounded-3xl ${services.status ? 'text-primary-900 bg-primary-500' : 'text-red-900 bg-red-500'}`}
                        onClick={() => handleStatusToggle(services)}
                      >
                        {services.status ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                    <td className="grid gap-5 grid-cols-2 sm:px-6 px-3 sm:py-8 py-4 whitespace-no-wrap">
                      <Link to={`/services/${encodeURIComponent(JSON.stringify(services))}`} title="Edit" className="sm:text-sm text-xs text-neutral-200 me-3">
                        <i className="fa-regular fa-pen-to-square bg-yellow-500 rounded-lg px-2 py-2"></i>
                      </Link>
                      <Link onClick={() => openDeleteModal(services._id)} title="Delete" className="sm:text-sm text-xs text-neutral-200">
                        <i className="fa-solid fa-trash bg-red-500 rounded-lg px-2 py-2"></i>
                      </Link> 
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* table footer */}
            <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
              <Pagination
                display={true}
                currentPage={currentPage}
                totalPages={Math.ceil(filteredServices.length / itemsPerPage)}
                onPageChange={handlePageChange}
              />
              <PaginationSummary
                display={true}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filteredServices.length}
              />
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
    </div>
  );
};

export default ServiceTable;
