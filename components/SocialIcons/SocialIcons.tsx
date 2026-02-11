import React from "react";
import Image from "next/image";
import Link from "next/link";
import { brandIcons } from "@/constants/constant";

type SocialIconsProps = {
    className?: string;
}

const SocialIcons = ({ className = "" }: SocialIconsProps) => {
    return (
        <div className = {`flex items-center justify-center gap-3 ${className}`}>
            {
                brandIcons.map((brand) => (
                    <Link key = {brand.id} href = "/" target = "_blank" rel = "noopener noreferrer" className = "cursor-pointer hover:scale-110 transition-all duration-300">
                        <Image src = {brand.src} alt = {brand.alt} className = "w-12 h-12 object-contain" />
                    </Link>
                ))
            }
        </div>
    )
}

export default SocialIcons;