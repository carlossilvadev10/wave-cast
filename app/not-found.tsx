import React from "react";
import Image from "next/image";
import error404Img from "@/public/error404.png";
import Link from "next/link";

const Page404 = () => {
    return (
        <>
            <div className = "dark-section">
                <div className = "flex flex-col items-center justify-center h-screen xl:mt-6">
                    <Image src = {error404Img} alt = "error-404" className = "w-full h-fulla sm:w-[70%] sm:h-[70%] object-contain" />
                    <Link href = "/" className = "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm tracking-wide md:mt-6 hover:border-white hover:bg-white hover:text-black transition-all duration-300">
                        <i className = "bi bi-arrow-left-short text-xl"></i> Volver a inicio
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Page404;