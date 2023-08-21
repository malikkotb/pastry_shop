"use client"
import useCart from "../(store)/store"

export default function ProductPage({ searchParams }) {
    const {price_id} = searchParams

    // the current product: (from Zustand store)
    const product = useCart(state => state.product)
    console.log(product);

    if (!product?.name) {
        window.location.href = "/"
    }

  return (
    <div className="">
        

    </div>
  )
}
