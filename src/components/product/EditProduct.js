import React, { useState } from "react";
import InputField from "../form-controls/InputField";
import TextAreaField from '../form-controls/TextAreaField';
import InputImageField from "../form-controls/InputImageField";
import FormSubmitButton from "../form-controls/FormSubmitButton";
import SearchSelectField from "../form-controls/SearchSelectField";

const product = {
    id: 1,
    name: "Rose",
    img: "/assets/images/landing-page/plant-market.jpg",
    price: 10.99,
    quantity: 25,
    rating:4.8,
    description: "Beautiful red roses for your garden.",
    uploadedBy: "UserA",
    start_date: '25-05-2024',
    end_date: '13-07-2024',
  }


const EditProduct = () => {
  
    const [selectedCategories,setSelectedCategories] = useState([
        { label: "Flowering Plants", value: "flowering-plants" },
        { label: "Succulents", value: "succulents" },
        { label: "Indoor Plants", value: "indoor-plants" },
      ]);
  
      const handleFormSubmit = (e) => {
          e.preventDefault();
      }
      const selectCategories = [
          { label: "Flowering Plants", value: "flowering-plants" },
          { label: "Succulents", value: "succulents" },
          { label: "Indoor Plants", value: "indoor-plants" },
          { label: "Herbs", value: "herbs" },
          { label: "Shrubs", value: "shrubs" }
      ];
  
      
      const handleInput = () => {};
      return (
        <div className=" min-h-screen bg-secondary-100 flex flex-col justify-center md:px-6 md:pb-6 px-3 pb-3 ">
          <h4 className="ps-3 mb-5 font-semibold text-2xl leading-tight truncate text-primary-900">
          Edit Product
          </h4>
          <form onSubmit={handleFormSubmit}>
            <div className="max-w-screen-xl md:w-[80vw]  h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6 mb-6">
              <div className="md:px-12 px-6">
                  <h4 className=" mb-5 font-semibold text-2xl leading-tight truncate text-primary-900">
                      Details
                  </h4>
                <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
                  <InputField
                    type={"text"}
                    name={"name"}
                    label={"Product Name"}
                    onChange={handleInput}
                    value={product.name}
                  />
                  <InputField
                    type={"text"}
                    name={"price"}
                    label={"Product Price"}
                    onChange={handleInput}
                    value={product.price}

                  />
                </div>
                
                <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
                  <InputField
                    type={"number"}
                    name={"stock"}
                    label={"Stock"}
                    onChange={handleInput}
                    value={product.quantity}

                  />                
                </div>
                <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
                  <InputField
                    type={"date"}
                    name={"start_date"}
                    label={"Start Date"}
                    onChange={handleInput}
                    value={product.start_date}
                  />
                  <InputField
                    type={"date"}
                    name={"end_date"}
                    label={"End Date"}
                    onChange={handleInput}
                    value={product.end_date}
                  />
                </div>
                <div className="md:mb-5">
                  <TextAreaField label={"Description"} placeholder={product.description}/>
                </div>
              </div>
            </div>
              <div className="max-w-screen-xl md:w-[80vw]   h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6 mb-6">
                  <div className="md:px-12 px-6">
                      <h4 className=" mb-5 font-semibold text-2xl leading-tight truncate text-primary-900">
                          Category
                      </h4>
                      <div className="grid sm:grid-cols-2 mb-5">
                          <SearchSelectField options={selectCategories}  placeholder={"Select Category..."}/>
                      </div>
                      <div className="grid sm:grid-cols-2">
                          <div className="border border-gray-300 flex flex-wrap gap-3 rounded-lg p-3">
                              {
                                  (selectedCategories && selectedCategories.length > 0)  ? 
                                      selectedCategories.map((category,index)=> 
                                      <div className="flex gap-1 items-center justify-around bg-primary-200 text-primary-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide truncate line-clamp-1">
                                              <span className="inline-block ">{category.label}</span>
                                              <i className="fa-solid fa-xmark cursor-pointer text-red-600 text-bold hover:scale-110"></i>
                                      </div>
                                      ): <h4 className="text-center font-medium text-gray-400">No Category Selected Yet</h4> 
                              }
                          </div>
                      </div>
                  </div>
              </div>
  
              <div className="max-w-screen-xl md:w-[80vw]   h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6 mb-6">
                <div className="md:px-12 px-6">
                  <h4 className=" mb-5 font-semibold text-2xl leading-tight truncate text-primary-900">
                      Images
                  </h4>
                  <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
                    <InputImageField label={"Show Case Image"}/>
                    <InputImageField label={"Images"} multiple={true}/>
                  </div>
                </div>
              </div>
            <div className="ps-3">
              <FormSubmitButton label={"Update"}/>
            </div>
          </form>
        </div>
      );
}

export default EditProduct
