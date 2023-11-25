import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        clearItems: (state) => {
            state.items = [];
        },
        removeItems: (state, actions) => {
            state.items.pop();
        }
    }
})
export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;