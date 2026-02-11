import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-icon.png";
import SocialIcons from "../SocialIcons/SocialIcons";
import FooterColumn from "../FooterColumn/FooterColumn";
import { footerContact, footerPages, footerResources } from "@/constants/constant";

const Footer = () => {
    return (
        <footer className = "dark-section">
            <div className = "px-[8%] py-20">
                <div className = "flex flex-wrap items-center justify-between gap-4 border-b border-(--primary) pb-8">
                    <Link href = "/">
                        <div className = "flex items-center gap-2 overflow-hidden">
                            <Image src = {logo} alt = "logo" className = "w-8 h-8 object-cover" />
                            <p className = "metal-mania text-4xl tracking-wider ml-0.5">
                                Wave<span className = "text-(--primary)">Cast</span>
                            </p>
                        </div>
                    </Link>
                    <div className = "footer-waves relative">
                        <div className = "music-waves2" />
                        <div className = "music-waves2 absolute top-0 left-0" />
                        <div className = "music-waves2 absolute top-0 left-0" />
                    </div>
                    <div className = "flex items-center gap-3">
                        <p className = "flex items-center gap-3 text-xl">
                            Escúchanos en:
                        </p>
                        <SocialIcons className = "lg:justify-start" />
                    </div>
                </div>
                <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-4 py-14">
                    <FooterColumn title = "Navegación" links = {footerPages} />
                    <FooterColumn title = "Contacto" links = {footerContact} isContact />
                    <FooterColumn title = "Recursos" links = {footerResources} />
                </div>
                <div className = "footer-bottom border-t border-(--primary) pt-8">
                    <div className = "flex flex-wrap items-center justify-center lg:justify-between gap-4">
                        <p className = "text-gray-300">
                            © {new Date().getFullYear()} WaveCast. Todos los derechos reservados. Desarrollado por {" "}
                            <a href = "https://github.com/carlossilvadev10" target = "_blank" rel = "noopener noreferrer" className = "font-semibold text-(--primary) hover:underline">
                                carlossilvadev10
                            </a>
                        </p>
                        <div className = "flex items-center gap-3">
                            <Link href = "/" className = "cursor-pointer hover:text-(--primary) hover:-translate-y-1 transition-all">
                                Términos y condiciones
                            </Link><Link href = "/" className = "cursor-pointer hover:text-(--primary) hover:-translate-y-1 transition-all">
                                Política de privacidad
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;