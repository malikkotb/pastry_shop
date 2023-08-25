import Link from "next/link";
import React from "react";
import { BiCheck } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"


export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="bg-white p-4 mt-8 rounded text-center">
        <svg
          className="w-16 h-16 mx-auto text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <h1 className="text-2xl font-semibold mt-4">Payment Successful!</h1>
        <p className="text-gray-600 mt-2">Thank you for your payment.</p>

        <Link
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          href={"/"}
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
