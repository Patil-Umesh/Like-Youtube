import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "../utils/chatSlice";
import { generate, generateString } from "../utils/helper";

const LiveChat = () => {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat?.messages);
  // console.log(chatMessages);
  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("Polling data");
      dispatch(
        addChatMessages({
          name: generate(),
          message: generateString(30) + "🙌",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full border border-gray-300 rounded-xl bg-gray-50">
      <div className="flex justify-between">
        <h2 className="px-4 my-3">Top chat</h2>
        <button className="m-2 px-2 hover:bg-gray-100 rounded-lg">❌ </button>
      </div>
      <div className="border-t border-gray-300 w-full"></div>
      <div className="my-2 h-[465px] overflow-y-scroll">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div className="border-t border-gray-300 w-full"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChatMessages({
              name: "Umesh Patil",
              message: chatMessage,
            })
          );
          setChatMessage("");
        }}
        className="flex my-2 justify-between content-center px-5"
      >
        <input
          onChange={(e) => {
            setChatMessage(e.target.value);
          }}
          value={chatMessage}
          className="bg-gray-300 ps-2 px-2 py-2 rounded-lg outline-none"
          placeholder="Chat..."
          type="text"
        />
        <button className="px-6 rounded-lg bg-orange-300 hover:bg-orange-200">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
