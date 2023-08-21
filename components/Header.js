import React from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="sticky top-0 p-6 flex item-center justify-between bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8">
      <Link href={"/"}>
        <h1 className="uppercase cursor-pointer hover:scale-105">Pastry Shop</h1>
      </Link>
      <FaCartShopping className="cursor-pointer hover:text-slate-600" />
    </header>
  );
}
