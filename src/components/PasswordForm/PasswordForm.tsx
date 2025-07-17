import { useSelector } from "react-redux";
import "./PasswordForm.css";
import PasswordFormButton from "./PasswordFormButton/PasswordFormButton";
import type { RootState } from "../../app/store";

const PasswordForm = () => {
    const passwordFormValue = useSelector(
        (state: RootState) => state.passwordForm.hiddenValue
    );
    const passwordFormCheck = useSelector(
        (state: RootState) => state.passwordForm.isRight
    );

    const buttonsArr = [
        ["7", "8", "9"],
        ["4", "5", "6"],
        ["1", "2", "3"],
        ["<", "0", "E"],
        ["R"],
    ];

    let passwordFormDisplay = (
        <div className="passwordForm-display">{passwordFormValue}</div>
    );

    if (passwordFormCheck === false) {
        passwordFormDisplay = (
            <div className="passwordForm-display passwordForm-display__wrong">
                {passwordFormValue}
            </div>
        );
    }
    if (passwordFormCheck) {
        passwordFormDisplay = (
            <div className="passwordForm-display passwordForm-display__right">
                {passwordFormValue}
            </div>
        );
    }
    return (
        <div className="passwordForm">
            {passwordFormDisplay}
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
