import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import PlayLink from "../PlayLink/PlayLink";
import { whyChooseUsData } from "@/constants/constant";
import WhyChooseUsImages from "../WhyChooseUsImages/WhyChooseUsImages";

const WhyChooseUs = () => {
    return (
        <section className = "light-section">
            <div className = "px-[8%] py-30">
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
        </section>
    )
}

export default WhyChooseUs;