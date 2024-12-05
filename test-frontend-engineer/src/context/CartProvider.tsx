"use client";
import React, { createContext, useState, useContext } from "react";

interface ProductInterface {
  id: string;
  name: string;
  price: number;
  quantity: number;
  shipping: number;
  weight?: number;
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
  const [cartItems, setCartItems] = useState<ProductInterface[]>([]);
  console.log("From cart", cartItems);

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

    const shipping = cartItems.reduce((acc, item) => {
      const itemWeight = item.weight || 1;
      return acc + itemWeight * item.quantity * 0.5;
    }, 0);

    const taxRate = 0.08;
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
