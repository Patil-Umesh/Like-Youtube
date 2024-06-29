import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  // API_KEY,
  SEARCH_RESULTS_API,
  YOUTUBE_AUTOCOMPLETE_API,
} from "../utils/constants";
import { addSearchCache } from "../utils/searchSlice";
import { addSearchResults } from "../utils/searchResultSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_AUTOCOMPLETE_API + searchQuery);
    // console.log("API Call " + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1]);
    dispatch(
      addSearchCache({
        [searchQuery]: json[1],
      })
    );
  };
  const clickedSearchResult = (s, i) => {
    // console.log(s + " - " + i);
    const getSearchResults = async () => {
      const data = await fetch(
        SEARCH_RESULTS_API +
          searchQuery +
          "&key=" +
          process.env.REACT_APP_API_KEY
      );
      const json = await data.json();
      // console.log(json.items);
      dispatch(addSearchResults(json.items));
    };
    getSearchResults();
  };
  // useEffect(()=>{

  // },[])
  return (
    <>
      <div className="grid grid-cols-12 justify-evenly p-[0.5rem] shadow-lg">
        <div className="col-span-2 flex items-center text-center">
          <img
            onClick={() => {
              dispatch(toggleMenu());
            }}
            className="w-12  p-2 cursor-pointer hover:bg-gray-100 rounded-full"
            alt="Menu"
            src="https://cdn-icons-png.flaticon.com/128/9304/9304700.png"
          />
          <a href="/">
            <img
              title="YouTube Home"
              className="w-[112px] h-10 p-2 mx-2 cursor-pointer"
              alt="Logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53QyQTpAv52GsOzPW0ALeUgowsO22n5Bpds9nMCRM81PuCOc1gww05mUllR5ha_y9UQ&usqp=CAU"
            />
          </a>
        </div>
        <div className="col-span-8 flex justify-center items-center text-center">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
            className="border border-gray-300 outline-[#9eb6f8] outline-[0.5px] ps-3 rounded-l-full w-[600px] h-[2.8rem]"
            type="text"
            placeholder="Search"
          />
          <div className="flex items-center text-center border border-gray-300 rounded-r-full h-[2.8rem] hover:bg-gray-100">
            <button>
              <img
                title="Search"
                className="w-12  px-2 cursor-pointer"
                alt="Search"
                src="https://cdn-icons-png.flaticon.com/128/14071/14071320.png"
              />
            </button>
          </div>
          {showSuggestions && suggestions.length !== 0 ? (
            <div className="absolute w-[600px] top-[60px] left-[435px] bg-white rounded-lg border-y border-x border-gray-300 shadow-md">
              <ul className="py-2 text-left">
                {suggestions.map((s, i) => (
                  <li
                    onClick={() => {
                      setSearchQuery(s);
                      clickedSearchResult(s, i);
                      setShowSuggestions(false);
                    }}
                    key={s}
                    className="my-1 p-1 hover:bg-gray-100"
                  >
                    <span className="mx-2">🔍</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-span-2 flex justify-end items-center text-center">
          <img
            title="Settings"
            className="w-12  p-2 cursor-pointer hover:bg-gray-100 rounded-full"
            alt="Settings"
            src="https://cdn-icons-png.flaticon.com/128/12522/12522830.png"
          />
          <div className="flex items-center text-center border border-gray-300 rounded-full text-blue-800 font-semibold mx-2 px-2 py-1 hover:bg-sky-100">
            <img
              className="w-12  px-2 cursor-pointer"
              alt="User"
              src="https://cdn-icons-png.flaticon.com/128/16322/16322135.png"
            />
            <button>Sign in</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
