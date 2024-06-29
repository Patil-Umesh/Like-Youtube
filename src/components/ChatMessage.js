import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center cursor-pointer hover:bg-gray-100">
      <img
        className="w-8 h-8 m-2 cursor-pointer"
        alt="User"
        src="https://cdn-icons-png.flaticon.com/128/16322/16322135.png"
      />
      <span className="font-semibold text-gray-500 mr-2">{name} </span>
      <span className="">{message} </span>
    </div>
  );
};

export default ChatMessage;
