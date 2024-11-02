import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';

// component
import Home from './Home'
import AboutUs from './AboutUs'
import Feedback from './FeedBack';
import { managebar } from '../../redux/actions/actionManageBar';
import { useDispatch } from 'react-redux';


const LandingPage = () => {

  const dispatcher = useDispatch();
  dispatcher(managebar(false));


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='relative landing-page  bg-secondary-100 w-full'>
        <Home ></Home>
        <AboutUs ></AboutUs>
        <Feedback ></Feedback>
        <button className='btn btn-round bg-primary-800 text-white shadow-sm fixed z-50 bottom-5 right-8
        animate__animated animate__heartBeat animate__infinite animate__slower delay-[1000ms]'
        >
          <i className="fa-solid fa-cart-shopping fa-xs me-2"></i>  
          <span className='md:text-base text-xs'>Start Buying</span>
        </button>
    </div>
  )
}

export default LandingPage
