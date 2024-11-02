import React, { useEffect, useRef, useState } from 'react'

const ReviewCarousel = ({reviews}) => {
    const [translate,setTranslate] = useState(0);
    
    useEffect(()=>{
        document.getElementById("review_ref").style.transform=`translateX(calc(${translate*100}% + ${translate*10}px))`;
    },[translate])

   
    return (
        <div className='review-crousel w-full overflow-hidden h-[15rem] flex items-center justify-between left-0 md:p-3 p-0 md:gap-4 gap-1'>
            
            <button onClick={()=>{setTranslate(translate?translate+1:0)}}><i className="text-secondary-100 fa-solid fa-circle-chevron-left md:text-4xl text-3xl"></i></button>
            <div className=' overflow-hidden relative  w-full h-full'>
                <div id='review_ref' className='flex h-full transition-all duration-1000'>
                    {
                        reviews?.map((review,index)=>
                            <div key={index} className='flex flex-col items-center justify-center text-center gap-4 lg:p-8 md:p-4 p-2 w-full h-full bg-secondary-100 rounded-xl absolute' style={{transform:`translateX(calc(${index*100}% + ${index*10}px))`}}>
                                <h1 className='lg:text-2xl text-lg font-medium text-primary-800 capitalize'><u>{review?.userId?.userName}</u></h1>
                                <p className='lg:line-clamp-3 line-clamp-6 sm:text-[0.8rem] md:text-[1rem] text-[0.6rem]'>{review?.content}</p>
                            </div>
                        )
                    }
                </div>
            </div>
            <button onClick={()=>{setTranslate(reviews.length-1===Math.abs(translate)?translate:translate-1)}}><i className="text-secondary-100 fa-solid fa-circle-chevron-right md:text-4xl text-3xl"></i></button>
        
        </div>
    )
}

export default ReviewCarousel
