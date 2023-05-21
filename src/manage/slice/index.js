import { createSlice } from "@reduxjs/toolkit";
import { fetchAll, fetchProduct } from "../action";

export const bootcampSlice = createSlice({
    name: "bootcamp",
    initialState: {
        loading: false,
        data: [],        
        entity: {
            id: null,
            mainTitle: '',
            subTitle: '',
            batch: '',
            mentor: {
                mentor1: '',
                mentor2: '',
            },
            price: '',
        },
        error: null,
    },
    extraReducers: (builder) => 
        builder.addCase(fetchAll.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchAll.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        .addCase(fetchAll.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload
        })
        
        .addCase(fetchProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.entity = action.payload
            state.loading = false
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload
        })
})

export default bootcampSlice.reducer