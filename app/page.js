import Link from "next/link";

export default async function Home() {
  return (
    <div className="block sm:flex justify-center items-center sm:pt-20 sm:pb-14">
      {/* Left side */}
      <div className="max-w-md mx-auto mr-0 px-6 py-6 items-center">
        <span className="text-6xl md:text-7xl text-justify mb-4">
          Delight in <span className="text-yellow-500">Every</span> Bite at Your
          Bakery
        </span>
        <h1 className="text-lg items-center pt-4">
          Indulge in the sweet symphony of delightful creations: your one-stop
          pastry wonderland
        </h1>
        <div className="mt-4 flex">
          <Link href="/products">
            <button className="p-4 px-6 bg-yellow-500 hover:bg-opacity-80 rounded-full">
              Shop All
            </button>
          </Link>
          <Link href="/about">
            <button className="p-4 text-slate-500 duration-100 hover:text-black">
              About us
            </button>
          </Link>
        </div>
       
      </div>

      {/* Right side */}
      <div className="max-w-md md:ml-6 mx-auto flex justify-center px-2 sm:px-4">
        <img src="/heropic.jpg" alt="Hero Image" className="w-92 h-auto" />
      </div>
    </div>

  );
}
