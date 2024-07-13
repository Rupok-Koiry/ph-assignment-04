import SectionTitle from "../../components/SectionTitle";
const teamMembers = [
  {
    name: "Michael Gough",
    designation: "CEO",
    description:
      "Michael leads with a focus on strategic growth and innovation, guiding the company's overall vision. ",
    imgSrc: "/images/michael-gouch.png",
  },
  {
    name: "Lana Byrd",
    designation: "Managing Director",
    description:
      "Lana directs Flowbite's technical strategy, ensuring excellence and innovation across the platform.    ",
    imgSrc: "/images/lana-byrd.png",
  },
  {
    name: "Helene Engels",
    designation: "Product Manager",
    description:
      "Helene oversees product development, focusing on high-quality solutions and innovative approaches.    ",
    imgSrc: "/images/helene-engels.png",
  },
  {
    name: "Jese Leos",
    designation: "Marketing & Sales",
    description:
      "Jese formulates and executes impactful marketing and sales strategies to drive the company's success.",
    imgSrc: "/images/jese-leos.png",
  },
];

const Team = () => {
  return (
    <section className="py-10 border-b-2 border-black">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <SectionTitle
          title="About Us"
          description="Meet the dedicated team behind Campee Shop, an e-commerce website dedicated to providing all the necessary and fun items for camping enthusiasts."
        />
      </div>
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {teamMembers.map((member, index) => (
          <div
            className="items-center bg-[#2d2e2f]  rounded-lg shadow sm:flex"
            key={index}
          >
            <span>
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={member.imgSrc}
                alt="Sofia Avatar"
              />
            </span>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-white">
                {member.name}
              </h3>
              <span className="text-gray-200 ">{member.designation}</span>
              <p className="mt-3 mb-4 font-light text-gray-200">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
