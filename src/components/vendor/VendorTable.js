import React, { useState, useEffect } from "react";
import Pagination from "../table/Pagination";
import PaginationSummary from "../table/PaginationSummary";
import { Link } from "react-router-dom";
import InputSearch from "../form-controls/InputSearch";
import SelectField from "../form-controls/SelectField";
import VendorModal from "../modal/VendorModal";
import { getVenders } from "../../Apis/ecommerceApis/getVendersApis";
import axios from "axios";
import DeleteConfirmationModal from "../service/DeleteConfirmationModal";

const VendorTable = () => {
  const [venders, setVenders] = useState([]);
  const [filteredVenders, setFilteredVenders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteModalLebel, setDeleteModalLebel] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchVenders = async () => {
      try {
        const vendersData = await getVenders();
        setVenders(vendersData);
        setFilteredVenders(vendersData); // Initialize filtered vendors
      } catch (error) {
        console.error("Error fetching vendersData:", error);
      }
    };

    fetchVenders();
  }, []);

  const handleVendorModal = (vendor) => {
    setSelectedVendor(vendor);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedVendor(null);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredVenders(venders);
    } else {
      const filtered = venders.filter((vendor) =>
        vendor.businessName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredVenders(filtered);
      setCurrentPage(1); // Reset to first page after search
    }
  };

  const headings = [
    { label: "#", sort: true },
    { label: "Name", sort: true },
    { label: "Username", sort: true },
    { label: "Email", sort: true },
    { label: "Rating", sort: true },
    { label: "Revenue", sort: true },
    { label: "Complain", sort: true },
    { label: "Status", sort: true },
    { label: "Action", sort: false },
  ];

  const categories = [
    { label: "Read", value: "paid" },
    { label: "Un-read", value: "un-paid" },
    { label: "Responded", value: "delivered" },
  ];

  const handleStatusToggle = async (vender) => {
    const newStatus = !vender.status;
    try {
      await axios.put(`http://localhost:5000/updateVender-status/${vender._id}`, { status: newStatus });
      setVenders((prevVenders) =>
        prevVenders.map((s) =>
          s._id === vender._id ? { ...s, status: newStatus } : s
        )
      );
      setFilteredVenders((prevVenders) =>
        prevVenders.map((s) =>
          s._id === vender._id ? { ...s, status: newStatus } : s
        )
      );
    } catch (error) {
      console.error(`Error updating status for service ${vender._id}:`, error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/deleteVender/${deleteId}`);
      setVenders((prevVenders) => prevVenders.filter(vender => vender._id !== deleteId));
      setFilteredVenders((prevVenders) => prevVenders.filter(vender => vender._id !== deleteId));
      console.log(`Vender with ID ${deleteId} deleted successfully.`);
      setModalOpen(false);
    } catch (error) {
      console.error(`Error deleting vender with ID ${deleteId}:`, error);
      window.alert(`Error deleting vender with ID ${deleteId}`);
    }
  };

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setModalOpen(true);
    setDeleteModalLebel("Are you sure you want to delete this vender?")
  };

  const closeDeleteModal = () => {
    setModalOpen(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVenders = filteredVenders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <DeleteConfirmationModal
        isOpen={modalOpen}
        onCancel={closeDeleteModal}
        onConfirm={handleDelete}
        label={deleteModalLebel}
      />
      <VendorModal isOpen={openModal} onClick={closeModal} vendor={selectedVendor} />
      <div className="min-h-screen bg-secondary-100">
        <div className="max-w-screen-xl h-max md:px-6 px-3">
          <div className="-my-2 py-2 overflow-x-auto xl:w-[70rem] lg:w-[50rem] md:w-[35rem] sm:w-[37rem] w-[18rem]">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white px-8 py-6 rounded-lg">
              <h1 className="text-primary-800 font-bold text-2xl mt-5 mb-5">
                Vendor
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
                    {headings?.map((head, index) => (
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
                  {currentVenders?.map((vendor, index) => (
                    <tr key={index} className="border-b border-gray-500">
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {index + 1}
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {vendor.businessName}
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {vendor.userId?.userName}
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {vendor.businessEmail}
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        N/A
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        N/A
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        {vendor.complain || 0}
                      </td>
                      <td className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap">
                        <button
                          className={`sm:text-sm text-[0.6rem] leading-5 font-semibold sm:px-3 px-2 sm:py-2 py-0.5 rounded-3xl ${vendor.status ? 'text-primary-900 bg-primary-500' : 'text-red-900 bg-red-500'}`}
                          onClick={() => handleStatusToggle(vendor)}
                        >
                          {vendor.status ? 'Active' : 'Inactive'}
                        </button>
                      </td>
                      <td className="grid gap-5 grid-cols-2 sm:px-6 px-3 sm:py-8 py-4 whitespace-no-wrap">
                        <Link onClick={() => openDeleteModal(vendor._id)} title="Delete" className="sm:text-sm text-xs text-neutral-200">
                          <i className="fa-solid fa-trash bg-red-500 rounded-lg px-2 py-2"></i>
                        </Link>
                        <button
                          title="View"
                          className="sm:text-sm text-xs text-neutral-200"
                          onClick={() => handleVendorModal(vendor)}
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
                  totalPages={Math.ceil(filteredVenders.length / itemsPerPage)}
                  onPageChange={handlePageChange}
                />
                <PaginationSummary
                  display={true}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  totalItems={filteredVenders.length}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorTable;
