import "./PasswordFormButton.css";

interface Props {
    btnLabel: string;
}

const PasswordFormButton = ({ btnLabel }: Props) => {
    return <button className="password-btn">{btnLabel}</button>;
};

export default PasswordFormButton;
