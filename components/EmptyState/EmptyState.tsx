import React from "react";
import Link from "next/link";
import Button from "../Button/Button";

type EmptyStateProps = {
    icon: string;
    title: string;
    description: string;
    searchTerm?: string;
    showButton?: boolean;
    buttonText?: string;
    buttonHref?: string;
    buttonVariant?: "primary" | "secondary";
}

const EmptyState = ({ icon, title, description, searchTerm, showButton = false, buttonText, buttonHref, buttonVariant = "primary" }: EmptyStateProps) => {
    return (
        <div className = "w-full text-center mt-10 py-20">
            <i className = {`bi ${icon} text-6xl text-gray-400`}></i>
            <h2 className = "text-3xl lg:text-4xl text-gray-300 font-semibold mt-4">
                {title}
                {
                    searchTerm && (
                        <> para <span className = "text-(--primary)">&quot;{searchTerm}&quot;</span></>
                    )
                }
            </h2>
            <p className = "text-gray-400 text-lg mt-2">
                {description}
            </p>
            {
                showButton && buttonText && buttonHref && (
                    <Link href = {buttonHref} className = "inline-block mt-8">
                        <Button text = {buttonText} variant = {buttonVariant} />
                    </Link>
                )
            }
        </div>
    );
};

export default EmptyState;