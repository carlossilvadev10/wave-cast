"use client";

import React, { useEffect, useState } from "react";
import AuthModal from "../AuthModal/AuthModal";
import Button from "../Button/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-icon.png";
import menuDot from "@/public/menu-dot.svg";
import { navLinks } from "@/constants/constant";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const toggleDropdown = (label: string) => {
        setOpenDropdown((prev) => (prev === label ? null : label));
    }

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header className = {`px-[8%] fixed w-full top-0 left-0 z-50 transition-all duration-300 navbar ${scrolled ? "bg-black/95 shadow-lg" : "bg-transparent"}`}>
            <div className = "flex items-center justify-between gap-5 py-3">
                <div className = "flex items-center gap-8">
                    <Link href = "/">
                        <div className = "flex items-center gap-2 overflow-hidden">
                            <Image src = {logo} alt = "logo" className = "w-8 h-8 object-cover" />
                            <p className = "metal-mania text-4xl tracking-wider ml-0.5">
                                <span className = "lg:hidden">
                                    W<span className = "text-(--primary)">C</span>
                                </span>
                                <span className = "hidden lg:inline">
                                    Wave<span className = "text-(--primary)">Cast</span>
                                </span>
                            </p>
                        </div>
                    </Link>
                </div>
                <div className = "hidden xl:flex items-center gap-3">
                    <nav className = "hidden xl:flex space-x-6 menu-link relative z-40">
                        {
                            navLinks.map((link, i) => (
                                link.dropdown ? (
                                    <div key = {i} className = "relative group">
                                        <Link href = {link.href} className = "flex items-center gap-1 text-lg font-medium text-white hover:text-(--primary) transition-all duration-300">
                                            {link.label} <Image src = {menuDot} alt = "menu-dot" className = "invert brightness-100 grayscale" />
                                        </Link>
                                        <div className = "hidden group-hover:block absolute left-0 top-full bg-(--gray-color) shadow-xl p-2 rounded-lg min-w-57.5">
                                            {
                                                link.dropdown.map((item, i) => (
                                                    <Link key = {i} href = {item.href} className = {`flex items-center gap-2 px-4 py-1 rounded-md font-medium text-lg text-white hover:text-(--primary) hover:translate-x-1 transition-all duration-300 ${pathname === item.href && "underline font-semibold"}`}>
                                                        <Image src = {menuDot} alt = "menu-dot" className = "invert brightness-100" /> {item.label}
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : (
                                    <Link key = {i} href = {link.href} className = {`flex gap-2 text-lg font-medium text-white hover:text-(--primary) transition-all duration-300 ${pathname === link.href && "font-semibold"}`}>
                                        {link.label}
                                    </Link>
                                )
                            ))
                        }
                    </nav>
                </div>
                <div className = "flex items-center gap-4 nav-right">
                    <div className = "hidden sm:flex items-center gap-4">
                        <Button text = "Iniciar sesión" onClick = {() => {setIsLogin(true); setShowModal(!showModal);}} />
                        <Button text = "Registrarse" variant = "primary" onClick = {() => {setIsLogin(false); setShowModal(!showModal);}} />
                    </div>
                    <button className = "xl:hidden flex flex-col gap-1.25" onClick = {() => setOpen(!open)}>
                        <span className = {`block w-6 h-0.75 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className = {`block w-6 h-0.75 bg-white transition-all ${open ? "opacity-0" : ""}`}></span>
                        <span className = {`block w-6 h-0.75 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>
                </div>
                <div className = {`xl:hidden fixed top-18 left-0 w-full z-50 transition-all duration-300 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-6"}`}>
                    <div className = "mx-[5%] rounded-2xl bg-(--body) shadow-2xl border border-white/10">
                        <nav className = "flex flex-col p-6 gap-5">
                            {
                                navLinks.map((link) => link.dropdown ? (
                                    <div key = {link.label} className = "border-b border-white/10 pb-3">
                                        {/* Parent  */}
                                        <button className = "flex justify-between items-center w-full text-white text-lg tracking-wide" onClick = {() => toggleDropdown(link.label)}>
                                            <span>{link.label}</span>
                                            <span className = {`transition-all duration-300 ${openDropdown === link.label ? "rotate-90 text-(--primary)" : "opacity-100"}`}>
                                                <Image src = {menuDot} alt = "menuDot" className = "invert brightness-100" />
                                            </span>
                                        </button>
                                        {/* Dropdown  */}
                                        <div className = {`overflow-hidden transition-all duration-300 ${openDropdown === link.label ? "max-h-96 mt-3" : "max-h-0"}`}>
                                            <div className = "flex flex-col gap-3">
                                                {
                                                    link.dropdown.map((item) => (
                                                        <Link key = {item.label} href = {item.href} className = "text-white/80 text-base hover:text-(--primary) ps-3 pb-2 border-s border-e border-white/50 rounded-sm hover:translate-x-1 transition-all" onClick = {() => setOpen(false)}>
                                                            {item.label}
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link key = {link.href} href = {link.href} className = "flex items-center justify-between text-white pb-3 border-b border-white/10 text-lg tracking-wide hover:text-(--primary) transition-all" onClick = {() => setOpen(false)}>
                                        {link.label}
                                    </Link>
                                ))
                            }
                            <div className = "flex sm:hidden flex-col sm:flex-row items-center justify-center gap-4">
                                <Button text = "Iniciar sesión" onClick = {() => {setIsLogin(true); setShowModal(!showModal); setOpen(false);}} />
                                <Button text = "Registrarse" variant = "primary" onClick = {() => {setIsLogin(false); setShowModal(!showModal); setOpen(false);}} />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <AuthModal showModal = {showModal} setShowModal = {setShowModal} isLogin = {isLogin} setIsLogin = {setIsLogin} />
        </header>
    )
}

export default Navbar;