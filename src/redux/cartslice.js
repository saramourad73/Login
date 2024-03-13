import { createSlice } from "@reduxjs/toolkit";

const initialState={

items :[]
}

export const cartslice=createSlice({

name:'cart',
initialState, 
reducers:{
    addtocart :(state,action)=>{

        state.items.push(action.payload)
        console.log(state.items)
    }
}

})