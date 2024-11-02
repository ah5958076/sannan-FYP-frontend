import React from 'react'

const Message = ({message}) => {
    const messageStyle = message.sender === 1 ? 'ms-auto rounded-br-none bg-primary-700' : 'me-auto rounded-bl-none bg-secondary-500';

  return (
    <div className={messageStyle + ' md:max-w-[20rem] max-w-[10rem] px-5 py-2 flex flex-col bg-primary-700 rounded-3xl my-3'}>
        <p className='text-gray-100 md:text-lg text-sm'>{message.text}</p>
        <small className='ms-auto text-neutral-800 md:text-base text-[0.6rem]'>{message.time}</small>
    </div>
  )
}

export default Message
