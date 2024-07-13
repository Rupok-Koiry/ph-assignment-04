import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero h-[80vh] flex justify-center items-center text-center rounded-b-xl overflow-hidden">
      <div className="w-2/3">
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-white font-bold mb-8 capitalize tracking-wide	 ">
          Ultimate Destination for Camping Gear and Adventure Essentials
        </h2>
        <p className="text-gray-200 text-lg">
          Campee offers high-quality camping gear and essentials for every
          adventure. Shop our selection of tents, sleeping bags, cooking
          equipment, and fun camping accessories. Experience top-notch products,
          fast shipping, and excellent customer service. Prepare for your next
          outdoor adventure with Campee.
        </p>
        <div className="mt-8">
          <Link
            className={`py-3 px-5 bg-blue-600 hover:bg-blue-700 text-lg text-white  rounded-lg transition-colors duration-300 text-center`}
            to="/products"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
