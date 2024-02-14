import React from "react";
import { RESTAURANT_MENU_IMAGE_URI } from "../utils/constants";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const ItemCategories = ({ info }) => {
  const dispatch = useDispatch();
  const { itemCards } = info;
  const addItemsToCart = (items) => {
    let quantity = 1;
    dispatch(addToCart({items,quantity}))
    toast("Item added to cart")
  }
  return (
    <main className="flex flex-col">
      <ToastContainer />
      {itemCards &&
        itemCards.map((items) => {
          return (
            <div key={items.card.info.id}>
              <div
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
                  <button onClick={() => addItemsToCart(items.card.info)} className="bg-green-500 text-white cursor-pointer rounded-lg p-2 mt-3">
                    Add To Cart
                  </button>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </main>
  );
};

export default ItemCategories;
