import type { Metadata } from "next";
import "@/app/globals.css";
import { cakra, turretRoad } from "@/ui/fonts";
import { Navbar } from "@/app/home";
import Section from "@/ui/components/layouts/section";

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
      <body
        className={`${turretRoad.variable} ${cakra.variable} antialiased bg-tertiary`}
      >
        <Section>
          <Navbar />
        </Section>

        {children}
      </body>
    </html>
  );
}
