import { Link } from "react-router";
import logo from "../assets/logo.png";

function Header({ cartItems = [] }) {
  const cartCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Brand Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-semibold text-gray-800">
            MyShop
          </span>
        </Link>

        <div className="flex gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-yellow-600 font-medium transition"
          >
            Home
          </Link>
                    <Link
            to="/about"
            className="text-gray-600 hover:text-yellow-600 font-medium transition"
          >
            About
          </Link>

          <Link
            to="/cart-item"
            className="relative text-gray-600 hover:text-yellow-600 font-medium transition"
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-yellow-400 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

        </div>
      </nav>
    </header>
  );
}

export default Header;

