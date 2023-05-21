import { configureStore } from "@reduxjs/toolkit";
import bootcampReducer from '../slice'

export default configureStore({
    reducer: {
        bootcamp: bootcampReducer,
    },
})