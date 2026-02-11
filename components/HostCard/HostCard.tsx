import React from "react";
import Image from "next/image";
import { Host } from "@/constants/constant";
import HostSocialIcons from "../HostSocialIcons/HostSocialIcons";

type HostCardProps = {
    host: Host;
};

const HostCard = ({ host }: HostCardProps) => {
    return (
        <div className = "relative">
            {/* Imagen */}
            <div className = "host-img-wrap">
                <div className = "host-img overflow-hidden rounded-2xl">
                    <Image src = {host.img} alt = {host.name} width = {1000} height = {1000} className = "w-full h-full object-cover" />
                </div>
            </div>
            {/* Info */}
            <div className = "host-info px-3 py-4">
                <h3 className = "text-2xl text-gray-300">
                    {host.name}
                </h3>
                <p className = "text-lg text-gray-300">
                    {host.role}
                </p>
            </div>
            {/* Icons */}
            <HostSocialIcons />
        </div>
    )
}

export default HostCard;