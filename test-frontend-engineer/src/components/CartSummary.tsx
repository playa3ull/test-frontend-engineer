"use client";

import { useCart } from "@/context/CartProvider";
import Link from "next/link";

export const CartSummary = () => {
  const { calculateTotals, clearCart } = useCart();
  const { subtotal, shipping, tax, total, totalQuantity } = calculateTotals();

  return (
    <div className=" mt-16 ml-8 ">
      <h3 className="font-serif font-semibold text-xl mb-9">
        Summary <sup className="text-lg text-red-600 ">{totalQuantity}</sup>
      </h3>
      <div className="flex justify-between gap-4">
        <p>Subtotal</p>
        <p className="font-semibold">${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between gap-4">
        <p>Estimated Shipping </p>
        <p className="font-semibold">${shipping.toFixed(2)}</p>
      </div>
      <div className="flex justify-between gap-4">
        <p>Estimated Tax </p>
        <p className="font-semibold">${tax.toFixed(2)}</p>
      </div>
      <div className="flex justify-between gap-4 mt-2">
        <p>Grand Total:</p>
        <p className="font-semibold">${total.toFixed(2)}</p>
      </div>
      <div className="mt-7">
        <Link href={`/order-review`}>
          <button className="group mt-auto flex w-full cursor-pointer select-none items-center justify-center rounded-full bg-[#EAC004] px-6 py-1 text-white transition hover:bg-gray-700">
            <span className="group flex w-full items-center justify-center rounded py-1 text-center font-sans">
              Order Review
            </span>
            <svg
              className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </Link>

        <button
          onClick={() => clearCart()}
          className="group mt-4 flex w-full cursor-pointer select-none items-center justify-center rounded-full bg-black px-6 py-1 text-white transition hover:bg-gray-700"
        >
          <span className="group flex w-full items-center justify-center rounded py-1 text-center font-sans">
            Clear Cart
          </span>
        </button>
      </div>
    </div>
  );
};
