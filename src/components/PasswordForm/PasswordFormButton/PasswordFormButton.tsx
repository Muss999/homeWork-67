import { useDispatch } from "react-redux";
import "./PasswordFormButton.css";
import {
    addNumber,
    deleteNumber,
    passwordCheck,
    resetPasswordForm,
} from "../passwordFormSlice";

interface Props {
    btnLabel: string;
}

const PasswordFormButton = ({ btnLabel }: Props) => {
    const dispatch = useDispatch();

    return (
        <button
            className="password-btn"
            onClick={() => {
                if (btnLabel === "<") {
                    return dispatch(deleteNumber());
                } else if (btnLabel === "R") {
                    return dispatch(resetPasswordForm());
                } else if (btnLabel === "E") {
                    return dispatch(passwordCheck());
                } else {
                    return dispatch(addNumber(btnLabel));
                }
            }}
        >
            {btnLabel}
        </button>
    );
};

export default PasswordFormButton;
