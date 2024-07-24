import { configureStore } from "@reduxjs/toolkit";
import { counterReducer,userReducer } from "./slice";

const store = configureStore({

    reducer:{
        counter: counterReducer,
        user: userReducer
    }

});

export default store;