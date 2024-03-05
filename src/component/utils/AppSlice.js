import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name:"App",
    initialState:{
        ismenuopen:true,
    },
    reducers:{
        togglemenu:(state)=>{
            state.ismenuopen = !state.ismenuopen;
        }
    }
})

export const {togglemenu} = AppSlice.actions
export default AppSlice.reducer