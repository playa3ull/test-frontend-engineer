import { useCart } from "@/context/CartProvider";

export const CartSummary = () => {
  const { calculateTotals } = useCart();
  const { subtotal, shipping, tax, total } = calculateTotals();

  return (
    <div>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Estimated Shipping & Handling: ${shipping.toFixed(2)}</p>
      <p>Estimated Tax: ${tax.toFixed(2)}</p>
      <p>Grand Total: ${total.toFixed(2)}</p>
    </div>
  );
};
