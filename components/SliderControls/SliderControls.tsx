import React, { RefObject } from "react";
import type { Swiper as SwiperType } from "swiper";

type SliderControlsProps = {
    swiperRef: RefObject<SwiperType | null>;
    className?: string;
};

const SliderControls = ({ swiperRef, className = "" }: SliderControlsProps) => {
    return (
        <div className = {`flex justify-start md:justify-end gap-4 mt-6 lg:mt-0 ${className}`}>
            <button type = "button" aria-label = "Anterior" className = "flex items-center justify-center w-12 h-12 rounded-full border border-(--primary) text-(--primary) hover:text-black hover:bg-(--primary) transition-all duration-300 hover:-translate-x-1 cursor-pointer" onClick = {() => swiperRef.current?.slidePrev()}>
                <i className = "bi bi-chevron-double-left"></i>
            </button>
            <button type = "button" aria-label = "Siguiente" className = "flex items-center justify-center w-12 h-12 rounded-full border border-(--primary) text-(--primary) hover:text-black hover:bg-(--primary) transition-all duration-300 hover:translate-x-1 cursor-pointer" onClick = {() => swiperRef.current?.slideNext()}>
                <i className = "bi bi-chevron-double-right"></i>
            </button>
        </div>
    );
};

export default SliderControls;
