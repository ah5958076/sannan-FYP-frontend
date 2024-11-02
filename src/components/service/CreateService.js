import React, { useState } from "react";
import InputField from "../form-controls/InputField";
import TextAreaField from '../form-controls/TextAreaField';
import InputImageField from "../form-controls/InputImageField";
import FormSubmitButton from "../form-controls/FormSubmitButton";
import axios from "axios";



const CreateService = () => {
  const storedResponse = JSON.parse(localStorage.getItem("credential"));
  console.log("Cart stored response:", storedResponse._id);
    let userId = storedResponse._id; 

  const [formData, setFormData] = useState({
    serviceName: "",
    servicePrice: "",
    startDate: "",
    endDate: "",
    description: ""
  });
  const [image, setImage] = useState(null);
  const [multipleImages, setMultipleImages] = useState([]);

  const handleImg = (e) => {
    setImage(e.target.files[0]);
  };

  const handleMultipleImg = (e) => {
    setMultipleImages([...e.target.files]);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDateChange = (name, date) => {
    setFormData((prevProduct) => ({
      ...prevProduct,
      [name]: date,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { serviceName, servicePrice, startDate, endDate, description } = formData;

    if (!serviceName || !servicePrice || !startDate || !endDate || !description || !image || multipleImages.length === 0) {
      window.alert("Please fill in all fields.");
      return;
    }

    const data = new FormData();
    data.append("serviceName", serviceName);
    data.append("userId", userId);
    data.append("servicePrice", servicePrice);
    data.append("startDate", startDate);
    data.append("endDate", endDate);
    data.append("description", description);
    data.append("image", image);
    multipleImages.forEach((file, index) => {
      data.append("multipleImages", file);
    });

    try {
      const res = await axios.post("http://localhost:5000/create-service", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        window.alert("Your Service was Successfully Added!");
        setFormData({
          serviceName: "",
          servicePrice: "",
          startDate: "",
          endDate: "",
          description: ""
        });
        image(null);
        setMultipleImages([]);
      } else {
        window.alert("Your Service was Not Added!");
        console.log("res:", res);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };



  return (
    <div className=" min-h-screen bg-secondary-100 flex justify-center md:p-6 p-3 ">
      <form onSubmit={handleFormSubmit}>
        <div className="max-w-screen-xl md:w-[80vw] h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6 mb-6">
          <div className="md:px-12 px-6">
            <h4 className="mt-2 mb-3 font-semibold text-2xl leading-tight truncate text-primary-900">
              Create Service
            </h4>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <InputField
                type={"text"}
                name={"serviceName"}
                label={"Service Name"}
                value={formData.serviceName}
                onChange={handleInput}
              />
              <InputField
                type={"text"}
                name={"servicePrice"}
                label={"Service Price"}
                value={formData.servicePrice}
                onChange={handleInput}
              />
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <InputField
                type={"date"}
                name={"startDate"}
                label={"Start Date"}
                value={formData.startDate ? formData.startDate.toISOString().split("T")[0] : ""}
                onChange={(e) => handleDateChange("startDate", new Date(e.target.value))}
              />
              <InputField
                type={"date"}
                name={"endDate"}
                label={"End Date"}
                value={formData.endDate ? formData.endDate.toISOString().split("T")[0] : ""}
                onChange={(e) => handleDateChange("endDate", new Date(e.target.value))}              />
            </div>
            <div className="md:mb-5">
              <TextAreaField label={"Description"} name={"description"} value={formData.description} onChange={handleInput}/>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <InputImageField label={"Show Case Image"} name="image" onChange={handleImg} />
              <InputImageField label={"Images"} multiple={true} name="multipleImages" onChange={handleMultipleImg}/>
            </div>
          </div>
        </div>
        <div className="ps-3">
          <FormSubmitButton label={"Create"}/>
        </div>
      </form>
    </div>
  );
};

export default CreateService;
