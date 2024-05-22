import React from "react";
import { buttonList } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonList.map((button) => (
        <button
          title={button}
          key={button}
          className="h-10 text-nowrap py-2 px-3 m-2 text-black bg-gray-100 hover:bg-gray-200 active:bg-black active:text-white font-bold rounded-xl"
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
