import { Product } from "@/types/Product";

export const fetchProductsData = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://products-server-engineer.vercel.app/products"
  );
  const data = await response.json();
  return data;
};
