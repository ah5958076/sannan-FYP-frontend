import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleIcon from "../../icons/GoogleIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import { Link } from "react-router-dom";
import { managebar } from '../../redux/actions/actionManageBar';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const PasswordRecovery = () => {
const navigator = useNavigate();
  const dispatcher = useDispatch();
  dispatcher(managebar(false));


  const [user, setUser] = useState({
    email: "",
});
let name, value;
const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
};
const resetPassword = async (e) => {
    e.preventDefault();
    const { email } = user;
    try {
        const res = await axios.post("http://localhost:5000/forgot-password", {
            email,
        });
        console.log("UserData:", res.data);
        if (res.status === 200) {
            console.log("User Reset Password Link Send Successfully!");
            toast.success("User Reset Password Link Send Successfully!", {
                onClose: () => {
                    navigator('/auth');
                }
            });

            setUser({
                email: "",
            });
        }
        if(res.status === 405){
            toast.error("Error in Link Sending!");
        }


    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log("Please Enter Valid Email!");
            toast.error("Please Enter Valid Email!");
        }
        if (error.response && error.response.status === 405) {
            console.log("Please Enter Valid Email!");
            toast.error("Error in Link Sending!");            }

            if (error.response && error.response.status === 500) {
                console.log("Internal Server Error");
                toast.error("Internal Server Error");
            }
            else {
                console.error("Error:", error);
            }
        
    }
}
  return (
    <>
    <ToastContainer />
    <div class="min-h-screen bg-secondary-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div className="flex flex-col justify-center items-center text-center m-6">
              <h1 className="text-2xl md:text-xl w-fit font-semibold text-green-700 border-b-2 border-primary-800 mb-3 pb-2">
                Forgot your password?
              </h1>
              <p className="text-green-500">
                Just enter your email address below and we'll send you a link to
                reset your password!
              </p>
            </div>
            {/* sign-in */}
            <div className="m-6">
              <form className="mb-4">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-green-600 dark:text-green-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    placeholder="Your email address"
                    onChange={handleInput}
                    className="w-full px-3 py-2 placeholder-green-300 border border-green-300 rounded-md focus:outline-none focus:ring focus:ring-green-100 focus:border-green-300 dark:bg-green-700 dark:text-green dark:placeholder-green-500 dark:border-green-600 dark:focus:ring-green-900 dark:focus:border-green-500 text-green-600"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={resetPassword}
                    className="w-full px-3 py-4 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none duration-100 ease-in-out"
                  >
                    Reset Password
                  </button>
                </div>
                <p className="text-sm text-center text-green-400">
                  <span className="me-2">Don't have an account yet?</span>
                  <Link
                    to="/register"
                    className="font-semibold text-secondary-500 focus:text-secondary-600 focus:outline-none focus:underline underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PasswordRecovery;
