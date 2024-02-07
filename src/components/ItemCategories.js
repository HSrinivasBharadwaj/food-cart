import React from "react";
import { RESTAURANT_MENU_IMAGE_URI } from "../utils/constants";

const ItemCategories = ({ info }) => {
  const { itemCards } = info;
  return (
    <main className="flex flex-col ">
      {itemCards &&
        itemCards.map((items) => {
          return (
            <>
              <div
                key={items.card.info.id}
                className="flex justify-between items-center my-5"
              >
                <div>
                  <h1 className="text-lg font-semibold">
                    {items.card.info.name}
                  </h1>
                  <p className="text-gray-600 max-w-44 md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mt-2">
                    {items.card.info.description}
                  </p>
                  <p className="text-gray-800 font-semibold mt-2">
                    ₹{items.card.info.price / 100}
                  </p>
                </div>
                <div>
                  <img
                    src={RESTAURANT_MENU_IMAGE_URI + items.card.info.imageId}
                    alt={items.card.info.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <button className="bg-green-500 text-white cursor-pointer rounded-lg p-2 mt-3">
                    Add To Cart
                  </button>
                </div>
              </div>
              <hr />
            </>
          );
        })}
    </main>
  );
};

export default ItemCategories;
