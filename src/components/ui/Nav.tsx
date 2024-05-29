"use client";
import { useState } from "react";
import Container from "../shared/Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

const Nav = () => {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <Container>
      <div className="relative">
        <ul className="hidden md:flex justify-end gap-4 py-4 dark:text-white">
          <Link
            href={"/blog"}
            className="font-semibold text-xl cursor-pointer hover:text-orange-500 hover:underline"
          >
            Blog
          </Link>
          <li className="font-semibold text-xl cursor-pointer hover:text-orange-500 hover:underline">
            Works
          </li>
          <li className="font-semibold text-xl cursor-pointer hover:text-orange-500 hover:underline">
            Content
          </li>
        </ul>
        {/* for mobole device  */}
        <ul
          className={`${
            hamburger ? "block" : "hidden"
          } dark:text-white text-center space-y-2 mt-3 absolute w-full`}
        >
          <Link
            href={"/blog"}
            className="font-semibold text-xl cursor-pointer hover:text-orange-500 hover:underline"
          >
            Blog
          </Link>
          <li className="font-semibold text-xl cursor-pointer hover:text-orange-500 hover:underline">
            Works
          </li>
          <li className="font-semibold text-xl cursor-pointer hover:text-orange-500 hover:underline">
            Content
          </li>
        </ul>
        <button
          onClick={toggleHamburger}
          className="block md:hidden absolute right-3 dark:text-white cursor-pointer"
        >
          {hamburger ? (
            <MdOutlineCancel className="w-8 h-8" />
          ) : (
            <GiHamburgerMenu className="w-8 h-8" />
          )}
        </button>
      </div>
    </Container>
  );
};

export default Nav;
