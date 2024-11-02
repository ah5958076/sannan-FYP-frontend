import React, { useState } from 'react';
import GoogleIcon from '../../icons/GoogleIcon';
import { Link, useNavigate } from 'react-router-dom';
import { managebar } from '../../redux/actions/actionManageBar';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const dispatcher = useDispatch();
  dispatcher(managebar(false));

  const navigate = useNavigate();
  const [user, setUser] = useState({ userName: "", email: "", pass: "", cPass: "" });
  const [inputError, setInputError] = useState({ display: 'hidden', msg: '' });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { userName, email, pass, cPass } = user;

    if (!userName || !email || !pass || !cPass) {
      setInputError({
        display: 'block',
        msg: "Please Fill Up all required fields!"
      });
      toast.error("Please Fill Up all required fields!");
      return;
    }
    setInputError({ display: 'hidden' });

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userName, email, pass, cPass }),
      });

      const response = await res.json();
      console.log("Parsed response:", response);

      if (res.status === 409 || !response) {
        toast.error("Email already exists!");
      } else if (res.status === 401) {
        toast.error("Passwords don't match!");
      } else {
        toast.success("You successfully signed up!", {
          onClose: () => navigate('/auth')
        });
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-secondary-100 py-6 flex flex-col justify-center sm:py-12">
      <ToastContainer />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:p-20 sm:pb-12">
          <form className="max-w-md mx-auto" onSubmit={handleSignup}>
            <div className='md:text-start text-center'>
              <h1 className="text-2xl font-semibold text-primary-500">Signup to The Paradise of Plant</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input autoComplete="" id="name" name="userName" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-600 focus:outline-none focus:border-primary-600" placeholder="Full Name" value={user.userName} onChange={handleUserInput} />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm">Full name</label>
                </div>
                <div className="relative">
                  <input autoComplete="" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-600 focus:outline-none focus:border-primary-600" placeholder="Email address" value={user.email} onChange={handleUserInput} />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm">Email Address/Phone</label>
                </div>
                <div className="relative">
                  <input autoComplete="" id="password" name="pass" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-900 focus:outline-none focus:border-primary-600" placeholder="Password" value={user.pass} onChange={handleUserInput} />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm">Password</label>
                </div>
                <div className="relative">
                  <input autoComplete="" id="comfirmPassword" name="cPass" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-300 text-primary-900 focus:outline-none focus:border-primary-600" value={user.cPass} onChange={handleUserInput} placeholder="Confirm Password" />
                  <label htmlFor="comfirmPassword" className="absolute left-0 -top-3.5 text-primary-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-600 peer-focus:text-sm">Confirm Password</label>
                </div>

                <div className={inputError.display + " text-xs animate-pulse text-red-600 relative flex justify-center items-center"}>
                  <div>{inputError.msg}</div>
                </div>

                <div className="relative flex justify-center items-center py-3">
                  <button className="btn btn-scale bg-primary-600 hover:bg-primary-800 text-white rounded-md px-2 py-1 w-full" type='submit'>Signup</button>
                </div>
                <div className="text-xs text-primary-600 relative flex justify-start items-start">
                  <div className="">Already have an account <Link to='/auth' className='text-secondary-300 hover:text-secondary-600 font-bold text-sm underline'>Login</Link></div>
                </div>
                {/* separator */}
                <div className="flex flex-row justify-center mb-8">
                  <span className="absolute bg-white px-4 text-primary-500 m">or sign-up with</span>
                  <div className="w-full bg-gray-200 mt-3 h-px" />
                </div>
                {/* alternate sign-in */}
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
}

export default Signup;
