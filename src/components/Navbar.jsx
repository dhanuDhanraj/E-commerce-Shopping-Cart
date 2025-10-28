import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-extrabold text-3xl hover:scale-110 transition cursor-pointer">
          ShopEase <span className="text-yellow-300">🛍️</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-white font-semibold text-lg">
          {["Home", "Products", "Deals", "Contact"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer hover:text-yellow-300 after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-yellow-300 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Cart */}
        <div className="relative">
          <ShoppingCart className="text-white w-8 h-8 cursor-pointer hover:text-yellow-300 transition" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow">
              {cartCount}
            </span>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold text-lg text-center py-4 space-y-3 animate-fadeIn">
          {["Home", "Products", "Deals", "Contact"].map((item) => (
            <div key={item} className="hover:text-yellow-300 cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
