import React, { useEffect } from "react";
// import useGetVideoComments from "../hooks/useGetVideoComments";
import { useSelector } from "react-redux";
import Comments from "./Comments";
import { API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoComments } from "../utils/appSlice";

const CommentsContainer = ({ id }) => {
  // useGetVideoComments(id);
  const dispatch = useDispatch();
  const getComments = async () => {
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=" +
        id +
        "&maxResults=100&key=" +
        API_KEY
    );
    const data = await response.json();
    // console.log(data?.items);
    dispatch(addVideoComments(data?.items));
  };
  useEffect(() => {
    getComments();
  }, [id]);
  const comments = useSelector((store) => store.app?.videoComments);
  return (
    <div>
      {comments?.map((comment) => (
        <Comments
          key={comment?.id}
          data={comment?.snippet?.topLevelComment?.snippet}
        />
      ))}
    </div>
  );
};

export default CommentsContainer;
