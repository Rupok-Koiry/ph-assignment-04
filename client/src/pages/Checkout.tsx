import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { clearCart } from "../features/cart/cartSlice";
import { RootState } from "../app/store";
import { useCreateOrder } from "../features/orders/useCreateOrder";
import SectionTitle from "../components/SectionTitle";

interface UserDetails {
  name: string;
  email: string;
  phone: string;
  deliveryAddress: string;
}

const Checkout = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const { createOrder } = useCreateOrder();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDetails>();
  const [paymentMethod, setPaymentMethod] =
    useState<string>("Cash on Delivery");

  const onSubmit: SubmitHandler<UserDetails> = async (data) => {
    const order = {
      user: data,
      products: cart.items.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
      totalAmount: cart.totalPrice,
    };
    await createOrder(order);
    navigate("/success");
    dispatch(clearCart());
  };

  return (
    <section className="border-b border-black py-10">
      <SectionTitle title="Checkout" />
      <div className="w-2/3 mx-auto text-white bg-[#2d2e2f]  p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">User Details</h3>
            <div>
              <label className="block text-gray-400 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="text-white focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#18191A]"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-400 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className="text-white focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#18191A]"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-400 font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                })}
                className="text-white focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#18191A]"
                placeholder="Your Phone Number"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-400 font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                {...register("deliveryAddress", {
                  required: "Address is required",
                })}
                className="text-white focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#18191A]"
                placeholder="Delivery Address"
              />
              {errors.deliveryAddress && (
                <p className="text-red-500">{errors.deliveryAddress.message}</p>
              )}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Payment Method</h3>
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={() => setPaymentMethod("Cash on Delivery")}
                className="mr-2"
              />
              <label className="text-gray-400 font-medium">
                Cash on Delivery
              </label>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-lg rounded-lg transition-colors duration-300 ${
              cart.items.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={cart.items.length === 0}
          >
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
