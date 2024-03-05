import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";

const Store = configureStore({
    reducer:{
        App:AppSlice
    }
})

export default Store;