import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import Image from "next/image";
import bannerImg from "@/public/episode-card-banner.png";
import { recentEpisodesData } from "@/constants/constant";
import RecientEpisodeCard from "../RecientEpisodeCard/RecientEpisodeCard";

const RecentEpisode = () => {
    const featuredEpisode = recentEpisodesData.find(ep => ep.featured);
    const regularEpisodes = recentEpisodesData.filter(ep => !ep.featured);

    return (
        <section className = "dark-section">
            <div className = "px-[8%] pt-30 pb-10">
                <div className = "flex flex-col sm:flex-row items-center justify-between">
                    <div className = "w-full lg:w-1/2">
                        <SectionTitle badge = "Recién lanzado" title = "El episodio que todos esperaban" />
                    </div>
                    <div className = "w-full lg:w-1/3 mt-4 sm:mt-0">
                        <p className = "text-gray-300 text-lg">
                            Episodios que mezclan historias, entrevistas y conversaciones para pensar y sentir, dale play y súmate.
                        </p>
                        <Button text = "Explorar episodios" className = "mt-4" />
                    </div>
                </div>
            </div>
            {
                featuredEpisode && (
                    <div className = "px-[8%] mt-4 pb-30">
                        <div className = "bg-[#ffca79] px-5 rounded-2xl pb-5 lg:pb-0 episodeBanner">
                            <div className = "flex flex-col lg:flex-row justify-center lg:justify-between gap-0 lg:gap-5">
                                <div className = "w-full lg:w-1/2">
                                    <Image src = {bannerImg} alt = "banner-img" className = "w-full h-full" />
                                </div>
                                <div className = "w-full lg:w-1/2">
                                    <RecientEpisodeCard host = {featuredEpisode.host} duration = {featuredEpisode.duration} title = {featuredEpisode.title} description = {featuredEpisode.description} episodeNumber = {featuredEpisode.episodeNumber} variant = "primary" className = "bg-transparent! px-0! py-8 lg:py-12 flex flex-col justify-center h-full" />
                                </div>
                            </div>
                        </div>
                        <div className = "flex flex-col lg:flex-row items-center gap-4 mt-10">
                            {
                                regularEpisodes.map((episode) => (
                                    <div key = {episode.id} className = "w-full lg:w-1/2">
                                        <RecientEpisodeCard host = {episode.host} duration = {episode.duration} title = {episode.title} description = {episode.description} episodeNumber = {episode.episodeNumber} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </section>
    );
};

export default RecentEpisode;