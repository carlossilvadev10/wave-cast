"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader/PageHeader";
import blogData from "@/data/blogsData.json";
import Link from "next/link";
import Button from "@/components/Button/Button";
import BannerEpisode from "@/components/BannerEpisode/BannerEpisode";
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import { useParams } from "next/navigation";
import { BlogProps } from "@/constants/constant";

const BlogDetails = () => {
    const { id } = useParams();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const blog = blogData.find(
        (item) => item.id === Number(id)
    ) as BlogProps | undefined;

    if (!blog) {
        return (
            <div className = "dark-section">
                <div className = "px-[8%] pt-48 pb-25 text-center">
                    <i className = "bi bi-file-earmark-x text-6xl text-gray-400"></i>
                    <h2 className = "text-3xl lg:text-4xl text-gray-300 font-semibold mt-4">
                        Artículo <span className = "text-(--primary)">no encontrado</span>
                    </h2>
                    <p className = "text-gray-400 text-lg mt-2">
                        El artículo que buscas no existe o fue eliminado.
                    </p>
                    <Link href = "/blog" className = "inline-block">
                        <Button text = "Ver todos los artículos" className = "mt-4" />
                    </Link>
                </div>
            </div>
        )
    }

    const relatedBlogs = blogData
        .filter(item => item.id !== blog.id)
        .sort((a, b) => {
            // Crear un "seed" basado en el ID del episodio actual
            const seed = blog.id;
            return ((a.id + seed) % 10) - ((b.id + seed) % 10);
        })
        .slice(0, 2);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    const formatDate = (dateStr: string) => {
        return new Intl.DateTimeFormat("es-ES", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(new Date(dateStr));
    }

    return (
        <>
            <PageHeader title = "Detalles" highlight = "del artículo" />
            <div className = "dark-section">
                <div className = "px-[8%] py-16">
                    <div className = "flex flex-col lg:flex-row justify-baseline gap-4">
                        <div className = "w-full lg:w-1/1">
                            <div className = "flex flex-col gap-6">
                                {/* Card principal del artículo */}
                                <div className = "bg-(--gray-color) p-6 rounded-2xl">
                                    <div className = "flex flex-col lg:flex-row gap-6 bg-(--gray-light) rounded-2xl p-6">
                                        {/* Imagen */}
                                        <div className = "w-full lg:w-1/2">
                                            <Image src = {blog.image} alt = {blog.title} width = {1000} height = {1000} className = "w-full rounded-2xl object-cover" />
                                        </div>
                                        {/* Información */}
                                        <div className = "w-full lg:w-1/2 flex flex-col justify-center">
                                            {/* Metadata */}
                                            <div className = "flex flex-wrap items-center gap-4 mb-4">
                                                <span className = "flex items-center gap-2 text-gray-300">
                                                    <i className = "bi bi-pencil-square text-(--primary)"></i>
                                                    {blog.author}
                                                </span>
                                                <span className = "flex items-center gap-2 text-gray-300">
                                                    <i className = "bi bi-clock text-(--primary)"></i>
                                                    {formatDate(blog.date)}
                                                </span>
                                                <span className = "px-4 py-1.5 text-sm font-medium rounded-full bg-(--secondary) hover:bg-(--primary) transition-all duration-200">
                                                    {blog.type}
                                                </span>
                                            </div>
                                            {/* Título */}
                                            <h2 className = "text-3xl lg:text-4xl font-bold mb-4 text-white">
                                                {blog.title}
                                            </h2>
                                            {/* Descripción corta */}
                                            <p className = "text-gray-300 text-lg mb-6 leading-relaxed">
                                                {blog.description}
                                            </p>
                                            {/* Acciones */}
                                            <div className = "flex flex-wrap gap-5">
                                                <Link href = "/" className = "inline-flex items-center gap-2 text-(--primary) hover:text-white font-medium text-lg group/link transition-colors">
                                                    Leer más
                                                    <i className = "bi bi-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
                                                </Link>
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
                                                    {blog.details}
                                                </p>
                                            </div>
                                        }
                                        {/* Episodios relacionados */}
                                        {
                                            relatedBlogs.length > 0 && (
                                                <div>
                                                    <h3 className = "text-xl font-semibold text-(--primary) mb-4">
                                                        Episodios relacionados
                                                    </h3>
                                                    <div className = "space-y-4">
                                                        {
                                                            relatedBlogs.map((relatedBl) => (
                                                                <Link key = {relatedBl.id} href = {`/episode/${relatedBl.id}`} className = "flex flex-col sm:flex-row gap-4 bg-(--gray-color) rounded-xl p-4 hover:bg-(--gray-color)/80 transition-all group relative">
                                                                    <div className = "absolute top-6 right-6 z-10">
                                                                        <span className = "px-4 py-1.5 text-sm font-medium rounded-full bg-(--secondary) hover:bg-(--primary) transition-all duration-200">
                                                                            {blog.type}
                                                                        </span>
                                                                    </div>
                                                                    <div className = "w-full sm:w-32 shrink-0">
                                                                        <Image src = {relatedBl.image} alt = {relatedBl.title} width = {200} height = {200} className = "w-full h-32 rounded-lg object-cover" />
                                                                    </div>
                                                                    <div className = "flex-1 flex flex-col justify-center">
                                                                        <h4 className = "text-lg font-semibold text-white group-hover:text-(--primary) transition-colors mb-2 line-clamp-1">
                                                                            {relatedBl.title}
                                                                        </h4>
                                                                        <p className = "text-sm text-(--primary) mb-2">
                                                                            {relatedBl.author}
                                                                        </p>
                                                                        <p className = "text-sm text-gray-300 line-clamp-2">
                                                                            {relatedBl.description}
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            )
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
                                    blog.quiz && blog.quiz.length > 0 && (
                                        <div className = "bg-(--gray-color) p-6 rounded-2xl">
                                            <h2 className = "text-2xl font-semibold text-(--primary) mb-2">
                                                Preguntas frecuentes
                                            </h2>
                                            <div className = "border-t border-dashed border-(--primary)/30 mb-4" />
                                            <div className = "space-y-3">
                                                {
                                                    blog.quiz.map((faq, i) => {
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
                                            <Image src = {blog.image} alt = {blog.title} width = {800} height = {800} className = "w-full h-full rounded-full object-cover" />
                                        </div>
                                    </div>
                                    <div className = "flex flex-col items-center justify-center text-center mt-4">
                                        <p className = "text-(--primary)">
                                            Escrito por:
                                        </p>
                                        <h2 className = "text-2xl">
                                            {blog.author}
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
                                        Léelo en:
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
                                            blog.tags.map((tag, i) => (
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

export default BlogDetails;