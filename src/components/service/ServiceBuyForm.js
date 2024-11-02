import React, { useState } from "react";
import RadioButtonGroup from "../form-controls/RadioButtonGroup";
import InputField from "../form-controls/InputField";
import FormSubmitButton from "../form-controls/FormSubmitButton";
import { useNavigate } from "react-router-dom";



const ServiceBuyForm = () => {
    const navigate = useNavigate();
    const [orderForm, setOrderForm] = useState({
      email: "",
      fname: "",
      lname: "",
      contact: "",
      address: "",
      street: "",
      city: "",
      postal: "",
      payment_method: "",
    });
    const options = [
      {
        label: "Payment on Delivery",
        value: "pod",
      },
      {
        label: "Payment with Card",
        value: "poc",
      },
    ];
    const handleRadioBtnChange = (e) => {
      setOrderForm({ ...orderForm, payment_method: e.target.value });
    };
  
    const handleInput = (e) => {
      const { name, value } = e.target;
      setOrderForm({ ...orderForm, [name]: value });
    };
  
    const handleSubmitForm = (e) => {
      e.preventDefault();
      navigate('/message-box/12');
    } 
  
    return (
      <div className="min-h-screen">
        <div className=" bg-neutral-200 min-h-[30rem] flex flex-col justify-center px-8 py-12 rounded-xl shadow-lg">
          <div className="relative py-3 sm:min-w-[25rem] max-w-[25rem] sm:mx-auto">
            <form className="max-w-md  mx-auto" onSubmit={handleSubmitForm}>
              <h1 className="text-primary-800 font-bold text-xl mt-5 mb-5">
                <u>General Information</u>
              </h1>
              <InputField
                type={"email"}
                name={"email"}
                label={"Email"}
                onChange={handleInput}
              />
              <div className="grid md:grid-cols-2 md:gap-6">
                <InputField
                  type={"text"}
                  name={"fname"}
                  label={"First Name"}
                  onChange={handleInput}
                />
                <InputField
                  type={"text"}
                  name={"lname"}
                  label={"Last Name"}
                  onChange={handleInput}
                />
              </div>
              <InputField
                type={"text"}
                name={"contact"}
                label={"Phone Number"}
                onChange={handleInput}
              />
  
              <h1 className="text-primary-800 font-bold text-xl mt-5 mb-5">
                <u>Address</u>
              </h1>
  
              <InputField
                type={"text"}
                name={"address"}
                label={"Address"}
                onChange={handleInput}
              />
              <InputField
                type={"text"}
                name={"street"}
                label={"Street"}
                onChange={handleInput}
              />
  
              <div className="grid md:grid-cols-2 md:gap-6">
                <InputField
                  type={"text"}
                  name={"city"}
                  label={"City"}
                  onChange={handleInput}
                />
                <InputField
                  type={"number"}
                  name={"postal"}
                  label={"Postal Code"}
                  onChange={handleInput}
                />
              </div>
  
              <h1 className="text-primary-800 font-bold text-xl mt-5 mb-5">
                <u>Payment Method</u>
              </h1>
              <div>
                <RadioButtonGroup
                  options={options}
                  selectedOption={orderForm.payment_method}
                  onChange={handleRadioBtnChange}
                />
              </div>
              <div className="flex items-center justify-center mt-5">
                <FormSubmitButton label={"Buy"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ServiceBuyForm
