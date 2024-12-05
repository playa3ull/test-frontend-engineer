import MiniBar from "@/components/shared/MiniBar";
import "../../globals.css";
import SearchBar from "@/components/shared/SearchBar";
import Navbar from "@/components/shared/Navbar";
import CartProvider from "@/context/CartProvider";

export const metadata = {
  title: "Shopping Cart | Let's Shop",
  description: "Powered by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <MiniBar />
          <SearchBar />
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
