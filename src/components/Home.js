import {React, useEffect} from 'react'

import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='relative min-w-full flex flex-col min-h-screen	py-12' id='home'>
      {/*  */}
      <section className=' bg-secondary-200 flex justify-center md:py-12 py-6'>
        <div className=' w-3/4 flex md:flex-row flex-col items-center justify-evenly md:py-12 py-6'>
          <div className=' md:order-1 order-2 flex flex-col justify-center items-start text-primary-900'  data-aos="fade-right" data-aos-duration="1200" data-aos-delay="800">
            <p className=' xl:text-4xl lg:text-2xl md:text-lg sm:text-xl text-lg font-bold md:pb-3'>From Plant To Paradise</p>
            <small className=' xl:text-xl lg:text-lg md:text-md sm:text-lg text-md'>"Grow,Connect and Thrive!"</small>
          </div>
          <picture className=' md:order-2 order-1 md:pb-0 pb-6 xl:w-80 lg:w-64 md:w-56 w-32 flex flex-col justify-center items-center'>
            <div className='flex justify-center aspect-square bg-secondary-400 rounded-full p-6 ' data-aos="flip-right" data-aos-duration="500" data-aos-delay="500">
                <img src="../../assets/images/landing-page/main-plant.svg" alt="plant..." className=" object-fill aspect-square"/>
            </div>
          </picture>
        </div>
      </section>
      {/* Plant Collection */}
      <section className='md:py-12'>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
            <h2 className="text-xl font-bold text-primary-800 sm:text-3xl">
                Plant Collection
            </h2>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
                <a href="#" className="relative block group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
                  <img
                      src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660073901-best-indoor-plants-zz-plant-1660073875.png?crop=1.00xw:0.802xh;0,0.168xh&resize=980:*"
                      alt=""
                      className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <span className="mt-1.5 inline-block bg-secondary-600 px-5 py-3 md:text-md text-xs font-medium uppercase tracking-wide text-white">
                        Home Plant
                      </span>
                  </div>
                </a>
            </li>

            <li>
                <a href="#" className="relative block group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                  <img
                      src="https://image.made-in-china.com/2f0j00QKDVmotJlhbN/High-Quality-Home-Decoration-Wholesale-Popular-Colorful-15-Madison-Planter-Plastic-Flower-Pot-Plant-Pot-Garden-Planter.webp"
                      alt=""
                      className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6" >
                      <span className="mt-1.5 inline-block bg-secondary-600 px-5 py-3 md:text-md text-xs font-medium uppercase tracking-wide text-white">
                        Home Plant
                      </span>
                  </div>
                </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <a href="#" className="relative block group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                  <img
                      src="https://media.istockphoto.com/id/462671801/photo/flowers-in-the-garden.jpg?s=612x612&w=0&k=20&c=x1haiOOrJOVM-dxE-onhBn411OWYgGnNzqyY87Vx0sM="
                      alt=""
                      className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <span className="mt-1.5 inline-block bg-secondary-600  px-5 py-3 md:text-md text-xs font-medium uppercase tracking-wide text-white">
                        Home Plant
                      </span>
                  </div>
                </a>
            </li>
          </ul>
        </div>
      </section>
      {/* Service Collection */}
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
          <h2 className="text-xl font-bold text-primary-800 sm:text-3xl">
              Service Collection
          </h2>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
              <a href="#" className="relative block group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <img
                  src="https://media.istockphoto.com/id/1585613142/photo/woman-taking-care-of-her-plants.jpg?s=612x612&w=0&k=20&c=M2zeXUipu40dU9U_6LFM3fc3fdGN-TtLa193SWq7R1c="
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                  className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >

                  <span
                  className="mt-1.5 inline-block bg-secondary-600  px-5 py-3 md:text-md text-xs font-medium uppercase tracking-wide text-white"
                  >
                  Home Service
                  </span>
              </div>
              </a>  
          </li>
          <li>
              <a href="#" className="relative block group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <img
                  src="https://media.istockphoto.com/id/1585613142/photo/woman-taking-care-of-her-plants.jpg?s=612x612&w=0&k=20&c=M2zeXUipu40dU9U_6LFM3fc3fdGN-TtLa193SWq7R1c="
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                  className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >

                  <span
                  className="mt-1.5 inline-block bg-secondary-600 px-5 py-3 md:text-md text-xs font-medium uppercase tracking-wide text-white"
                  >
                  Home Service
                  </span>
              </div>
              </a>
          </li>

          <li>
              <a href="#" className="relative block group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <img
                  src="https://media.istockphoto.com/id/1458349957/video/woman-putting-gravel-soil-into-white-ceramic-pot-potting-planting-haworthia-succulent-plant.jpg?s=640x640&k=20&c=GfObTfheFbh32BgW6sqzjhoVJOfyAPjsadkl6sNaN38="
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                  className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >
                  <span
                  className="mt-1.5 inline-block bg-secondary-600 px-5 py-3 md:text-md text-xs font-medium uppercase tracking-wide text-white"
                  >
                  Home Service
                  </span>
              </div>
              </a>
          </li>

          
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home
