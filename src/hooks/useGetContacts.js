import React, { useState } from 'react'


let contact_arr = [
  {
    id:89,
    name: 'Ash ly',
    img: "/assets/images/landing-page/plant-market.jpg",
    last_msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eveniet autem recusandae ratione pariatur aperiam voluptatem consequuntur. Laudantium veritatis sed id porro consequatur vero at sint? At vero ut dolore!",
    timeStamp: "0:0:0"
  },
  {
    id:34,
    name: 'levi',
    img: "/assets/images/landing-page/plant-market.jpg",
    last_msg: "Lorem ipsum dolor sit amet consectetur",
    timeStamp: "0:0:0"
  },
  {
    id:23,
    name: 'Alison Thunder',
    img: "/assets/images/landing-page/plant-market.jpg",
    last_msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eveniet autem recusandae ratione pariatur aperiam voluptatem consequuntur. Laudantium veritatis sed id porro consequatur vero at sint? At vero ut dolore!",
    timeStamp: "0:0:0"
  },
  {
    id:39,
    name: 'Mark Ven',
    img: "/assets/images/landing-page/plant-market.jpg",
    last_msg: "Oky!",
    timeStamp: "0:0:0"
  },
  {
    id:39,
    name: 'Mark Ven',
    img: "/assets/images/landing-page/plant-market.jpg",
    last_msg: "Oky!",
    timeStamp: "0:0:0"
  },
  {
    id:39,
    name: 'Mark Ven',
    img: "/assets/images/landing-page/plant-market.jpg",
    last_msg: "Oky!",
    timeStamp: "0:0:0"
  },
  {
    id:39,
    name: 'Mark Ven',
    img: "/assets/images/landing-page/plant-market.jpg",
    last_msg: "Oky!",
    timeStamp: "0:0:0"
  },
  {
    id:39,
    name: 'Mark Ven',
    img: "/assets/images/landing-page/plant-market.jpg",
    last_msg: "Oky!",
    timeStamp: "0:0:0"
  },
  {
    id:39,
    name: 'Mark Ven',
    img: "/assets/images/landing-page/plant-market.jpg",
    last_msg: "Oky!",
    timeStamp: "0:0:0"
  },
]

const useGetContacts = () => {
  const [contact,setContacts] = useState(contact_arr);
  return contact;
}

export default useGetContacts
