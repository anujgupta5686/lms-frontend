import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
    // cart:cartReducer,
    // course:courseReducer,
})

export default rootReducer