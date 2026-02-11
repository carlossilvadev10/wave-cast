"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import CountUp from "react-countup";

interface ExperienceStatsProps {
    image1: StaticImageData;
    image2: StaticImageData;
    arrowImage?: StaticImageData;
    yearsCount: number;
    yearsLabel?: string;
}

const ExperienceStats = ({ image1, image2, arrowImage, yearsCount, yearsLabel = "Años de experiencia" }: ExperienceStatsProps) => {
    return (
        <div className = "flex items-start gap-4 experience-images relative">
            <Image src = {image1} alt = "Experiencia 1" className = "exp-img rounded-2xl" />
            <Image src = {image2} alt = "Experiencia 2" className = "exp-img hidden sm:block rounded-2xl" />
            {
                arrowImage && (
                    <Image src = {arrowImage} alt = "" className = "exp-arrow1" aria-hidden = "true" />
                )
            }
            <div className = "absolute bottom-0 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-0 bg-(--primary) p-6 rounded-2xl shadow-xl">
                <div className = "flex items-center justify-center gap-4 text-black">
                    <h2 className = "text-6xl font-bold">
                        <CountUp start = {0} end = {yearsCount} duration = {3} />+
                    </h2>
                    <p className = "text-xl w-24 leading-tight font-medium">
                        {yearsLabel}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceStats;