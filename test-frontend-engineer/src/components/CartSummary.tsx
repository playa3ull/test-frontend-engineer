import { useCart } from "@/context/CartProvider";

export const CartSummary = () => {
  const { calculateTotals } = useCart();
  const { subtotal, shipping, tax, total, totalQuantity } = calculateTotals();

  return (
    <div className=" mt-16 ml-4">
      <h3 className="font-serif font-semibold text-xl">
        Summary <sup className="text-lg text-red-600 ">{totalQuantity}</sup>
      </h3>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Estimated Shipping & Handling: ${shipping.toFixed(2)}</p>
      <p>Estimated Tax: ${tax.toFixed(2)}</p>
      <p>Grand Total: ${total.toFixed(2)}</p>
    </div>
  );
};
