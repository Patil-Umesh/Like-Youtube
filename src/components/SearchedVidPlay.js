import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Collapse, Ripple, initTWE } from "tw-elements";
import PopularVids from "./PopularVids";
import { Link } from "react-router-dom";
import { getDiffInDays } from "../utils/helper";
import CommentsContainer from "./CommentsContainer";

const SearchedVidPlay = () => {
  const popularVideos = useSelector((store) => store.app?.popularVideos);
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);
  const videoInfo = useSelector((store) => store.app?.videoInfo);
  const snippet = useSelector((store) => store.app?.videoInfo?.snippet);
  const vidId = useSelector((store) => store.app?.videoInfo?.id?.videoId);
  const { publishedAt, title, description, channelTitle } = snippet ?? {};

  const publish = getDiffInDays(publishedAt);

  useEffect(() => {
    initTWE({ Collapse, Ripple });
  }, []);

  return (
    snippet && (
      <div className="flex col-span-12">
        <div
          className={`${
            isMenuOpen && videoInfo
              ? "w-[830px] h-[499px] py-7 ml-28 col-span-8"
              : "w-[830px] h-[499px] py-7 ml-28 col-span-8"
          }  `}
          // className="w-[830px] h-[499px] py-7 ml-28"
        >
          <iframe
            className="aspect-video w-full rounded-2xl"
            src={
              "https://www.youtube.com/embed/" +
              vidId +
              "?rel=0&autoplay=1&mute=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="w-[830px]">
            <div className="my-1 py-1">
              <h1 className="px-1 py-1 text-wrap font-bold text-xl">
                {title}{" "}
              </h1>
            </div>
            <div className="flex h-10 justify-between">
              <div className="flex items-center">
                <h6
                  title={channelTitle}
                  className="px-1 font-semibold cursor-pointer"
                >
                  {channelTitle}{" "}
                </h6>
                <button className="bg-black text-white rounded-3xl px-4 py-2 ml-4 hover:opacity-90">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center">
                <button
                  title="I like this"
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 ml-2 rounded-l-3xl flex items-center border border-gray-300"
                >
                  <img
                    className="w-6 pr-2"
                    alt="Like"
                    src="https://cdn-icons-png.flaticon.com/128/1000/1000621.png"
                  />
                  {0}
                </button>
                <button
                  title="I dislike this"
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-r-3xl flex items-center border border-gray-300"
                >
                  <img
                    className="w-6 p-1"
                    alt="Dislike"
                    src="https://cdn-icons-png.flaticon.com/128/5465/5465472.png"
                  />
                </button>
                <button
                  title="Share"
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 ml-2 rounded-3xl flex items-center"
                >
                  <img
                    className="w-6 pr-2"
                    alt="Share"
                    src="https://cdn-icons-png.flaticon.com/128/9513/9513588.png"
                  />
                  Share
                </button>
                <button
                  title="Download"
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 ml-2 rounded-3xl flex items-center"
                >
                  <img
                    className="w-6 pr-2"
                    alt="Download"
                    src="https://cdn-icons-png.flaticon.com/128/11246/11246807.png"
                  />
                  Download
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 mx-3 px-2 py-2 rounded-3xl items-center">
                  <img
                    className="w-6"
                    alt="More"
                    src="https://cdn-icons-png.flaticon.com/128/13895/13895577.png"
                  />
                </button>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg px-2 py-2 mt-4 mb-5">
              <div className="flex font-bold">
                <h6 className="px-1">{10000} views</h6>
                <h6 className="px-1">{publish} </h6>
              </div>
              <div
                className="!visible hidden px-1 py-1"
                id="collapseDiv"
                data-twe-collapse-item
              >
                {description}
              </div>
              <button
                className="bg-gray-100 text-blue-600 text-left"
                type="button"
                data-twe-collapse-init
                data-twe-ripple-init
                data-twe-ripple-color="light"
                data-twe-target="#collapseDiv"
                aria-expanded="false"
                aria-controls="collapseDiv"
              >
                Show More/Less
              </button>
            </div>
            <div className="my-1 py-1">
              <h1 className="px-1 pt-2 mb-3 font-bold text-xl">
                {4561} Comments
              </h1>
              <div className="px-1">
                <CommentsContainer id={vidId} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full pt-7">
          {popularVideos?.map((video, index) =>
            vidId === video.id ? (
              ""
            ) : (
              <Link key={index} to={"/watch?v=" + video.id}>
                <PopularVids video={video} />
              </Link>
            )
          )}
        </div>
      </div>
    )
  );
};

export default SearchedVidPlay;
