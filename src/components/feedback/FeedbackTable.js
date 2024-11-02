import React, { useState } from "react";
import Pagination from "../table/Pagination";
import PaginationSummary from "../table/PaginationSummary";
import { Link } from "react-router-dom";
import InputSearch from "../form-controls/InputSearch";
import SelectField from "../form-controls/SelectField";
import FeedbackModal from "../modal/FeedbackModal";

const FeedbackTable = () => {
   
  const [openModal,setOpenModal] = useState(false);
  const handleFeedbackModal = () => {
    setOpenModal(!openModal);
  }


    const headings = [
        {    
            label: "#",
            sort : true
        },
        {    
            label: "Name",
            sort : true
        },
        {    
            label: "Email",
            sort : true
        },
        {    
            label: "Date",
            sort : true
        },
        {    
            label: "Feedback",
            sort : true
        },
        {    
            label: "Status",
            sort : true
        },
        {    
            label: "Action",
            sort : false
        },
    ];

  const tableData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      date: "02-02-2024 17:03",
      feedback: "Excellent service, highly recommended!",
      status:"read",  
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice.smith@example.com",
      date: "02-02-2024 17:03",
      feedback: "Good experience overall. One suggestion for improvement would be to add more payment options.",
      status:"un-read",  
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      date: "02-02-2024 17:03",
      feedback: "Could be improved in certain areas. I suggest optimizing the website for mobile users and enhancing the search functionality.",
      status:"read",  
    },
    {
      id: 4,
      name: "Emma Brown",
      email: "emma.brown@example.com",
      date: "02-02-2024 17:03",
      feedback: "Unsatisfactory experience. There were frequent errors while navigating the website, and the checkout process was confusing.",
      status:"un-read",  
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      date: "02-02-2024 17:03",
      feedback: "Exceptional service, would definitely recommend!",
      status:"read",  
    }
  ];
  
  
  const categories = [
    {
        label: "Read",
        value: "paid"
    },
    {
        label: "Un-read",
        value: "un-paid"
    },
    {
        label: "Responded",
        value: "delivered"
    },
  ]
  return (
    <>
      <FeedbackModal isOpen={openModal} onClick={handleFeedbackModal} />
      <div className=" min-h-screen bg-secondary-100">
        <div className="max-w-screen-xl h-max md:px-6 px-3">
          <div className="-my-2 py-2 overflow-x-auto xl:w-[70rem] lg:w-[50rem] md:w-[35rem] sm:w-[37rem] w-[18rem]">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white px-8 py-6 rounded-lg">
                  <h1 className="text-primary-800 font-bold text-2xl mt-5 mb-5">
                      Feedback 
                  </h1>
                <div className="flex justify-start gap-3 items-center ps-1">
                  <InputSearch
                    className={"md:w-[30rem] border border-gray-400  mb-5"}
                    bg={"bg-neutral-100"}
                  />
                  <SelectField options={categories} className={"mb-4"}/>
                </div>
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-300">
                    {
                      headings?.map((head, index) => (
                          <th
                          key={index}
                          className=" px-6 py-3  sm:text-sm text-xs  text-left leading-4 text-primary-800 tracking-wider"
                          >
                              <div className="flex items-center justify-around">
                                  <span>{head.label}</span>{head.sort ? (<i className="fa-solid fa-sort ms-3 cursor-pointer"></i>) : null}
                              </div>
                          </th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {
                      tableData?.map((data, index) => (
                          <tr key={index} className="border-b border-gray-500">
                                {Object.entries(data).map(([key,value], valueIndex) => 
                                <td key={valueIndex} className="sm:px-6 px-3 sm:py-4 py-2 whitespace-no-wrap ">
                                    {
                                        
                                        (key  === 'status') ?
                                        (
                                            <button className={`sm:text-sm text-[0.6rem] text-white leading-5 font-semibold sm:px-4 px-2 sm:py-2 py-0.5 rounded-xl ` +
                                            (value === 'read' ? " bg-primary-500" : " bg-red-500")}>
                                                <i className="fa-solid fa-book-open" ></i>
                                            </button>) :  
                                        (
                                            <div className="sm:text-sm text-xs leading-5 text-gray-800">
                                                {value}
                                            </div>
                                        )
                                    }
                                </td>
                                )}
                                <td key={data.id}  className="grid gap-5 grid-cols-2 sm:px-6 px-3 sm:py-8 py-4 whitespace-no-wrap  ">
                                    
                                    <Link to={''}  title="Delete" className="sm:text-sm text-xs text-neutral-200 ">
                                        <i className="fa-solid fa-trash bg-red-500 rounded-lg px-2 py-2"></i>
                                    </Link>
                                    <button title="View" className="sm:text-sm text-xs text-neutral-200 " onClick={handleFeedbackModal}>
                                        <i className="fa-solid fa-eye bg-blue-500 rounded-lg px-2 py-2"></i>
                                    </button>
                                </td>
                            </tr>
                  ))}
                </tbody>
              </table>
              {/* tbale footer */}
              <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                <Pagination display={true} />
                <PaginationSummary display={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedbackTable
