import { createSlice } from "@reduxjs/toolkit";

// Define a type for the initial state
interface ProfileState {
    user: string | null;
    loading: boolean;
}

// Define the initial state
const initialState: ProfileState = {
    user: localStorage.getItem("user") || null,
    loading: false,
};

// Create the profile slice
const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

// Export the actions and reducer
export const { setUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
