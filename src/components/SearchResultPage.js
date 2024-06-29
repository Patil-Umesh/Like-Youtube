import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiffInDays } from "../utils/helper";
import { addVideoInfo, toggleMenu } from "../utils/appSlice";
import { useNavigate } from "react-router-dom";

const SearchResultPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchResults = useSelector(
    (store) => store.searchResult?.searchResult
  );
  // console.log(searchResults);
  const navigateToPlay = (result) => {
    dispatch(addVideoInfo(result));
    dispatch(toggleMenu());
    navigate("/play?v=" + result?.id?.videoId);
  };

  return (
    <>
      <div className="border border-gray-100 my-2 mx-8"></div>
      {searchResults.map((result, i) => (
        <div
          onClick={() => {
            navigateToPlay(result);
          }}
          key={i}
          className="flex mx-8 my-3 w-[1200px] cursor-pointer"
        >
          {result?.snippet?.thumbnails?.medium?.url && (
            <img
              alt="thumbnail"
              src={result?.snippet?.thumbnails?.medium?.url}
              className="w-[500px] h-[270px] rounded-xl hover:rounded-none cursor-pointer object-cover"
            />
          )}
          {result?.snippet?.thumbnails?.medium?.url && (
            <div className="w-[700px] cursor-pointer">
              <h1
                title={result?.snippet?.title.replace(/&amp;/g, "&")}
                className="px-4 text-xl mb-1"
              >
                {result?.snippet?.title.replace(/&amp;/g, "&")}
              </h1>
              <div className="text-sm text-gray-600 px-4 mb-1">
                {getDiffInDays(result?.snippet?.publishedAt)}{" "}
              </div>
              <div
                title={result?.snippet?.channelTitle}
                className="text-sm font-semibold text-gray-600 px-4 mb-1 cursor-pointer hover:text-gray-900"
              >
                <a
                  href={
                    "https://www.youtube.com/channel/" +
                    result?.snippet?.channelId
                  }
                  rel="noreferrer"
                  target="_blank"
                >
                  {result?.snippet?.channelTitle}{" "}
                </a>
              </div>
              <div
                title={result?.snippet?.description}
                className="text-sm text-gray-600 px-4 mb-1 cursor-pointer hover:text-gray-900 overflow-hidden"
              >
                {result?.snippet?.description}{" "}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SearchResultPage;
