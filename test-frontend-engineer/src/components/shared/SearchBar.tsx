"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { useCart } from "@/context/CartProvider";
import { useState } from "react";
import { CartSummary } from "../CartSummary";

const SearchBar: React.FC = () => {
  const { calculateTotals } = useCart();
  const { totalQuantity } = calculateTotals();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="">
      <div className="container mx-auto  grid grid-cols-12 gap-4">
        <div className="lg:col-span-2 col-span-3">
          <Link href="/">
            <h3 className="text-sm lg:text-2xl font-serif my-6 mx-2 lg:mx-0 lg:my-4">
              Sho<span className="text-[#e49d2a]">pp</span>ing Cart
            </h3>
          </Link>
        </div>

        <div className="lg:col-span-7 flex items-center col-span-7 ">
          <div className="mx-auto  w-screen max-w-screen-md">
            <form className="relative mx-auto flex w-full  items-center justify-between rounded-md border shadow-sm">
              <input
                type="name"
                name="search"
                className="h-3 w-full rounded-md py-1 pr-40 pl-12 outline-none "
                placeholder="Search Products..."
              />

              <button type="submit" className="inline-flex h-8 items-center">
                <svg
                  className="absolute left-2 block h-5 w-5  text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" className=""></circle>
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    className=""
                  ></line>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="lg:col-span-2 flex items-center col-span-2 ">
          <button
            onClick={toggleSidebar}
            className="col-span-3 flex items-center gap-2  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <div className="bg-red-600 h-6 w-5 -ml-3 -mt-6 pt-1 text-white font-semibold rounded-full">
              <sup>{totalQuantity}</sup>
            </div>
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className={`fixed inset-y-0 left-0 z-50 w-96 bg-gray-100 text-black transition-transform duration-300 ease-in-out transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <button
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-700 rounded-full p-2"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <CartSummary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
