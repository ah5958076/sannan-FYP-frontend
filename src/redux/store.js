import { configureStore } from "@reduxjs/toolkit";
import { managebar } from "./reducers/reducerManageBar";
import reducer from "./reducers/userReducer";

import Slice from "../ReduxToolKit/Slice";
import CartSlice from "../ReduxToolKit/CartSlice";



export const store = configureStore({
    reducer: { 
        bar: managebar,
        users:Slice,
        cart:CartSlice,
        chat:reducer
    }
})
