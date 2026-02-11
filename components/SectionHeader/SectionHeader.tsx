import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

type SectionHeaderProps = {
    badge: string;
    title: string;
    description: string;
    className?: string;
}

const SectionHeader = ({ badge, title, description, className = "" }: SectionHeaderProps) => {
    return (
        <div className = {`flex flex-col items-center justify-center text-center w-full ${className}`}>
            <SectionTitle badge = {badge} title = {title} />
            <p className = "text-gray-300 text-lg tracking-wider mt-4">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;