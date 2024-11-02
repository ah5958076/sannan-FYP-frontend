import React from "react";

const Reply = ({reply ,index}) => {
  return (
    <div className="flex md:gap-6 gap-3 mb-6 shadow bg-neutral-50 p-3 rounded-lg">
      <div className="">
        <img
          src="/assets/images/landing-page/plant-market.jpg"
          alt=""
          className='object-cover min-w-[60px] h-[60px] rounded-full'
        />
      </div>
      <div className="flex flex-col md:gap-6 gap-3">
        <div className="flex justify-between items-center">
          <strong>{reply.userId.userName}</strong>
          <small>{reply.timeStamp}</small>
        </div>
        <p className="text-sm">{reply.ReplyContent}</p>
      </div>
    </div>
  );
};

export default Reply;
