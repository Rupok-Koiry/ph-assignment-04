import { Link } from "react-router-dom";

const Success = () => {
  return (
    <section className="border-b border-black py-10 md:w-2/3 mx-auto">
      <div
        className="md:w-2/3 mx-auto bg-blue-100 border border-blue-400 text-blue-500 px-4 rounded-lg text-center py-8 "
        role="alert"
      >
        <strong className="font-semibold text-2xl md:text-3xl">
          {" "}
          Your order placed successfully!
        </strong>
      </div>
      <Link
        to="/"
        className="block text-center  mx-auto py-3 mt-4 text-xl text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
      >
        Go back To Home
      </Link>
    </section>
  );
};

export default Success;
