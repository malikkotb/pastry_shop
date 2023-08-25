"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useCart from "../app/(store)/store";

export default function ProductCard({ product }) {
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;

  // gives us access to the setProduct method from the global Zustand store
  const setProduct = useCart((state) => state.setProduct);

  const router = useRouter();

  function onProductClick() {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo,
    };
    setProduct({ newProduct });
    router.push("/product?price_id=" + price_id);
  }


  return (
    <div
      className="flex flex-col border-none hover:shadow-lg cursor-pointer"
      onClick={onProductClick}
    >
      <img
        src={productInfo.images[0]}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm">{name}</p>
          <p className="text-xs text-slate-700">€{cost / 100}.00</p>
        </div>
        {/* <p className=" text-xs">{description}</p> */}
      </div>
    </div>
  );
}
