"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader/PageHeader";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import PricingCard from "@/components/PricingCard/PricingCard";
import BannerEpisode from "@/components/BannerEpisode/BannerEpisode";
import { pricingFaqsData, pricingPlans } from "@/constants/constant";

const Pricing = () => {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
    const [openLeftIndex, setOpenLeftIndex] = useState<number | null>(null);
    const [openRightIndex, setOpenRightIndex] = useState<number | null>(null);

    const toggleLeft = (index: number) => {
        setOpenLeftIndex(openLeftIndex === index ? null : index);
    };

    const toggleRight = (index: number) => {
        setOpenRightIndex(openRightIndex === index ? null : index);
    };

    const leftFaqs = pricingFaqsData.slice(0, 5);
    const rightFaqs = pricingFaqsData.slice(5, 10);

    return (
        <>
            <PageHeader title = "Elige tu" highlight = "plan" />
            <div className = "dark-section">
                <div className = "px-[8%] py-20">
                    {/* Header */}
                    <SectionHeader badge = "Precios flexibles" title = "Planes diseñados para crecer contigo" description = "Elige el plan que mejor se adapte a tus necesidades. Sin sorpresas, sin contratos a largo plazo." className = "mb-8" />
                    {/* Toggle mensual/anual */}
                    <div className = "flex items-center justify-center gap-4 mb-16">
                        <span className = {`font-medium transition-colors ${billing === "monthly" ? "text-white" : "text-gray-400"}`}>
                            Mensual
                        </span>
                        <button className = "relative w-14 h-7 cursor-pointer rounded-full bg-(--gray-color) hover:bg-(--gray-light) transition-all focus:outline-none focus:ring-2 focus:ring-(--primary)" onClick = {() => setBilling(billing === "monthly" ? "yearly" : "monthly")} aria-label = {`Cambiar a facturación ${billing === "monthly" ? "anual" : "mensual"}`} >
                            <span className = {`absolute top-1 w-5 h-5 bg-(--primary) rounded-full transition-all duration-300 ${ billing === "yearly" ? "left-8" : "left-1" }`} />
                        </button>
                        <span className = {`font-medium transition-colors ${billing === "yearly" ? "text-white" : "text-gray-400"}`}>
                            Anual
                            <span className = "ml-1 text-(--primary) font-semibold">
                                (Ahorra 30%)
                            </span>
                        </span>
                    </div>
                    {/* Pricing Cards */}
                    <div className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {
                            pricingPlans.map((plan) => (
                                <PricingCard key = {plan.id} plan = {plan} billing = {billing} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className = "light-section wave-wrapper-section">
                <div className = "px-[8%] pt-45 pb-10">
                    <SectionHeader badge = "Preguntas frecuentes" title = "Resolvemos tus dudas más comunes" description = "Encuentra respuestas rápidas sobre nuestros planes, pagos y funcionamiento del servicio." className = "mb-8" />
                    <div className = "flex flex-col lg:flex-row gap-6 pt-10">
                        {/* Columna Izquierda */}
                        <div className = "w-full lg:w-1/2">
                            <div className = "space-y-4">
                                {
                                    leftFaqs.map((faq, i) => {
                                        const isOpen = openLeftIndex === i;
                                        return (
                                            <div key = {faq.id} className = {`rounded-xl p-5 transition-all duration-300 ${isOpen ? "bg-(--primary) text-black shadow-lg" : "bg-(--gray-color) border border-transparent"}`}>
                                                <button className = "flex items-center justify-between w-full text-left" onClick = {() => toggleLeft(i)} aria-expanded = {isOpen}>
                                                    <h3 className = "text-lg font-medium pr-4">
                                                        {faq.question}
                                                    </h3>
                                                    <span className = {`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isOpen ? "bg-black text-(--primary) rotate-180" : "bg-(--primary) text-black"}`}>
                                                        <i className = {`bi ${isOpen ? "bi-dash-lg" : "bi-plus-lg"} text-xl`}></i>
                                                    </span>
                                                </button>
                                                <div className = {`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-4 pt-4 border-t border-dashed border-black/20 opacity-100" : "max-h-0 opacity-0"}}`}>
                                                    <p className = "text-sm leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        {/* Columna Derecha */}
                        <div className = "w-full lg:w-1/2">
                            <div className = "space-y-4">
                                {
                                    rightFaqs.map((faq, i) => {
                                        const isOpen = openRightIndex === i;
                                        return (
                                            <div key = {faq.id} className = {`rounded-xl p-5 transition-all duration-300 ${isOpen ? "bg-(--primary) text-black shadow-lg" : "bg-(--gray-color) border border-transparent"}`}>
                                                <button className = "flex items-center justify-between w-full text-left" onClick = {() => toggleRight(i)} aria-expanded = {isOpen}>
                                                    <h3 className = "text-lg font-medium pr-4">
                                                        {faq.question}
                                                    </h3>
                                                    <span className = {`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isOpen ? "bg-black text-(--primary) rotate-180" : "bg-(--primary) text-black"}`}>
                                                        <i className = {`bi ${isOpen ? "bi-dash-lg" : "bi-plus-lg"} text-xl`}></i>
                                                    </span>
                                                </button>
                                                <div className = {`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-4 pt-4 border-t border-dashed border-black/20 opacity-100" : "max-h-0 opacity-0"}`}>
                                                    <p className = "text-sm leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <BannerEpisode />
            </div>
        </>
    )
}

export default Pricing;