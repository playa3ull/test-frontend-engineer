export interface Product {
  _id: string;
  key: string;
  category: string;
  name: string;
  seller?: string;
  wholePrice: string;
  priceFraction: string;
  stock?: number;
  star: number;
  starCount: number;
  img?: string;
  url: string;
  price: number;
  shipping: number;
  quantity?: number;
}
