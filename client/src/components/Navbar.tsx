import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useSelector((state: RootState) => state.cart);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-30">
      <nav className="bg-[#18191A] text-white navbar">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className="invert h-14" />
          </Link>
          <div className="flex items-center space-x-4">
            <div className="md:hidden" onClick={toggleMenu}>
              {isOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </div>
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-600 transition duration-300 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-blue-600 transition duration-300 font-medium"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/product-management"
                  className="hover:text-blue-600 transition duration-300 font-medium"
                >
                  Product Management
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-600 transition duration-300 font-medium"
                >
                  About Us
                </Link>
              </li>
            </ul>
            <Link
              to="/cart"
              className="relative hover:text-blue-600 transition duration-300"
            >
              <AiOutlineShoppingCart size={24} />
              <span className="bg-red-500 text-white rounded-full px-2 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                {items.length}
              </span>
            </Link>
          </div>
        </div>
        {isOpen && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="md:hidden bg-black text-white space-y-4 p-4"
          >
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="hover:text-blue-600 transition duration-300 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={toggleMenu}
                className="hover:text-blue-600 transition duration-300 block"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/product-management"
                onClick={toggleMenu}
                className="hover:text-blue-600 transition duration-300 block"
              >
                Product Management
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                onClick={toggleMenu}
                className="hover:text-blue-600 transition duration-300 block"
              >
                About Us
              </Link>
            </li>
          </motion.ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
