import { IProduct } from "../types/interfaces"

const ProductOverview = (product: IProduct) => {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p>{product.image}</p>
      <p>{product.rating.rate}</p>
      <p>{product.rating.count}</p>
    </div>
  )
}
export default ProductOverview