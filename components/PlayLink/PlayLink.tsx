import React from "react";
import Link from "next/link";

interface PlayLinkProps {
    text: string;
    variant?: "primary" | "secondary";
    className?: string;
}

const PlayLink = ({ text, variant = "primary", className = "" }: PlayLinkProps) => {
    const isPrimary = variant === "primary";

    return (
        <Link href = "/" className = {`flex items-center gap-2 group ${className}`} >
            <i className = {`bi bi-play flex items-center justify-center p-4 ${isPrimary ? "bg-(--primary)" : "bg-black"} group-hover:bg-(--secondary) rounded-full ${isPrimary ? "text-black" : "text-(--primary)"} group-hover:text-white text-2xl cursor-pointer transition-all duration-300`}></i>
            <span className = {`text-xl underline ${isPrimary ? "text-(--primary)" : "text-black"} group-hover:text-(--secondary) transition-all duration-300`}>
                {text}
            </span>
        </Link>
    );
};

export default PlayLink;