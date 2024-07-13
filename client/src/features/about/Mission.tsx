import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="border-b-2 border-black">
      <div className="p-10 bg-[#2d2e2f]  rounded-lg  shadow-lg my-10">
        <h3 className="text-3xl md:text-4xl xl:text-5xl text-white font-bold mb-4 capitalize text-center">
          Our Mission
        </h3>{" "}
        <p className="text-gray-200 ">
          At Campers Shop, our mission is to inspire and equip camping
          enthusiasts with high-quality gear and innovative products. We are
          dedicated to enhancing the camping experience by offering a diverse
          selection of necessary and fun items that promote exploration,
          adventure, and a deep connection with nature. Our values are rooted in
          sustainability, customer satisfaction, and a passion for the great
          outdoors. We strive to provide exceptional service and foster a
          community of adventurers who share our love for camping and the
          environment.
        </p>
        <div className="flex space-x-3 justify-center mt-4">
          {[
            { href: "https://www.facebook.com/", icon: <FaFacebook /> },
            { href: "https://www.x.com/", icon: <FaTwitter /> },
            { href: "https://www.instagram.com/", icon: <FaInstagram /> },
            { href: "https://www.github.com/", icon: <FaGithub /> },
          ].map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              className="w-12 h-12 flex justify-center items-center text-2xl font-semibold rounded-lg text-white border-transparent bg-white/10 hover:bg-white/5 transition ease-in duration-300 shadow"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
