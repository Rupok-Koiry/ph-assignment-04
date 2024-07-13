import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../cart/cartSlice";
import { IProduct } from "../../services/apiProducts";
import toast from "react-hot-toast";
import Rating from "../../components/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { RootState } from "../../app/store";

type ProductItemProps = {
  product: IProduct;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  const isProductInCart = items.find((item) => item._id === product?._id);
  const isAddToCartDisabled =
    (isProductInCart && isProductInCart.quantity >= product?.stock) ||
    product.stock === 0;

  return (
    <div className="bg-[#2d2e2f]  px-4 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <Swiper navigation={true} modules={[Navigation]}>
        {product.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="px-2">
              <img
                src={image}
                alt={product.name}
                className="w-full h-64 rounded-lg object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-white">{product.name}</h2>
        <Rating value={product.ratings} color="#facc15" className="my-2" />
        <p className="text-lg text-red-600 font-bold">${product.price}</p>
        <p className="text-white">
          <span className="text-green-400 font-semibold">{product.stock}</span>{" "}
          in stock
        </p>
        <div className="flex mt-4 gap-3">
          <button
            className={`w-full py-2 rounded-lg transition-colors duration-300 ${
              isAddToCartDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            onClick={() => {
              dispatch(addItem(product));
              toast.success(`Product successfully added to your cart`);
            }}
            disabled={isAddToCartDisabled}
          >
            {isAddToCartDisabled ? "Out of Stock" : "Add to Cart"}
          </button>
          <Link
            to={`/products/${product._id}`}
            className="w-full py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
