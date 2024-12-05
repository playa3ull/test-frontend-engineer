"use client";
import { Product } from "@/types/Product";
import { fetchProductsData } from "@/utils/fetchData";
import React, { createContext, useState, useContext } from "react";
import { toast } from "sonner";

interface ProductInterface {
  id: string;
  name: string;
  price: number;
  quantity: number;
  shipping: number;
  weight?: number;
  img?: string;
}

interface CartContextType {
  cartItems: ProductInterface[];
  addItem: (product: ProductInterface) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  calculateTotals: () => {
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
    totalQuantity: number;
  };
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  calculateTotals: () => ({
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
    totalQuantity: 0,
  }),
});

export const useCart = () => useContext(CartContext);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<ProductInterface[]>([]);

  const addItem = (product: Omit<ProductInterface, "quantity">) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      toast("Product is added in the cart 🛒 ");
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast("Product is added in the cart 🛒 ");
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    toast("🛒Uahh, Cart is empty ⭕ ");
  };

  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const shipping = cartItems.reduce((acc, item) => {
      const itemWeight = item.weight || 1;
      return acc + itemWeight * item.quantity * 0.5;
    }, 0);

    const taxRate = 0.08;
    const tax = subtotal * taxRate;
    const total = subtotal + shipping + tax;

    const totalQuantity = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    return { subtotal, shipping, tax, total, totalQuantity };
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clearCart,
        calculateTotals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
