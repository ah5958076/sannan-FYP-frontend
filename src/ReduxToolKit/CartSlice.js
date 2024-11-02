import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {cart: [] },
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    resetCart(state) {
      state.cart = [];
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(item => item.productId !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart,resetCart, removeFromCart } = cartSlice.actions;
