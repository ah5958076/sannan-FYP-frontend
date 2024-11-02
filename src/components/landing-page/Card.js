import React from 'react'

const Card = (props) => {
    const{title,description,img,delay} = props;
    const cardDimension = "xl:w-[18rem] lg:w-[14rem] md:w-[16rem] w-[16rem] xl:h-[25rem] lg:h-[20rem] md:h-[22rem] h-[18rem]"
  return (
    <div data-aos='fade-up' data-aos-duration='500' data-aos-delay={delay}>
        <div className={cardDimension + ' card relative flex flex-col items-center gap-6 overflow-hidden text-center bg-white rounded-xl px-3 text-neutral-50'}>
            <img src={img} alt="" className={cardDimension + ' absolute top-0 left-0 z-10 object-cover backdrop-brightness-50'}/>
            <h1 className='relative xl:text-2xl lg:text-xl sm:text-lg text-md font-medium z-20 border-b-2 border-neutral-50 xl:mt-12 lg:mt-9 md:mt-12 mt-10'
              data-aos='zoom-in' data-aos-duration='500' data-aos-delay='1000'
            >
              {title}
            </h1>
            <p className='relative xl:text-sm lg:text-xs sm:text-sm text-xs z-20'
              data-aos='zoom-in' data-aos-duration='500' data-aos-delay='1000'>
            {description}</p>
        </div>
    </div>
  )
}

export default Card
