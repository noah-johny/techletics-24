import "@/app/globals.css";
import type { Metadata } from "next";
import { cakra, turretRoad } from "@/public/fonts";
import Copyright from "@/components/copyright";
import { Connect, SocialConnect } from "@/components/connect";
import { CustomCursorProvider } from "@/context/custom-cursor-context";
import CustomCursor from "@/components/custom/cursor";

export const metadata: Metadata = {
  title: {
    template: "%s | Techletics '24",
    default: "Techletics '24",
  },
  keywords:
    "Techletics, Tech Fest, Christ College of Engineering, Irinjalakuda",
  description:
    "Tech Fest organized by Christ College of Engineering, Irinjalakuda",
  creator: "Website Team CCE",
  openGraph: {
    title: "Techletics '24",
    description:
      "Tech Fest organized by Christ College of Engineering, Irinjalakuda",
    type: "website",
    url: "https://techletics.cce.edu.in/",
    locale: "en_US",
  },
  metadataBase: new URL("https://techletics.cce.edu.in/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logos/techletics-dark-logo.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/logos/techletics-light-logo.svg"
          media="(prefers-color-scheme: dark)"
        />

        <meta
          property="og:image"
          content={
            "https://dnbca6q7do6n.cloudfront.net/media/techletics24/opengraph-image.png"
          }
        />
        <meta
          property="twitter:image"
          content={
            "https://dnbca6q7do6n.cloudfront.net/media/techletics24/twitter-image.png"
          }
        />
        <meta property="og:instagram:app_id" content="techleticscce" />
      </head>

      <body
        className={`${turretRoad.variable} ${cakra.variable} min-w-80 cursor-none bg-tertiary antialiased`}
      >
        <CustomCursorProvider>
          <CustomCursor />
          {children}
        </CustomCursorProvider>
      </body>
    </html>
  );
}
