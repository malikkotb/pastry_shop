import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";

export default function CancelPage() {
  return (
    <div className="flex items-center pt-8 justify-center text-center">
      <div className="bg-white p-4 mt-8 rounded text-center">
        <FaTimes className="w-16 h-16 mx-auto text-red-500" />
        <h1 className="text-2xl font-semibold mt-4">Payment Failed!</h1>
        <p className="text-gray-600 mt-2">Please try again.</p>

        <Link href={"/"}>
          <button className="mt-6 p-4 px-6 bg-yellow-500 bg-opacity-80 hover:bg-opacity-100 rounded-full">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
