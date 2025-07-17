import { configureStore } from "@reduxjs/toolkit";
import { passwordFormReducer } from "../components/PasswordForm/passwordFormSlice";

export const store = configureStore({
    reducer: {
        passwordForm: passwordFormReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
