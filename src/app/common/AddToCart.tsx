"use client";

import Image from "next/image";
import { useState } from "react";
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";

const AddToCart = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 0));
  };

  return (
    <div className="flex items-center h-12">
      {quantity === 0 ? (
        <button
          className="bg-p3green text-text px-4 py-2 rounded-lg hover:bg-p3greenLight"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center space-x-4">
          <button
            className="flex justify-center items-center m-auto bg-p3green w-8 h-8 rounded-full hover:bg-p3greenLight"
            onClick={decrement}
          >
            <Image src={minus} alt="minus" width={16} height={16} />
          </button>
          <span className="h-7 text-lg font-semibold">{quantity}</span>
          <button
            className="flex justify-center items-center m-auto bg-p3green w-8 h-8 rounded-full hover:bg-p3greenLight"
            onClick={increment}
          >
            <Image src={plus} alt="minus" width={14} height={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
