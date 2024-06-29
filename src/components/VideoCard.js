import React from "react";
import { useDispatch } from "react-redux";
import { addVideoInfo, toggleMenu } from "../utils/appSlice";
import { getDiffInDays, getViewCount } from "../utils/helper";
import { LIVE_TAG } from "../utils/constants";

const VideoCard = ({ info, live }) => {
  const dispatch = useDispatch();

  const { snippet, statistics } = info ?? {};
  const { title, channelTitle, thumbnails, publishedAt } = snippet ?? {};
  const { viewCount } = statistics ?? {};

  const views = getViewCount(viewCount);
  const publish = getDiffInDays(publishedAt);

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
            {live && (
              <img alt="LIVE" className="ml-[100px] w-14 h-12" src={live} />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export const LiveVideoCard = ({ info }) => {
  return (
    <div className="shadow-md">
      <VideoCard live={LIVE_TAG} info={info} />
    </div>
  );
};
export default VideoCard;
