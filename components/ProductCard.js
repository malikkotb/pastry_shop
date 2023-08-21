"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useCart from "@/app/(store)/store";

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
      className="flex flex-col shadow hover:shadow-xl cursor-pointer rounded-lg"
      onClick={onProductClick}
    >
      <img
        src={productInfo.images[0]}
        alt={name}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3>{name}</h3>
          <p>€{cost / 100}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
