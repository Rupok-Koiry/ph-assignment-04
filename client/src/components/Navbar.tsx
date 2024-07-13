import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useSelector((state: RootState) => state.cart);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="sticky top-0 z-10">
      <nav className="bg-[#18191A] text-white navbar">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex gap-3 items-center">
            <img src="/images/logo.png" alt="logo" className="invert h-14" />
            <p className="text-blue-400 text-xl font-medium font-arya tracking-monster">
              Camppe
            </p>
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 transition duration-300 font-medium"
                      : "hover:text-blue-600 transition duration-300 font-medium"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 transition duration-300 font-medium"
                      : "hover:text-blue-600 transition duration-300 font-medium"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product-management"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 transition duration-300 font-medium"
                      : "hover:text-blue-600 transition duration-300 font-medium"
                  }
                >
                  Product Management
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 transition duration-300 font-medium"
                      : "hover:text-blue-600 transition duration-300 font-medium"
                  }
                >
                  About Us
                </NavLink>
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
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="md:hidden bg-[#18191A] text-white space-y-4 p-4 overflow-hidden"
            >
              <motion.li variants={itemVariants}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 transition duration-300 block"
                      : "hover:text-blue-600 transition duration-300 block"
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 transition duration-300 block"
                      : "hover:text-blue-600 transition duration-300 block"
                  }
                  onClick={toggleMenu}
                >
                  Products
                </NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink
                  to="/product-management"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 transition duration-300 block"
                      : "hover:text-blue-600 transition duration-300 block"
                  }
                  onClick={toggleMenu}
                >
                  Product Management
                </NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 transition duration-300 block"
                      : "hover:text-blue-600 transition duration-300 block"
                  }
                  onClick={toggleMenu}
                >
                  About Us
                </NavLink>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
