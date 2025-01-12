"use client";

import RoundedCheckbox from "@/app/common/Checkbox";
import ProductGallery from "@/app/common/ProductGallery";
import { fetchAllProducts, fetchCategories } from "@/app/services";
import { IProduct } from "@/app/types/interfaces";
import { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    fetchAllProducts().then((data: IProduct[]) => {
      setProducts(data);
    });
    fetchCategories().then((data: string[]) => {
      setCategories(data);
    });
  }, []);
  return (
    <main className="container bg-secondary mx-auto my-10 min-h-dvh flex flex-col lg:flex-row gap-4 p-8 rounded-lg">
      <section className="w-full lg:max-w-[80%] lg:w-1/3">
        <div className="bg-primary p-6 rounded-lg min-h-28 w-full">
          <h3 className="text-2xl font-bold text-text">Filter By</h3>
          <div className="flex flex-col space-y-4 capitalize mt-6 p-6">
            {categories.length > 0 ? (
              categories.map((category: string) => (
                <RoundedCheckbox category={category} key={category} />
              ))
            ) : (
              <>
                <RoundedCheckbox category="loading" />
                <RoundedCheckbox category="loading" />
                <RoundedCheckbox category="loading" />
                <RoundedCheckbox category="loading" />
              </>
            )}
          </div>
        </div>
      </section>
      <ProductGallery products={products} />
    </main>
  );
};

export default page;
