import React from "react";
import VideoCard from "./VideoCard";
import useGetPopularVids from "../hooks/useGetPopularVids";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  useGetPopularVids();
  const popularVids = useSelector((store) => store.app?.popularVideos);

  return popularVids ? (
    <div className="flex flex-wrap py-5">
      {popularVids.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video?.id} info={video} />
        </Link>
      ))}
    </div>
  ) : null;
};

export default VideoContainer;
