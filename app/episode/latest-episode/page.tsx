"use client";

import React, { useState } from "react";
import episodesData from "@/data/episodesData.json";
import toast from "react-hot-toast";
import PageHeader from "@/components/PageHeader/PageHeader";
import BannerEpisode from "@/components/BannerEpisode/BannerEpisode";
import EpisodeCard from "@/components/EpisodeCard/EpisodeCard";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter";
import { EpisodeProps, episodeSortOptions } from "@/constants/constant";
import EmptyState from "@/components/EmptyState/EmptyState";

const LatestEpisode = () => {
  // ✅ Todos los hooks juntos al inicio
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [favorites, setFavorites] = useState<EpisodeProps[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("favoriteEpisodes");
    return stored ? (JSON.parse(stored) as EpisodeProps[]) : [];
  });

  // ✅ Lógica después de los hooks
  const normalizedSearch = searchTerm.trim().toLowerCase();

  // Tomar solo los 8 más recientes SIN ordenar aún
  const latestEpisodes: EpisodeProps[] = [...episodesData]
    .sort((a, b) => b.id - a.id)
    .slice(0, 8);

  // Filtrar
  const filteredEpisodes = latestEpisodes.filter((episode) =>
    episode.host.toLowerCase().includes(normalizedSearch) ||
    episode.title.toLowerCase().includes(normalizedSearch) ||
    episode.description.toLowerCase().includes(normalizedSearch) ||
    episode.episode.toLowerCase().includes(normalizedSearch)
  );

  // Ordenar según la selección del usuario
  const sortedEpisodes = [...filteredEpisodes].sort((a, b) => {
    switch (sortBy) {
      case "recent": return b.id - a.id;
      case "oldest": return a.id - b.id;
      case "title-asc": return a.title.localeCompare(b.title);
      case "title-desc": return b.title.localeCompare(a.title);
      default: return 0;
    }
  });

  const toggleFavorite = (episode: EpisodeProps) => {
    const isFav = favorites.some((fav) => fav.id === episode.id);
    const updatedFavorites = isFav
      ? favorites.filter((fav) => fav.id !== episode.id)
      : [...favorites, episode];

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteEpisodes", JSON.stringify(updatedFavorites));
    toast[isFav ? "error" : "success"](
      isFav ? "Eliminado de favoritos" : "Añadido a favoritos",
      { icon: isFav ? "💔" : "❤️" }
    );
  }

  const isFavorite = (id: number) => favorites.some((fav) => fav.id === id);

  return (
    <>
      <PageHeader title = "Episodios" highlight = "recientes" />
      <div className = "dark-section">
        <div className = "px-[8%] pt-16 pb-10 relative">
          <SearchAndFilter searchTerm = {searchTerm} onSearchChange = {setSearchTerm} resultCount = {filteredEpisodes.length} resultLabel = "episodio" showSort = {true} sortValue = {sortBy} onSortChange = {setSortBy} sortOptions = {episodeSortOptions} placeholder = "Buscar episodios recientes..." />
          {
            filteredEpisodes.length === 0 ? (
              <EmptyState icon = "bi-search" title = "No se encontraron episodios" description = "Intenta con otros términos de búsqueda." searchTerm = {searchTerm} />
            ) : (
              <div className = "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {
                  sortedEpisodes.map((episode) => ( // ← CAMBIO AQUÍ
                    <EpisodeCard key = {episode.id} episode = {episode} onFavoriteToggle = {toggleFavorite} isFavorite = {isFavorite(episode.id)} />
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

export default LatestEpisode;