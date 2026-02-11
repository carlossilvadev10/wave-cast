import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import rocketIcon from "@/public/rocket-icon.png";
import pageBanner1 from "@/public/page-banner-1.png";
import pageBanner2 from "@/public/page-banner-2.png";

const BannerEpisode = () => {
    return (
        <div className = "px-[8%] py-10">
            <div className = "page-banner flex flex-col items-center justify-center p-12 text-center rounded-2xl relative overflow-hidden">
                <Image src = {pageBanner1} alt = "" width = {450} height = {450} className = "hidden xl:block absolute bottom-0 left-0 z-0" aria-hidden = "true" />
                <Image src = {pageBanner2} alt = "" width = {450} height = {450} className = "hidden xl:block absolute bottom-0 right-0 z-0" aria-hidden = "true" />
                <div className = "music-waves" />
                <div className = "relative z-10 flex flex-col items-center">
                    <div className = "flex items-center gap-2 text-black px-4 py-3 my-4 rounded-full border border-black">
                            <Image src = {rocketIcon} alt = "rocket-icon" width = {30} height = {30} />
                            <span className = "text-xl">
                                Tu voz importa
                            </span>
                        </div>
                    <h2 className = "text-4xl lg:text-5xl mb-5 font-semibold w-full lg:w-[60%] text-(--text)">
                        Historias que merecen ser escuchadas
                    </h2>
                    <Button text = "Contáctanos" variant = "primary" />
                </div>
            </div>
        </div>
    )
}

export default BannerEpisode;