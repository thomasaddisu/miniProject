import { Link } from "react-router";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
        >
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
            to="/cart-item"
            className="text-gray-600 hover:text-yellow-600 font-medium transition"
          >
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
