import MiniBar from "@/components/shared/MiniBar";
import SearchBar from "@/components/shared/SearchBar";
import Navbar from "@/components/shared/Navbar";
import Shop from "./shop/page";
import CartProvider from "@/context/CartProvider";

const Home = () => {
  return (
    <>
      <Shop />
    </>
  );
};

export default Home;
