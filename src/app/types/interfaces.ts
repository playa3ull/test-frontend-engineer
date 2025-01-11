export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export interface IHeaderTitle {
  category: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
  totalPrice: number;
}