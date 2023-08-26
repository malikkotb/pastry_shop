import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex items-center flex-wrap justify-center p-8 border-t gap-4">
      <Link href="https://www.tiktok.com" target="_blank">
        <FaTiktok className="cursor-pointer text-2xl text-slate-700 hover:text-slate-500" />
      </Link>
      <Link href="https://www.instagram.com" target="_blank">
        <FaInstagram className="cursor-pointer text-2xl text-slate-700 hover:text-slate-500" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank">
        <FaTwitter className="cursor-pointer text-2xl text-slate-700 hover:text-slate-500" />
      </Link>
    </div>
  );
}
