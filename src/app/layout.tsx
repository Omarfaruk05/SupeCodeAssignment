"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import { useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <html lang="en">
      <body className={`${darkMode && "dark"} ${inter.className}`}>
        <div className={`relative dark:bg-black`}>
          <Nav />
          {children}
          <Footer />
          <div
            onClick={toggleDarkMode}
            className="fixed bottom-4 md:bottom-16 right-4 md:right-16 rounded-full  h-10 w-10 bg-black text-white dark:bg-white dark:text-black flex justify-center items-center cursor-pointer"
          >
            {darkMode ? <IoIosSunny /> : <IoMoonSharp />}
          </div>
        </div>
      </body>
    </html>
  );
}
