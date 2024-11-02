import React from "react";
import Post from "./Post";
// import useGetPosts from "../../hooks/useGetPosts";
import useGetMyPosts from "../../hooks/useGetMyPosts";
import { Link } from "react-router-dom";
import InputSearch from "../form-controls/InputSearch";






const MyPost = () => {

  const posts = useGetMyPosts();
  console.log('posts', posts)
  return (
    <div
      className=" min-h-screen bg-secondary-100 flex justify-center p-6"
      id="post-list"
    >
      <div className="max-w-screen-2xl h-max bg-neutral-200 rounded-lg md:p-12 p-5 flex flex-col md:gap-6 gap-3">
        <div className="flex justify-between items-center">
          <h1 className="text-primary-900 font-semibold md:text-4xl text-xl my-5">Question</h1>
          <Link to={'/question/create'} className=" bg-primary-700 hover:bg-primary-800 shadow-lg active:scale-70 transition-all duration-500 text-white px-4 py-3 rounded-lg">Ask a Question</Link>
        </div>
        <InputSearch className={'md:w-[30rem]'} bg={'bg-neutral-100'}/>

        {
            posts?.map(( post,index) => (
                <Post key={index} post={post} />
            ))
        }
      </div>
    </div>
  );
};

export default MyPost;
