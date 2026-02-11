import React from "react";

type StarIconsProps = {
    className?: string;
}

const StarIcons = ({ className = "" }: StarIconsProps) => {
    return (
        <div className = {`flex items-center ${className}`}>
            <i className = "bi bi-star-fill text-(--primary)"></i>
            <i className = "bi bi-star-fill text-(--primary)"></i>
            <i className = "bi bi-star-fill text-(--primary)"></i>
            <i className = "bi bi-star-fill text-(--primary)"></i>
            <i className = "bi bi-star-half text-(--primary)"></i>
        </div>
    )
}

export default StarIcons;