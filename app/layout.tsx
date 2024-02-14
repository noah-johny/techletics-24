import type { Metadata } from "next";
import "@/app/globals.css";
import { cakra, turretRoad } from "@/public/fonts";
import Copyright from "@/components/copyright";
import { Connect, SocialConnect } from "@/components/connect";
import { CustomCursorProvider } from "@/context/custom-cursor-context";
import CustomCursor from "@/components/custom/cursor";

export const metadata: Metadata = {
  title: {
    template: "%s | Techletics '24",
    default: "Techletics '24 | Ignite Inspire Illuminate",
  

  },
  keywords: "Techletics, Tech Fest, Christ College of Engineering, Irinjalakuda",
  description:
    "Tech Fest organized by Christ College of Engineering, Irinjalakuda",
  creator:"Website Team CCE",
  openGraph:{
    title :"Techletics '24 | Ignite Inspire Illuminate",
    description: "Tech Fest organized by Christ College of Engineering, Irinjalakuda",
    type : "website",
    url : "https://techletics.cce.edu.in/",
    locale :"en_US",
  }
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
        <meta property="og:image" content={"/images/techletics-metal.svg"} />
        <meta property="og:instagram:app_id" content="techleticscce" />

        
      </head>

      <body
        className={`${turretRoad.variable} ${cakra.variable} min-w-80 cursor-none bg-tertiary antialiased`}
      >
        <CustomCursorProvider>
          <CustomCursor />

          {children}

          <footer id="contact">
            <Connect />
            <SocialConnect />
            <Copyright />
          </footer>
        </CustomCursorProvider>
      </body>
    </html>
  );
}
