import type { Metadata } from "next";
import "./globals.css";
import { inter, sora, arabic } from "./fonts";

export const metadata: Metadata = {
  title: "Araby Home Clone",
  description: "Araby home clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} ${arabic.variable}`}>
        {children}
      </body>
    </html>
  );
}