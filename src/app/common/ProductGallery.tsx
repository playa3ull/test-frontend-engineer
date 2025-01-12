import Link from "next/link";
import { IProduct } from "../types/interfaces";
import ProductCard from "./ProductCard";

type ProductGalleryProps = {
  products: IProduct[];
};

const ProductGallery = ({ products }: ProductGalleryProps) => {
  return (
    <section className="grid grid-cols-gallery place-content-center gap-4 w-auto lg:w-2/3">
      {products.map((product: IProduct) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <ProductCard {...product} />
        </Link>
      ))}
    </section>
  );
};

export default ProductGallery;
