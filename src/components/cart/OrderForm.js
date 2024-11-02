import React, { useState } from "react";
import RadioButtonGroup from "../form-controls/RadioButtonGroup";
import InputField from "../form-controls/InputField";
import FormSubmitButton from "../form-controls/FormSubmitButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
import { useSelector, useDispatch } from 'react-redux';

const OrderForm = () => {
  let productIdies = [];
  const cart = useSelector((state) => state.cart);
  console.log('cart.cart[0]:', cart.cart[0]);
  let totalAmount = 0.75;
  if (Array.isArray(cart.cart[0])) {
      cart.cart[0].forEach(item => {
          if (item.productId && item.productId._id && item.quantity) {
            totalAmount+=item.quantity*item.productId.productPrice;
              productIdies.push({
                  productId: item.productId._id,
                  quantity: item.quantity
              });
              console.log("item.productId._id", item.productId._id);
          }
      });
  } else {
      console.error('cart.cart is not an array');
  }
  totalAmount.toFixed(2);
  console.log("totalAmount:",totalAmount);
 totalAmount.toFixed(2);  
  
  console.log('productIdies:', productIdies)
  const generateOrderCode = () => {
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generates a random number between 1000 and 9999
    const timestamp = Date.now(); 
    return `ODR${randomNumber}${timestamp}`;
  };
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
    totalAmount:totalAmount,
    orderCode:generateOrderCode(),
    productIdies:productIdies

  });
  const options = [
    { label: "Payment on Delivery", value: "pod" },
    { label: "Payment with Card", value: "poc" },
  ];

  const handleRadioBtnChange = (e) => {
    setOrderForm({ ...orderForm, payment_method: e.target.value });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setOrderForm({ ...orderForm, [name]: value });
  };
  
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log('orderForm:', orderForm)
    try {
      const response = await axios.post('http://localhost:5000/createOrder', orderForm, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        console.log('Order created:', response.data);

        // Update solds after order creation
        console.log('cart.cart[0]:', cart.cart[0])
        const productsToUpdate = cart.cart[0].map(item => ({
          productId: item.productId,
          quantity: item.quantity
        }));
        await axios.post('http://localhost:5000/update-solds', { updateproducts: productsToUpdate });

        navigate('/success');
      } else {
        console.error('Error creating order:', response.data.message);
      }
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51PJd7tA91s3iRYXSSClj5tq3WSPwH80GRIHsIVxbnto1TSUKKnR82j3F81hF0U8CAoptUtsB203AHG3eZatLPrU800u4eKbsox");
    const body = { products: cart.cart[0] };
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(`http://localhost:5000/create-checkout-session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });
    const session = await response.json();
    stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="min-h-screen">
      <div className=" bg-neutral-200 min-h-[30rem] flex flex-col justify-center px-8 py-12 rounded-xl shadow-lg">
        <div className="relative py-3 sm:min-w-[25rem] max-w-[25rem] sm:mx-auto">
          <form className="max-w-md mx-auto" onSubmit={handleSubmitForm}>
            <h1 className="text-primary-800 font-bold text-xl mt-5 mb-5">
              <u>General Information</u>
            </h1>
            <InputField type={"email"} name={"email"} label={"Email"} onChange={handleInput} />
            <div className="grid md:grid-cols-2 md:gap-6">
              <InputField type={"text"} name={"fname"} label={"First Name"} onChange={handleInput} />
              <InputField type={"text"} name={"lname"} label={"Last Name"} onChange={handleInput} />
            </div>
            <InputField type={"text"} name={"contact"} label={"Phone Number"} onChange={handleInput} />
            <h1 className="text-primary-800 font-bold text-xl mt-5 mb-5">
              <u>Address</u>
            </h1>
            <InputField type={"text"} name={"address"} label={"Address"} onChange={handleInput} />
            <InputField type={"text"} name={"street"} label={"Street"} onChange={handleInput} />
            <div className="grid md:grid-cols-2 md:gap-6">
              <InputField type={"text"} name={"city"} label={"City"} onChange={handleInput} />
              <InputField type={"number"} name={"postal"} label={"Postal Code"} onChange={handleInput} />
            </div>
            <h1 className="text-primary-800 font-bold text-xl mt-5 mb-5">
              <u>Payment Method</u>
            </h1>
            <div>
              <RadioButtonGroup options={options} selectedOption={orderForm.payment_method} onChange={handleRadioBtnChange} />
            </div>
            <div className="flex items-center justify-center mt-5">
              <FormSubmitButton label={"Submit"} onClick={makePayment} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
