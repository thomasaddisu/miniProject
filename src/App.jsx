import { useState } from "react";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart-item" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
