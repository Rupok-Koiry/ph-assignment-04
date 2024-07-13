import { Navigation } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";
import Spinner from "../../components/Spinner";
import { useCategories } from "../categories/useCategories";
import { Swiper, SwiperSlide } from "swiper/react";
import { ICategory } from "../../services/apiCategories";
import { Link } from "react-router-dom";

const Categories = () => {
  const { isLoading, error, categories } = useCategories();

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
        title="Top Categories"
        description="Explore our diverse range of camping essentials, categorized to cater to every camper's needs and preferences."
        className="text-center"
      />

      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 5,
          },
        }}
      >
        {categories.map((category: ICategory) => (
          <SwiperSlide key={category._id}>
            <div>
              <Link to={`/products?category=${category._id}`}>
                <img
                  className="size-48 object-contain mx-auto bg-[#2d2e2f]  rounded-full p-4 mb-3"
                  src={category.image}
                  alt="{category.name}"
                />
              </Link>
              <p className="text-white text-center text-xl"> {category.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Categories;
