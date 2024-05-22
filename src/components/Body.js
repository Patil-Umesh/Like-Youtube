import React from "react";
import SideContainer from "./SideContainer";
import CloseMenu from "./CloseMenu";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);
  const videoInfo = useSelector((store) => store.app?.videoInfo);
  return (
    <div className="grid grid-cols-12">
      {(isMenuOpen && videoInfo === null) || (isMenuOpen && videoInfo) ? (
        <SideContainer />
      ) : !isMenuOpen && videoInfo === null ? (
        <CloseMenu />
      ) : (
        ""
      )}
      <Outlet />
    </div>
  );
};

export default Body;
