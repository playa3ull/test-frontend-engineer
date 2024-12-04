import React from "react";

const Shop: React.FC = () => {
  return (
    <section className="container mx-auto mt-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 border">Products</div>

        <div className="col-span-12 md:col-span-4 border">cart summary</div>
      </div>
    </section>
  );
};

export default Shop;
