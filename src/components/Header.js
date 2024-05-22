import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
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
            className="border border-gray-300 outline-none ps-3 rounded-l-full w-[600px] h-[2.8rem]"
            type="text"
            placeholder="Search"
          />
          <div className="flex items-center text-center border border-gray-300 rounded-r-full h-[2.8rem] hover:bg-gray-100">
            <img
              title="Search"
              className="w-12  px-2 cursor-pointer"
              alt="Search"
              src="https://cdn-icons-png.flaticon.com/128/14071/14071320.png"
            />
            <button></button>
          </div>
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
