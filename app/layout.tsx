import type { Metadata } from "next";
import "./globals.css";
import { cakra, turretRoad } from "@/ui/fonts";
import Navbar from "@/ui/components/sections/navbar";

export const metadata: Metadata = {
  title: "Techletics '24",
  description:
    "Tech Fest organized by Christ College of Engineering, Irinjalakuda",
  icons: "/techletics-metal.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/techletics-metal.svg" />
      </head>
      <body className={`${turretRoad.variable} ${cakra.variable} antialiased bg-tertiary`}>
        <header className="px-6 sm:px-12 border-quarternary bg-tertiary border-b-2">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
