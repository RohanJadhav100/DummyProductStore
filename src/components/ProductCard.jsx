import React from "react";

export default function ProductCard({ item }) {
  return (
    <article
      key={item.id}
      className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700"
    >
      <div className="px-4 py-4">
        <img
          className="object-cover h-64 w-full"
          src={`${item?.image}`}
          alt="Converse sneakers"
        />
      </div>

      <div className="flex flex-col gap-1 my-4 px-4">
        <h2 className="text-lg font-semibold line-clamp-1 text-gray-800 dark:text-gray-50">
          {item.title}
        </h2>
        <span className="font-semibold text-gray-800 dark:text-gray-50">
          ${item.price}
        </span>
      </div>
    </article>
  );
}
