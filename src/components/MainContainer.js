import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);
  return (
    <div
      className={` ${
        isMenuOpen === false ? "col-span-11 py-5 mx-16" : "col-span-10 py-5"
      }`}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
