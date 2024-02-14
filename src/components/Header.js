import React, { useState } from "react";
import { CART_URI, LOGO_URI, HAMBURGER_ICON_URI } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [showHamburgerIcon, setShowHamburgerIcon] = useState(false);
  let totalQuantity = 0;
  const getCartItems = useSelector((state) => state.cart.cartItems);
  for (let i = 0; i <= getCartItems.length - 1; i++) {
    totalQuantity = totalQuantity + getCartItems[i].quantity;
  }
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const goToHome = () => {
    navigate("/");
  };
  const goToCartPage = () => {
    navigate("/cartpage");
  };
  const showNavItems = () => {
    setShowHamburgerIcon(!showHamburgerIcon);
  };
  const goToAbout = () => {
    navigate("/about");
  };
  const goToHelp = () => {
    navigate("/help");
  };
  return (
    <header className="flex flex-col justify-evenly items-center shadow-md p-2 md:flex-row lg:flex-row xl:flex-row">
      <div>
        <img
          className="w-10 cursor-pointer md:hidden lg:hidden xl:hidden"
          src={HAMBURGER_ICON_URI}
          alt="Hamburger Icon"
          onClick={showNavItems}
        />
      </div>
      <img
        className="w-32 cursor-pointer"
        src={LOGO_URI}
        alt="Food Cart"
        onClick={goToHome}
      />
      {/* Toggle the Hamburger Icon */}
      {showHamburgerIcon && (
        <nav>
          <ul className="flex flex-col items-center md:flex-row lg:flex-row xl:flex-row">
            <li className="mx-5">
              <a
                className="cursor-pointer text-xl font-bold"
                onClick={goToHome}
              >
                Home
              </a>
            </li>
            <li className="mx-5">
              <a
                className="cursor-pointer text-xl font-bold"
                onClick={goToAbout}
              >
                About
              </a>
            </li>
            <li className="mx-5">
              <a
                className="cursor-pointer text-xl font-bold"
                onClick={goToHelp}
              >
                Help
              </a>
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
              <a className="flex items-center">
                <img
                  className="w-10 h-10 cursor-pointer"
                  src={CART_URI}
                  alt="Shopping Cart"
                  onClick={goToCartPage}
                />
                <span className="flex items-center font-extrabold text-2xl">
                  {" "}
                  - {totalQuantity}
                </span>
              </a>
            </li>
            <li className="mx-5">
              <button className="bg-black rounded-lg cursor-pointer text-white w-24 p-2">
                SignIn
              </button>
            </li>
          </ul>
        </nav>
      )}
      {/* Larger screens show the items in smaller screens hide the content */}
      <nav>
        <ul className="flex hidden md:flex xl:flex lg:flex flex-col items-center md:flex-row lg:flex-row xl:flex-row">
          <li className="mx-5">
            <a className="cursor-pointer text-xl font-bold" onClick={goToHome}>
              Home
            </a>
          </li>
          <li className="mx-5">
            <a className="cursor-pointer text-xl font-bold" onClick={goToAbout}>
              About
            </a>
          </li>
          <li className="mx-5">
            <a className="cursor-pointer text-xl font-bold" onClick={goToHelp}>
              Help
            </a>
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
            <a className="flex items-center">
              <img
                className="w-10 h-10 cursor-pointer"
                src={CART_URI}
                alt="Shopping Cart"
                onClick={goToCartPage}
              />
              <span className="font-extrabold text-2xl">
                {" "}
                - {totalQuantity}
              </span>
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
