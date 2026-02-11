"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className = "fixed bottom-4 right-4 z-10">
            {
                isVisible && (
                    <button className = "flex items-center justify-center bg-(--primary) hover:bg-(--primary-light) text-white rounded-full w-12 h-12 focus:outline-none cursor-pointer shadow-lg hover:scale-110 transition-all duration-300" onClick = {scrollToTop} aria-label = "Volver arriba">
                        <FaArrowUp />
                    </button>
                )
            }
        </div>
    )
}

export default ScrollToTop;