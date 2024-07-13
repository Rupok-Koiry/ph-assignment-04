import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { clearCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import CartItem from "../features/cart/CartItem";
import SectionTitle from "../components/SectionTitle";
import Swal from "sweetalert2";

const Cart = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveProduct = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Empty The cart!",
      background: "#363636",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
      }
    });
  };

  return (
    <section className="border-b border-black py-10">
      <SectionTitle
        title="Cart"
        description="Explore and manage your selected camping essentials with ease on our dedicated cart page, ensuring each adventure is perfectly equipped."
        className="text-center"
      />

      {items.length === 0 ? (
        <div
          className="mx-auto md:w-2/3 bg-blue-100 border border-blue-400 text-blue-500 px-4 rounded-lg text-center py-8 "
          role="alert"
        >
          <strong className="font-semibold text-2xl md:text-3xl">
            {" "}
            Your cart is empty!
          </strong>
        </div>
      ) : (
        <div className="md:w-2/3 mx-auto">
          <div className="flex flex-col gap-4">
            {items.map((product) => (
              <CartItem product={product} />
            ))}
          </div>
          <button
            className="w-full bg-red-600 hover:bg-red-700  py-3 mt-4 text-xl text-white rounded-lg transition-colors duration-300 text-center block"
            onClick={handleRemoveProduct}
          >
            Clear Cart
          </button>
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-white">
              Total :{" "}
              <span className="text-red-600">${totalPrice.toFixed(2)}</span>
            </h3>
            <Link
              className={`py-3 mt-4 text-xl text-white  rounded-lg transition-colors duration-300 text-center block ${
                items.some((item) => item.quantity > item.stock)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              to="/checkout"
            >
              Proceeded to checkout
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
