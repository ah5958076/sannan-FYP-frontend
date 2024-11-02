import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getReplies } from '../../Apis/forumApis/getReplies';

const Post = ({post}) => {
  const [reply, setReply] =useState([]);
  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    const replyData = await getReplies();
    setReply(replyData.reply);
  };
  console.log('reply:',reply);

    console.log(post);
  return (
    <Link   to={`/post/${encodeURIComponent(JSON.stringify(post))}`}
    className=' bg-neutral-100 shadow-lg rounded-xl p-4 max-w-3xl hover:bg-primary-100'>
      <div className='flex gap-6 '>
        <div className='flex justify-center items-center'>
            <img src={post.multipleImages[0].url} alt="" className='object-cover min-w-[60px] h-[60px]
            bg-[url("/public/assets/images/landing-page/plant-market.jpg")] rounded-full'/>
        </div>
        <div className='flex flex-col gap-3'>
            <strong className='line-clamp-1 md:text-base text-md'>{post.title}</strong>
            <p className='line-clamp-2 md:text-base text-sm '>{post.description}</p>
                <p className=' line-clamp-2 text-sm font-light'>
                    {reply?reply[0]?.ReplyContent:"no replies yet..."}
                </p>
        </div>
      </div>
    </Link>
  )
}

export default Post
