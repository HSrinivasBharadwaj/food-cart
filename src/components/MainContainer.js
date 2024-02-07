import React, { useEffect, useState } from "react";
import Button from "./Button";
import useFetchRestaurantData from "../hooks/useFetchRestaurantData";
import RestaurantCard from "./RestaurantCard";
import Input from "./Input";
import Shimmer from "./Shimmer";

const MainContainer = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const buttonList = [
    { title: "Fast Delivery" },
    { title: "Rating 4.0 +" },
    { title: "Less than Rs 300" },
  ];
  const { loading, error, restaurantData } = useFetchRestaurantData();
  const { restaurants } = restaurantData;

  // Initial render load all the restaurants
  useEffect(() => {
    if (restaurants) {
      setFilteredRestaurants(restaurants);
    }
  }, [restaurants]);
  if (loading || !restaurants || restaurants.length === 0) {
    return <Shimmer />;
  }
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  const handleButtonTitle = (title) => {
    switch (title) {
      case "Fast Delivery":
        setFilteredRestaurants(
          restaurants.filter(
            (restaurant) => restaurant.info.sla.deliveryTime >= 20
          )
        );
        break;
      case "Rating 4.0 +":
        setFilteredRestaurants(
          restaurants.filter((restaurant) => restaurant.info.avgRating >= 4.0)
        );
        break;
      case "Less than Rs 300":
        setFilteredRestaurants(
          restaurants.filter(
            (restaurant) =>
              Number(restaurant.info.costForTwo.slice(1, 4)) <= 300
          )
        );
        break;
      default:
        setFilteredRestaurants(restaurants);
        break;
    }
  };
  return (
    <main>
      <h1 className="font-bold text-3xl">Top Restaurants</h1>
      {/* Mapping the ButtonList component */}
      <div className="mt-5 flex justify-around">
        {buttonList.map((title) => {
          return (
            <Button
              title={title.title}
              key={title.title}
              onClick={() => handleButtonTitle(title.title)}
            />
          );
        })}
      </div>
      {/* Search Container */}
      <div className="mt-5">
        <Input
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          filteredRestaurants={filteredRestaurants}
          setFilteredRestaurants={setFilteredRestaurants}
          restaurants={restaurants}
        />
      </div>
      {/* Restaurant List Display */}
      <div className="mt-5 justify-center flex flex-wrap md:justify-between lg:justify-between xl:justify-between">
        {filteredRestaurants.map((restaurant) => {
          return (
            <div key={restaurant.info.id}>
              <RestaurantCard restaurantInfo={restaurant.info} />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default MainContainer;
