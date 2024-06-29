import React from "react";
import VideoCard, { LiveVideoCard } from "./VideoCard";
import useGetPopularVids from "../hooks/useGetPopularVids";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  useGetPopularVids();
  const popularVids = useSelector((store) => store.app?.popularVideos);

  return popularVids ? (
    <div className="flex flex-wrap py-5">
      {popularVids && (
        <Link to={"/live?v=" + popularVids[0].id}>
          <LiveVideoCard info={popularVids[0]} />
        </Link>
      )}
      {popularVids.map((video) =>
        popularVids[0].id === video.id ? (
          ""
        ) : (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard key={video?.id} info={video} />
          </Link>
        )
      )}
    </div>
  ) : null;
};

export default VideoContainer;
