import React from "react";

type SectionTitleProps = {
    badge: string;
    title: string;
}

const SectionTitle = ({ badge, title }: SectionTitleProps) => (
    <div className = "flex flex-col title">
        <div className = "">
            <p className = "inline-block px-4 py-2 rounded-full text-(--primary) text-2xl font-normal border border-(--primary)">
                <i className = "bi bi-rocket-takeoff pe-4"></i>
                {badge}
            </p>
        </div>
        <h2 className = "text-6xl lg:text-7xl font-semibold mt-4">
            {title}
        </h2>
    </div>
);

export default SectionTitle;