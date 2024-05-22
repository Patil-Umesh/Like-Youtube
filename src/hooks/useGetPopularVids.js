import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VIDEO_API } from "../utils/constants";
import { addPopularVids } from "../utils/appSlice";

const useGetPopularVids = () => {
  const popularVids = useSelector((store) => store.app?.popularVideos);
  const dispatch = useDispatch();
  const getPopularVideos = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    dispatch(addPopularVids(json.items));
  };
  useEffect(() => {
    !popularVids && getPopularVideos();
  }, []);
};

export default useGetPopularVids;
