import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import SearchResultPage from "./SearchResultPage";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);
  const searchResults = useSelector(
    (store) => store.searchResult?.searchResult
  );
  // console.log(searchResults);

  return (
    <div
      className={` ${
        isMenuOpen === false ? "col-span-11 py-5 mx-16" : "col-span-10 py-5"
      }`}
    >
      <ButtonList />
      {!searchResults && <VideoContainer />}
      {searchResults && <SearchResultPage />}
    </div>
  );
};

export default MainContainer;
