import { createSlice } from "@reduxjs/toolkit";
import cartSlice from "../cart-slice/cart-slice";

const initialState = (1)

const product_noSlice = createSlice({
    name: 'product_no',
    initialState,
    reducers: {
        increment: (state, action) => state + 1,
        decrement: (state, action) => state - 1,
    }
})

export const {increment, decrement} = product_noSlice.actions

export default product_noSlice.reducer