"use client";

import React, { ReactNode } from "react";
import Navbar from "../Nav/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const ClientWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <Toaster position = "top-right" reverseOrder = {false} />
            <ScrollToTop />
        </>
    )
}

export default ClientWrapper;