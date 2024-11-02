import React from 'react'
import { Link } from 'react-router-dom'

const Contact = ({contact}) => {
  return (
    <Link to={`/message-box/${contact.id}`} className='flex px-3 py-3 justify-between items-center text-primary-900 transition-all duration-300 hover:py-4 hover:bg-neutral-100 shadow rounded-xl bg-neutral-50'>
        <div className='flex gap-3'>
            <div className='flex justify-center md:items-center items-start md:p-6'>
                <img src={contact.img} alt="" className='object-cover md:min-w-[80px] min-w-[60px] md:h-[80px] h-[60px] rounded-full'/>
            </div>
            <div className='flex flex-col justify-center md:px-12 px-3'>
                <h4 className='font-bold sm:text-lg text-md'>{contact.name}</h4>
                <p className='line-clamp-1 sm:text-base text-sm '>{contact.last_msg}</p>
                <small className=' mt-5 font-thin'>{contact.timeStamp}</small>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center rounded-full sm:w-[30px] w-[20px] sm:h-[30px] h-[20px]  p-3 md:me-5 bg-primary-700 text-neutral-100 text-xs'>1</div>
        </div>
    </Link>
  )
}

export default Contact
