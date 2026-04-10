import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vladizzii Tattoo",
  description: "Created by human, made for human",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-thin max-w-[100vw] overflow-x-hidden">
      <body className={`${outfit.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
