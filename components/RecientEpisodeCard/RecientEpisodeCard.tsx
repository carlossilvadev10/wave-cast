import React from "react";
import Link from "next/link";
import PlayLink from "../PlayLink/PlayLink";

type RecientEpisodeCardProps = {
    host: string;
    duration: string;
    title: string;
    description: string;
    episodeNumber: number;
    variant?: "primary" | "secondary";
    className?: string;
}

const RecientEpisodeCard = ({ host, duration, title, description, episodeNumber, variant = "secondary", className = "" }: RecientEpisodeCardProps) => {
    const isPrimary = variant === "primary";

    return (
        <div className = {`p-6 rounded-2xl ${isPrimary ? "bg-[#ffca79]" : "bg-(--gray-light)"} ${className}`}>
            <div className = "flex flex-wrap items-center gap-4">
                <Link href = "/" className = {`flex items-center gap-1 ${isPrimary ? "text-(--text) hover:text-black" : "text-gray-300 hover:text-white"} transition-all duration-300`}>
                    <i className = "bi bi-mic"></i>
                    {host}
                </Link>
                <p className = {isPrimary ? "text-(--text)" : "text-gray-300"}>
                    <i className = "bi bi-clock pe-1"></i>
                    {duration}
                </p>
                <div className = "flex items-center gap-3">
                    <i className = {`bi bi-balloon-heart me-3 text-xl ${isPrimary ? "text-(--text)" : "text-gray-300"}`}></i>
                    <div className = {isPrimary ? "music-waves" : "music-waves2"} />
                </div>
            </div>
            <h3 className = {`text-3xl sm:text-4xl font-semibold ${isPrimary ? "text-(--text)" : "text-gray-300"}`}>
                {title}
            </h3>
            <p className = {`my-4 tracking-wide ${isPrimary ? "text-black" : "text-gray-400"}`}>
                {description}
            </p>
            <div className = "flex items-center justify-between gap-4">
                <PlayLink text = "Escuchar ahora" variant = {isPrimary ? "secondary" : "primary"} />
                <span className = {`text-xl px-5 py-3 rounded-full ${isPrimary ? "bg-black text-(--primary)" : "bg-(--gray-color) text-(--primary)"}`}>
                    Episodio {episodeNumber}
                </span>
            </div>
        </div>
    );
};

export default RecientEpisodeCard;