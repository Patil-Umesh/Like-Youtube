import { useEffect } from "react";
import { API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoComments } from "../utils/appSlice";

const useGetVideoComments = (id) => {
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
  }, []);
};
export default useGetVideoComments;
