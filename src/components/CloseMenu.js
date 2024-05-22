import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";

const CloseMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goHome = () => {
    dispatch(toggleMenu());
    navigate("/");
  };
  return (
    <div className="col-span-1 py-5 h-[630px] text-center">
      <div
        onClick={goHome}
        title="Home"
        className="mx-2 mt-2 text-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-7 px-1 mx-auto py-2 cursor-pointer rounded-full"
          alt="Home"
          src="https://cdn-icons-png.flaticon.com/128/10263/10263049.png"
        />
        <h6 className="px-1 py-1">Home</h6>
      </div>
      <div
        title="Shorts"
        className="mx-2 mt-2 text-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-7 px-1 mx-auto py-2 cursor-pointer rounded-full"
          alt="Shorts"
          src="https://cdn-icons-png.flaticon.com/128/16104/16104947.png"
        />
        <h3 className="px-1 py-1">Shorts</h3>
      </div>
      <div
        title="Subscriptions"
        className="mx-2 mt-2 text-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-7 px-1 mx-auto py-2 cursor-pointer rounded-full"
          alt="Subscriptions"
          src="https://cdn-icons-png.flaticon.com/128/10971/10971976.png"
        />
        <h3 className="px-1 py-1">Subscriptions</h3>
      </div>

      <div
        title="You"
        className="mx-2 mt-2 text-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-7 px-1 mx-auto py-2 cursor-pointer rounded-full"
          alt="You"
          src="https://cdn-icons-png.flaticon.com/128/11186/11186784.png"
        />
        <h3 className="px-1 py-1">You</h3>
      </div>
      <div
        title="History"
        className="mx-2 mt-2 text-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-7 px-1 mx-auto py-2 cursor-pointer rounded-full"
          alt="History"
          src="https://cdn-icons-png.flaticon.com/128/15337/15337980.png"
        />
        <h3 className="px-1 py-1">History</h3>
      </div>
    </div>
  );
};

export default CloseMenu;
