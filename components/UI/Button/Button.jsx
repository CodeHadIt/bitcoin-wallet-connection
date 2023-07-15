import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, type, onClick, disabled}) => {
    return (
        <button type={type} className={styles.btn} onClick={onClick} disabled={disabled}>
        {children}
        </button>
    );
};

export default Button;
