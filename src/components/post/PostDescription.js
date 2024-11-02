import React, { useEffect, useState } from "react";
import Reply from "./Reply";
import AddReply from "./AddReply";
import ImageCarousel from "../carousels/ImageCarousel";
import { useParams } from 'react-router-dom';
// import { getReplies } from "../../Apis/forumApis/getReplies";
import { getRepliesByQuestionId } from "../../Apis/forumApis/getRepliesByQuestionId";
import Post from "./Post";


let post = {
  postId: 0,
  userId: 0,
  title: "Hydro Plant getting drainded",
  user: "Ash ley",
  image: ["/assets/images/landing-page/plant-market.jpg",
  "/assets/images/landing-page/plant-market.jpg",
  "/assets/images/landing-page/plant-market.jpg"],
  question:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et maxime omnis molestias sit atque quia necessitatibus impedit ducimus deserunt! Magnam ex aliquam facilis modi, tempora incidunt repellendus? Enim, praesentium?",
  replies: [
    {
      user: "Rum",
      img: "/assets/images/landing-page/plant-market.jpg",
      msg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nemo, voluptas obcaecati quia, ducimus doloribus hic, saepe impedit eveniet odio quod! Temporibus soluta autem quod modi porro quos cum voluptate.",
      timeStamp: "0:0:0",
    },
    {
      user: "Rum",
      img: "/assets/images/landing-page/plant-market.jpg",
      msg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nemo, voluptas obcaecati quia, ducimus doloribus hic, saepe impedit eveniet odio quod! Temporibus soluta autem quod modi porro quos cum voluptate.",
      timeStamp: "0:0:0",
    },
    {
      user: "Rum",
      img: "/assets/images/landing-page/plant-market.jpg",
      msg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nemo, voluptas obcaecati quia, ducimus doloribus hic, saepe impedit eveniet odio quod! Temporibus soluta autem quod modi porro quos cum voluptate.",
      timeStamp: "0:0:0",
    },
    {
      user: "Rum",
      img: "/assets/images/landing-page/plant-market.jpg",
      msg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nemo, voluptas obcaecati quia, ducimus doloribus hic, saepe impedit eveniet odio quod! Temporibus soluta autem quod modi porro quos cum voluptate.",
      timeStamp: "0:0:0",
    },
  ],
  timeStamp: "0:0:0",
};

const PostDescription = () => {
 
  const { post: encodedPost } = useParams();
  const post = JSON.parse(decodeURIComponent(encodedPost));
  console.log('post:', post)


  const [replies, setReplies] =useState([]);
  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    const replyData = await getRepliesByQuestionId(post._id);
    setReplies(replyData.reply);
  };
  console.log('replies:',replies);

  const formattedDate = new Date(post.date).toLocaleString('en-US', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });

  return (
    <div className=" min-h-screen bg-secondary-100 flex justify-center p-6">
      <div className="max-w-screen-lg rounded-xl p-6 bg-neutral-200  shadow-lg">
        <div className="flex md:gap-6 gap-3">
          <div className="">
            <img
              src="/assets/images/landing-page/plant-market.jpg"
              alt=""
              className='object-cover min-w-[60px] h-[60px] rounded-full'
            />
          </div>
          <div className="flex flex-col md:gap-6 gap-3">
            <div className="flex flex-col">
              <strong>{post.title}</strong>
              <small>
        This Question was posted on {formattedDate} by {post.userId.userName}
      </small>
            </div>
            <p>{post.description}</p>
            {/* {post.multipleImages.map((image, index) => (
           
          ))}
            */}
             <ImageCarousel images={post.multipleImages} size={"20rem"}/>
          </div>
        </div>
        <hr className="bg-primary-900 h-[2px] md:mt-8 my-5" />
        <AddReply post={post}/>
        <div>
          <h1 className="text-primary-900 font-semibold md:text-2xl text-xl mt-5 mb-5">Replies:</h1>
          {
            replies?
              replies.map((reply,index) => 
                <Reply reply={reply} index={index}/>
              )
              :<div>No reply given yet</div>
          }
        </div>
      </div>
    </div>
  );
};

export default PostDescription;
