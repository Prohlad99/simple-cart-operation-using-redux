import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/features/cart/cartSlice";

export const store = configureStore({
    reducer:{
        cart: cartSlice
    }
})