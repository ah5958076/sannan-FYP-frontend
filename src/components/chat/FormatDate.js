// formatDate
import React from 'react';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const isToday = date.toDateString() === today.toDateString();
  const isYesterday = date.toDateString() === yesterday.toDateString();

  if (isToday) return 'Today';
  if (isYesterday) return 'Yesterday';
  return date.toDateString();;
};


const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toTimeString().split(' ')[0]; 
};

const MessageGroup = ({ messages, userId }) => {
  return (
    <div>
      {messages.map((message, index) => {
        const showTag =
          index === 0 ||
          formatDate(messages[index - 1].date) !== formatDate(message.date);
        return (
          <React.Fragment key={message?._id}>
            {showTag && (
              <div className="font-bold mt-4">
                {formatDate(message.date)}
              </div>
            )}
            <div
              className={`max-w-[12rem] md:max-w-[20rem]  rounded-3xl p-2 m-4 ${
                userId === message?.senderID?._id ? 'ml-auto bg-green-500 rounded-br-none' : 'mr-auto bg-yellow-500 rounded-bl-none'
              }`}
              style={{
                backgroundColor: userId === message?.senderID?._id ? 'rgb(44, 155, 87)' : 'rgb(255, 146, 32)',
              }}
            >
              {message?.senderID && (
                <div className="max-w-80 text-white p-2 rounded-lg flex flex-col">
                  <p className="mr-auto">{message.content}</p>
                  <p className="text-black ml-auto">{formatTime(message.date)}</p>
                </div>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default MessageGroup;
