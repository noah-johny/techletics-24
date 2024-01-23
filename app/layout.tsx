import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { cakra, turretRoad } from "./ui/fonts/fonts";

export const metadata: Metadata = {
  title: "Techletics '24",
  description:
    "Tech Fest organized by Christ College of Engineering, Irinjalakuda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${turretRoad.variable} ${cakra.variable} antialiased`}>{children}</body>
    </html>
  );
}
