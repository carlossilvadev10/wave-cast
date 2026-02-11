import React from "react";
import Hero from "@/components/Hero/Hero";
import FeaturedShow from "@/components/FeaturedShow/FeaturedShow";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import RecentEpisode from "@/components/RecentEpisode/RecentEpisode";
import HostProfile from "@/components/HostProfile/HostProfile";
import Testimonial from "@/components/Testimonial/Testimonial";
import Banner from "@/components/Banner/Banner";

const Index = () => {
    return (
        <>
            <Hero />
            <FeaturedShow />
            <WhyChooseUs />
            <RecentEpisode />
            <HostProfile />
            <Testimonial />
            <Banner />
        </>
    )
}

export default Index;