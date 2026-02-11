import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Metal_Mania } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  subsets: ["latin"],
});

const metalMania = Metal_Mania({
  weight: "400",
  variable: "--font-metal-mania",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wavecast - Historias que resuenan",
  description: "Más fluida y enfocada en el valor que ofrece: conversaciones auténticas, transformación de ideas complejas, y una invitación a conectar e inspirarse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang = "en">
      <body className = {`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${metalMania.variable} antialiased`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
