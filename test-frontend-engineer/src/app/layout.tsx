"use client";

import MiniBar from "@/components/shared/MiniBar";
import "../../globals.css";
import SearchBar from "@/components/shared/SearchBar";
import Navbar from "@/components/shared/Navbar";
import CartProvider from "@/context/CartProvider";
import { Toaster, toast } from "sonner";

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
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
