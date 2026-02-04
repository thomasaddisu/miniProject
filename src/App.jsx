import { useState } from "react";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
function App() {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    setCartItems((prev) => [...prev, product]);
  }
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage updateCartItems={addToCart} />} />
        <Route path="/cart-item" element={<CartPage cartItems={cartItems} />} />
      </Routes>
    </>
  );
}

export default App;
