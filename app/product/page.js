"use client";
import { useState } from "react";
import useCart from "../(store)/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PiPlusThin } from "react-icons/pi";
import { PiMinusThin } from "react-icons/pi";

export default function ProductPage({ searchParams }) {
  const { price_id } = searchParams;

  const product = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);

  const { cost, productInfo, name, description } = product;

  // the current product: (from Zustand store)
  // console.log(product);
  
  if (!product?.name) {
    window.location.href = "/";
  }

  // const router = useRouter();

  // useEffect(() => {
  //   if (!product?.name) {
  //     router.push("/");
  //   }
  // }, [product]);

  function handleAddItemToCart() {
    const newItem = {
        quantity: 1,
        price_id: price_id,
        name: name,
        cost: cost
    }
    addItemToCart({ newItem })
  }

  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto md:pt-16">
        <div className="md:p-2">
          {/* md:shadow */}
          <img
            src={productInfo.images[0]}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-4 md:ml-4">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-xl text-slate-700">€{cost / 100}.00</p>
          <button onClick={handleAddItemToCart} className="bg-black text-white hover:bg-opacity-80 text-sm px-3 py-2">
            Add to cart
          </button>
          <br />
          <div
            onClick={() => setShowDescription(!showDescription)}
            className="cursor-pointer  transition-all duration-300 border-t border-b py-3"
          >
            <div className="flex justify-between items-center">
              <p className="text-xl text-slate-700">Description</p>
              {showDescription ? <PiMinusThin /> : <PiPlusThin />}
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                showDescription
                  ? "max-h-40 opacity-100 py-4"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              <p className="text-base text-slate-700">{description}</p>
            </div>
          </div>
          <hr className="mt-2" />
        </div>
      </div>
    </div>
  );
}
