"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader/PageHeader";
import { generalFaqsData } from "@/constants/constant";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Button from "@/components/Button/Button";
import BannerEpisode from "@/components/BannerEpisode/BannerEpisode";

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <>
            <PageHeader title = "Preguntas" highlight = "frecuentes" />
            <div className = "dark-section">
                <div className = "px-[8%] py-20">
                    <SectionHeader badge = "Centro de ayuda" title = "Todo lo que necesitas saber sobre WaveCast" description = "Encuentra respuestas a las preguntas más comunes sobre nuestro podcast, planes, contenido y más." className = "mb-12" />
                    {/* Grid de FAQs */}
                    <div className = "max-w-4xl mx-auto">
                        <div className = "space-y-4">
                            {
                                generalFaqsData.map((faq, i) => {
                                    const isOpen = openIndex === i;
                                    return (
                                        <div key = {faq.id} className = {`rounded-xl p-6 transition-all duration-300 ${isOpen ? "bg-(--primary) text-black shadow-lg shadow-(--primary)/20" : "bg-(--gray-light) hover:bg-(--gray-light)/80"}`}>
                                            <button className = "flex items-center justify-between w-full text-left gap-4" onClick = {() => toggleFaq(i)} aria-expanded = {isOpen}>
                                                <h3 className = "text-lg font-semibold">
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
                    {/* CTA Section */}
                    <div className = "mt-16 text-center max-w-2xl mx-auto">
                        <div className = "bg-(--gray-light) rounded-2xl p-8">
                            <i className = "bi bi-chat-dots text-6xl text-(--primary) mb-4 block"></i>
                            <h2 className = "text-3xl lg:text-4xl font-semibold mb-2">
                                ¿No encuentras lo que buscas?
                            </h2>
                            <p className = "text-gray-300 text-lg mb-6">
                                Nuestro equipo está aquí para ayudarte. Envíanos tu pregunta y te responderemos lo antes posible.
                            </p>
                            <Button text = "Contactar soporte" className = "mx-auto block" />
                        </div>
                    </div>
                </div>
                <BannerEpisode />
            </div>
        </>
    )
}

export default Faqs;