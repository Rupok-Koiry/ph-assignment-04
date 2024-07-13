import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import Spinner from "../../components/Spinner";
import { IProduct } from "../../services/apiProducts";
import ProductItem from "../products/ProductItem";
import { useProducts } from "../products/useProducts";

const RecommendedProducts = () => {
  const { isLoading, error, products } = useProducts();

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <h2 className="text-center text-2xl font-bold text-red-500">
        {error.message}
      </h2>
    );

  return (
    <section className="border-b border-black py-10 ">
      <SectionTitle
        title="Recommended Products"
        description="Discover our top-rated camping essentials, recommended by camping enthusiasts like you for their quality, reliability, and performance."
        className="text-center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {products
          .sort((a: IProduct, b: IProduct) => b.ratings - a.ratings)
          .slice(0, 3)
          ?.map((product: IProduct) => (
            <ProductItem product={product} key={product._id} />
          ))}
      </div>
      <div className="text-center  mt-6 ">
        <Link
          className={`py-3 px-5 bg-blue-600 hover:bg-blue-700 text-lg text-white  rounded-lg transition-colors duration-300 text-center`}
          to="/products"
        >
          More Products
        </Link>
      </div>
    </section>
  );
};

export default RecommendedProducts;
