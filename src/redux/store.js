import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from "./cart/cartSlice";
import productReducer from './product/productSlice'
const persistConfig = {
    key: "myfarm",
    storage
}

//const persistedUserReducer = persistReducer(persistConfig, null);

export const store = configureStore({
    reducer: {
        cartList: cartReducer,
        productList: productReducer,
        selectedProduct: productReducer

    }
})