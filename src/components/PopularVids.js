import React from "react";
import { getDiffInDays, getViewCount } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addVideoInfo } from "../utils/appSlice";

const PopularVids = ({ video }) => {
  const dispatch = useDispatch();

  const navigateToWatch = () => {
    dispatch(addVideoInfo(video));
  };

  return (
    <div
      onClick={navigateToWatch}
      className="flex w-4/5  my-2 col-span-4 mx-auto shadow-sm rounded-lg"
    >
      <img
        className="w-[180px] h-[95px] rounded-2xl "
        alt="Suggested Video Logo"
        src={video?.snippet?.thumbnails?.medium?.url}
      />
      <div className="w-full px-2 overflow-hidden">
        <div className="overflow-hidden h-[50px]" title={video?.snippet?.title}>
          {video?.snippet?.title}{" "}
        </div>
        <div
          title={video?.snippet?.channelTitle}
          className="text-sm font-semibold text-gray-700"
        >
          {video?.snippet?.channelTitle}{" "}
        </div>
        <div className="flex">
          <div>{getViewCount(video?.statistics?.viewCount)} </div>
          <div className="font-bold mx-2">.</div>
          <div>{getDiffInDays(video?.snippet?.publishedAt)} </div>
        </div>
      </div>
    </div>
  );
};

export default PopularVids;
