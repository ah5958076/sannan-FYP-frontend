// Chat
import React, { useEffect, useState } from "react";
import List from "./List";
import Messages from "./Messages";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setReceiverId } from "../../redux/actions/userActions";

const Chat = () => {
  const params = useParams();
  const receiver = params.receiverID;

  const dispatch = useDispatch();

  // Use useSelector to get the receiverId from the Redux store
  const currentReceiverId = useSelector((state) => state.chat.receiverId);

  useEffect(() => {
    if (receiver) {
      dispatch(setReceiverId(receiver));
      console.log("Dispatching receiverID:", receiver);
    } else {
      console.error("receiverID is missing in URL parameters.");
    }
  }, [dispatch, receiver]);

  console.log("Chat.js ReceiverID from params:", receiver);
  console.log("Chat.js Current ReceiverID from Redux store:", currentReceiverId);

  const [selectedChat, setSelectedChat] = useState(null);

  const handleSelectChat = (chatId) => {
    setSelectedChat(chatId);
  };

  return (
    <>
      <div className="container w-full text-center">
        <div className="flex flex-row max-w-[1100px] m-auto bg-[#eceaea]">
          <div className="w-4/12 md:w-3/12">
            <List onSelectChat={handleSelectChat} />
          </div>
          <div className="col-2 chat-container w-full">
            <div className="list-group w-full">
          <Messages selectedChat={selectedChat} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
