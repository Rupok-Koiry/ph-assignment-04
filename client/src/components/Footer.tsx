import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#18191a] w-full">
      <div className="container px-5 mx-auto w-full py-10 lg:pt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1 flex justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <img src="/images/logo.png" alt="logo" className="invert" />
              <h3 className="text-blue-400 text-4xl font-medium font-arya tracking-monster">
                CAMPEE
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Grafton Street, Dublin
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Category</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Backpacks
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Cooking Gear
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Sleeping Bags
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Tents
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Quick links</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  to="/about"
                >
                  About us
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  to="/products"
                >
                  Products
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  to="/product-management"
                >
                  Product Management
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  to="/cart"
                >
                  Cart
                </Link>
              </p>
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100">Stay up to date</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Subscribed successfully!");
              }}
            >
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter your email"
                  />
                </div>
                <button className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none transition ease-in duration-300">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400 dark:text-neutral-400">
              © 2024 Campee. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-2">
            {[
              { href: "https://www.facebook.com/", icon: <FaFacebook /> },
              { href: "https://www.x.com/", icon: <FaTwitter /> },
              { href: "https://www.instagram.com/", icon: <FaInstagram /> },
              { href: "https://www.github.com/", icon: <FaGithub /> },
            ].map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                className="w-10 h-10 flex justify-center items-center text-lg font-semibold rounded-lg text-white hover:bg-white/10 transition ease-in duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
