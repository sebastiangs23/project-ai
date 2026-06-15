import { Inter, Sora, IBM_Plex_Sans_Arabic } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
});