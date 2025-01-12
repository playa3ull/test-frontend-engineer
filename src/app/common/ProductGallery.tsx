import { IProduct } from "../types/interfaces"
import ProductCard from "./ProductCard"

const ProductGallery = (products: IProduct[]) => {
  return (
    <section className="grid grid-template-columns-gallery">
      {products.map((product: IProduct) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  )
}

export default ProductGallery