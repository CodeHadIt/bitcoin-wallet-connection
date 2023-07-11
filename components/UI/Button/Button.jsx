import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, type, onClick}) => {
    return (
        <button type={type} className={styles.btn} onClick={onClick}>
        {children}
        </button>
    );
};

export default Button;
