"use client";

import React, { startTransition, useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader/PageHeader";
import BannerEpisode from "@/components/BannerEpisode/BannerEpisode";
import EpisodeCard from "@/components/EpisodeCard/EpisodeCard";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter";
import EmptyState from "@/components/EmptyState/EmptyState";
import { EpisodeProps, episodeSortOptions } from "@/constants/constant";
import toast from "react-hot-toast";

const FavoriteEpisode = () => {
    const [favorites, setFavorites] = useState<EpisodeProps[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("recent");

    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filteredFavorites = favorites.filter((episode) =>
        episode.host.toLowerCase().includes(normalizedSearch) ||
        episode.title.toLowerCase().includes(normalizedSearch) ||
        episode.description.toLowerCase().includes(normalizedSearch) ||
        episode.episode.toLowerCase().includes(normalizedSearch)
    );

    const sortedFavorites = [...filteredFavorites].sort((a, b) => {
        switch (sortBy) {
            case "recent": return b.id - a.id;
            case "oldest": return a.id - b.id;
            case "title-asc": return a.title.localeCompare(b.title);
            case "title-desc": return b.title.localeCompare(a.title);
            default: return 0;
        }
    });

    useEffect(() => {
        startTransition(() => {
            const stored = localStorage.getItem("favoriteEpisodes");
            if (stored) {
                setFavorites(JSON.parse(stored));
            }
            setIsLoaded(true);
        });
    }, []);

    // Mostrar loading mientras carga
    if (!isLoaded) {
        return (
            <>
                <PageHeader title = "Mis episodios" highlight = "favoritos" />
                <div className = "dark-section">
                    <div className = "px-[8%] py-16 relative">
                        <div className = "w-full text-center py-20">
                            <div className = "inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-(--primary)" />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const removeFavorite = (episode: EpisodeProps) => {
        const updatedFavorites = favorites.filter((fav) => fav.id !== episode.id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favoriteEpisodes", JSON.stringify(updatedFavorites));
        toast.success("Eliminado de favoritos", { icon: "💔" });
    }

    return (
        <>
            <PageHeader title = "Mis episodios" highlight = "favoritos" />
            <div className = "dark-section">
                <div className = "px-[8%] py-16 relative">
                    {
                        favorites.length === 0 ? (
                            <EmptyState icon = "bi-balloon-heart" title = "Tu lista de favoritos está vacía" description = "Explora nuestra colección y guarda tus episodios preferidos para escucharlos más tarde." showButton = {true} buttonText = "Explorar episodios" buttonHref = "/episode" buttonVariant = "primary" />
                        ) : (
                            <>
                                <SearchAndFilter searchTerm = {searchTerm} onSearchChange = {setSearchTerm} resultCount = {filteredFavorites.length} resultLabel = "episodio" showSort = {true} sortValue = {sortBy} onSortChange = {setSortBy} sortOptions = {episodeSortOptions} placeholder = "Buscar en favoritos..." />
                                <div className = "grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {
                                        sortedFavorites.map((episode) => (
                                            <EpisodeCard key = {episode.id} episode = {episode} onFavoriteToggle = {removeFavorite} showRemoveButton = {true} />
                                        ))
                                    }
                                </div>
                            </>
                        )
                    }
                </div>
                <BannerEpisode />
            </div>
        </>
    )
}

export default FavoriteEpisode;