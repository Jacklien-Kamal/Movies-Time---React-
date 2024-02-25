import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from './slices/favourite'
import moviesReducer from './slices/movies'



const store =configureStore({
    reducer:{
        favouriteMov:favouriteReducer,
        movies:moviesReducer
    }
   
})

export default store