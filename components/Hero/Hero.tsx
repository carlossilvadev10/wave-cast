import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import sunShape from "@/public/hero-sun-shape.png";
import heroBar from "@/public/hero-1.png";
import heroImg from "@/public/hero.png";
import roundedText from "@/public/rouded-text.webp";
import SocialIcons from "../SocialIcons/SocialIcons";

const Hero = () => {
    return (
        <section className = "hero">
            <div className = "sun-shape">
                <Image src = {sunShape} alt = "sun-shape" />
                <Image src = {sunShape} alt = "sun-shape" />
                <Image src = {sunShape} alt = "sun-shape" />
            </div>
            <div className = "px-[8%] pt-20">
                <div className = "flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className = "w-full lg:w-1/2">
                        <div className = "w-full hero-content">
                            <Image src = {heroBar} alt = "hero-bar" />
                            <h1 className = "text-5xl sm:text-7xl my-6 font-bold">
                                Historias que <span className = "text-(--primary)">conectan,</span> voces que <span className = "text-(--primary)">inspiran</span>
                            </h1>
                            <p className = "tracking-wider text-xl">
                                Cada episodio, una conversación sincera. Cada historia, una oportunidad de conectar con lo que realmente importa.
                            </p>
                            <div className = "flex flex-col sm:flex-row items-center gap-4 my-4 hero-btn">
                                <Button text = "Más reciente" />
                                <Button text = "Suscribirse" variant = "primary" />
                            </div>
                            <div className = "mt-6">
                                <p className = "tracking-wider text-xl">
                                    Escúchanos en tus plataformas favoritas:
                                </p>
                                <SocialIcons className = "lg:justify-start mt-4" />
                            </div>
                        </div>
                    </div>
                    <div className = "w-full hero-img">
                        <Image src = {heroImg} alt = "hero-img" />
                        <div className = "rounded-text">
                            <Image src = {roundedText} alt = "rounded-text" />
                            <i className = "bi bi-arrow-right-short"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;