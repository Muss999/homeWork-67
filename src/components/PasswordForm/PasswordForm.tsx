import { useSelector } from "react-redux";
import "./PasswordForm.css";
import PasswordFormButton from "./PasswordFormButton/PasswordFormButton";
import type { RootState } from "../../app/store";

const PasswordForm = () => {
    const passwordFormValue = useSelector(
        (state: RootState) => state.passwordForm.value
    );
    const buttonsArr = [
        ["7", "8", "9"],
        ["4", "5", "6"],
        ["1", "2", "3"],
        ["<", "0", "E"],
        ["R"],
    ];
    return (
        <div className="passwordForm">
            <input
                className="passwordForm-display"
                type="text"
                value={passwordFormValue}
            />
            <div className="passwordForm-btns">
                {buttonsArr.map((row) => {
                    return row.map((btnLabel, index) => {
                        return (
                            <PasswordFormButton
                                btnLabel={btnLabel}
                                key={`${btnLabel}-${index}`}
                            />
                        );
                    });
                })}
            </div>
        </div>
    );
};

export default PasswordForm;
