"use client";
import React, { createContext, useState, useContext } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  calculateTotals: () => {
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
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
  }),
});

export const useCart = () => useContext(CartContext);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addItem = (product: Omit<Product, "quantity">) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const shipping = 10; // Adjust shipping cost as needed
    const taxRate = 0.08; // Adjust tax rate as needed
    const tax = subtotal * taxRate;
    const total = subtotal + shipping + tax;

    return { subtotal, shipping, tax, total };
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
