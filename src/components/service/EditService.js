import React, { useState, useEffect } from "react";
import InputField from "../form-controls/InputField";
import TextAreaField from "../form-controls/TextAreaField";
import InputImageField from "../form-controls/InputImageField";
import FormSubmitButton from "../form-controls/FormSubmitButton";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditService = () => {
  const { services } = useParams();
  const [image, setImage] = useState(null);
  const [multipleImages, setMultipleImages] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    start_date: "",
    end_date: "",
    description: "",
    // showcaseImage: null, // For single image
    // images: [] // For multiple images
  });

  useEffect(() => {
    if (services) {
      const decodedService = JSON.parse(decodeURIComponent(services));
      setFormData({
        name: decodedService.serviceName || "",
        price: decodedService.servicePrice || "",
        startDate: decodedService.startDate ? new Date(decodedService.startDate).toISOString().split("T")[0] : "",
        endDate: decodedService.endDate ? new Date(decodedService.endDate).toISOString().split("T")[0] : "",
      
        description: decodedService.description || "",

      });
    }
  }, [services]);
  console.log('formData:', formData)


  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImg = (e) => {
    setImage(e.target.files[0]);
  };

  const handleMultipleImg = (e) => {
    setMultipleImages([...e.target.files]);
  };


  const formDataToObject = (formData) => {
    const object = {};
    formData.forEach((value, key) => {
      if (object.hasOwnProperty(key)) {
        if (!Array.isArray(object[key])) {
          object[key] = [object[key]];
        }
        object[key].push(value);
      } else {
        object[key] = value;
      }
    });
    return object;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const decodedService = JSON.parse(decodeURIComponent(services));
    console.log('decodedService:', decodedService)

    const { name, price, startDate, endDate, description} = formData;

    if (!name || !price || !startDate || !endDate || !description || !image || multipleImages.length === 0) {
      window.alert("Please fill in all fields.");
      return;
    }

    const data = new FormData();
    data.append("serviceName", name);
    data.append("servicePrice", price);
    data.append("startDate", startDate);
    data.append("endDate", endDate);
    data.append("description", description);
    data.append("image", image);
    multipleImages.forEach((file, index) => {
      data.append("multipleImages", file);
    });

    try {
      // Convert FormData to a readable object for logging
      const formDataObject = formDataToObject(data);
      console.log('data:', formDataObject); const res = await axios.post(`http://localhost:5000/update-service/${decodedService._id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        window.alert("Service updated successfully!");
        setFormData({
          name: "",
          price: "",
          start_date: "",
          end_date: "",
          description: "",
        })
        // Optionally, reset form fields or handle other state updates after successful submission
      } else {
        window.alert("Failed to update service.");
      }
    } catch (error) {
      console.log("Error updating service:", error);
      window.alert("An error occurred while updating service.");
    }
  };

  return (
    <div className="min-h-screen bg-secondary-100 flex justify-center md:p-6 p-3">
      <form onSubmit={handleSubmit}>
        <div className="max-w-screen-xl md:w-[80vw] h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6 mb-6">
          <div className="md:px-12 px-6">
            <h4 className="mt-2 mb-3 font-semibold text-2xl leading-tight truncate text-primary-900">
              Edit Service
            </h4>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <InputField
                type={"text"}
                name={"name"}
                label={"Service Name"}
                onChange={handleInput}
                value={formData.name}
              />
              <InputField
                type={"text"}
                name={"price"}
                label={"Service Price"}
                onChange={handleInput}
                value={formData.price}
              />
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <InputField
                type={"date"}
                name={"startDate"}
                label={"Start Date"}
                value={formData.startDate}
                onChange={handleInput}
              />
              <InputField
                type={"date"}
                name={"endDate"}
                label={"End Date"}
                value={formData.endDate}
                onChange={handleInput}
              />
            </div>
            <div className="md:mb-5">
              <TextAreaField
                label={"Description"}
                name={"description"}
                placeholder={"Service Description"}
                onChange={handleInput}
                value={formData.description}
              />
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <InputImageField label={"Show Case Image"} name="image" onChange={handleImg} />
              <InputImageField label={"Images"} multiple={true} name="multipleImages" onChange={handleMultipleImg} />

            </div>
          </div>
        </div>
        <div className="ps-3">
          <FormSubmitButton label={"Update"} />
        </div>
      </form>
    </div>
  );
};

export default EditService;
