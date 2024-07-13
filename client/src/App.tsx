import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import ProductManagement from "./pages/ProductManagement";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Success from "./pages/Success";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { useEffect } from "react";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (items.length > 0) {
        event.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [items.length]);

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-management" element={<ProductManagement />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/success" element={<Success />} />
          </Routes>
          <Toaster
            toastOptions={{
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
        </RootLayout>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
