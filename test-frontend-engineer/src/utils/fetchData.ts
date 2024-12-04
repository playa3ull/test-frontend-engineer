import { Product } from "@/types/Product";

export const fetchProductsData = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/dev-hafiz/products_data/refs/heads/main/products.json"
  );
  const data = await response.json();
  return data;
};
