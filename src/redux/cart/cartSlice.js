import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: {}
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartList: (state, action) => {
            state.cartList = action.payload
        }
    }
})
const { actions, reducer } = cartSlice;
export const { setCartList } = actions;
export default reducer;