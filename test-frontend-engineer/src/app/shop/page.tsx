"use client";
import { CartSummary } from "@/components/CartSummary";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product";
import { fetchProductsData } from "@/utils/fetchData";
import React, { useEffect, useState } from "react";

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  const itemsPerPage: number = 7;

  const fetchData = async () => {
    setIsLoaded(true);
    const res = await fetchProductsData();
    setProducts(res);
    setIsLoaded(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Calculate the indexes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="container mx-auto mt-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 ">
          {isLoaded ? (
            <p>Loading...</p>
          ) : (
            <div>
              {products &&
                currentItems.map((product) => (
                  <ProductCard key={product?._id} product={product} />
                ))}
            </div>
          )}
          {currentItems.length > 0 && (
            <div className="flex  lg:w-full flex-col items-center justify-center my-12 ">
              <div className="flex text-gray-700 justify-center">
                <div
                  className={`h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer ${
                    currentPage === 1 && "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={handlePreviousPage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-left w-4 h-4"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </div>
                <div className="flex h-8 font-medium rounded-full bg-gray-200">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <div
                      key={index + 1}
                      className={`w-8 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full ${
                        currentPage === index + 1
                          ? "bg-[#EAC004] text-white"
                          : ""
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div
                  className={`h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer ${
                    currentPage === totalPages &&
                    "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={handleNextPage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right w-4 h-4"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="col-span-12 md:col-span-4 border-l-[1.5px] h-96 fixed right-80 hidden lg:block">
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default Shop;
