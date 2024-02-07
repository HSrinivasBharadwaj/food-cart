import React, { useRef } from "react";
import { CATEGORY_URI } from "../utils/constants";
import useFetchRestaurantData from "../hooks/useFetchRestaurantData";
import Shimmer from "./Shimmer";
import TitleArrowReusable from "./TitleArrowReusable";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { loading, error, categories } = useFetchRestaurantData();
  const { info } = categories;
  if (loading || !info || info.length === 0) {
    return <Shimmer />;
  }
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  const goToTestPage = (link) => {
    // navigate("/test",{state: link})
  };
  return (
    <section>
      <TitleArrowReusable title="Categories" containerRef={containerRef} />
      <div
        className="flex overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden xl:overflow-x-hidden mt-3"
        ref={containerRef}
      >
        {info.map((category) => {
          return (
            <div key={category.id}>
              <img
                src={CATEGORY_URI + category.imageId}
                alt={category.action.text}
                className="w-28 cursor-pointer max-w-none"
                loading="lazy"
                onClick={() => goToTestPage(category.action.link)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
