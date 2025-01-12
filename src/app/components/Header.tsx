import HeaderCart from "../common/HeaderCart";
import Image from "next/image";
import logo from "../assets/playa3ull-logo.webp";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center h-16 p-4 bg-secondary text-text">
        <Link href="/" className="flex-1 basis-1/5">
          <Image src={logo} alt="Playa3ull Logo Image" height={48} />
        </Link>
        <ul className="flex flex-row justify-center items-center space-x-4 flex-3 basis-3/5 text-xl font-bold">
          <li>
            <Link href="https://playa3ull.games/" target="_blank">Official Home</Link>
          </li>
          <li>
          <Link href="/product">Store</Link>
          </li>
        </ul>
        <Link href="/cart" className="flex-1 basis-1/5 flex justify-end">
          <HeaderCart />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
