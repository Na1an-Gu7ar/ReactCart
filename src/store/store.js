import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart-slice/cart-slice'
import productNoReducer from './product_no-slice/product_no-slice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product_no: productNoReducer
    }
})

export default store