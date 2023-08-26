import Link from "next/link";
import React from "react";

export default function SuccessPage() {
  return (
    <div className="flex items-center pt-8 justify-center text-center">
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

        <Link href={"/"}>
          <button className="mt-6 p-4 px-6 bg-yellow-500 bg-opacity-80 hover:bg-opacity-100 rounded-full">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
