import React from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import MessageInput from './MessageInput';
import Message from './Message';
const MessageBox = () => {
    const messages = useGetMessages();
  return (
    <div className=" min-h-screen bg-secondary-100 flex justify-center md:p-6 p-3 " id="contact-list">
        <div className="z-0 max-w-screen-xl flex flex-col md:min-h-[80vh] h-max lg:w-[55rem] md:w-[35rem] sm:w-[30rem] rounded-lg shadow bg-neutral-200">
        <div className='w-full bg-neutral-200 shadow px-3 py-4 rounded-t-lg'>
            <div className='flex gap-3'>
                <div className='flex justify-center items-center'>
                    <img src="/assets/images/landing-page/plant-market.jpg" alt="" className='w-[40px] h-[40px] rounded-full'/>
                </div>
                <div className='flex flex-col text-primary-900'>
                    <h4 >Alevish Kevin</h4>
                    <small>+92 300 0000000</small>
                </div>
            </div>
        </div>
            <div className='relative overflow-y-auto max-h-[40rem] md:p-6 p-3'>
            {   (messages && messages.length > 0) ?
                messages.map((message,index) => 
                    <Message message={message} key={index}/>
                ) : <div className='absolute bottom-[10%] translate-x-[50%] right-[50%] z-50 bg-neutral-400  px-4 py-2 rounded-full font-bold text-primary-900'>
                        Start Conservation
                    </div>
            }
            </div>
            {
                (messages && messages.length > 0) ? 
                    <MessageInput/> : null
            }
        </div>
    </div>
  )
}

export default MessageBox
