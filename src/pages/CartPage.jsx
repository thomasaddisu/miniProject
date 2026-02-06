function CartPage({ cartItems, increaseQty, decreaseQty, removeItem }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const taxRate = 0.05;
  const tax = totalPrice * taxRate;
  const total = totalPrice + tax;



  if (cartItems.length === 0)
    return (
      <div className="text-center mt-10 text-lg font-semibold text-gray-700">
        Your cart is empty
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-6 gap-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>

        
        <div className="w-full lg:w-64  rounded-lg p-4 shadow-sm bg-gray-50">
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-gray-900 border-t pt-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      
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


  <div className="flex flex-col items-end sm:flex-row sm:items-center gap-2">
  
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
      className="text-red-500 text-sm items-center mt-2 sm:mt-0 sm:ml-4 hover:underline"
    >
      Remove
    </button>
  </div>
</div>

        ))}

    </div>
    </div>
  )
}

export default CartPage;

