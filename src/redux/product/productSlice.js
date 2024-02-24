import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    selectedProduct: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        }
    }
})
export const { setProductList, setSelectedProduct } = productSlice.actions

export default productSlice.reducer
// const { actions, reducer } = productSlice;
// export const { setProductList } = productSlice.actions;
// export default productSlice.reducer