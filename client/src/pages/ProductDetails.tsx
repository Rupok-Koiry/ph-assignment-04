import { useParams } from "react-router";
import { addItem } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useProduct } from "../features/products/useProduct";
import toast from "react-hot-toast";
import Rating from "../components/Rating";
import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import Spinner from "../components/Spinner";
import Magnifier from "../components/Magnifier";

const ProductDetails = () => {
  const { productId } = useParams();
  const { isLoading, error, product } = useProduct(productId as string);
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <h2 className="text-center text-2xl font-bold text-red-500">
        {error.message}
      </h2>
    );
  const isProductInCart = items.find((item) => item._id === product?._id);
  const isAddToCartDisabled =
    (isProductInCart && isProductInCart.quantity >= product?.stock) ||
    product.stock === 0;
  return (
    <section className="border-b border-black py-10">
      <SectionTitle title="Product Details" className="text-center" />
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="w-full md:w-1/2 bg-[#2d2e2f]  px-6 py-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {product.images.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center">
                  <Magnifier src={image} alt={product.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {product.name}
          </h1>
          <div className="flex items-center gap-5">
            <Rating value={product.ratings} color="#facc15" className="my-2" />
            <span className="rounded-lg bg-indigo-800 uppercase px-4 py-1 text-xs font-bold text-white">
              {product.category.name}
            </span>
          </div>
          <p className="text-2xl font-semibold text-red-600">
            ${product.price}
          </p>

          <p className="text-lg text-gray-400 my-2">{product.description}</p>
          <p className="text-white">
            Stock :{" "}
            <span className="text-green-600 font-semibold">
              {product.stock}
            </span>
          </p>
          <button
            className={`py-3 px-6 rounded-lg transition-colors duration-300 my-6 ${
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
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
