import React from "react";
import PageHeader from "@/components/PageHeader/PageHeader";
import experience1 from "@/public/elevate-banner-1.png";
import experience2 from "@/public/elevate-banner-2.png";
import arrow1 from "@/public/elevate-banner-arrow1.png";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Button from "@/components/Button/Button";
import { aboutFeatures, statsData, whyChooseUsData } from "@/constants/constant";
import ExperienceStats from "@/components/ExperienceStats/ExperienceStats";
import BenefitCard from "@/components/BenefitCard/BenefitCard";
import WhyChooseUsImages from "@/components/WhyChooseUsImages/WhyChooseUsImages";
import PlayLink from "@/components/PlayLink/PlayLink";
import StatCard from "@/components/StatCard.tsx/StatCard";
import BannerEpisode from "@/components/BannerEpisode/BannerEpisode";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const About = () => {
    return (
        <>
            <PageHeader title = "Quiénes" highlight = "somos" />
            <div className = "dark-section">
                <div className = "px-[8%] py-16 relative">
                    <div className = "flex flex-col lg:flex-row items-center justify-between gap-16">
                        {/* Contenido */}
                        <div className = "w-full lg:w-1/2">
                            <SectionTitle badge = "Lo que nos define" title = "Más que un podcast, una experiencia" />
                            <p className = "text-gray-300 text-lg my-6 leading-relaxed">
                                Creamos este espacio con una idea clara: ofrecer experiencias en audio que conecten, inspiren y dejen huella. Cada sección, cada episodio y cada historia que encuentras aquí
                                está pensada para acompañarte, retarte y abrir nuevas perspectivas. Hoy, nuestra plataforma es el punto de encuentro de voces auténticas, ideas poderosas y relatos que merecen
                                ser escuchados.
                            </p>
                            {/* Features */}
                            <div className = "grid grid-cols-1 gap-6 border-b border-dashed border-(--primary)/30 pb-8 mb-8">
                                {
                                    aboutFeatures.map((feature, index) => (
                                        <BenefitCard key = {index} icon = {feature.icon} title = {feature.title} description = {feature.description} />
                                    ))
                                }
                            </div>
                            {/* CTA */}
                            <div className = "flex flex-wrap items-center gap-4">
                                <Button text = "Comenzar ahora" variant = "primary" />
                                <Button text = "Conocer más" />
                            </div>
                        </div>
                        {/* Experiencia */}
                        <div className = "w-full lg:w-1/2">
                            <ExperienceStats image1 = {experience1} image2 = {experience2} arrowImage = {arrow1} yearsCount = {5} yearsLabel = "Años de experiencia" />
                        </div>
                    </div>
                </div>
            </div>
            <div className = "light-section">
                <div className = "px-[8%] py-16">
                    <div className = "flex flex-col lg:flex-row items-center justify-between gap-24">
                        <div className = "w-full lg:w-1/2">
                            <WhyChooseUsImages />
                        </div>
                        <div className = "w-full lg:w-1/2">
                            <div className = "content">
                                <SectionTitle badge = "Por qué elegirnos" title = "Historias que merecen ser escuchadas" />
                                <p className = "my-4 text-lg tracking-wider">
                                    Voces auténticas dan vida a cada experiencia, guiándote en un viaje inmersivo de narrativas que inspiran y conectan.
                                </p>
                                <div className = "grid grid-cols-1 md:grid-cols-2 gap-4 my-4 border-b border-dashed border-(--primary-light) pt-4 pb-6">
                                    {
                                        whyChooseUsData.map((item) => (
                                            <h4 key = {item.id} className = "flex items-center gap-2 text-base">
                                                <i className = "bi bi-check2 flex items-center justify-center w-8 h-8 bg-(--primary) rounded-full"></i>
                                                {item.text}
                                            </h4>
                                        ))
                                    }
                                </div>
                                <div className = "flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                    <Button text = "Comenzar" className = "mt-3" />
                                    <PlayLink text = "Conócenos" className = "mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "dark-section about-wave2">
                <div className = "px-[8%] py-16">
                    <SectionHeader badge = "Nuestra comunidad" title = "Creciendo contigo cada día" description = "Encuentra respuestas rápidas sobre nuestros planes, pagos y funcionamiento del servicio." className = "mb-10" />
                    <div className = "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {
                            statsData.map((stat, i) => (
                                <StatCard key = {i} value = {stat.value} suffix = {stat.suffix} label = {stat.label} />
                            ))
                        }
                    </div>
                </div>
                <BannerEpisode />
            </div>
        </>
    )
}

export default About;