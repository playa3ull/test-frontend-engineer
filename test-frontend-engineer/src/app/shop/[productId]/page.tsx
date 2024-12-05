"use client";
import { CartSummary } from "@/components/CartSummary";
import { Product } from "@/types/Product";
import { fetchProductById } from "@/utils/fetchData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  console.log(product);
  const [loading, setLoading] = useState(true);
  const { productId } = params;
  console.log(productId);

  useEffect(() => {
    if (productId) {
      const loadProduct = async () => {
        setLoading(true);
        const fetchedProduct = await fetchProductById(productId as string);
        setProduct(fetchedProduct);
        setLoading(false);
      };

      loadProduct();
    }
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <section className="container mx-auto mt-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 ">this is details</div>

        <div className="col-span-12 md:col-span-4 border">
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
