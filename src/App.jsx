import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ChatBot from "./components/ChatBot";
import AboutPage from "./pages/AboutPage";

function App() {
  const [cartItems, setCartItems] = useState(()=>{
    try {
          const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cartItems from localStorage:",error)
      return [];
    }

  });

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    const existing = cartItems.find((p) => p.id === product.id);
    if (existing) {
      setCartItems((prev) =>
        prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity -1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  const removeItem = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  return (
    <>
      <Header cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={<HomePage updateCartItems={addToCart} cartItems={cartItems} />}
        />
        <Route
          path="/cart-item"
          element={
            <CartPage
              cartItems={cartItems}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />
          }
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>
      <ChatBot cartItems={cartItems} addToCart={addToCart} />
    </>
  );
}

export default App;
