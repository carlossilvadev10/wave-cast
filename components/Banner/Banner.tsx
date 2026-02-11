import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import bannerImg from "@/public/banner.png"

const Banner = () => {
    return (
        <div className = "px-[8%] py-20">
            <div className = "px-[7%] bg-[#ffca79] rounded-xl banner">
                <div className = "">
                    <div className = "flex flex-col lg:flex-row items-center gap-10 lg:gap-24 py-10 2xl:py-6">
                        <div className = "w-full lg:w-1/2 relative">
                            <h2 className = "text-5xl lg:text-6xl text-(--text) font-semibold mb-8">
                                No te pierdas ni un solo episodio. Suscríbete ahora
                            </h2>
                            <div className = "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-2 bg-black rounded-2xl sm:rounded-full p-2">
                                <input type = "email" name = "email" id = "email" placeholder = "Correo electrónico" className = "flex-1 text-white bg-transparent border-none px-4 py-3 outline-none focus:ring-0 transition-all duration-300 placeholder:text-gray-400" required autoComplete = "email" />
                                <Button text = "Suscribirse" variant = "primary" className = "whitespace-nowrap" />
                            </div>
                        </div>
                        <div className = "w-full lg:w-1/2">
                            <div className = "banner-img">
                                <Image src = {bannerImg} alt = "banner-img" className = "w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;