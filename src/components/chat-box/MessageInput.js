import React from "react";

const MessageInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full md:p-6 p-3 mt-auto align-bottom">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-around"
      >
        <input
          type="text"
          className="bg-neutral-300 text-primary-900 w-10/12 rounded-lg py-2 px-3 focus:outline-none"
          placeholder="Enter Message..."
        />
        <button type="submit" className="">
          <i className="fa-solid fa-check  transition-all duration-300 bg-primary-800 hover:bg-primary-600 active:scale-75  text-white p-2 rounded-full"></i>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
