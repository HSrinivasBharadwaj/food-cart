import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            const {items,quantity} = action.payload;

            const findExisitingItem = state.cartItems.find(cartItem => cartItem.id === items.id);
            if (findExisitingItem) {
                findExisitingItem.quantity = findExisitingItem.quantity + quantity
            }
            else {
                state.cartItems.push({...items,quantity})
            }
        },
        removeItemFromCart: (state,action) => {
            const {item} = action.payload;
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== item.id)
        },
        increaseItemQuantity: (state,action) => {
            const {items} = action.payload;
            const findExisitingItem = state.cartItems.find(cartItem => cartItem.id === items.id);
            if (findExisitingItem) {
                findExisitingItem.quantity = findExisitingItem.quantity + 1
            }
        },
        decreaseItemQuantity: (state,action) => {
            const {items} = action.payload;
            const findExisitingItem = state.cartItems.find(cartItem => cartItem.id === items.id);
            if (findExisitingItem && findExisitingItem.quantity>0) {
                findExisitingItem.quantity = findExisitingItem.quantity - 1
            }
        }
    }
})

export const {addToCart,removeItemFromCart,increaseItemQuantity,decreaseItemQuantity} = cartSlice.actions;
export default cartSlice.reducer