import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { PASSWORD } from "../../helpers/consts";

interface PasswordState {
    value: string;
    hiddenValue: string;
    isRight: boolean | null;
}

const initialState: PasswordState = {
    value: "",
    hiddenValue: "",
    isRight: null,
};

const passwordFormSlice = createSlice({
    name: "passwordForm",
    initialState,
    reducers: {
        addNumber: (state, action: PayloadAction<string>) => {
            if (state.value.length < 4 && state.isRight !== false) {
                state.value += action.payload;
                state.hiddenValue += "*";
            }
        },
        deleteNumber: (state) => {
            if (state.isRight === null) {
                const valueArr = state.value.split("");
                valueArr.pop();
                const newValue = valueArr.join("");

                const hiddenValueArr = state.hiddenValue.split("");
                hiddenValueArr.pop();
                const newHiddenValue = hiddenValueArr.join("");

                state.value = newValue;
                state.hiddenValue = newHiddenValue;
            }
        },
        resetPasswordForm: (state) => {
            state.value = "";
            state.hiddenValue = "";
            state.isRight = null;
        },
        passwordCheck: (state) => {
            if (state.value === PASSWORD) {
                state.hiddenValue = "Access granted";
                state.isRight = true;
            } else {
                state.hiddenValue = "Access denied";
                state.isRight = false;
            }
        },
    },
});

export const passwordFormReducer = passwordFormSlice.reducer;
export const { addNumber, resetPasswordForm, deleteNumber, passwordCheck } =
    passwordFormSlice.actions;
