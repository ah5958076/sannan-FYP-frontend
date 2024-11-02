import React, { useState } from 'react';
import InputField from '../form-controls/InputField';
import SelectField from '../form-controls/SelectField';
import TextAreaField from '../form-controls/TextAreaField';
import FormSubmitButton from '../form-controls/FormSubmitButton';
import axios from 'axios';

const options = [
  { label: 'Individual', value: 'IN' },
  { label: 'Company', value: 'COM' },
];

const VendorProfile = () => {
  const storedResponse = JSON.parse(localStorage.getItem("credential"));
  console.log("Cart stored response:", storedResponse._id);
  
    let userId = storedResponse._id;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    businessType: "",
    description: "",
    address: "",
    pickupAddress: "",
    city: "",
    postalCode: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
        ...formData,
        userId: userId,
      };

    // Log each field
    console.log('name:', formData.name);
    console.log('userId:', userId);
    console.log('email:', formData.email);
    console.log('contact:', formData.contact);
    console.log('businessType:', formData.businessType);
    console.log('description:', formData.description);
    console.log('address:', formData.address);
    console.log('pickupAddress:', formData.pickupAddress);
    console.log('city:', formData.city);
    console.log('postalCode:', formData.postalCode);

    // Validation to ensure all fields are filled
    if (!formData.name || !formData.email || !formData.contact || !formData.businessType || !formData.address || !formData.pickupAddress || !formData.city || !formData.postalCode) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
        console.log('Submitting form data:', dataToSubmit); // Log form data before submission
      const response = await axios.post('http://localhost:5000/vendor-profile', dataToSubmit);
      if (response.status === 200) {
        alert('Profile Created successfully!');
      } else {
        alert('Failed to Created profile.');
      }
    } catch (error) {
      console.error('Error created profile:', error);
      alert('An error occurred while created profile.');
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectedOption = (value) => {
    setFormData({
      ...formData,
      businessType: value,
    });
    console.log("Selected business type:", value); // Add this line to debug
  };

  return (
    <div className="min-h-screen bg-secondary-100 flex justify-center md:p-6 p-3">
      <form onSubmit={handleFormSubmit}>
        <h4 className="mt-2 font-semibold text-3xl ms-3 mb-5 leading-tight truncate text-primary-900">
          Profile
        </h4>
        <div className="max-w-screen-xl md:w-[80vw] h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6 mb-6">
          <div className="md:px-12 px-6">
            <h4 className="mt-2 font-semibold text-2xl leading-tight truncate text-primary-900">
              General Information
            </h4>
            <div className='grid sm:grid-cols-2 gap-6 mt-6'>
              <InputField
                type={"text"}
                name={"name"}
                label={"Business Name"}
                onChange={handleInput}
              />
              <InputField
                type={"email"}
                name={"email"}
                label={"Business Email"}
                onChange={handleInput}
              />
            </div>
            <div className='grid sm:grid-cols-2 gap-6 mt-6'>
              <InputField
                type={"text"}
                name={"contact"}
                label={"Business Contact"}
                onChange={handleInput}
              />
              <SelectField
                label={'Business Type'}
                options={options}
                selectedOption={formData.businessType}
                onClick={handleSelectedOption}
              />
            </div>
            <div className='mt-5'>
              <TextAreaField
                label={'Business Description'}
                name={"description"}
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl md:w=[80vw] h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6">
          <div className="md:px-12 px-6">
            <h4 className="mt-2 font-semibold text-2xl leading-tight truncate text-primary-900 mb-6">
              Address Information
            </h4>
            <InputField
              type={"text"}
              name={"address"}
              label={"Business Address"}
              onChange={handleInput}
            />
            <InputField
              type={"text"}
              name={"pickupAddress"}
              label={"Pickup Address"}
              onChange={handleInput}
            />
            <div className='grid sm:grid-cols-2 sm:gap-6'>
              <InputField
                type={"text"}
                name={"city"}
                label={"City"}
                onChange={handleInput}
              />
              <InputField
                type={"number"}
                name={"postalCode"}
                label={"Postal Code"}
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        <FormSubmitButton label={"Update"} className={"mt-5 ms-3"} />
      </form>
    </div>
  );
};

export default VendorProfile;
