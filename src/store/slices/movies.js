import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosConfig/instance";

export const movieAction=createAsyncThunk('movies/getAll',async(page)=>{
  const res= await  axiosInstance.get(`https://api.themoviedb.org/3/movie/popular?api_key=7a1c16ea3c361a4d3cc53eb70ef8268&page=${page}`)
  return res.data.results
})

const moviesSlice=createSlice({
    name:'movies',
    initialState:{movies:[]},
    extraReducers:(builder)=>{
        builder.addCase(movieAction.fulfilled,(state,action)=>{
            state.movies=action.payload
        })
    }
})

export default moviesSlice.reducer