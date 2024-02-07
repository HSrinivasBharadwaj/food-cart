import React from "react";
import {
    LEFT_ARROW_URI,
    RIGHT_ARROW_URI,
  } from "../utils/constants";

const TitleArrowReusable = ({containerRef,title}) => {
    const moveToLeft = () => {
      const currentRef = containerRef.current;
        currentRef.scrollBy({
            left: -300,
            behavior: "smooth"
        })
    }
    const moveToRight = () => {
      const currentRef = containerRef.current;
        currentRef.scrollBy({
            left: 300,
            behavior: "smooth"
        })
    }
  return (
    <main>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="flex items-center">
          <img
            className="w-8 cursor-pointer mx-2"
            src={LEFT_ARROW_URI}
            alt="Left Arrow"
            onClick={moveToLeft}
          />
          <img
            className="w-8 cursor-pointer mx-2"
            src={RIGHT_ARROW_URI}
            alt="Right Arrow"
            onClick={moveToRight}
          />
        </div>
      </div>
    </main>
  );
};

export default TitleArrowReusable;
