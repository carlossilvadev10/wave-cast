"use client";

import React, { useRef } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SliderControls from "../SliderControls/SliderControls";
import { hostProfilesData } from "@/constants/constant";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import HostSocialIcons from "../HostSocialIcons/HostSocialIcons";

const HostProfile = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className = "light-section wave-wrapper-section">
            <div className = "px-[8%] pt-35 pb-10">
                <div className = "flex flex-col md:flex-row items-center justify-between">
                    <div className = "w-full lg:w-1/2">
                        <SectionTitle badge = "Conoce a los hosts" title = "Las voces detrás del micrófono" />
                    </div>
                    <div className = "w-full lg:w-1/2">
                        <SliderControls swiperRef = {swiperRef} />
                    </div>
                </div>
            </div>
            <div className = "px-[4%] sm:mt-10 pb-30">
                <Swiper onSwiper = {(swiper: SwiperType) => (swiperRef.current = swiper)} slidesPerView = {1} spaceBetween = {20} loop = {true} autoplay = {{ delay: 2000, disableOnInteraction: false, }} modules = {[Autoplay]} breakpoints = {{ 712: { slidesPerView: 2, }, 900: { slidesPerView: 3, }, 1025: { slidesPerView: 4, } }} className = "host-wrapper-swiper">
                    {
                        hostProfilesData.map((host) => (
                            <SwiperSlide key = {host.id} className = "">
                                <div className = {`host-card ${host.id % 2 === 1 ? "offset-card" : ""}`}>
                                    <div className = "host-img-wrap">
                                        <div className = "host-img overflow-hidden rounded-2xl">
                                            <Image src = {host.img} alt = {host.name} width = {1000} height = {1000} className = "w-full h-full object-cover z-50" />
                                        </div>
                                    </div>
                                    <div className = "host-info px-3 py-4">
                                        <h3 className = "text-2xl">
                                            {host.name}
                                        </h3>
                                        <p className = "text-lg text-gray-300">
                                            {host.role}
                                        </p>
                                    </div>
                                    <HostSocialIcons />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default HostProfile;