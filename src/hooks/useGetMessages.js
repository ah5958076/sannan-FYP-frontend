import React, { useEffect, useState } from 'react'

const useGetMessages = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 1,
            reciever: 2,
            text: "this is msg 1",
            time: '23:00:00'
        },
        {
            id: 2,
            sender: 2,
            reciever: 1,
            text: "this is msg 2",
            time: '23:00:00'
        },
        {
            id: 3,
            sender: 1,
            reciever: 2,
            text: "this is msg 3",
            time: '23:00:00'
        },
        {
            id: 4,
            sender: 1,
            reciever: 2,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate',
            time: '23:00:00'
        },
        {
            id: 4,
            sender: 1,
            reciever: 2,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate',
            time: '23:00:00'
        },
        {
            id: 4,
            sender: 1,
            reciever: 2,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate',
            time: '23:00:00'
        },
        {
            id: 4,
            sender: 1,
            reciever: 2,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate',
            time: '23:00:00'
        },

    ]);
    useEffect(()=>{},[])
    return messages;
}

export default useGetMessages
