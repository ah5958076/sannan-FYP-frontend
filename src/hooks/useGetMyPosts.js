import React, { useEffect, useState } from "react";
// import { getQuestion } from "../Apis/forumApis/getQuestions";
import {getQuestionsByUserId} from "../Apis/forumApis/getQuestionsByUserIdApis";

// let post_arr = [
//     {
//         postId: 0,
//         userId: 0,
//         title: "Hydro Plant getting drainded",
//         image:'/assets/images/landing-page/plant-market.jpg',
//         question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et maxime omnis molestias sit atque quia necessitatibus impedit ducimus deserunt! Magnam ex aliquam facilis modi, tempora incidunt repellendus? Enim, praesentium?",
//         reply: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nemo, voluptas obcaecati quia, ducimus doloribus hic, saepe impedit eveniet odio quod! Temporibus soluta autem quod modi porro quos cum voluptate.",
//         timeStamp: '0:0:0',
//     },
//     {
//         postId: 1,
//         userId: 0,
//         title: "Hydro Plant getting drainded",
//         image:'/assets/images/landing-page/plant-market.jpg',
//         question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et maxime omnis molestias sit atque quia necessitatibus impedit ducimus deserunt! Magnam ex aliquam facilis modi, tempora incidunt repellendus? Enim, praesentium?",
//         reply: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nemo, voluptas obcaecati quia, ducimus doloribus hic, saepe impedit eveniet odio quod! Temporibus soluta autem quod modi porro quos cum voluptate.",
//         timeStamp: '0:0:0',
//     },
//     {
//         postId: 2,
//         userId: 1,
//         title: "Hydro Plant getting drainded",
//         image:'/assets/images/landing-page/plant-market.jpg',
//         question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et maxime omnis molestias sit atque quia necessitatibus impedit ducimus deserunt! Magnam ex aliquam facilis modi, tempora incidunt repellendus? Enim, praesentium?",
//         reply: null,
//         timeStamp: '0:0:0',
//     },
//     {
//         postId: 3,
//         userId: 1,
//         title: "Hydro Plant getting drainded",
//         image:'/assets/images/landing-page/plant-market.jpg',
//         question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et maxime omnis molestias sit atque quia necessitatibus impedit ducimus deserunt! Magnam ex aliquam facilis modi, tempora incidunt repellendus? Enim, praesentium?",
//         reply: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nemo, voluptas obcaecati quia, ducimus doloribus hic, saepe impedit eveniet odio quod! Temporibus soluta autem quod modi porro quos cum voluptate.",
//         timeStamp: '0:0:0',
//     }
// ]

const useGetMyPosts = () => {
    const storedResponse = JSON.parse(localStorage.getItem("credential"));
    console.log("Cart stored response:", storedResponse._id);
    let userId = storedResponse._id;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    const posts = await getQuestionsByUserId(userId);
    setPosts(posts.questions);
    console.log("useGetMyPosts posts:",posts)
  };

  return posts;
};

export default useGetMyPosts;
