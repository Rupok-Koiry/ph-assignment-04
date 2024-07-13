import Faq from "../features/home/Faq";
import FeaturedProducts from "../features/home/FeaturedProducts";
import RecommendedProducts from "../features/home/RecommendedProducts";
import Review from "../features/home/Review";
import Categories from "../features/home/Categories";
import Hero from "../features/home/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <RecommendedProducts />
      <Categories />
      <FeaturedProducts />
      <Review />
      <Faq />
    </>
  );
};

export default Home;
