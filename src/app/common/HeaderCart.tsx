import Image from "next/image"
import cart from "../assets/cart.png"


const HeaderCart = () => {
  return (
    <div className="flex items-center">
      <Image src={cart} width={32} height={32} alt="cart" className="mr-4"/>
      <span className="bg-p3green text-text font-semibold rounded-full h-5 px-2 flex items-center justify-center absolute right-5 top-3">0</span>
    </div>
  )
}

export default HeaderCart