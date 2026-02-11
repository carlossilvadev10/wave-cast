"use client";

import React, { useRef } from "react";
import Image from "next/image";
import SectionHeader from "../SectionHeader/SectionHeader";
import SliderControls from "../SliderControls/SliderControls";
import StarIcons from "../StarIcons/StarIcons";
import quote from "@/public/quote.png";
import quoteBg from "@/public/testimonial-card-quote-bg.png";
import { testimonialData } from "@/constants/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className = "dark-section wave-wrapper-section2">
            <div className = "px-[8%] py-10">
                <SectionHeader badge = "Dicen por ahí" title = "Lo que opinan de nosotros" description = "La mejor prueba de nuestro trabajo son las palabras de quienes nos acompañan episodio tras episodio." />
            </div>
            <div className = "px-[4%] sm:mt-10 pb-20">
                <Swiper onSwiper = {(swiper: SwiperType) => (swiperRef.current = swiper)} slidesPerView = {1} spaceBetween = {20} loop = {true} autoplay = {{ delay: 4000, disableOnInteraction: false, }} modules = {[Autoplay]} className = "test-wrapper-swiper">
                    {
                        testimonialData.map((testimonial) => (
                            <SwiperSlide key = {testimonial.id}>
                                <div className = "flex flex-col sm:flex-row items-center justify-center gap-16">
                                    <div className = "w-full lg:w-2/5">
                                        <div className = "test-img relative">
                                            <Image src = {testimonial.img} alt = {testimonial.name} className = "w-full h-full object-cover rounded-2xl" />
                                            <div className = "quote-img">
                                                <Image src = {quoteBg} alt = "quote-bg" className = "object-contain absolute top-0 right-0" />
                                                <Image src = {quote} alt = "quote" className = "object-contain p-5 rounded-full absolute bg-(--primary) top-0 right-0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "w-full lg:w-1/2 test-content-wrap">
                                        <div className = "test-content">
                                            <StarIcons className = "gap-4 test-stars" />
                                            <p className = "text-xl tracking-wide my-4">
                                                &quot;{testimonial.testimonial}&quot;
                                            </p>
                                            <div className = "text-border border-t border-dashed border-(--primary-light) opacity-50" />
                                            <div className = "test-info mt-4">
                                                <h3 className = "text-3xl">
                                                    {testimonial.name}
                                                </h3>
                                                <p className = "text-xl text-gray-400">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                        <div className = "flex justify-start gap-4 mt-6 text-btns">
                                            <SliderControls swiperRef = {swiperRef} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial;