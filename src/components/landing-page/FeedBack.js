import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Testimonial from "./Testimonial";
// import $ from 'jquery'


const Feedback = () => {

  const [feedback,setFeedback] = useState({
    name:'',
    email:'',
    testinomial:''
  });

  const handleInputChange = (e) => {
    // setInputValue(e.target.value);
    let value = e.target.value;
    let name = e.target.name;
    setFeedback({...feedback,[name]:value});
  };

  return (
    <div className="feedback-container relative flex flex-col items-center justify-center min-h-screen md:py-0 py-12" id='feedback'>
      <div className='circle sm:block hidden w-[20rem] top-[5%] left-[7%] animate__animated animate__pulse animate__infinite animate__slow'></div>
      <div className='circle sm:block hidden w-[15rem] bottom-[35%] right-[3%] animate__animated animate__pulse animate__infinite animate__slow delay-100'></div>
      <div className='circle sm:block hidden w-[11rem] bottom-[8%] left-[20%] animate__animated animate__pulse animate__infinite animate__slow delay-150'></div>
      

      <div className="relative min-w-full flex justify-center items-center z-10">

        <div className="card sm:rounded-lg shadow-lg gap-6 flex md:flex-row flex-col justify-between lg:max-w-screen-lg md:max-w-screen-md bg-primary-900 md:text-start text-center" data-aos='fade' data-aos-duration='500ms'>
          <div className="md:w-1/2 w-100 feedback-content flex flex-col md:items-start items-center  text-white justify-center md:px-0 md:ps-10 px-6 py-12">
            <h1 className="lg:text-4xl sm:text-3xl text-2xl font-medium border-b-2 max-w-fit" data-aos='fade-down' data-aos-duration='500ms' data-aos-delay='500ms'>
              FeedBack
            </h1>
            <p className="sm:text-base text-sm my-5 md:pe-12 max-w-[30rem]" data-aos='fade-up' data-aos-duration='1000ms' data-aos-delay='500ms'>
              Welcome to our feedback page! We value your opinion and strive to
              continuously improve our services based on your input. Your
              feedback is incredibly important to us, and we're here to listen.
            </p>
            <p className="sm:text-base text-sm my-5 md:pe-12 max-w-[30rem]" data-aos='fade-up' data-aos-duration='1000ms' data-aos-delay='500ms'>
              Whether you've had an outstanding experience or encountered
              challenges with our platform, we want to hear from you. Your
              feedback helps us understand what we're doing right and where we
              can make enhancements.
            </p>
            <p className="sm:text-base text-sm my-5 md:pe-12 max-w-[30rem]" data-aos='fade-up' data-aos-duration='1000ms' data-aos-delay='500ms'>
              Your feedback is instrumental in shaping the future of our
              platform. It allows us to identify areas for improvement,
              prioritize new features, and provide you with a better experience.
              We are committed to making your time with us as valuable as
              possible.
            </p>
          </div>
          <div className="md:w-1/2 sm:  rounded-r-md relative feedback-form flex flex-col justify-center px-10 ">
            {/* <img src="/assets/images/landing-page/feedback-bg.svg" alt="" className="absolute max-w-sm z-0"/> */}
            <fieldset action="" className=" relative z-10 lg:p-6" >
              <h1 className="lg:text-3xl sm:text-2xl text-xl font-medium text-white bg-clip-text text-transparent" data-aos='fade-down' data-aos-duration='500ms' data-aos-delay='500ms'>
                Give us a FeedBack
              </h1>

              <form className="mt-8 mb-2">
                <div className="mb-4 flex flex-col gap-6">
                  <div className="relative h-11 max-w-full" data-aos='fade-up' data-aos-duration='1000ms' data-aos-delay='500ms'>
                    <input name="name"
                      className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-secondary-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-secondary-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      defaultValue={feedback.name} onChange={handleInputChange}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-secondary-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-secondary-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-secondary-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Name
                    </label>
                  </div>
                  <div className="relative h-11 max-w-full" data-aos='fade-up' data-aos-duration='1000ms' data-aos-delay='500ms'>
                    <input name="email"
                      className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-secondary-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-secondary-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      defaultValue={feedback.email} onChange={handleInputChange}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-secondary-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-secondary-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-secondary-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Email
                    </label>
                  </div>

                  <div className="relative h-[7rem] max-w-full" data-aos='fade-up' data-aos-duration='1000ms' data-aos-delay='500ms'>
                    <textarea rows="10" name="testinomial"
                      className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-secondary-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-secondary-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 resize-none" onChange={handleInputChange}
                      defaultValue={feedback.testinomial}

                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-secondary-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-secondary-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-secondary-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Feedback
                    </label>
                  </div>

                </div>
                <button
                  className="max-w-full sm:mt-10 sm:mb-0 mt-6 mb-12  block w-full select-none rounded-lg bg-secondary-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-secondary-400/20 transition-all hover:shadow-lg hover:shadow-secondary-400/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                  data-aos='zoom-in' data-aos-duration='500ms' data-aos-delay='800ms'
                >
                  <i className="fa-regular fa-envelope me-2"></i><span>Send</span>
                </button>
              
              </form>
            </fieldset>
          </div>

          {/* <OwlCarousel className='w-1/2 owl-theme bg-secondary-300' loop margin={10} nav>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum blanditiis odio reiciendis explicabo? Repellendus accusamus velit sed. Rerum excepturi ad doloremque debitis impedit corporis mollitia voluptatem totam, fugiat, dolor quod modi incidunt ipsam sapiente?</div>
          </OwlCarousel> */}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
