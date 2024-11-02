import React from "react";
import InputSearch from "../form-controls/InputSearch";

const CreateContact = () => {
    
  const searchedItems = [
    { img: "/assets/images/landing-page/plant-market.jpg" ,name: "John Doe", contact: "+1 555 123 4567" },
    { img: "/assets/images/landing-page/plant-market.jpg" ,name: "Jane Smith", contact: "+1 555 987 6543" },
    { img: "/assets/images/landing-page/plant-market.jpg" ,name: "Bob Johnson", contact: "+1 555 555 1234" },
    { img: "/assets/images/landing-page/plant-market.jpg" ,name: "Alice Williams", contact: "+43 660 1234567" },
    { img: "/assets/images/landing-page/plant-market.jpg" ,name: "Charlie Brown", contact: "+43 660 9876543" },
    { img: "/assets/images/landing-page/plant-market.jpg" ,name: "Eva Davis", contact: "+1 555 444 3333" },
    { img: "/assets/images/landing-page/plant-market.jpg" ,name: "Frank Miller", contact: "+43 660 1112222" },
    { img: "/assets/images/landing-page/plant-market.jpg" ,name: "Grace Taylor", contact: "+1 555 666 7777" },
    { img: "/assets/images/landing-page/plant-market.jpg" ,name: "Henry Adams", contact: "+1 555 333 4444" },
    { img: "/assets/images/landing-page/plant-market.jpg" ,name: "Isabel Martinez", contact: "+1 555 222 1111" },
    { img: "/assets/images/landing-page/plant-market.jpg" ,name: "John Smith", contact: "+1 555 888 9999" },
  ];

  return (
    <div className=" min-h-screen bg-secondary-100 flex justify-center md:p-6 p-3 px-3">
      <div className="max-w-screen-xl sm:w-[30rem] w-[18rem] h-max bg-neutral-200 flex flex-col items-center  gap-3 rounded-xl py-6 px-3">
        <h1 className="text-primary-900 font-semibold md:text-2xl text-xl my-5 text-center">
          Add New Contact
        </h1>
        <InputSearch/>
        {
            searchedItems && searchedItems.length > 0 ? (
                <div className="z-10  bg-white divide-y h-[60vh] overflow-y-auto divide-gray-100 rounded-lg shadow w-max dark:bg-gray-700">
                    <ul className="py-2 text-gray-700 " >
                        {
                            searchedItems.map((items, index) => (
                                <li key={index} className=" transition-all md:text-base sm:text-sm text-xs duration-300 cursor-pointer sm:px-6 px-3 flex justify-around sm:gap-12 gap-3 items-center hover:bg-primary-600 hover:text-neutral-200">
                                    <div className="flex gap-3 items-center justify-center py-3">
                                        <img src={items.img} alt="" className='object-cover min-w-[40px] h-[40px] rounded-full'/>
                                        <div className="flex flex-col">
                                            <span>{items.name}</span>
                                            <span>{items.contact}</span>
                                        </div>
                                    </div>
                                    <i class="fa-solid fa-user-plus"></i>
                                </li>
                            ))
                        }
                    </ul>
                </div>
          ): <div className="py-3 ">Search Something...</div>
          }
      </div>
    </div>
  );
};

export default CreateContact;
