import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { managebar } from "../../redux/actions/actionManageBar";
import { useDispatch } from "react-redux";
// import registerVendorApi from "../../apis/vendor/registerVendorApi";
import PlantLoader from "../../loader/PlantLoader";
const VendorSingup = () => {
  const dispatcher = useDispatch();
  
  useEffect(()=>{
    dispatcher(managebar(false));
  },[dispatcher])

  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(false)
  const [confirmPassword,setConfirmPassword] = useState("");
  const [vendor, setVendor] = useState({
    name: "",
    buisness_name: "",
    email: "",
    contact:"",
    buisness_address:"",
    city:"",
    postal:"",
    buisness_type:"",
    password: "",
    role: "",
  });
  const [inputError, setInputError] = useState({ dispaly: "hidden", msg: "" });

  const handleVendorInput = (e) => {
    const { name, value } = e.target;
    setVendor({ ...vendor, [name]: value });
  };

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   const {register,message} = await registerVendorApi(vendor,confirmPassword);
  //   setIsLoading(false);
  //   if(!register){
  //     setInputError({
  //       display: "block",
  //       msg: message,
  //     });
  //     return;
  //   }
  //   else{
  //     setInputError({ dispaly: "hidden" });
  //     navigate('/auth');
  //   }
  // };

  return (
    <div className="min-h-screen bg-secondary-100 py-6 flex flex-col justify-center sm:py-12">
      {
        isLoading ? <PlantLoader/> : null
      }
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:p-20 sm:pb-12">
          <form className="max-w-md mx-auto" onSubmit={''}>
            <div className="md:text-start text-center">
              <h1 className="text-2xl font-semibold text-primary-500">
                Signup to The Paradise of Plant
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 ">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="name"
                    name="name"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-600 focus:outline-none focus:border-primary-600"
                    placeholder="Full Name"
                    value={vendor.name}
                    onChange={handleVendorInput}
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm"
                  >
                    Username
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="buisness_name"
                    name="buisness_name"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-600 focus:outline-none focus:border-primary-600"
                    placeholder="Full Name"
                    value={vendor.buisness_name}
                    onChange={handleVendorInput}
                    required
                  />
                  <label
                    htmlFor="buisness_name"
                    className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm"
                  >
                    Buisness name
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="email"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-600 focus:outline-none focus:border-primary-600"
                    placeholder="Email address"
                    value={vendor.email}
                    onChange={handleVendorInput}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm"
                  >
                    Buisness Email
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="contact"
                    name="contact"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-600 focus:outline-none focus:border-primary-600"
                    placeholder="Email address"
                    value={vendor.contact}
                    onChange={handleVendorInput}
                    required
                  />
                  <label
                    htmlFor="contact"
                    className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm"
                  >
                    Buisness Contact
                  </label>
                </div>

                <div className="relative">
                  <input
                    autoComplete="off"
                    id="text"
                    name="buisness_address"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-600 focus:outline-none focus:border-primary-600"
                    placeholder="Email address"
                    value={vendor.buisness_address}
                    onChange={handleVendorInput}
                    required
                  />
                  <label
                    htmlFor="buisness_address"
                    className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm"
                  >
                    Buisness Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="city"
                    name="city"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-600 focus:outline-none focus:border-primary-600"
                    placeholder="Email address"
                    value={vendor.city}
                    onChange={handleVendorInput}
                    required
                  />
                  <label
                    htmlFor="city"
                    className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm"
                  >
                    Buisness City
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="postal"
                    name="postal"
                    type="number"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-600 focus:outline-none focus:border-primary-600"
                    placeholder="Email address"
                    value={vendor.postal}
                    onChange={handleVendorInput}
                    required
                  />
                  <label
                    htmlFor="postal"
                    className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm"
                  >
                    Buisness Postal Code
                  </label>
                </div>

                <div className="relative">
                    <select id="countries" className=" bg-primary-50 border border-primary-300 text-primary-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-primary-700 dark:border-primary-600 dark:placeholder-primary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    name="buisness_type"
                    value={vendor.buisness_type}
                    onChange={handleVendorInput}>
                        <option value="">Select Buisness Type</option>
                        <option value="individual">Individual</option>
                        <option value="company">Company</option>
                    </select>
                </div>

                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-900 focus:outline-none focus:border-primary-600"
                    placeholder="Password"
                    value={vendor.password}
                    onChange={handleVendorInput}
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="comfirmPassword"
                    name="comfirmPassword"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-900 focus:outline-none focus:border-primary-600"
                    placeholder="Comfirm Password"
                    value={confirmPassword}
                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                    required
                  />
                  <label
                    htmlFor="comfirmPassword"
                    className="absolute left-0 -top-3.5  text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm"
                  >
                    Confirm Password
                  </label>
                </div>

                <div
                  className={
                    inputError.dispaly +
                    " text-xs animate-pulse text-red-600 relative flex justify-center items-center"
                  }
                >
                  <div>{inputError.msg}</div>
                </div>

                <div className=" relative flex justify-center items-center py-3">
                  <button
                    className="btn btn-scale bg-primary-600 hover:bg-primary-800 text-white rounded-md px-2 py-1 w-full"
                    type="submit"
                  >
                    Signup
                  </button>
                </div>
                <div className="text-xs text-primary-600 relative flex justify-start items-start">
                  <div className="">
                    Already have a account{" "}
                    <Link
                      to="/auth"
                      className="text-secondary-300 hover:text-secondary-600 font-bold text-sm underline"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorSingup;
