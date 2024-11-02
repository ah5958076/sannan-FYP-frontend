// List
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChat } from "../../Apis/ChatApis/getChatApis";
import { getAllMessages } from "../../Apis/ChatApis/getAllMessagesApis";
import { getNotification } from "../../Apis/ChatApis/getNotificationsApis";
import { removeNotification } from "../../Apis/ChatApis/removeNotificationApis";
import { setLastMessage, setNotification, setReceiverId } from "../../redux/actions/userActions";

const List = ({ onSelectChat }) => {
  // const { UserID } = useContext(AuthContext);
  const storedResponse = JSON.parse(localStorage.getItem("credential"));
  console.log("Cart stored response:", storedResponse._id);
  
    let userId = storedResponse._id;
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.chat.notifications);
  const latestMsg = useSelector((state) => state.chat.lastMessage);

  const [chat, setChat] = useState([]);
  // const [allMsg, setAllMsg] = useState([]);
  useEffect(() => {
    fetchChat();
    fetchAllMessagges();
    fetchNotification();
  }, []);
  const fetchChat = async () => {
    const res = await getChat();
    setChat(res.data.chat);
    // console.log(chat);
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
      console.log(
        "notification.data.notifications",
        notification.data.notifications
      );
      dispatch(setNotification(notification.data.notifications));
    } catch (error) {
      console.error("Error in fetching Notifications", error);
    }
  };
  const handleChatClick = (chatId, receiverID) => {
    onSelectChat(chatId);
    dispatch(setReceiverId(receiverID));
    deleteNotification(chatId);
  };
  const deleteNotification = (chatId) => {
    removeNotification(chatId);
  };
  return (
    <>
      {chat.length ? (
        <ul className="list-group bg-[#eceaea] relative shadow-md">
          {chat.map((item) => {
            const count = notifications.filter(
              (notification) =>
                notification.createdChatID === item._id &&
                notification.senderID !== userId
            ).length;
            const lastMessage = latestMsg
              .filter((msg) => msg.createdChatID === item._id)
              .pop();
            var isUserInChat = false;
            isUserInChat =
              item.senderID?._id === userId || item.receiverID?._id === userId;

            return (
              isUserInChat && (
                <li
                  key={item._id}
                  className="list-group-item border border-none text-[#126912] font-extrabold bg-[#eee1e1] p-4 m-2 rounded-md relative"
                  //its send the chat's ID and receiverID or senderID to 'Chat' component according to comparison
                  onClick={() =>
                    handleChatClick(
                      item._id,
                      userId === item.senderID?._id
                        ? item.receiverID?._id
                        : item.senderID?._id
                    )
                  }
                >
                  <div className="flex start">  {item.senderID._id === userId
                    ? item.receiverID?.userName
                    : item.senderID?.userName}</div>
                
                  <div>
                    <div className="lastMessageCount">
                      <span className="lastMessage font-mono">
                        {" "}
                        {lastMessage && lastMessage.content.slice(0, 10)}
                      </span>
                      {/* if some notifications not have the same senderID and UserID then its show the notification */}
                      {notifications.some(
                        (notification) => notification.senderID !== userId
                      ) &&
                        count > 0 && <div className="count bg-[rgb(44,155,87)] bg-opacity-80 text-white rounded-full px-2 py-1 text-xs absolute bottom-0 right-0 mt-1 mr-1">{count}</div>}
                    </div>
                  </div>
                </li>
              )
            );
          })}
        </ul>
      ) : (
        <p>You Have Currently Not Any Connectin!</p>
      )}
    </>
  );
};

export default List;