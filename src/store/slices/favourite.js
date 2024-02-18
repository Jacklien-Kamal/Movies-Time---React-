import { createSlice } from "@reduxjs/toolkit";


const favouriteSlice=createSlice({
    name:'favourite',
    initialState:{favourites:[]},
    reducers:{
            addToFavourite: (state, action) => {
                state.favourites.push(action.payload);
            },
            removeFromFavourite:(state, action)=>{
                state.favourites.splice(action.payload,1)
            }
    
    }

})

export const {addToFavourite}=favouriteSlice.actions
export const {removeFromFavourite}=favouriteSlice.actions

export default favouriteSlice.reducer