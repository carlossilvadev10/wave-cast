"use client";

import React, { useRef } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SliderControls from "../SliderControls/SliderControls";
import Image from "next/image";
import Link from "next/link";
import { topListensData } from "@/constants/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import EpisodeBadge from "../EpisodeBadge/EpisodeBadge";

const FeaturedShow = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className = "dark-section">
            <div className = "px-[8%] pt-30 pb-10">
                <div className = "flex flex-col md:flex-row items-center justify-between">
                    <div className = "w-full lg:w-1/2">
                        <SectionTitle badge = "Los más escuchados" title = "Dale play a lo mejor" />
                    </div>
                    <div className = "w-full lg:w-1/2">
                        <SliderControls swiperRef = {swiperRef} />
                    </div>
                </div>
            </div>
            <div className = "px-[4%] mt-10 pb-30">
                <Swiper onSwiper = {(swiper: SwiperType) => (swiperRef.current = swiper)} slidesPerView = {1} spaceBetween = {20} loop = {true} autoplay = {{ delay: 2000, disableOnInteraction: false, }} modules = {[Autoplay]} breakpoints = {{ 712: { slidesPerView: 2, }, 1025: { slidesPerView: 3, } }}>
                    {
                        topListensData.map((item) => (
                            <SwiperSlide key = {item.id}>
                                <div className = "w-full">
                                    <div className = "flex justify-between w-full bg-(--gray-light) rounded-lg overflow-hidden">
                                        <div className = "w-full lg:w-1/2">
                                            <Image src = {item.img} alt = {item.hostName} width = {1000} height = {1000} className = "w-full h-full object-cover" />
                                        </div>
                                        <div className = "w-full lg:w-1/2">
                                            <div className = "p-5">
                                                <div className = "flex flex-col items-center justify-between">
                                                    <EpisodeBadge episode = {item.episode} />
                                                    <Link href = "/host-profile">
                                                        <p className = "flex items-center gap-1 py-2 font-light text-gray-300 hover:text-(--primary) tracking-wider transition-all duration-300">
                                                            <i className = "bi bi-mic text-(--primary)"></i>
                                                            {item.hostName}
                                                        </p>
                                                    </Link>
                                                </div>
                                                <h3 className = "mt-3 mb-5 text-2xl lg:text-4xl font-semibold">
                                                    {item.title}
                                                </h3>
                                                <div className = "flex items-center gap-3">
                                                    <i className = "bi bi-play flex items-center justify-center p-4 bg-(--primary) hover:bg-(--secondary) rounded-full text-black cursor-pointer hover:text-white text-2xl transition-all duration-300"></i>
                                                    <div className = "flex flex-col gap-2 w-full">
                                                        <div className = "w-full h-1 bg-(--gray-color)" />
                                                        <span className = "text-gray-300">0:00</span>
                                                    </div>
                                                </div>
                                                <div className = "mt-5">
                                                    <Link href = "/" className = "tracking-wider underline text-(--primary) hover:text-white transition-all duration-300">
                                                        Escuchar ahora
                                                    </Link>
                                                </div>
                                            </div>
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

export default FeaturedShow;