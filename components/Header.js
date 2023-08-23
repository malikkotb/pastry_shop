"use client";
import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import { GiCroissant } from "react-icons/gi";
import { useState } from "react";
import useCart from "@/app/(store)/store";
import Modal from "./Modal";

export default function Header() {
  const [leftMenuOpen, setOpenLeftMenu] = useState(false);

  function toggleSidebar() {
    // left sidebar menu
    setOpenLeftMenu(!leftMenuOpen);
  }

  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);

  return (
    <div className="sticky top-0 flex item-center justify-around bg-white border-b border-solid shadow-sm z-50 p-8">
      
      {openModal && <Modal />}

      {/* Sidebar Modal on the left for smaller screens */}
      <div
        className={`fixed top-0 left-0 w-80 bg-white h-full shadow-md transition-transform transform duration-500 ${
          leftMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: leftMenuOpen ? 100 : 0 }} // Increase z-index when sidebar is open
      >
        <button
          className="my-6 transform transition-transform duration-200 px-6 hover:rotate-90"
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
      {leftMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex gap-4 text-sm items-center">
        <button onClick={toggleSidebar} className="md:hidden">
          <RxHamburgerMenu className="text-x" />
        </button>
        <div className="hidden md:inline-flex md:gap-4">
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
        <div className=" md:w-36"></div>
        <div className="relative grid place-items-center cursor-pointer">
          {cartItems.length > 0 && (
            <div
              className="absolute aspect-square h-4 grid place-items-center pointer-events-none top-0 right-0 bg-black rounded-full text-white
          -translate-y-1/2 translate-x-1/2"
            >
              <p className="text-xs">{cartItems.length}</p>
              <p>0</p>
            </div>
          )}
          <h1 className="hover:scale-105 text-2xl">
            <PiShoppingCartSimpleThin />
          </h1>
        </div>
      </div>
    </div>
  );
}
