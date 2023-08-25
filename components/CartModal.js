import useCart from "@/app/(store)/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

export default function CartModal({ openModal, closeModal }) {
  const cartItems = useCart((state) => state.cart);
  const router = useRouter()
  
  async function checkout() {
    const lineItems = cartItems.map(cartItem => {
        return {
            price: cartItem.price_id,
            quantity: 1
        }
    })

    const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ lineItems })
    })
    const data = await res.json()
    router.push(data.session.url)
  }

  return (
    <div
      className={`fixed top-0 flex flex-col right-0 w-screen sm:w-80 bg-white h-full shadow-md transition-transform transform duration-500 ${
        openModal ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: openModal ? 100 : 0 }} // Increase z-index when sidebar is open
    >
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <h1>Cart</h1>
        <button
          className="transform transition-transform duration-200 hover:rotate-90 cursor-pointer"
          onClick={closeModal}
        >
          <LiaTimesSolid />
        </button>
      </div>
      <div className="flex flex-col p-4 gap-4 overflow-scroll flex-1">
        {cartItems.length === 0 ? (
          <div className="text-center h-screen translate-y-1/3">
            Your Cart is Empty
          </div>
        ) : (
          <>
            {cartItems.map((cartItem, itemIndex) => {
              return (
                <div key={itemIndex} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h2>{cartItem.name}</h2>
                    <h2>{cartItem.cost / 100}€</h2>
                  </div>
                  <p className="text-sm text-gray-700">Quantity: 1</p>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="">
        <div className="flex justify-between p-4 pb-0">
          <p className="uppercase">Subtotal</p>
          <p className="">{cartItems.reduce((total, item) => total + (item.quantity * item.cost), 0) / 100}€</p>
        </div>
        <div className="text-center p-4">
          <button onClick={checkout} disabled={cartItems.length === 0} className={`bg-black text-white hover:bg-opacity-90 w-full p-2 border cursor-pointer ${cartItems.length === 0 ? 'disabled:cursor-not-allowed' : ''}`}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
