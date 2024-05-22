import React from "react";
import { useDispatch } from "react-redux";
import { addVideoInfo, toggleMenu } from "../utils/appSlice";

const VideoCard = ({ info }) => {
  const dispatch = useDispatch();
  // console.log(info);
  const { snippet, statistics } = info ?? {};
  const { title, channelTitle, thumbnails, publishedAt } = snippet ?? {};
  const { viewCount } = statistics ?? {};

  let views;
  if (viewCount < 1000) {
    views = viewCount;
  } else if (viewCount >= 1000000) {
    views = Math.round(viewCount / 1000000) + "M";
  } else if (viewCount >= 1000) {
    views = Math.round(viewCount / 1000) + "K";
  }

  let date1 = new Date(publishedAt);
  let date2 = new Date();
  let diffInTime = date2.getTime() - date1.getTime();
  let diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));
  // console.log(diffInDays);
  let publish;
  if (diffInDays === 0) {
    publish = "Few hours ago";
  } else if (diffInDays === 1) {
    publish = `${diffInDays} day ago`;
  } else if (diffInDays > 1) {
    publish = `${diffInDays} days ago`;
  }
  const navigateToWatch = () => {
    dispatch(addVideoInfo(info));
    dispatch(toggleMenu());
  };

  return (
    thumbnails?.maxres?.url && (
      <div onClick={navigateToWatch} className="m-1 px-1 py-2 cursor-pointer">
        <img
          className="w-[400px] h-[225px] rounded-2xl hover:rounded-none"
          alt="Video"
          src={thumbnails?.maxres?.url}
        />
        <div className="w-[400px] cursor-pointer px-4">
          <h6 title={title} className="px-1 py-1 text-wrap overflow-hidden">
            {title}{" "}
          </h6>
          <h6
            title={channelTitle}
            className="px-1 text-gray-600 hover:text-gray-900"
          >
            {channelTitle}{" "}
          </h6>
          <div className="flex">
            <h6 className="px-1 text-gray-700">{views} views</h6>
            <div className="font-bold mx-1">.</div>
            <h6 className="px-1 text-gray-700">{publish} </h6>
          </div>
        </div>
      </div>
    )
  );
};

export default VideoCard;
