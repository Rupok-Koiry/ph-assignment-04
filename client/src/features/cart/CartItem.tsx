import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  decrementQuantity,
  ICartItem,
  incrementQuantity,
  removeItem,
} from "./cartSlice";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
type CartItemProps = {
  product: ICartItem;
};

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
      background: "#363636",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeItem(productId));
      }
    });
  };

  return (
    <div
      className=" flex flex-wrap gap-5 items-center justify-between bg-[#2d2e2f]  p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      key={product._id}
    >
      <div className="flex items-center gap-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-16 h-16 object-contain rounded-lg"
        />
        <div>
          <h2 className="text-xl font-semibold text-white">{product.name}</h2>
          <p className="text-red-600 font-bold">${product.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 
          transition duration-300
          text-white p-2 rounded-lg font-bold"
          onClick={() => dispatch(decrementQuantity(product._id))}
          disabled={product.quantity <= 1}
        >
          <LuMinus />
        </button>
        <p className="text-yellow-400">{product.quantity}</p>
        <button
          className="bg-blue-600 transition
          duration-300 hover:bg-blue-700  text-white p-2 rounded-lg font-bold"
          onClick={() => dispatch(incrementQuantity(product._id))}
          disabled={product.quantity >= product.stock}
        >
          <GoPlus />
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 transition-colors duration-300  text-white px-2 py-1 rounded-lg"
          onClick={() => handleRemoveProduct(product._id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
