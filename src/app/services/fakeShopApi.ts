// Purpose: To create a service that fetches data from the fake store api

import { IHeaderTitle, IProduct } from "../types/interfaces";


const BASE_URL = "https://fakestoreapi.com";

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


////////////// PRODUCTS //////////////

export const fetchAllProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(`${BASE_URL}/products?limit=6`);
  const products = await response.json();
  console.log("🚀 ~ fetchProducts ~ products:", products)
  return products;
};

export const fetchProductById = async (id: number): Promise<IProduct> => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const product = await response.json();
  return product;
};

export const fetchProductsByCategory = async (category: string): Promise<IProduct[]> => {
  const response = await fetch(`${BASE_URL}/products/category/${category}`);
  const products = await response.json();
  console.log("🚀 ~ fetchProductsByCategory ~ products:", products)
  return products;
};


////////////// CATEGORIES //////////////

export const fetchCategories = async (): Promise<IHeaderTitle[]> => {
  const response = await fetch(`${BASE_URL}/products/categories`);
  const categories = await response.json();
  console.log("🚀 ~ fetchCategories ~ categories:", categories)
  return categories;
};

