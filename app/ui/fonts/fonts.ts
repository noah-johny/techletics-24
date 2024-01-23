import localFont from "next/font/local";
import { Turret_Road } from "next/font/google";

export const turretRoad = Turret_Road({
  weight: ["200", "300", "400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica, sans-serif", "Arial, sans-serif"],
  variable: "--font-turret-road",
});

export const cakra = localFont({
  src: "./cakra.woff2",
  display: "swap",
  fallback: ["Garamond, serif", "Times New Roman, serif"],
  variable: "--font-cakra",
});
