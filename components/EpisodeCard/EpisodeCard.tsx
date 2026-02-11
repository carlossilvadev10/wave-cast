import React from "react";
import Image from "next/image";
import Link from "next/link";
import PlayLink from "../PlayLink/PlayLink";
import EpisodeBadge from "../EpisodeBadge/EpisodeBadge";
import { EpisodeProps } from "@/constants/constant";

type EpisodeCardProps = {
    episode: EpisodeProps;
    onFavoriteToggle?: (episode: EpisodeProps) => void;
    isFavorite?: boolean;
    showRemoveButton?: boolean;
    className?: string;
}

const EpisodeCard = ({ episode, onFavoriteToggle, isFavorite = false, showRemoveButton = false, className = "" }: EpisodeCardProps) => {
    return (
        <div className = {`flex flex-col lg:flex-row items-center justify-between bg-(--gray-light) rounded-lg p-4 overflow-hidden ${className}`}>
            {/* Imagen */}
            <div className = "flex items-center justify-center w-full lg:w-1/2">
                <Image src = {episode.image} alt = {episode.title} width = {1000} height = {1000} className = "w-full h-full rounded-2xl object-cover" />
            </div>
            {/* Contenido */}
            <div className = "w-full">
                <div className = "p-4">
                    {/* Metadata */}
                    <div className = "flex flex-row flex-wrap items-center justify-between gap-2">
                        <Link href = {`/episode/${episode.id}`}>
                            <span className = "flex items-center gap-1 font-light text-gray-300 hover:text-(--primary) tracking-wider transition-all duration-300">
                                <i className = "bi bi-mic text-(--primary)"></i>
                                {episode.host}
                            </span>
                        </Link>
                        <p className = "text-gray-300">
                            <i className = "bi bi-clock pe-1 text-(--primary)"></i>
                            {episode.time}
                        </p>
                        {/* Botón de favorito o remover */}
                        {
                            onFavoriteToggle && (
                                <button onClick = {() => onFavoriteToggle(episode)} aria-label = {showRemoveButton ? "Quitar de favoritos" : (isFavorite ? "Quitar de favoritos" : "Agregar a favoritos")} className = "focus:outline-none group">
                                    {
                                        showRemoveButton ? (
                                            <i className = "bi bi-x-circle text-xl text-gray-400 hover:text-red-500 cursor-pointer transition-all duration-300 group-hover:scale-110"></i>
                                        ) : (
                                            <i className = {`bi ${isFavorite ? "bi-balloon-heart-fill text-red-500" : "bi-balloon-heart text-(--primary)"} text-xl cursor-pointer transition-all duration-300 hover:scale-110`}></i>
                                        )
                                    }
                                </button>
                            )
                        }
                    </div>
                    {/* Título y descripción */}
                    <Link href = {`/episode/${episode.id}`} className = "group block">
                        <h2 className = "mt-3 text-3xl font-semibold group-hover:text-(--primary) transition-all duration-300 line-clamp-2">
                            {episode.title}
                        </h2>
                        <p className = "my-3 text-gray-300 line-clamp-3">
                            {episode.description}
                        </p>
                    </Link>
                    {/* Acciones */}
                    <div className = "flex items-center justify-between gap-4">
                        <PlayLink text = "Escuchar ahora" />
                        <EpisodeBadge episode = {episode.episode} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EpisodeCard;