"use client";

import React, { useState } from "react";
import episodesData from "@/data/episodesData.json";
import { useParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button/Button";
import PageHeader from "@/components/PageHeader/PageHeader";
import Image from "next/image";
import PlayLink from "@/components/PlayLink/PlayLink";
import EpisodeBadge from "@/components/EpisodeBadge/EpisodeBadge";
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import { EpisodeProps } from "@/constants/constant";
import BannerEpisode from "@/components/BannerEpisode/BannerEpisode";

const EpisodeDetails = () => {
    const { id } = useParams();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const episode = episodesData.find(
        (ep) => ep.id === Number(id)
    ) as EpisodeProps | undefined;

    if (!episode) {
        return (
            <div className = "dark-section">
                <div className = "px-[8%] pt-48 pb-25 text-center">
                    <i className = "bi bi-file-earmark-x text-6xl text-gray-400"></i>
                    <h2 className = "text-3xl lg:text-4xl text-gray-300 font-semibold mt-4">
                        Episodio <span className = "text-(--primary)">no encontrado</span>
                    </h2>
                    <p className = "text-gray-400 text-lg mt-2">
                        El episodio que buscas no existe o fue eliminado.
                    </p>
                    <Link href = "/episode" className = "inline-block">
                        <Button text = "Ver todos los episodios" className = "mt-4" />
                    </Link>
                </div>
            </div>
        )
    }

    // Obtener episodios relacionados (evitar el mismo episodio)
    const relatedEpisodes = episodesData
        .filter(ep => ep.id !== episode.id)
        .sort((a, b) => {
            // Crear un "seed" basado en el ID del episodio actual
            const seed = episode.id;
            return ((a.id + seed) % 10) - ((b.id + seed) % 10);
        })
        .slice(0, 2);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <>
            <PageHeader title = "Detalles" highlight = "del episodio" />
            <div className = "dark-section">
                <div className = "px-[8%] py-16">
                    <div className = "flex flex-col lg:flex-row justify-baseline gap-4">
                        <div className = "w-full lg:w-1/1">
                            <div className = "flex flex-col gap-6">
                                {/* Card principal del episodio */}
                                <div className = "bg-(--gray-color) p-6 rounded-2xl">
                                    <div className = "flex flex-col lg:flex-row gap-6 bg-(--gray-light) rounded-2xl p-6">
                                        {/* Imagen */}
                                        <div className = "w-full lg:w-1/2">
                                            <Image src = {episode.image} alt = {episode.title} width = {1000} height = {1000} className = "w-full rounded-2xl object-cover" />
                                        </div>
                                        {/* Información */}
                                        <div className = "w-full lg:w-1/2 flex flex-col justify-center">
                                            {/* Metadata */}
                                            <div className = "flex flex-wrap items-center gap-4 mb-4">
                                                <span className = "flex items-center gap-2 text-gray-300">
                                                    <i className = "bi bi-mic text-(--primary)"></i>
                                                    {episode.host}
                                                </span>
                                                <span className = "flex items-center gap-2 text-gray-300">
                                                    <i className = "bi bi-clock text-(--primary)"></i>
                                                    {episode.time}
                                                </span>
                                                <EpisodeBadge episode = {episode.episode} />
                                            </div>
                                            {/* Título */}
                                            <h2 className = "text-3xl lg:text-4xl font-bold mb-4 text-white">
                                                {episode.title}
                                            </h2>
                                            {/* Descripción corta */}
                                            <p className = "text-gray-300 text-lg mb-6 leading-relaxed">
                                                {episode.description}
                                            </p>
                                            {/* Acciones */}
                                            <div className = "flex flex-wrap gap-5">
                                                <PlayLink text = "Escuchar ahora" />
                                                <Button text = "Compartir" variant = "secondary" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Detalles adicionales */}
                                    <div className = "bg-(--gray-light) rounded-lg mt-6 p-6 space-y-8">
                                        {/* Descripción completa */}
                                        {
                                            <div>
                                                <h2 className = "text-2xl font-semibold text-(--primary) mb-3">
                                                    Sobre este episodio
                                                </h2>
                                                <p className = "text-gray-300 leading-relaxed">
                                                    {episode.details}
                                                </p>
                                            </div>
                                        }
                                        {/* Invitado */}
                                        {
                                            <div>
                                                <h3 className = "text-xl font-semibold text-(--primary) mb-3">
                                                    Invitado especial
                                                </h3>
                                                <p className = "text-gray-300 leading-relaxed">
                                                    {episode.guest}
                                                </p>
                                            </div>
                                        }
                                        {/* Episodios relacionados */}
                                        {
                                            relatedEpisodes.length > 0 && (
                                                <div>
                                                    <h3 className = "text-xl font-semibold text-(--primary) mb-4">
                                                        Episodios relacionados
                                                    </h3>
                                                    <div className = "space-y-4">
                                                        {
                                                            relatedEpisodes.map((relatedEp) => (
                                                                <Link key = {relatedEp.id} href = {`/episode/${relatedEp.id}`} className = "flex flex-col sm:flex-row gap-4 bg-(--gray-color) rounded-xl p-4 hover:bg-(--gray-color)/80 transition-all group relative">
                                                                    <div className = "absolute top-6 right-4 z-10">
                                                                        <EpisodeBadge episode = {relatedEp.episode} />
                                                                    </div>
                                                                    <div className = "w-full sm:w-32 shrink-0">
                                                                        <Image src = {relatedEp.image} alt = {relatedEp.title} width = {200} height = {200} className = "w-full h-32 rounded-lg object-cover" />
                                                                    </div>
                                                                    <div className = "flex-1 flex flex-col justify-center">
                                                                        <h4 className = "text-lg font-semibold text-white group-hover:text-(--primary) transition-colors mb-2 line-clamp-1">
                                                                            {relatedEp.title}
                                                                        </h4>
                                                                        <p className = "text-sm text-(--primary) mb-2">
                                                                            {relatedEp.host}
                                                                        </p>
                                                                        <p className = "text-sm text-gray-300 line-clamp-2">
                                                                            {relatedEp.description}
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {/* Transcripción */}
                                        {
                                            <div>
                                                <h3 className = "text-xl font-semibold text-(--primary) mb-3">
                                                    Transcripción
                                                </h3>
                                                <div className = "bg-(--gray-color) rounded-lg p-4 max-h-96 overflow-y-auto">
                                                    <p className = "text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                                        {episode.transcript}
                                                    </p>
                                                </div>
                                            </div>
                                        }
                                        {/* Síguenos */}
                                        <div>
                                            <div className = "flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                <h3 className = "text-xl font-semibold text-(--primary)">
                                                    Síguenos <i className = "bi bi-chevron-double-right ms-2"></i>
                                                </h3>
                                                <SocialIcons />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* FAQ */}
                                {
                                    episode.quiz && episode.quiz.length > 0 && (
                                        <div className = "bg-(--gray-color) p-6 rounded-2xl">
                                            <h2 className = "text-2xl font-semibold text-(--primary) mb-2">
                                                Preguntas frecuentes
                                            </h2>
                                            <div className = "border-t border-dashed border-(--primary)/30 mb-4" />
                                            <div className = "space-y-3">
                                                {
                                                    episode.quiz.map((faq, i) => {
                                                        const isOpen = openIndex === i;
                                                        return (
                                                            <div key = {i} className = {`rounded-xl p-5 transition-all duration-300 ${isOpen ? "bg-(--primary) text-black shadow-lg" : "bg-(--gray-light) hover:bg-(--gray-light)/80"}`}>
                                                                <button className = "flex items-center justify-between w-full text-left" onClick = {() => toggleFaq(i)} aria-expanded = {isOpen}>
                                                                    <h3 className = "text-lg font-medium pr-4">
                                                                        {faq.question}
                                                                    </h3>
                                                                    <span className = {`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isOpen ? "bg-black text-(--primary) rotate-180" : "bg-(--primary) text-black"}`}>
                                                                        <i className = {`bi ${isOpen ? "bi-dash-lg" : "bi-plus-lg"} text-xl`}></i>
                                                                    </span>
                                                                </button>
                                                                <div className = {`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-1 pt-4 border-t border-dashed border-black/20 opacity-100" : "max-h-0 opacity-0"}`}>
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
                                    )
                                }
                            </div>
                        </div>
                        <div className = "w-full lg:w-1/2 sticky top-20 left-0 h-full">
                            <div className = "bg-(--gray-color) p-6 rounded-2xl">
                                <div className = "bg-(--gray-light) p-6 rounded-2xl">
                                    <div className = "flex items-center justify-center">
                                        <div className = "w-50 h-50 rounded-full overflow-hidden">
                                            <Image src = {episode.image} alt = {episode.title} width = {800} height = {800} className = "w-full h-full rounded-full object-cover" />
                                        </div>
                                    </div>
                                    <div className = "flex flex-col items-center justify-center text-center mt-4">
                                        <p className = "text-(--primary)">
                                            Presentado por:
                                        </p>
                                        <h2 className = "text-2xl">
                                            {episode.host}
                                        </h2>
                                        <p className = "text-(--primary) mt-2">
                                            Síguelo en:
                                        </p>
                                        <div className = "flex items-center gap-2 mt-2">
                                            <i className = "bi bi-instagram w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-300 cursor-pointer"></i>
                                            <i className = "bi bi-github w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-300 cursor-pointer"></i>
                                            <i className = "bi bi-twitter-x w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-300 cursor-pointer"></i>
                                            <i className = "ri-youtube-line w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-300 cursor-pointer"></i>
                                            <i className = "bi bi-whatsapp w-10 h-10 text-(--primary) rounded-full flex items-center justify-center border border-(--primary) hover:bg-(--primary) hover:text-black text-xl transition-all duration-300 cursor-pointer"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className = "bg-(--gray-light) p-6 rounded-2xl mt-4">
                                    <h2 className = "text-3xl text-(--primary) text-center font-semibold mb-2">
                                        Escúchalo en:
                                    </h2>
                                    <div className = "border-t border-dashed border-(--primary)/30 mb-4" />
                                    <SocialIcons />
                                </div>
                                <div className = "bg-(--gray-light) p-6 rounded-2xl mt-4">
                                    <h2 className = "text-3xl text-(--primary) text-center font-semibold mb-2">
                                        Etiquetas populares
                                    </h2>
                                    <div className = "border-t border-dashed border-(--primary)/30 mb-4" />
                                    <div className = "flex flex-wrap items-center justify-center gap-4">
                                        {
                                            episode.tags.map((tag, i) => (
                                                <span key = {i} className = "px-6 py-4 rounded-full bg-(--gray-color) hover:bg-(--primary) hover:text-black cursor-pointer transition-all duration-300">
                                                    {tag}
                                                </span>
                                            ))
                                        }
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

export default EpisodeDetails;