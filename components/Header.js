"use client";
import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { GiCroissant } from "react-icons/gi";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpenMenu] = useState(false);

  function toggleSidebar() {
    setOpenMenu(!isOpen);
  }

  return (
    <div className="sticky top-0 flex item-center justify-between bg-white border-b border-solid shadow-sm z-50 p-8">
      {/* Sidebar on smaller screens */}
      <div
        className={`fixed top-0 left-0 w-64 bg-white h-full shadow-md transition-transform transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: isOpen ? 100 : 0 }} // Increase z-index when sidebar is open
      >
        <button
          className="px-6 my-6 transform transition-transform duration-200 hover:rotate-90"
          onClick={toggleSidebar}
        >
          <LiaTimesSolid />
        </button>
        <ul className="">
          <li className="px-6 py-2 hover:bg-gray-200 cursor-pointer">home</li>
          <li className="px-6 py-2 hover:bg-gray-200 cursor-pointer">
            collections
          </li>
          <li className="px-6 py-2 hover:bg-gray-200 cursor-pointer">about</li>
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex gap-4 text-sm items-center">
        <button onClick={toggleSidebar} className="md:hidden">
          <RxHamburgerMenu className="text-x " />
        </button>
        <div className="hidden md:block">
          <Link href={"/"}>
            <h1 className="cursor-pointer hover:scale-105">home</h1>
          </Link>
          <Link href={"/"}>
            <h1 className="cursor-pointer hover:scale-105">collections</h1>
          </Link>
          <Link href={"/"}>
            <h1 className="cursor-pointer hover:scale-105">about</h1>
          </Link>
          {/* <Link href={"/"}>
          <h1 className="cursor-pointer hover:scale-105">info</h1>
        </Link> */}
        </div>
      </div>

      <div className="flex flex-grow-1">
        <Link href={"/"}>
          <GiCroissant className="text-5xl hover:scale-105" />
        </Link>
      </div>

      <div className="flex items-center">
        <div className="md:w-20"></div>
        <Link href={"/"}>
          <h1 className="cursor-pointer hover:text-slate-600 text-sm">cart</h1>
        </Link>
      </div>
    </div>
  );
}
