"use client";

import React, { useState } from "react";
import Button from "@/components/Button/Button";
import PageHeader from "@/components/PageHeader/PageHeader";
import BannerEpisode from "@/components/BannerEpisode/BannerEpisode";
import EpisodeCard from "@/components/EpisodeCard/EpisodeCard";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter";
import EmptyState from "@/components/EmptyState/EmptyState";
import { EpisodeProps, episodeSortOptions } from "@/constants/constant";
import episodesData from "@/data/episodesData.json";
import toast from "react-hot-toast";

const Episode = () => {
    const [showAll, setShowAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("recent");
    const [favorites, setFavorites] = useState<EpisodeProps[]>(() => {
        if (typeof window === "undefined") return [];
        const stored = localStorage.getItem("favoriteEpisodes");
        return stored ? (JSON.parse(stored) as EpisodeProps[]) : [];
    });

    const normalizedSearch = searchTerm.trim().toLowerCase();

    // 1. Filtrar
    const filteredEpisodes = episodesData.filter((episode: EpisodeProps) =>
        episode.host.toLowerCase().includes(normalizedSearch) ||
        episode.title.toLowerCase().includes(normalizedSearch) ||
        episode.description.toLowerCase().includes(normalizedSearch) ||
        episode.episode.toLowerCase().includes(normalizedSearch)
    );

    // 2. Ordenar (ANTES de limitar)
    const sortedEpisodes = [...filteredEpisodes].sort((a, b) => {
        switch (sortBy) {
            case "recent":
                return b.id - a.id;
            case "oldest":
                return a.id - b.id;
            case "popular":
                return b.id - a.id;
            case "title-asc":
                return a.title.localeCompare(b.title);
            case "title-desc":
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });

    // 3. Limitar visibilidad (DESPUÉS de ordenar)
    const visibleEpisodes = showAll ? sortedEpisodes : sortedEpisodes.slice(0, 10);

    const toggleFavorite = (episode: EpisodeProps) => {
        const isFav = favorites.some((fav) => fav.id === episode.id);
        let updatedFavorites: EpisodeProps[];

        if (isFav) {
            updatedFavorites = favorites.filter((fav) => fav.id !== episode.id);
            toast.error("Eliminado de favoritos", { icon: "💔" });
        } else {
            updatedFavorites = [...favorites, episode];
            toast.success("Añadido a favoritos", { icon: "❤️" });
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favoriteEpisodes", JSON.stringify(updatedFavorites));
    }

    const isFavorite = (id: number) => {
        return favorites.some((fav) => fav.id === id);
    }

    return (
        <>
            <PageHeader title = "Explora nuestros" highlight = "episodios" />
            <div className = "dark-section">
                <div className = "px-[8%] pt-16 pb-10 relative">
                    {/* Buscador, contador y ordenamiento */}
                    <SearchAndFilter searchTerm = {searchTerm} onSearchChange = {setSearchTerm} resultCount = {filteredEpisodes.length} resultLabel = "episodio" showSort = {true} sortValue = {sortBy} onSortChange = {setSortBy} sortOptions = {episodeSortOptions} placeholder = "Buscar episodio..." />
                    {/* Mensaje cuando no hay resultados */}
                    {
                        normalizedSearch && filteredEpisodes.length === 0 && (
                            <EmptyState icon = "bi-search" title = "No se encontraron episodios" description = "Intenta con otros términos de búsqueda." searchTerm = {searchTerm} />
                        )
                    }
                    {/* Grid de episodios - USAR visibleEpisodes */}
                    {
                        filteredEpisodes.length > 0 && (
                            <div className = "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                                {
                                    visibleEpisodes.map((episode) => ( // ← CAMBIO AQUÍ
                                        <EpisodeCard key = {episode.id} episode = {episode} onFavoriteToggle = {toggleFavorite} isFavorite = {isFavorite(episode.id)} />
                                    ))
                                }
                            </div>
                        )
                    }
                    {/* Botón ver más/menos */}
                    {
                        filteredEpisodes.length > 10 && (
                            <div className = "flex justify-center mt-10">
                                <Button text = {showAll ? "Mostrar menos" : `Ver todos (${filteredEpisodes.length})`} onClick = {() => setShowAll(!showAll)} />
                            </div>
                        )
                    }
                </div>
                {/* Banner final */}
                <BannerEpisode />
            </div>
        </>
    )
}

export default Episode;