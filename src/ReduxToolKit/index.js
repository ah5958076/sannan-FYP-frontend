import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
import CartSlice from "./CartSlice";

const toolkitStore = configureStore({
    reducer:{
        users:Slice,
        cart:CartSlice
    },
});

export default toolkitStore;