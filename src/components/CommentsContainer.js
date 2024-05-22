import React from "react";
import useGetVideoComments from "../hooks/useGetVideoComments";
import { useSelector } from "react-redux";
import Comments from "./Comments";

const CommentsContainer = ({ id }) => {
  useGetVideoComments(id);
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
