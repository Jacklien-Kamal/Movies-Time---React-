import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from './slices/favourite'


const store =configureStore({
    reducer:{favouriteMov:favouriteReducer}
})

export default store