import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RESTAURANT_MENU_IMAGE_URI } from "../utils/constants";
import {
  increaseItemQuantity,
  removeItemFromCart,
  decreaseItemQuantity,
} from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  let totalPrice = 0;
  for (let i = 0; i <= cartItems.length - 1; i++) {
    totalPrice = totalPrice + cartItems[i].price * cartItems[i].quantity;
  }
  const removeParticularItem = (item) => {
    dispatch(removeItemFromCart({ item }));
  };

  const increaseQuantity = (items) => {
    dispatch(increaseItemQuantity({ items }));
  };

  const decreaseQuantity = (items) => {
    dispatch(decreaseItemQuantity({ items }));
  };

  const goToSuccessPage = () => {
    navigate("/successpage");
  };

  return (
    <div className="mx-5 my-5 md:mx-60 md:my-10 lg:mx-60 lg:my-10 xl:mx-60 xl:my-10">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Sample Cart Items */}
        {cartItems.length === 0 ? (
          <p className="text-gray-500">
            Your Cart is empty please add some items
          </p>
        ) : (
          cartItems.map((cartItem) => {
            const individualPrice = (cartItem.price / 100) * cartItem.quantity;
            return (
              <div
                key={cartItem.id}
                className="flex items-center border-b border-gray-300 py-4"
              >
                <img
                  className="h-24 w-24 rounded-md object-cover"
                  src={RESTAURANT_MENU_IMAGE_URI + cartItem.imageId}
                  alt="Product"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{cartItem.name}</h2>
                  <p className="text-gray-500">{individualPrice}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(cartItem)}
                      className="bg-blue-500 w-10 mr-5 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded "
                    >
                      -
                    </button>
                    <p className="text-gray-500">{cartItem.quantity}</p>
                    <button
                      onClick={() => increaseQuantity(cartItem)}
                      className="bg-blue-500 w-10 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-5"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => removeParticularItem(cartItem)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <h1 className="text-gray-500 font-bold">Total - {totalPrice / 100}</h1>
        <button
          onClick={goToSuccessPage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
