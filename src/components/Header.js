import React, { useState } from "react";
import { CART_URI, LOGO_URI } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const goToHome = () => {
    navigate("/");
  };
  return (
    <header className="flex flex-col justify-evenly items-center shadow-md p-2 md:flex-row lg:flex-row xl:flex-row">
      <img
        className="w-32 cursor-pointer"
        src={LOGO_URI}
        alt="Food Cart"
        onClick={goToHome}
      />
      <nav>
        <ul className="flex flex-col items-center md:flex-row lg:flex-row xl:flex-row">
          <li className="mx-5">
            <a className="cursor-pointer text-xl font-bold" onClick={goToHome}>
              Home
            </a>
          </li>
          <li className="mx-5">
            <a className="cursor-pointer text-xl font-bold">About</a>
          </li>
          <li className="mx-5">
            <a className="cursor-pointer text-xl font-bold">Help</a>
          </li>
          <li className="mx-5">
            <a className="cursor-pointer text-xl font-bold">Contact</a>
          </li>
          <li className="mx-5">
            <input
              type="text"
              placeholder="Enter the restaurant you are looking for"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="border border-gray-500 rounded-md w-40 p-1 md:w-80 lg:w-80 xl:w-80"
            />
          </li>
          <li className="mx-5">
            <a>
              <img
                className="w-10 h-10 cursor-pointer"
                src={CART_URI}
                alt="Shopping Cart"
              />
            </a>
          </li>
          <li className="mx-5">
            <button className="bg-black rounded-lg cursor-pointer text-white w-24 p-2">
              SignIn
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
