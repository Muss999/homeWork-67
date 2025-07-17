import { createSlice } from "@reduxjs/toolkit";

interface PasswordState {
    value: string;
}

const initialState: PasswordState = {
    value: "",
};

const passwordFormSlice = createSlice({
    name: "passwordForm",
    initialState,
    reducers: {},
});

export const passwordFormReducer = passwordFormSlice.reducer;
