import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';



const Home = () => {

  const sideImg = "w-4/5 aspect-square";
  const sideImgContainer = 'flex justify-center aspect-square bg-primary-500 rounded-full p-3 w-32';
  return (
    <div className='relative flex flex-col min-h-screen	' id='home'>
      <img src="/assets/images/landing-page/top-leaves-right.svg" alt=""  className='absolute md:block hidden lg:w-64 md:w-48 top-0 right-0' data-aos="fade-down" data-aos-duration="500" data-aos-delay="500"/>
      <img src="/assets/images/landing-page/top-leaves-left.svg" alt="" className='absolute md:block hidden lg:w-80 md:w-48 top-0 right-0' data-aos="fade-down" />
      {/* <img src="/assets/images/landing-page/bottom-left-plant.svg" alt="" className='fixed bottom-0 left-10 lg:w-64 md:w-48 w-32' data-aos="flip-right" data-aos-duration="500"/> */}
      <Nav></Nav>
      {/* Home content */}
      <div className='flex-1 flex justify-center items-center sm:px-12 px-6 lg:mt-12  z-10'>
        <div className='max-w-screen-2xl flex lg:flex-row flex-col lg:mt-0 mt-12  items-center' >
          <div className='home-text  py-6 flex-1 lg:order-1 order-2 lg:mt-0 mt-6' data-aos="fade-right" data-aos-duration="1200" data-aos-delay="1000">
              <h1 className='lg:text-4xl sm:text-3xl text-2xl font-medium'>{process.env.REACT_APP_NAME  }</h1>
              <p className='sm:text-base text-sm my-5 md:pe-12'>Are you a passionate plant enthusiast looking for a place where your green dreams can flourish? Are you a seller or service provider in the world of horticulture hoping to connect with a thriving community of plant lovers? Look no further – you've arrived at the "Plant Paradise Hub," where your plant journey begins and grows.</p>
              <Link to={'/register'} className='btn btn-round btn-scale btn-signup bg-primary-700 hover:bg-primary-900 text-neutral-200'>
                <span>Sign up</span>
                <i className="fa-solid fa-circle-arrow-right ms-2 animate__animated animate__headShake animate__infinite animate__slow"></i>
              </Link>
          </div>
          <div className='home-img flex flex-1 lg:order-2 order-1   justify-around items-center gap-3' >
              <div className='flex justify-center aspect-square bg-secondary-300 rounded-full p-6 w-100' data-aos="flip-right" data-aos-duration="500" data-aos-delay="500">
                <img src="/assets/images/landing-page/main-plant.svg" alt="plant..." className={sideImg} data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="800"/>
              </div>
              <div className='sm:flex hidden flex-col justify-around  gap-4' data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="800">
                <div className={sideImgContainer}>
                  <img src="/assets/images/landing-page/sample-one.svg" alt="plant..." className={sideImg}/>
                </div>
                <div className={sideImgContainer} data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="800">
                  <img src="/assets/images/landing-page/sample-two.svg" alt="plant..." className={sideImg}/>
                </div>
                <div className={sideImgContainer} data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="800">
                  <img src="/assets/images/landing-page/sample-three.svg" alt="plant..." className={sideImg}/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
