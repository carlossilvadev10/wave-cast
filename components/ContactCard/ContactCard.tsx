import React from "react";
import Link from "next/link";
import { ContactCardData } from "@/constants/constant";

type ContactCardProps = {
    contactCard: ContactCardData;
}

const ContactCard = ({ contactCard }: ContactCardProps) => {
    return (
        <div className = "flex items-center gap-4 bg-(--gray-color) backdrop-blur-2xl p-5 rounded-2xl group hover:bg-(--primary) hover:text-(--text) transition-all duration-300">
            {/* Icon */}
            <div className = "flex items-center justify-center mt-3 w-14 h-14 rounded-full bg-(--primary) group-hover:bg-(--text) transition-all duration-300">
                <i className = {`bi ${contactCard.icon} text-(--text) group-hover:text-(--primary) text-3xl transition-all duration-300`} />
            </div>
            {/* Content */}
            <div>
                <h2 className = "text-3xl font-semibold group-hover:text-(--text) transition-all duration-300">
                    {contactCard.title}
                </h2>
                {
                    contactCard.lines.map((line, i) => (
                        <p key = {i} className = "text-gray-300 my-2 group-hover:text-(--text) transition-all duration-300">
                            {line}
                        </p>
                    ))
                }
                <Link href = "/" className = "text-(--primary) border-b border-(--primary) group-hover:border-(--text) font-semibold group-hover:text-(--text) transition-all duration-300">
                    {contactCard.linkText}
                </Link>
            </div>
        </div>
    )
}

export default ContactCard;