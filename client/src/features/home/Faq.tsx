import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

const Faq = () => {
  return (
    <section className="relative z-10 md:py-10 py-16 border-b border-black">
      <SectionTitle
        title="Any Questions? Look Here"
        description="Explore answers to commonly asked questions about our products and services."
      />
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What is the delivery time for your products?"
              text="Our standard delivery time is 3-5 business days. Expedited shipping options are available upon request."
            />
            <AccordionItem
              header="Can I return or exchange items?"
              text="Yes, we accept returns and exchanges within 30 days of purchase. Please refer to our Returns Policy for detailed instructions."
            />
            <AccordionItem
              header="Do you offer discounts for bulk orders?"
              text="Yes, we provide discounts for bulk orders. Contact our sales team for more information on pricing and discounts."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How can I track my order?"
              text="Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website."
            />
            <AccordionItem
              header="Are your products eco-friendly?"
              text="We prioritize sustainability and offer a range of eco-friendly products. Look for our eco-friendly label on product pages for more information."
            />
            <AccordionItem
              header="Can I cancel my order?"
              text="You can cancel your order within 24 hours of placing it. Contact our customer service team to initiate the cancellation process."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type AccordionItemProps = {
  header: string;
  text: string;
};

const AccordionItem = ({ header, text }: AccordionItemProps) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-4 px-8 py-6 w-full rounded-lg bg-[#2d2e2f] text-white">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="w-full">
          <h4 className="mt-1 text-lg font-bold text-white">{header}</h4>
        </div>
        <div className="flex h-6 w-full max-w-[40px] items-center justify-center rounded-lg bg-blue-400 ">
          <svg
            className={`fill-primary stroke-primary transition duration-300 ease-in text-white ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="#fff"
              stroke=""
            />
          </svg>
        </div>
      </button>

      <div
        className={`transition duration-300 ease-in ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 px-4 text-base leading-relaxed text-zinc-300">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Faq;
