import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/helpers";
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      updateCart(state, action);
    },
  },
});
export const addToCart = cartSlice.actions.addToCart;
export default cartSlice.reducer;
