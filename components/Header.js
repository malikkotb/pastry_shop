"use client";
import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { GiCroissant } from "react-icons/gi";
import { useState } from "react";
import useCart from "@/app/(store)/store";
import LeftSidebar from "./LeftSidebar";
import CartModal from "./CartModal";

export default function Header() {
  const [leftMenuOpen, setOpenLeftMenu] = useState(false);

  function toggleSidebar() {
    // left sidebar menu
    setOpenLeftMenu(!leftMenuOpen);
  }
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);
  const closeModal = useCart((state) => state.setOpenModal);
  return (
    <div className="sticky top-0 flex item-center justify-around bg-white border-b border-solid shadow-sm z-50 p-8">
      <LeftSidebar leftMenuOpen={leftMenuOpen} toggleSidebar={toggleSidebar} />{" "}
      <CartModal openModal={openModal} closeModal={closeModal} />{" "}
      
      {/* Backdrop */}
      {(leftMenuOpen || openModal) && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-25 z-20"
          onClick={leftMenuOpen ? toggleSidebar : closeModal}
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
          <h1 onClick={setOpenModal} className="hover:scale-105 text-2xl">
            <PiShoppingCartSimpleThin />
          </h1>
        </div>
      </div>
    </div>
  );
}
