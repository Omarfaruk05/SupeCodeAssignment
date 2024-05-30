"use client";

import React, { useState } from "react";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";
import { IoMoonSharp } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";

const Main = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <main className={`${darkMode && "dark"} `}>
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
    </main>
  );
};

export default Main;
