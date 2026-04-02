import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600", "800"] });

export const metadata: Metadata = {
  title: "Creative Developer | Portfolio",
  description: "High-end Scrollytelling Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#121212] text-white`}>
        {children}
      </body>
    </html>
  );
}
