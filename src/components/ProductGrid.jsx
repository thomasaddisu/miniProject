import React, { useState } from "react";

function ProductGrid({
  products = [],
  updateCartItems = () => {},
  cartItems = [],
}) {
  const [addedProductId, setAddedProductId] = useState(null);
  const [outStockProductId, setOutStockProductId] = useState(null);

  const handleAddToCart = (product) => {
    updateCartItems(product);
    setAddedProductId(product.id);

    setTimeout(() => setAddedProductId(null), 1500);
  };

  const getRemainingStock = (product) => {
    const cartItem = cartItems.find((item) => item.id === product.id);
    const usedQty = cartItem ? cartItem.quantity : 0;
    return product.stock - usedQty;
  };

  const outOfStock = function (product) {
    setOutStockProductId(product.id)
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="flex flex-col  bg-white p-4 shadow-sm transition hover:shadow-lg"
          >
            <div className="mb-4 h-40 w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            <span className="mb-1 w-fit rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium capitalize text-gray-600">
              {product.category}
            </span>

            <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-gray-800">
              {product.name}
            </h3>

            <p className="mt-1 line-clamp-2 text-xs text-gray-500">
              {product.description}
            </p>

            <div className="mt-3 flex justify-between">
              <span className="text-base font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
              {addedProductId === product.id && (
                <span className="self-end text-sm text-green-500 ">
                  Added to cart
                </span>
              )}
              {outStockProductId === product.id ? 
               <span className="self-end text-sm text-red-500">
                  Out of Stock
                </span>
                :(<span className="self-end text-xs text-gray-500">
                Stock-{getRemainingStock(product)}
              </span>
              )}
              
            </div>

            <button
              disabled={product.stock === 0}
              className="mt-4 w-full rounded-lg bg-yellow-400 py-2 text-sm font-semibold transition hover:bg-yellow-500 disabled:opacity-50"
              onClick={() =>
                getRemainingStock(product) > 0
                  ? handleAddToCart(product)
                  : outOfStock(product)
              }
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductGrid;
