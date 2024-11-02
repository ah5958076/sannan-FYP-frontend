import React, { useEffect, useRef } from 'react'
import Card from './Card'






const AboutUs = () => {

  const cards = [
    {
      img: "/assets/images/landing-page/plant-market.jpg",
      title: "Plant Market",
      description : '"Discover a lush world of sustainable plants at our botanical haven. We offer eco-friendly, horticultural delights for both indoor and outdoor enthusiasts. Let your green thumb thrive with us!"'
    },
    {
      img: "/assets/images/landing-page/community.jpg",
      title: "Community",
      description : '"Welcome to our vibrant online community, where questions find answers. Join fellow curious minds in interactive discussions, tap into collective wisdom, and foster collaborative learning. Get informed, connect, and share today!"'
    },
    {
      img: "/assets/images/landing-page/chat-app.jpg",
      title: "Chat Application",
      description : '"Introducing our cutting-edge chat application, designed for seamless conversations. Connect with friends and colleagues in real-time, share moments, and stay connected effortlessly. Join the conversation with our chat app now!"'
    },
    {
      img: "/assets/images/landing-page/service-listing.jpg",
      title: "Service Listings",
      description : '"Explore our diverse service listings featuring skilled providers ready to meet your needs. From freelancers to professionals, discover the perfect solutions for your projects and goals."'
    },

  ];

  const leafDetail = {
    path: "/assets/images/landing-page/leaf.svg",
    style: 'absolute z-0 ',
    dataAos: 'fade-up',
    aosDuration: '500'
  };

  const leaves = [
    {
      style: ' top-[40%] right-[13%] w-[3.1rem] rotate-45 ',
      aosDelay: '0'
    },
    {
      style: ' top-[20%] left-[3%] w-[4.98rem] rotate-[27deg] ',
      aosDelay: '10'
    },
    {
      style: ' top-[12%] left-[16%] w-[3rem] rotate-4 ',
      aosDelay: '150'
    },
    {
      style: ' top-[18%] right-[20%] w-[9rem] rotate-180 ',
      aosDelay: '17'
    },
    {
      style: ' bottom-[17%] right-[8%] w-[6rem] rotate-[23deg] ',
      aosDelay: '100'
    },
    {
      style: ' top-[30%] right-[9%] w-[7rem] rotate-[43deg] ',
      aosDelay: '30'
    },
    {
      style: ' bottom-[43%] left-[12%] w-[12rem] rotate-[230deg] ',
      aosDelay: '200'
    },
    {
      style: ' bottom-[35%] right-[8%] w-[12rem] rotate-[270deg] ',
      aosDelay: '200'
    },
    {
      style: ' bottom-[30%] left-[10%] w-[4.5rem] rotate-[170deg] ',
      aosDelay: '90'
    },
    {
      style: ' bottom-[17.3%] left-[5.11%] w-[6.4rem] rotate-[0deg] ',
      aosDelay: '90'
    },

  ]


  return (
    <div className='relative about-us-container' id='about-us'>

      
      {
        /* leaves */
        leaves.map((leaf,index) => 
          <img key={'leaves'+index} src={leafDetail.path} alt="" data-aos={leafDetail.dataAos} data-aos-duration={leafDetail.aosDuration} data-aos-delay={leaf.aosDelay}
          className={leafDetail.style + leaf.style}/>
        )
      }


      <div className='flex flex-col gap-6 justify-between items-center min-h-screen lg:mt-12 py-6'>

      
        <div className='max-w-screen-lg flex flex-col text-center sm:px-12 px-6 relative z-10'>
          <h1 className='lg:text-4xl sm:text-3xl text-2xl font-medium text-primary-800 drop-shadow-md' data-aos='fade-down' data-aos-duration='500'>
            About us
          </h1>
          <p className='sm:text-base text-sm my-5' data-aos='fade-up' data-aos-duration='500' data-aos-delay='300'>
            Plant Hub Paradise mission is to foster a thriving global community of plant lovers, gardeners, and enthusiasts. We believe in the power of connecting people through their shared love for plants, fostering sustainable gardening practices, and providing a platform for everyone, from beginners to experts, to learn, share, and grow.
          </p>
        </div>
      
        <div className='max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-12 px-3'>
          {
            cards.map((card,index)=>
              <Card key={card.title} img={card.img} title={card.title} description={card.description} delay={600 + (100*index)}/>          
            )
          }
        </div>
      
      
        <div className='min-w-full  bg-secondary-300 flex justify-center items-center py-6'>
          <div className='max-w-screen-lg flex flex-col text-center lg:px-0 px-6'>
            <h1 className='lg:text-3xl sm:text-2xl text-xl font-medium relative z-10' data-aos='zoom-in' data-aos-duration='500' data-aos-delay='500'>
              What else you need?
            </h1>
            <p className='sm:text-base text-sm my-5 relative z-10'
            data-aos='zoom-in' data-aos-duration='500' data-aos-delay='500'>"At our platform, we provide the perfect blend of community and communication. With our online community market and chat application combined in one place, you have everything you need for vibrant discussions, knowledge sharing, and effortless connections. Join us today to experience the best of both worlds!"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
