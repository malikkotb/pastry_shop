import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";

export default function LeftSidebar({ leftMenuOpen, toggleSidebar }) {
  return (
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
      <ul className="" onClick={toggleSidebar}>
        <Link href={"/"}>
          <li className="px-6 py-2 hover:bg-gray-200 cursor-pointer">home</li>
        </Link>
        <Link href={"/products"}>
          <li className="px-6 py-2 hover:bg-gray-200 cursor-pointer">products</li>
        </Link>
        <Link href={"/about"}>
          <li className="px-6 py-2 hover:bg-gray-200 cursor-pointer">about</li>
        </Link>
      </ul>
    </div>
  );
}
