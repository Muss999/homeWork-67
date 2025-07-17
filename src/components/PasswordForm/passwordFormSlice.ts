import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { PASSWORD } from "../../helpers/consts";

interface PasswordState {
    value: string;
}

const initialState: PasswordState = {
    value: "",
};

const passwordFormSlice = createSlice({
    name: "passwordForm",
    initialState,
    reducers: {
        addNumber: (state, action: PayloadAction<string>) => {
            state.value += action.payload;
        },
        deleteNumber: (state) => {
            const numbersArr = state.value.split("");
            numbersArr.pop();
            const newNumbers = numbersArr.join("");
            state.value = newNumbers;
        },
        resetPasswordForm: (state) => {
            state.value = "";
        },
        passwordCheck: (state) => {
            if (state.value === PASSWORD) {
                console.log("RIIGHT");
            } else {
                console.log("WRONG");
            }
        },
    },
});

export const passwordFormReducer = passwordFormSlice.reducer;
export const { addNumber, resetPasswordForm, deleteNumber, passwordCheck } =
    passwordFormSlice.actions;
