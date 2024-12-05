"use client";
import { CartSummary } from "@/components/CartSummary";

const page = () => {
  return (
    <section className="container mx-auto mt-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 ">this is details</div>

        <div className="col-span-12 md:col-span-4 border">
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default page;
