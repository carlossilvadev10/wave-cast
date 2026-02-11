import React from "react";

type BenefitCardProps = {
    icon: string;
    title: string;
    description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
    return (
        <div className = "flex items-center gap-4">
            <div className = "shrink-0">
                <i className = {`bi ${icon} border-s-2 ps-4 border-(--primary) text-(--primary) text-5xl`}></i>
            </div>
            <div className = "flex flex-col">
                <h3 className = "text-2xl font-semibold">
                    {title}
                </h3>
                <p className = "mt-2 text-gray-300 text-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default BenefitCard;