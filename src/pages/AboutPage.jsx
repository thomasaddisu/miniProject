import React from "react";
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">Welcome to MyShop! We are passionate about providing you with the best shopping experience. Our mission is to offer a wide range of high-quality products at competitive prices, all while delivering exceptional customer service. Whether you're looking for the latest gadgets, stylish fashion, or home essentials, we've got you covered. Thank you for choosing MyShop as your go-to online store!</p>
        <p className="mb-4">If you have any questions or feedback, feel free to <Link to="/contact">contact us</Link>.</p>

        <footer className="mt-12 border-t pt-4 text-center">
          <p className="text-sm text-gray-600 ">
            &copy; {new Date().getFullYear()} MyShop. All rights reserved.
          </p>
        </footer>
    </div>
  );
}
