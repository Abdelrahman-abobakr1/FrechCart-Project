"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { Search as SearchIcon, LayoutGrid, List, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import ProductCard from "../_Components/ProductCard";
import { getAllProducts } from "../home.services";
import { AllProductsData } from "../home.interface";
import { useSearchParams } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [products, setProducts] = useState<AllProductsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const data = await getAllProducts();
        if (query) {
          const filtered = data.filter(p => 
            p.title.toLowerCase().includes(query.toLowerCase()) || 
            p.category.name.toLowerCase().includes(query.toLowerCase())
          );
          setProducts(filtered);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error("Failed to load search results", error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [query]);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <Spinner className="size-10 text-[#0aad0a]" />
        <p className="text-gray-500 font-medium">Searching for products...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pt-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-gray-900">
            {query ? `Results for "${query}"` : "All Products"}
          </h2>
          <p className="text-[14px] text-gray-500">
            Found <span className="font-bold text-[#0aad0a]">{products.length}</span> products
          </p>
        </div>
        
        <div className="flex border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <button 
            onClick={() => setViewMode("grid")}
            className={`w-10 h-10 flex items-center justify-center transition-colors ${viewMode === "grid" ? "bg-[#0aad0a] text-white" : "text-gray-500 hover:bg-gray-50"}`}
          >
            <LayoutGrid className="w-[18px] h-[18px]" />
          </button>
          <button 
            onClick={() => setViewMode("list")}
            className={`w-10 h-10 flex items-center justify-center border-l border-gray-200 transition-colors ${viewMode === "list" ? "bg-[#0aad0a] text-white" : "text-gray-500 hover:bg-gray-50"}`}
          >
            <List className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>

      {products.length > 0 ? (
        <div className={viewMode === "grid" 
          ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
          : "flex flex-col gap-4"
        }>
          {currentProducts.map((product: AllProductsData) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-dashed border-gray-300 p-16 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
            <SearchIcon className="w-10 h-10 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500 max-w-sm mb-8">
            We couldn't find any products matching your search. Try different keywords or browse our categories.
          </p>
          <Link href="/shop" className="bg-[#0aad0a] text-white px-8 py-3 rounded-full font-bold hover:bg-[#088a08] transition-all">
            Browse All Products
          </Link>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${currentPage === 1 ? "border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed opacity-50" : "border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button 
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-[15px] transition-all ${
                  currentPage === page 
                    ? "bg-[#0aad0a] text-white font-bold shadow-md shadow-green-200/50 scale-105" 
                    : "border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 text-gray-600 font-medium"
                }`}
              >
                {page}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${currentPage === totalPages ? "border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed opacity-50" : "border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="page-shell">
      <div className="page-container max-w-7xl">
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center gap-2 text-[13px] text-gray-400">
            <Link href="/" className="hover:text-[#0aad0a] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Search Results</span>
          </div>
        </div>

        <Suspense fallback={<div className="flex justify-center items-center py-24"><Spinner className="size-10 text-[#0aad0a]" /></div>}>
          <SearchResultsContent />
        </Suspense>
      </div>
    </div>
  );
}
