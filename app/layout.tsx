import type { Metadata } from "next";
import "@/app/globals.css";
import { cakra, turretRoad } from "@/public/fonts";
import Copyright from "@/components/copyright";
import { Connect, SocialConnect } from "@/components/connect";
import { CustomCursorProvider } from "@/context/custom-cursor-context";
import CustomCursor from "@/components/custom/cursor";

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
      <head>
        <link rel="icon" href="/logos/techletics-metal.svg" />
      </head>

      <body
        className={`${turretRoad.variable} ${cakra.variable} min-w-80 cursor-none bg-tertiary antialiased`}
      >
        <CustomCursorProvider>
          <CustomCursor />

          {children}

          <footer>
            <Connect />
            <SocialConnect />
            <Copyright />
          </footer>
        </CustomCursorProvider>
      </body>
    </html>
  );
}
