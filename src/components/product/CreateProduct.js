import React, { useState } from "react";
import axios from "axios";
import InputField from "../form-controls/InputField";
import TextAreaField from "../form-controls/TextAreaField";
import InputImageField from "../form-controls/InputImageField";
import FormSubmitButton from "../form-controls/FormSubmitButton";
import SearchSelectField from "../form-controls/SearchSelectField";

const CreateProduct = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const storedResponse = JSON.parse(localStorage.getItem("credential"));
console.log("stored response:", storedResponse);
  const userId = storedResponse._id;
  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    stockQuantity: 0,
    productPrice: 0,
    category: [],
    startDate: null,
    endDate: null,
    productCode: ""
  });

  const [image, setImage] = useState(null);
  const [multipleImages, setMultipleImages] = useState([]);

  const generateProductCode = () => {
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generates a random number between 1000 and 9999
    const timestamp = Date.now(); 
    return `PRO${randomNumber}${timestamp}`;
  };
  

  const handleImg = (e) => {
    setImage(e.target.files[0]);
  };

  const handleMultipleImg = (e) => {
    setMultipleImages([...e.target.files]);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: date,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !product.productName ||
      !product.productDescription ||
      !product.productPrice ||
      !product.stockQuantity ||
      !image ||
      multipleImages.length === 0
    ) {
      window.alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    multipleImages.forEach((file, index) => {
      formData.append("multipleImages", file);
    });
    formData.append("productName", product.productName);
    formData.append("userId", userId);
    formData.append("productDescription", product.productDescription);
    formData.append("productPrice", product.productPrice);
    formData.append("stockQuantity", product.stockQuantity);
    formData.append("startDate", product.startDate);
    formData.append("endDate", product.endDate);
    formData.append("category", JSON.stringify(selectedCategories));
    formData.append("productCode", generateProductCode()); 

    try {
      const res = await axios.post("http://localhost:5000/postProduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        window.alert("Your Product was Successfully Added!");
        setProduct({
          productName: "",
          productDescription: "",
          stockQuantity: 0,
          productPrice: 0,
          category: [],
          startDate: null,
          endDate: null,
          productCode: ""
        });
        setImage(null);
        setMultipleImages([]);
      } else {
        window.alert("Your Product was Not Added!");
        console.log("res:", res);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const selectCategories = [
    { label: "Flowering Plants", value: "flowering-plants" },
    { label: "Succulents", value: "succulents" },
    { label: "Indoor Plants", value: "indoor-plants" },
    { label: "Herbs", value: "herbs" },
    { label: "Shrubs", value: "shrubs" },
  ];

  return (
    <div className="min-h-screen bg-secondary-100 flex flex-col justify-center md:px-6 md:pb-6 px-3 pb-3">
      <h4 className="ps-3 mb-5 font-semibold text-2xl leading-tight truncate text-primary-900">
        Create A Product
      </h4>
      <form onSubmit={handleFormSubmit}>
        <div className="max-w-screen-xl md:w-[80vw] h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6 mb-6">
          <div className="md:px-12 px-6">
            <h4 className="mb-5 font-semibold text-2xl leading-tight truncate text-primary-900">Details</h4>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <InputField type="text" name="productName" label="Product Name" value={product.productName} onChange={handleInput} />
              <InputField type="text" name="productPrice" label="Product Price" value={product.productPrice} onChange={handleInput} />
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <InputField type="number" name="stockQuantity" label="Stock" value={product.stockQuantity} onChange={handleInput} />
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <InputField
                type="date"
                name="startDate"
                label="Start Date"
                value={product.startDate ? product.startDate.toISOString().split("T")[0] : ""}
                onChange={(e) => handleDateChange("startDate", new Date(e.target.value))}
              />
              <InputField
                type="date"
                name="endDate"
                label="End Date"
                value={product.endDate ? product.endDate.toISOString().split("T")[0] : ""}
                onChange={(e) => handleDateChange("endDate", new Date(e.target.value))}
              />
            </div>
            <div className="md:mb-5">
              <TextAreaField label="Description" name="productDescription" value={product.productDescription} onChange={handleInput} />
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl md:w-[80vw] h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6 mb-6">
          <div className="md:px-12 px-6">
            <h4 className="mb-5 font-semibold text-2xl leading-tight truncate text-primary-900">Category</h4>
            <div className="grid sm:grid-cols-2 mb-5">
              <SearchSelectField
                options={selectCategories}
                placeholder="Select Category..."
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />
            </div>
            <div className="grid sm:grid-cols-2">
              <div className="border border-gray-300 flex flex-wrap gap-3 rounded-lg p-3">
                {selectedCategories && selectedCategories.length > 0 ? (
                  selectedCategories.map((category, index) => (
                    <div
                      key={index}
                      className="flex gap-1 items-center justify-around bg-primary-200 text-primary-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide truncate line-clamp-1"
                    >
                      <span className="inline-block">{category.label}</span>
                      <i
                        className="fa-solid fa-xmark cursor-pointer text-red-600 text-bold hover:scale-110"
                        onClick={() =>
                          setSelectedCategories((prevSelected) => prevSelected.filter((cat) => cat.value !== category.value))
                        }
                      ></i>
                    </div>
                  ))
                ) : (
                  <h4 className="text-center font-medium text-gray-400">No Category Selected Yet</h4>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl md:w-[80vw] h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6 mb-6">
          <div className="md:px-12 px-6">
            <h4 className="mb-5 font-semibold text-2xl leading-tight truncate text-primary-900">Images</h4>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <InputImageField label="Show Case Image" name="image" onChange={handleImg} />
              <InputImageField label="Images" multiple={true} name="multipleImages" onChange={handleMultipleImg} />
            </div>
          </div>
        </div>
        <div className="ps-3">
          <FormSubmitButton label="Create" />
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
