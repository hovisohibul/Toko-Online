import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../utils/serviceApi";

export const fetchAll = createAsyncThunk('bootcamp/fetchAllBootcamp', async() => {
    try {
        const respone = await httpService.get('/')
        return respone.data
    } catch (error) {
        throw error
    }
})

export const fetchProduct = createAsyncThunk('bootcamp/fetchProductBootcamp', async(bootcampId) => {
    try {
        console.log('respone', bootcampId)
        const respone = await httpService.get(`/${bootcampId}`)
        return respone.data
    } catch (error) {
        throw error
    }
})