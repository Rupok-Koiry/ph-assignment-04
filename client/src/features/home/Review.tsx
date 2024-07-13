import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";
import ReviewItem from "./ReviewItem";
const reviewData = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Paul Starling",
    reviewText:
      "Campers Shop has everything I need for my camping trips! The gear is excellent, and the customer service is outstanding. I highly recommend it to all camping enthusiasts.",
    rating: 4.5,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kate Winslett",
    reviewText:
      "I found the perfect tent for my family camping trip at Campers Shop. The quality is great, and the shipping was fast. Our camping experience was enhanced by this purchase.",
    rating: 5,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1458696352784-ffe1f47c2edc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
    reviewText:
      "Campers Shop offers a variety of camping gear. The prices are reasonable and the quality unbeatable. I always find what I need for my adventures. Great shopping experience overall.",
    rating: 4,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name: "Emily Johnson",
    reviewText:
      "I recently bought a sleeping bag from Campers Shop, and it was super comfortable and kept me warm all night. Highly recommend their products for quality and reliability.",
    rating: 5,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Brown",
    reviewText:
      "Amazing selection of camping gear. The staff was very helpful in guiding me to choose the right products for my needs. I'll definitely be a returning customer.",
    rating: 4.5,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Davis",
    reviewText:
      "I love the variety of camping gear available at Campers Shop. The prices are competitive and the quality is exceptional. My go-to store for all my camping needs.",
    rating: 4,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jessica Green",
    reviewText:
      "Campers Shop exceeded my expectations with their fast delivery and high-quality products. I'll definitely be back for more. Great experience overall!",
    rating: 5,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de09d91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Chris Martin",
    reviewText:
      "Fantastic store with a great range of camping equipment. The website is easy to navigate and the checkout process was smooth. Highly recommend Campers Shop!",
    rating: 4.5,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1524646431754-1e170f22d3cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Laura Wilson",
    reviewText:
      "I'm extremely satisfied with my purchase from Campers Shop. The products are durable and the customer service is friendly and helpful. Will definitely shop here again!",
    rating: 5,
  },
];

const Review = () => {
  return (
    <section>
      <div className="container mx-auto py-12 lg:py-16 border-b border-black ">
        <SectionTitle
          title="Trusted Reviews"
          description="Discover what our customers are saying about their experiences with Campee Shop. Real reviews, real experiences."
        />

        <div className="relative">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
          >
            {reviewData.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewItem
                  imgUrl={review.imgUrl}
                  name={review.name}
                  reviewText={review.reviewText}
                  rating={review.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Review;
