import React from "react";
import { POPULAR_DISHES_URI } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurantInfo }) => {
  const navigate = useNavigate();
  const goToRestaurantPage = (id) => {
    navigate("/restaurantdetail/"+id)
  }
  return (
    <section className="flex flex-col mb-6">
      <div className="relative" onClick={() => goToRestaurantPage(restaurantInfo.id)}>
        <img
          src={POPULAR_DISHES_URI + restaurantInfo.cloudinaryImageId}
          alt={restaurantInfo.name}
          loading="lazy"
          className="w-52 h-52 cursor-pointer max-w-none mr-5 rounded-lg object-cover"
        />
        <h1 className="bg-white absolute  bottom-2 left-2 rounded-md p-1 text-sm">
          {restaurantInfo.aggregatedDiscountInfoV3 &&
            restaurantInfo.aggregatedDiscountInfoV3.header}{" "}
          {restaurantInfo.aggregatedDiscountInfoV3 &&
            restaurantInfo.aggregatedDiscountInfoV3.subHeader}
        </h1>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-semibold mb-2 truncate max-w-52">
          {restaurantInfo.name}
        </h1>
        <h1 className="text-gray-600 mb-2">{restaurantInfo.sla.slaString}</h1>
        <h1 className="text-gray-600 mb-2 truncate max-w-40">
          {restaurantInfo.cuisines.join(", ")}
        </h1>
        <h1 className="text-green-600 font-semibold mb-2">
          {restaurantInfo.avgRating}
        </h1>
      </div>
    </section>
  );
};

export default RestaurantCard;
