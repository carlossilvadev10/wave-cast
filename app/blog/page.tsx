"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BannerEpisode from "@/components/BannerEpisode/BannerEpisode";
import PageHeader from "@/components/PageHeader/PageHeader";
import blogData from "@/data/blogsData.json";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter";
import { blogSortOptions } from "@/constants/constant";
import EmptyState from "@/components/EmptyState/EmptyState";

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("recent");

    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filteredBlogs = blogData.filter((blog) =>
        blog.title.toLowerCase().includes(normalizedSearch) ||
        blog.description.toLowerCase().includes(normalizedSearch) ||
        blog.type.toLowerCase().includes(normalizedSearch)
    );

    const sortedBlogs = [...filteredBlogs].sort((a, b) => {
        switch (sortBy) {
            case "recent":
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            case "oldest":
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            case "title-asc":
                return a.title.localeCompare(b.title);
            case "title-desc":
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });

    const formatDate = (dateStr: string) => {
        return new Intl.DateTimeFormat("es-ES", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(new Date(dateStr));
    }

    return (
        <>
            <PageHeader title = "Nuestro" highlight = "blog" />
            <div className = "dark-section">
                <div className = "px-[8%] py-16 relative">
                    <SearchAndFilter searchTerm = {searchTerm} onSearchChange = {setSearchTerm} resultCount = {filteredBlogs.length} resultLabel = "artículo" showSort = {true} sortValue = {sortBy} onSortChange = {setSortBy} sortOptions = {blogSortOptions} placeholder = "Buscar blogs..." />
                    {
                        filteredBlogs.length === 0 ? (
                            <EmptyState icon = "bi-journal-x" title = "No se encontraron artículos" description = "Intenta con otros términos de búsqueda." searchTerm = {searchTerm} />
                        ) : (
                            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    sortedBlogs.map((blog) => (
                                        <article key = {blog.id} className = "bg-(--gray-light) rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-(--primary)/10 transition-all duration-300 group">
                                            {/* Imagen */}
                                            <Link href = {`/blog/${blog.id}`} className = "block relative overflow-hidden">
                                                <Image src = {blog.image} alt = {blog.title} width = {500} height = {300} className = "w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                                            </Link>
                                            {/* Contenido */}
                                            <div className = "p-6">
                                                {/* Meta info */}
                                                <div className = "flex flex-wrap items-center gap-4 mb-4">
                                                    <span className = "px-4 py-1.5 text-sm font-medium rounded-full bg-(--secondary) hover:bg-(--primary) transition-all duration-200">
                                                        {blog.type}
                                                    </span>
                                                    <Link href = {`/blog/${blog.id}`}>
                                                        <span className = "flex items-center gap-1 text-base text-gray-400 hover:text-(--primary) transition-all duration-300">
                                                            <i className = "bi bi-pencil-square text-(--primary)"></i>
                                                            {blog.author}
                                                        </span>
                                                    </Link>
                                                    <time dateTime = {blog.date} className = "flex items-center gap-1.5 text-base text-gray-400">
                                                        <i className = "bi bi-calendar3 text-(--primary)"></i>
                                                        {formatDate(blog.date)}
                                                    </time>
                                                </div>
                                                {/* Título y descripcioón */}
                                                <Link href = {`/blog/${blog.id}`} className = "group/title">
                                                    <h2 className = "mt-3 text-3xl font-semibold group-hover:text-(--primary) transition-all duration-300 line-clamp-2">
                                                        {blog.title}
                                                    </h2>
                                                    <p className = "my-3 text-gray-300 line-clamp-3">
                                                        {blog.description}
                                                    </p>
                                                </Link>
                                                {/* Read More */}
                                                <Link href = {`/blog/${blog.id}`} className = "inline-flex items-center gap-2 text-(--primary) hover:text-white font-medium text-sm group/link transition-colors">
                                                    Leer más
                                                    <i className = "bi bi-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
                                                </Link>
                                            </div>
                                        </article>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
                <BannerEpisode />
            </div>
        </>
    )
}

export default Blog;