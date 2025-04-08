import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
const interTight = Inter_Tight({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Manjunath Kottaraki | Frontend Developer | Next.js, Tailwind CSS, UI/UX",
  description: "Frontend developer specializing in Next.js, Tailwind CSS, and Framer Motion. I craft responsive, interactive, and high-performance web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.className} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
