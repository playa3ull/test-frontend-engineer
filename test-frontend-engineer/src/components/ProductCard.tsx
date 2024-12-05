import { Product } from "@/types/Product";
import React from "react";
import Rating from "./Rating";
import { useCart } from "@/context/CartProvider";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, seller, stock, price, star, img, shipping } = product || {};
  const { addItem } = useCart();
  return (
    <div className="m-10 mx-4 max-w-screen-lg overflow-hidden  border-b-[1.5px] pb-4  ">
      <div className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
        <div className="order-first   w-80 bg-white sm:order-none sm:h-auto sm:w-1/2 lg:w-80">
          <img className="w-80 object-cover" src={img} loading="lazy" />
        </div>

        <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
          <h2 className="text-xl font-sans text-blue-700 md:text-lg lg:text-lg">
            {name.slice(0, 100)}
          </h2>
          <p className="mt-2 text-lg font-sans">Seller: {seller}</p>
          <p className=" max-w-md text-xl text-white bg-black pl-3 py-1 mt-3 w-24">
            ${price}
          </p>
          <Rating star={star} />
          <p className="my-3 text-gray-700 ">
            only {stock} left in stock - order soon
          </p>
          <div className="flex lg:flex-row flex-col   gap-2">
            <Link href={`/shop/${product._id}`}>
              <button className="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-full bg-black px-6 py-1 text-white transition hover:bg-gray-700">
                <span className="group flex w-full items-center justify-center rounded py-1 text-center font-sans">
                  See Details
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
              onClick={() =>
                addItem({
                  img: product.img,
                  id: product._id,
                  name: product.name,
                  price: product.price,
                  quantity: 0,
                  shipping: product.shipping,
                })
              }
              className="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-full bg-[#EAC004] px-6 py-1 text-black transition"
            >
              <span className="group flex w-full items-center justify-center rounded py-1 text-center font-sans">
                Add to Cart
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
