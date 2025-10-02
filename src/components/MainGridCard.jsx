import React, { useState } from "react";
import NoPorductFound from "./NoPorductFound";
import ProductCard from "./ProductCard";

export default function MainGridCard({ products, loading }) {
  if (loading) {
    return (
      <div className=" flex-1 flex justify-center items-center h-screen">
        <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
    );
  }

  return (
    <div className=" flex-1 h-screen dark:bg-gray-900 overflow-auto">
      {products.length === 0 ? (
        <NoPorductFound />
      ) : (
        <div className="grid grid-cols-4 gap-8 p-6">
          {products.map((product) => {
            return <ProductCard item={product} />;
          })}
        </div>
      )}
    </div>
  );
}
