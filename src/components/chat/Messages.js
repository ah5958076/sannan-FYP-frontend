//Messages.js fil
import React, { useContext, useEffect, useState, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setNotification,setLastMessage } from "../../redux/actions/userActions";

import { getMessages } from "../../Apis/ChatApis/getMessagesApis";
import { getAllMessages } from "../../Apis/ChatApis/getAllMessagesApis";

// import { AuthContext } from "../Context/AuthContext";


import io from "socket.io-client";
import { getNotification } from "../../Apis/ChatApis/getNotificationsApis";
import MessageGroup from "./FormatDate";
const ENDPOINT = "http://localhost:5000";
var socketClient, selectedChatCompare;

const Messages = ({ selectedChat }) => {
  const messagesRef = useRef(null);
  const dispatch = useDispatch();
  // const latestMessage = useSelector((state) => state.lastMessage);
  const receiverId = useSelector((state)=>state.chat.receiverId)
console.log("Message.js receiverID:",receiverId);

  // const { UserID, user } = useContext(AuthContext);
  const storedResponse = JSON.parse(localStorage.getItem("credential"));
  console.log("Cart stored response:", storedResponse._id);
  
    let userId = storedResponse._id;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({ content: "" });
  // const [upDateReceiver, setUpDateReceiver] = useState();

  const [socketConnected, setSocketConnected] = useState(false);
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setMessage({ ...message, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { content } = message;
    console.log("postData receiverID:",receiverId);

    const res = await fetch("http://localhost:5000/sendMessage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      
      body: JSON.stringify({ userId, receiverId, content }),
    });
    const response = await res.json();
    if (socketClient) {
      console.log("socketClient receiverID:",receiverId);

      socketClient.emit("new message", response.msg, receiverId);
      fetchMessages(selectedChat);
      fetchAllMessagges();

    }
    if (response) {
      setMessage({ content: "" });
      console.log("Chat Responce:", response);
    } else {
      window.alert("Error in Message sending!");
    }
  };
  const postNotification = (notification) => {
    const res = fetch("http://localhost:5000/saveNotification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notification),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("Success res:", res);
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("res:", res);
      });
  };
  useEffect(() => {
    if (selectedChat) {
      fetchMessages(selectedChat);
      // setUpDateReceiver(selectedChat);
      selectedChatCompare = selectedChat;
      fetchNotification();
      fetchAllMessagges();


    }
  }, [selectedChat]);

  useEffect(() => {
    socketClient = io(ENDPOINT);
    socketClient.emit("setup", storedResponse);
    socketClient.on("connected", () => {
      console.log("Socket connected!");
      setSocketConnected(true);
    });
  }, [storedResponse]);

  const fetchMessages = async (chatId) => {
    try {
      if (chatId) {
        const res = await getMessages(chatId);
        socketClient.emit("join chat", chatId);
        setMessages(res.data.messages);
        socketClient.emit("join chat", chatId);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  const fetchAllMessagges = async () => {
    try {
      const allMessages = await getAllMessages();
      dispatch(setLastMessage(allMessages.data.messages));

      // setAllMsg(allMessages.data.messages);
    } catch (error) {
      console.error("Error in fetching allMessages", error);
    }
  };
  const fetchNotification = async () => {
    try {
      const notification = await getNotification();
      // console.log(
      //   "notification.data.notifications",
      //   notification.data.notifications
      // );
      dispatch(setNotification(notification.data.notifications));
    } catch (error) {
      console.error("Error in fetching Notifications",error);
    }
  };
  useEffect(() => {
    socketClient.on("message Received", (newMessageRecieved) => {
      if (
        selectedChat &&
        selectedChatCompare === newMessageRecieved.createdChatID
      ) {
        console.log("newMessageRecieved in Messages.js:", newMessageRecieved);
        setMessages([...messages, newMessageRecieved]);
        fetchAllMessagges();

      } else if (selectedChatCompare !== newMessageRecieved.createdChatID) {
        console.log("  notification");
        // dispatch(setNotification(newMessageRecieved));
        postNotification(newMessageRecieved);
        fetchNotification();
        fetchAllMessagges();

      }
    });
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages, selectedChat]);
 

  return (
    <>
      <p>SelectedChatID: {selectedChat}</p>
      <div
        ref={messagesRef}
        className="list-group"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {messages && messages.length ? (
         <div>
         <MessageGroup messages={messages} userId={userId} />
       </div>
        ) : (
          <div className="flex justify-center items-center h-full">
          <p>Plant Paradise Hub</p>
        </div>
        )}
      </div>
      {selectedChat || receiverId ? (
        <div className="texing">
          <input
          className="bg-neutral-300 text-primary-900 w-80 rounded-lg py-2 px-3 focus:outline-none"
            type="text"
            onChange={handleInput}
            name="content"
            value={message.content}
          />
          <button onClick={postData} type="submit">
          <i className="fa-solid fa-check  transition-all duration-300 bg-primary-800 hover:bg-primary-600 active:scale-75  text-white p-2 rounded-full"></i>

          </button>
        </div>
      ) : null}
    </>
  );
};

export default Messages;
