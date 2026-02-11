import React from "react";
import Image from "next/image";
import SocialIcons from "../SocialIcons/SocialIcons";
import pageElm1 from "@/public/page-elm-1.png";
import pageElm2 from "@/public/page-elm-2.png";
import pageElm3 from "@/public/page-elm-3.png";
import pageElm4 from "@/public/page-elm-4.png";

interface PageHeaderProps {
    title: string;
    highlight: string;
}

const PageHeader = ({ title, highlight }: PageHeaderProps) => {
    return (
        <div className = "page-section">
            <Image src = {pageElm2} alt = "page-elm-2" className = "hidden sm:block elm2 element" />
            <Image src = {pageElm3} alt = "page-elm-3" className = "hidden sm:block elm3 element" />
            <Image src = {pageElm4} alt = "page-elm-5" className = "hidden sm:block elm4 element" />
            <Image src = {pageElm4} alt = "page-elm-4" className = "hidden sm:block elm5 element" />
            <div className = "flex flex-col items-center justify-center text-center pt-10 w-full sm:w-1/2 page-content">
                <Image src = {pageElm1} alt = "page-elm-1" className = "w-full h-full" />
                <h1 className = "text-6xl sm:text-7xl my-6 font-semibold">
                    {title} <span className = "text-(--primary)">{highlight}</span>
                </h1>
                <SocialIcons className = "mt-4" />
            </div>
        </div>
    )
}

export default PageHeader;