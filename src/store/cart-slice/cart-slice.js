import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action) {
            // console.log(state);
            // if(state.count(action.payload.id) > 1){
            //     console.log('item already present');
            // }
            state.push(action.payload)
        },
        removeFromCart(state, action){ 
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer