import React, { useState } from 'react';
import InputField from '../form-controls/InputField';
import TextAreaField from '../form-controls/TextAreaField';
import InputImageField from '../form-controls/InputImageField';
import FormSubmitButton from '../form-controls/FormSubmitButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateQuestion = () => {
  const navigate = useNavigate();
  const storedResponse = JSON.parse(localStorage.getItem("credential"));
  console.log("Cart stored response:", storedResponse._id);

  let userId = storedResponse._id;

  const [question, setQuestion] = useState({
    title: '',
    description: '',
    images: []
  });

  const [multipleImages, setMultipleImages] = useState([]);

  const handleMultipleImg = (e) => {
    setMultipleImages([...e.target.files]);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!question.title || !question.description || multipleImages.length === 0) {
      window.alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    multipleImages.forEach((file, index) => {
      formData.append("multipleImages", file);
    });
    formData.append("title", question.title);
    formData.append("userId", userId);
    formData.append("description", question.description);

    try {
      const res = await axios.post("http://localhost:5000/postQuestion", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        toast.success('Question was posted successfully');
        setQuestion({
          title: "",
          description: "",
        });
        setMultipleImages([]);
      } else {
        window.alert("Your Question was Not Added!");
        console.log("res:", res);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-secondary-100 flex justify-center p-6">
      <div className="max-w-screen-2xl h-max bg-neutral-200 rounded-lg md:p-12 p-5 flex flex-col md:gap-6 gap-3">
        <form className='md:w-[30rem] sm:w-[25rem]' onSubmit={handleFormSubmit}>
          <h1 className="text-primary-900 font-semibold md:text-2xl text-xl my-5">Ask a new Question:</h1>
          <InputField
            type={"text"}
            name={"title"}
            label={"Title"}
            value={question.title}
            onChange={handleInput}
          />
          <TextAreaField rows={5} placeholder={"Enter detail description of your problem..."} label={"Description"} name={"description"} value={question.description} onChange={handleInput}/>
          <InputImageField label={'Choose Images'} multiplefile={true} onChange={handleMultipleImg}/>
          <FormSubmitButton label={'Upload'}/>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CreateQuestion;
