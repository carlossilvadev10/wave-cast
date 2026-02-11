import React from "react";
import PageHeader from "@/components/PageHeader/PageHeader";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ContactCard from "@/components/ContactCard/ContactCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";
import StarIcons from "@/components/StarIcons/StarIcons";
import { contactCardsData } from "@/constants/constant";
import client1 from "@/public/contact-client-1.png";
import client2 from "@/public/contact-client-2.png";
import client3 from "@/public/contact-client-3.png";
import client4 from "@/public/contact-client-4.png";
import client5 from "@/public/contact-client-5.png";
import Button from "@/components/Button/Button";
import BannerEpisode from "@/components/BannerEpisode/BannerEpisode";

const Contact = () => {
    return (
        <>
            <PageHeader title = "Conecta" highlight = "con nosotros" />
            <div className = "dark-section">
                <div className = "px-[8%] py-20">
                    <SectionHeader badge = "Estamos aquí para ti" title = "¿Tienes una pregunta o idea? Charlemos" description = "Ya sea que quieras colaborar, sugerir un tema o simplemente saludarnos, nos encantaría saber de ti." className = "mb-12" />
                    <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            contactCardsData.map((card, i) => (
                                <ContactCard key = {i} contactCard = {card} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className = "light-section wave-wrapper-section">
                <div className = "px-[8%] pt-45 pb-10">
                    <div className = "flex flex-col lg:flex-row items-center justify-between gap-5">
                        <div className = "w-full lg:w-1/2">
                            <SectionTitle badge = "Hablemos" title = "Tu mensaje comienza aquí" />
                            <p className = "my-4 text-lg tracking-wider">
                                Cuéntanos en qué podemos ayudarte y te responderemos lo antes posible.
                            </p>
                            <div className = "flex flex-wrap items-center gap-4">
                                <div className = "flex items-center">
                                    <Image src = {client1} alt = "client-1" className = "rounded-full -me-3" />
                                    <Image src = {client2} alt = "client-2" className = "rounded-full -me-3" />
                                    <Image src = {client3} alt = "client-3" className = "rounded-full -me-3" />
                                    <Image src = {client4} alt = "client-4" className = "rounded-full -me-3" />
                                    <Image src = {client5} alt = "client-5" className = "rounded-full -me-3" />
                                </div>
                                <div className = "flex flex-col gap-2 sm:ms-6">
                                    <StarIcons className = "gap-1" />
                                </div>
                                <p className = "text-gray-300">
                                    3.5K+ reseñas (4.95 de 5)
                                </p>
                            </div>
                        </div>
                        <div className = "w-full lg:w-1/2">
                            <div className = "bg-(--gray-color) p-6 rounded-2xl">
                                <div className = "bg-(--gray-light) p-6 rounded-2xl">
                                    <h2 className = "text-3xl text-center">
                                        Contáctanos
                                    </h2>
                                    <div className = "mt-4">
                                        <form action = "" className = "space-y-2">
                                            <div className = "flex flex-col gap-2">
                                                <label htmlFor = "name">Nombre:</label>
                                                <input type = "text" name = "name" id = "name" placeholder = "Devon Lane" autoComplete = "name" required minLength = {2} maxLength = {50} spellCheck = "false" className = "w-full rounded-xl px-4 py-3 bg-(--gray-color) placeholder:text-gray-300 outline-none border border-transparent focus:border-(--primary) focus:ring-2 focus:ring-(--primary) transition-all duration-300" />
                                            </div>
                                            <div className = "flex flex-col gap-2">
                                                <label htmlFor = "email">Correo electrónico:</label>
                                                <input type = "email" name = "email" id = "email" placeholder = "correo@gmail.com" autoComplete = "email" required maxLength = {100} spellCheck = "false" className = "w-full rounded-xl px-4 py-3 bg-(--gray-color) placeholder:text-gray-400 outline-none border border-transparent focus:border-(--primary) focus:ring-2 focus:ring-(--primary) transition-all duration-300" />
                                            </div>
                                            <div className = "flex flex-col gap-2">
                                                <label htmlFor = "phone">Correo electrónico:</label>
                                                <input type = "tel" name = "phone" id = "phone" placeholder = "987 654 321" autoComplete = "tel" inputMode = "tel" required maxLength = {15} pattern = "[0-9+ ]+" spellCheck = "false" className = "w-full rounded-xl px-4 py-3 bg-(--gray-color) placeholder:text-gray-400 outline-none border border-transparent focus:border-(--primary) focus:ring-2 focus:ring-(--primary) transition-all duration-300" />
                                            </div>
                                            <div className = "flex flex-col gap-2">
                                                <label htmlFor = "message">Mensaje:</label>
                                                <textarea name = "message" id = "message" placeholder = "Escribe tu mensaje aquí..." autoComplete = "off" required minLength = {10} maxLength = {500} rows = {5} spellCheck = "false" className = "w-full rounded-xl px-4 py-3 bg-(--gray-color) text-(--text) placeholder:text-gray-400 outline-none border border-transparent focus:border-(--primary) focus:ring-2 focus:ring-(--primary) transition-all duration-300 resize-none" />
                                            </div>
                                            <Button text = "Enviar" className = "mt-4 mx-auto block" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BannerEpisode />
            </div>
        </>
    )
}

export default Contact;