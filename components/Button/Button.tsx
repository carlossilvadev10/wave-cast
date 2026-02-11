import React from "react";

type ButtonProps = {
    text: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    className?: string;
}

const Button = ({ text, onClick, variant = "secondary", className = "" }: ButtonProps) => (
    <button className = {`btn btn-${variant} ${className}`} onClick = {onClick} >
        {text} <i className = "bi bi-arrow-right-short"></i>
    </button>
);

export default Button;