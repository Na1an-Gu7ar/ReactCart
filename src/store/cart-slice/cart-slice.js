import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const findItemIndex = (state, action) => {
    return state.findIndex(item => item.id === action.payload.id)
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = findItemIndex(state, action)
            if (itemIndex !== -1) {
                state[itemIndex].quantity += 1
            } else {
                state.push({ ...action.payload, quantity: 1 })
            }
            console.log(state);
        },
        removeFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload.id)
        },
        increaseItemQuantity(state, action) {
            const itemIndex = findItemIndex(state, action)
            state[itemIndex].quantity += 1
        },
        decreaseItemQuantity(state, action) {
            const itemIndex = findItemIndex(state, action)
            if (state[itemIndex].quantity > 1) {
                state[itemIndex].quantity -= 1
            }
        }
    }
})

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions

export default cartSlice.reducer