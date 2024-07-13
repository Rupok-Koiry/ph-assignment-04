import toast from "react-hot-toast";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };
  return (
    <section className="py-10 border-b-2 border-black">
      <SectionTitle title="Get in Touch" />
      <div className="flex items-center justify-center">
        <div className="grid md:grid-cols-2">
          <div className="h-full">
            <p className="mt-3 mb-12 text-lg text-gray-400 ">
              We&apos;re here to assist you! If you have any questions or need
              assistance, please feel free to reach out to us.
            </p>
            <ul className="mb-6 md:mb-0">
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 hover:bg-blue-700 text-gray-50 transition ease-in duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-white ">
                    Our Address
                  </h3>
                  <p className="text-gray-400 ">Grafton Street, Dublin</p>
                  <p className="text-gray-400 ">Ireland</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 hover:bg-blue-700 text-gray-50 transition ease-in duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-white ">
                    Contact
                  </h3>
                  <p className="text-gray-400 ">Mobile: +353-xxxx</p>
                  <p className="text-gray-400 ">Mail: info@campee.com</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 hover:bg-blue-700 text-gray-50 transition ease-in duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                    Working Hours
                  </h3>
                  <p className="text-gray-400 ">
                    Monday - Friday: 08:00 - 17:00
                  </p>
                  <p className="text-gray-400 ">
                    Saturday &amp; Sunday: 08:00 - 12:00
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="card h-full max-w-6xl p-5 md:p-12" id="form">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="mx-0 mb-1 sm:mb-4">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="name"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="text-white focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#2D2E2F]"
                      name="name"
                    />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="email"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      className="text-white focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#2D2E2F]"
                      name="email"
                    />
                  </div>
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="textarea"
                    className="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <textarea
                    id="textarea"
                    name="message"
                    cols={30}
                    rows={5}
                    placeholder="Write your message..."
                    className="focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#2D2E2F]"
                  ></textarea>
                </div>
              </div>
              <div className="text-center shadow-lg">
                <button
                  type="submit"
                  className="w-full flex justify-center  text-white px-6 py-3 font-xl rounded-md sm:mb-0 bg-blue-600 hover:bg-blue-700 transition ease-in duration-300"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <iframe
        className="rounded-lg"
        width="100%"
        height="450"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      />
    </section>
  );
};

export default Contact;
