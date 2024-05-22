import { useEffect } from "react";
import { MOST_WATCHED } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMostWatchedVids } from "../utils/appSlice";

const useGetMostWatched = () => {
  const dispatch = useDispatch();
  const getMostWatchedVids = async () => {
    const response = await fetch(MOST_WATCHED);
    const data = await response.json();
    console.log(data.items);
    dispatch(addMostWatchedVids(data.items));
  };

  useEffect(() => {
    getMostWatchedVids();
  }, []);
};

export default useGetMostWatched;
