import React from "react";

const Input = ({
  searchValue,
  setSearchValue,
  filteredRestaurants,
  setFilteredRestaurants,
  restaurants,
}) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    // If the input value is empty display all the restaurants
    if (inputValue.trim() === "") {
      setFilteredRestaurants(restaurants);
      return;
    }
    const searchValue = filteredRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredRestaurants(searchValue);
  };

  return (
    <main>
      <input
        type="text"
        placeholder="Enter the Restaurant You Are Looking For..."
        value={searchValue}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
      />
    </main>
  );
};

export default Input;
