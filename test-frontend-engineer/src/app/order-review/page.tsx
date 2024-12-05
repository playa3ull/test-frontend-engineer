"use client";
import { CartSummary } from "@/components/CartSummary";
import Rating from "@/components/Rating";
import { useCart } from "@/context/CartProvider";
import React from "react";

const OrderReview: React.FC = () => {
  const { cartItems, removeItem } = useCart();
  console.log(cartItems);
  return (
    <section className="container mx-auto mt-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 ">
          {cartItems.map((item, index) => (
            <div key={index} className="m-5">
              <div className="group relative mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
                <div className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                  <div className="group relative h-20 w-20 overflow-hidden rounded-lg">
                    <img
                      src={item?.img}
                      alt=""
                      className="h-full w-full object-cover text-gray-700"
                    />
                  </div>
                </div>
                <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="right-5 top-3 absolute"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>

                  <p className="mb-3 text-gray-900 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
                    {item?.name}
                  </p>

                  <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                    <div className="">
                      <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                        Quantiy: {item?.quantity}
                      </span>
                    </div>
                    <div className="">
                      <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                        Price: {item?.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-12 md:col-span-4 border-l-[1.5px] h-96 fixed right-80 hidden lg:block">
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default OrderReview;
