import { Product } from "@/types/Product";

export const fetchProductsData = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/dev-hafiz/products_data/refs/heads/main/products.json"
  );
  const data = await response.json();
  return data;
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
  const products = await fetchProductsData();
  return products.find((product) => product._id === id) || null;
};
