import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addVideoComments, addVideoInfo } from "../utils/appSlice";
import { addSearchResults } from "../utils/searchResultSlice";

const SideContainer = () => {
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);
  const videoInfo = useSelector((store) => store.app?.videoInfo);
  const dispatch = useDispatch();

  const clearVidInfo = () => {
    dispatch(addVideoInfo(null));
    dispatch(addVideoComments(null));
    dispatch(addSearchResults(null));
  };

  return (
    <div
      className={`${
        isMenuOpen && videoInfo
          ? "absolute bg-white z-50 col-span-2 py-5 h-auto"
          : "col-span-2 py-5 hover:overflow-y-scroll h-[630px]"
      }`}
    >
      <Link to="/">
        <div
          onClick={clearVidInfo}
          title="Home"
          className="flex justify-start mx-2 mt-2 items-center content-center cursor-pointer bg-gray-100 rounded-lg"
        >
          <img
            className="w-12  p-2 cursor-pointer rounded-full"
            alt="Home"
            src="https://cdn-icons-png.flaticon.com/128/10263/10263049.png"
          />
          <h3 className="font-bold px-5">Home</h3>
        </div>
      </Link>
      <div
        title="Shorts"
        className="flex justify-start mx-2 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Shorts"
          src="https://cdn-icons-png.flaticon.com/128/16104/16104947.png"
        />
        <h3 className="font-bold px-5">Shorts</h3>
      </div>
      <div
        title="Subscriptions"
        className="flex justify-start mx-2 mb-3 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Subscriptions"
          src="https://cdn-icons-png.flaticon.com/128/10971/10971976.png"
        />
        <h3 className="font-bold px-5">Subscriptions</h3>
      </div>
      <div className="border border-gray-200"></div>
      <div
        title="You"
        className="flex justify-start mx-2 mt-3 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="You"
          src="https://cdn-icons-png.flaticon.com/128/11186/11186784.png"
        />
        <h3 className="font-bold px-5">You</h3>
      </div>
      <div
        title="History"
        className="flex justify-start mx-2 mb-3 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="History"
          src="https://cdn-icons-png.flaticon.com/128/15337/15337980.png"
        />
        <h3 className="font-bold px-5">History</h3>
      </div>
      <div className="border border-gray-200"></div>
      <h2 className="font-bold m-2 px-5">Explore</h2>
      <div
        title="Trending"
        className="flex justify-start mx-2 mt-3 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Trending"
          src="https://cdn-icons-png.flaticon.com/128/1942/1942144.png"
        />
        <h3 className="font-bold px-5">Trending</h3>
      </div>
      <div
        title="Shopping"
        className="flex justify-start mx-2 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Shopping"
          src="https://cdn-icons-png.flaticon.com/128/3779/3779800.png"
        />
        <h3 className="font-bold px-5">Shopping</h3>
      </div>
      <div
        title="Music"
        className="flex justify-start mx-2 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Music"
          src="https://cdn-icons-png.flaticon.com/128/2424/2424869.png"
        />
        <h3 className="font-bold px-5">Music</h3>
      </div>
      <div
        title="Movies"
        className="flex justify-start mx-2 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Movies"
          src="https://cdn-icons-png.flaticon.com/128/15487/15487894.png"
        />
        <h3 className="font-bold px-5">Movies</h3>
      </div>
      <div
        title="Live"
        className="flex justify-start mx-2 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Live"
          src="https://cdn-icons-png.flaticon.com/128/13432/13432798.png"
        />
        <h3 className="font-bold px-5">Live</h3>
      </div>
      <div
        title="Gaming"
        className="flex justify-start mx-2 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Gaming"
          src="https://cdn-icons-png.flaticon.com/128/1946/1946639.png"
        />
        <h3 className="font-bold px-5">Gaming</h3>
      </div>
      <div
        title="News"
        className="flex justify-start mx-2 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="News"
          src="https://cdn-icons-png.flaticon.com/128/10290/10290536.png"
        />
        <h3 className="font-bold px-5">News</h3>
      </div>
      <div
        title="Sports"
        className="flex justify-start mx-2 mb-3 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Sports"
          src="https://cdn-icons-png.flaticon.com/128/12137/12137135.png"
        />
        <h3 className="font-bold px-5">Sports</h3>
      </div>
      <div className="border border-gray-200"></div>
      <div
        title="Settings"
        className="flex justify-start mx-2 mt-3 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Settings"
          src="https://cdn-icons-png.flaticon.com/128/9036/9036186.png"
        />
        <h3 className="font-bold px-5">Settings</h3>
      </div>
      <div
        title="Help"
        className="flex justify-start mx-2 mt-3 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Help"
          src="https://cdn-icons-png.flaticon.com/128/10308/10308800.png"
        />
        <h3 className="font-bold px-5">Help</h3>
      </div>
      <div
        title="Feedback"
        className="flex justify-start mx-2 mt-3 items-center content-center cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img
          className="w-12  p-2 cursor-pointer rounded-full"
          alt="Feedback"
          src="https://cdn-icons-png.flaticon.com/128/14784/14784680.png"
        />
        <h3 className="font-bold px-5">Feedback</h3>
      </div>
    </div>
  );
};

export default SideContainer;
