// ProductGrid.jsx
import React from "react";

function ProductGrid({ products = [], updateCartItems = () => {} }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-lg"
        >
          {/* Product Image */}
          <div className="mb-4 h-40 w-full overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Category */}
          <span className="mb-1 w-fit rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium capitalize text-gray-600">
            {product.category}
          </span>

          {/* Name */}
          <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-gray-800">
            {product.name}
          </h3>

          {/* Description */}
          <p className="mt-1 line-clamp-2 text-xs text-gray-500">
            {product.description}
          </p>

          {/* Price & Stock */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-base font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            <span
              className={`text-xs font-medium ${
                product.stock > 0 ? "text-gray-500" : "text-red-500"
              }`}
            >
              {product.stock > 0
                ? `${product.stock} in stock`
                : "Out of stock"}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            disabled={product.stock === 0}
            className="mt-4 w-full rounded-lg bg-yellow-400 py-2 text-sm font-semibold transition hover:bg-yellow-500 disabled:opacity-50"
            onClick={() => updateCartItems(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
