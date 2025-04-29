import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity > 1 ? item.quantity-- : item.quantity;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export function getCartQuantity(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
}
export function getCartTotalPrice(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
}
export function getCartItems(state) {
  return state.cart.cart;
}
export function getCurrentQuantityById(id) {
  return function (state) {
    const item = state.cart.cart.find((item) => item.pizzaId === id);
    return item ? item.quantity : 0;
  };
}

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
