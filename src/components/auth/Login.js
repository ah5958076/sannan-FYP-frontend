import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../icons/GoogleIcon";
import { useDispatch } from "react-redux";
import { managebar } from "../../redux/actions/actionManageBar";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatcher = useDispatch();
  dispatcher(managebar(false));

  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", pass: "" });
  const [inputError, setInputError] = useState({ display: "hidden", msg: "" });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, pass } = user;

    if (!email || !pass) {
      setInputError({
        display: "block",
        msg: "Please Fill Up all required fields!",
      });
      toast.error("Please Fill Up all required fields!");
      return;
    }
    
    try {
      const res = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pass }),
      });
      const response = await res.json();
      if (res.status === 404 || !response) {
        toast.error("Invalid Credential!");
      } else if (res.status === 400 || !response) {
        toast.error("Fill the Credential!");
      } else {
        console.log("login response:", response);
        if (response) {
          localStorage.setItem("credential", JSON.stringify(response));
          dispatcher(managebar(true));

          console.log("Stored response successfully");
        } else {
          console.error("Response is undefined or null");
        }
        
        toast.success("Login Successful!", {
          onClose: () => navigate('/home')
        });
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-secondary-100 py-6 flex flex-col justify-center sm:py-12">
      <ToastContainer />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <form className="max-w-md mx-auto" onSubmit={handleLogin}>
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-green-500">
                Login Into The Paradise of Plant
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete=""
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-green-300 text-green-600 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    value={user.email}
                    onChange={handleUserInput}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-green-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-green-600 peer-focus:text-sm"
                  >
                    Email Address/Phone
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete=""
                    id="password"
                    name="pass"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-green-300 text-green-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    value={user.pass}
                    onChange={handleUserInput}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-green-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-green-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div
                  className={
                    inputError.display +
                    " text-xs animate-pulse text-red-600 relative flex justify-center items-center"
                  }
                >
                  <div>{inputError.msg}</div>
                </div>
                <div className="relative flex justify-center items-center py-3">
                  <Link
                    to={"/register"}
                    className="btn btn-scale bg-green-600 text-white rounded-md px-2 py-1"
                  >
                    Signup
                  </Link>
                  <button
                    className="btn btn-scale bg-green-600 text-white rounded-md px-3 py-1 mx-3"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="text-xs text-green-600 relative flex justify-start items-start">
                  <div className="">
                    Forget your password?{" "}
                    <Link
                      to="/password/recovery"
                      className="underline text-secondary-600 hover:text-secondary-800"
                    >
                      Forgot Password
                    </Link>
                  </div>
                </div>

                <div className="flex flex-row justify-center mb-8">
                  <span className="absolute bg-white px-4 text-primary-500 m">
                    or log-in with
                  </span>
                  <div className="w-full bg-gray-200 mt-3 h-px" />
                </div>
                <div className="flex flex-row gap-2">
                  <button className="bg-primary-600 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-primary-800 duration-100 ease-in-out my-3">
                    <GoogleIcon />
                    Google
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
