import { Product } from "@/types/Product";

export const fetchQuizData = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://products-server-engineer.vercel.app/products"
  );
  const data = await response.json();
  return data.results;
};
