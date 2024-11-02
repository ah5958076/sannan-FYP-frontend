import React, { useState } from "react";
import FormSubmitButton from "../form-controls/FormSubmitButton";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddReply = ({ post }) => {
  console.log("AddReply post:", post);
  const [reply, setReply] = useState({
    ReplyContent: "",
  });

  const storedResponse = JSON.parse(localStorage.getItem("credential"));
  console.log("Cart stored response:", storedResponse._id);

  let userId = storedResponse._id;
  
  const threadID = post?._id;
  const threadUserID = post?.userId;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setReply({ ...reply, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!reply.ReplyContent) {
      window.alert("Please fill The Reply fields.");
      return;
    }

    const formData = {
      ReplyContent: reply.ReplyContent,
      userId: userId,
      threadID: threadID,
      threadUserID: threadUserID,
    };

    try {
      const res = await axios.post("http://localhost:5000/postReply", formData);

      if (res.status === 200) {
        toast.success("Your Reply Successfully Posted!");
        setReply({
          ReplyContent: "",
        });
      } else {
        toast.error("Your Reply Not Added!");
        console.log("res:", res);
      }
    } catch (error) {
      toast.error("An error occurred while posting your reply.");
      console.log("error:", error);
    }
  };

  return (
    <>
      <h1 className="text-primary-900 font-semibold md:text-2xl text-xl my-5">
        Write a Reply:{" "}
      </h1>
      <form className="flex md:gap-6 gap-3 mb-6 shadow bg-neutral-50 p-3 rounded-lg py-6" onSubmit={handleFormSubmit}>
        <div className="">
          <img
            src="/assets/images/landing-page/plant-market.jpg"
            alt=""
            className="object-cover min-w-[60px] h-[60px] rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center w-full md:pe-6">
            <textarea
              className="w-full rounded-lg py-2 px-3 outline:none border:none focus:outline-none"
              rows="3"
              name="ReplyContent"
              value={reply.ReplyContent}
              onChange={handleInput}
              placeholder=""
            />
          </div>
          <p className="text-sm"></p>
          <div className="flex justify-end md:pe-6">
            <FormSubmitButton type="submit" label={"Upload"} />
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddReply;
