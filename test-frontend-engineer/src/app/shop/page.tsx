"use client";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product";
import { fetchProductsData } from "@/utils/fetchData";
import React, { useEffect, useState } from "react";

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  console.log("products", products);

  const fetchData = async () => {
    setIsLoaded(true);
    const res = await fetchProductsData();
    setProducts(res);
    setIsLoaded(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="container mx-auto mt-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 ">
          {products.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>

        <div className="col-span-12 md:col-span-4 border">cart summary</div>
      </div>
    </section>
  );
};

export default Shop;
