import React,{useRef} from "react";
import useFetchRestaurantData from "../hooks/useFetchRestaurantData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import TitleArrowReusable from "./TitleArrowReusable";

const PopularRestaurants = () => {
  const containerRef = useRef(null);
  const {loading,error,popularRestaurants} = useFetchRestaurantData();
  const { restaurants } = popularRestaurants;
  if (loading || !restaurants || restaurants.length === 0) {
    return <Shimmer />
  }
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  return (
    <section className="mt-3">
      <TitleArrowReusable title="Popular Restaurants" containerRef={containerRef} />
      <div className="flex items-center flex-col md:flex-row lg:flex-row xl:flex-row overflow-x-hidden mt-3" ref={containerRef}>
        {restaurants.map((restaurant) => {
            return (
                <div key={restaurant.info.id}>
                    <RestaurantCard restaurantInfo={restaurant.info}/>
                </div>
            )
        })}
      </div>
    </section>
  );
};

export default PopularRestaurants;
