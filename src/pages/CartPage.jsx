import { useState } from "react";

function CartPage({ cartItems: initialCart }) {
  const [cartItems, setCartItems] = useState(
    initialCart.map((item) => ({ ...item, quantity: item.quantity || 1 }))
  );

  const increaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );

  const removeItem = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <div className="text-center mt-10 text-lg font-semibold text-gray-700">
        Your cart is empty
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border rounded-lg p-4 shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-green-600 font-bold">
                ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="w-6 h-6 bg-gray-200 rounded"
              >
                -
              </button>
              <span className="w-6 text-center">{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="w-6 h-6 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="ml-4 text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right text-xl font-bold">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default CartPage;
