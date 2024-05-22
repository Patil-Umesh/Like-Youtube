import React from "react";

const Comments = ({ data }) => {
  // console.log(data);
  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textOriginal,
  } = data ?? {};

  let likeCnt;
  if (likeCount < 1000) {
    likeCnt = likeCount;
  } else if (likeCount >= 1000000) {
    likeCnt = Math.round(likeCount / 1000000) + "M";
  } else if (likeCount >= 1000) {
    likeCnt = Math.round(likeCount / 1000) + "K";
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

  return (
    authorProfileImageUrl && (
      <div className="flex justify-start my-2 py-1">
        <img
          className="w-[2.5rem] h-[2.5rem] rounded-full cursor-pointer bg-black"
          alt="Channel Logo"
          src={authorProfileImageUrl}
        />
        <div className="mx-5">
          <div className="flex">
            <div
              title={authorDisplayName}
              className="cursor-pointer mx-1 font-bold"
            >
              {authorDisplayName}{" "}
            </div>
            <div className="mx-2">{publish} </div>
          </div>
          <p className="text-md">{textOriginal} </p>
          <div className="flex">
            <button
              title="I like this"
              className="hover:bg-gray-200 hover:rounded-full mr-2 px-4 py-2 ml-2 flex items-center"
            >
              <img
                className="w-6 pr-2"
                alt="Like"
                src="https://cdn-icons-png.flaticon.com/128/1000/1000621.png"
              />
              {likeCnt}
            </button>
            <button
              title="I dislike this"
              className="hover:bg-gray-200 hover:rounded-full mr-2 px-4 py-2 ml-2 items-center"
            >
              <img
                className="w-6 p-1"
                alt="Dislike"
                src="https://cdn-icons-png.flaticon.com/128/5465/5465472.png"
              />
            </button>
            <button className="text-sm font-semibold hover:bg-gray-200 hover:rounded-full mr-2 px-4 py-2 ml-2 items-center">
              Reply
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Comments;
