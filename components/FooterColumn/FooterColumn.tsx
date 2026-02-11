import React from "react";
import Link from "next/link";
import { FooterLink } from "@/constants/constant";

type FooterColumnProps = {
    title: string;
    links: FooterLink[];
    isContact?: boolean;
}

const FooterColumn = ({ title, links, isContact = false }: FooterColumnProps) => {
    return (
        <div className = "footer-col">
            <h3 className = "text-4xl mb-5">
                {title}
            </h3>
            <div className = "flex flex-col gap-3">
                {
                    isContact ? (
                        links.map((link, index) => (
                            <p key = {index} className = "text-xl text-gray-300">
                                {link.icon && <i className = {`${link.icon} pe-2`}></i>}
                                {link.label}
                            </p>
                        ))
                    ) : (
                        links.map((link, index) => (
                            <Link key = {index} href = {link.href} className = "text-xl cursor-pointer text-gray-300 hover:text-(--primary) hover:translate-x-1 transition-all duration-300">
                                {link.label}
                            </Link>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default FooterColumn;