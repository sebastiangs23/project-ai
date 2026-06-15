import type { Metadata } from "next";
import "./globals.css";
import { inter, sora, arabic } from "./fonts";
import { LanguageProvider } from "@/modules/home/presentation/context/LanguageContext";

export const metadata: Metadata = {
  title: "Araby Home Clone",
  description: "Arabic learning landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} ${arabic.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}