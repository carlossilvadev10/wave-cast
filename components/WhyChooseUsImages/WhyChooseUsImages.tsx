import React from "react";
import whyChooseUsImg1 from "@/public/why-choose-1.png";
import whyChooseUsImg2 from "@/public/why-choose-2.png";
import whyChooseUsImg3 from "@/public/why-choose-3.png";
import Image from "next/image";

const WhyChooseUsImages = () => {
    return (
        <div className = "flex items-end gap-4 whyChooseUs-img">
            <Image src = {whyChooseUsImg1} alt = "why-choose-us-img1" className = "w-full h-fit border-t-2 border-(--primary) pt-4" />
            <Image src = {whyChooseUsImg2} alt = "why-choose-us-img2" className = "w-full h-fit" />
            <Image src = {whyChooseUsImg3} alt = "why-choose-us-img3" className = "" />
        </div>
    )
}

export default WhyChooseUsImages;