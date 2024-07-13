import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";
import ReviewItem from "./ReviewItem";
const reviewData = [
  {
    imgUrl: "/images/review1.png",
    name: "Kate Winslett",
    reviewText:
      "I found the perfect tent for my family camping trip at Campee Shop. The quality is great, and the shipping was fast. Our camping experience was enhanced by this purchase.",
    rating: 5,
  },
  {
    imgUrl: "/images/review2.png",
    name: "Emily Johnson",
    reviewText:
      "Campee Shop offers a variety of camping gear. The prices are reasonable and the quality unbeatable. I always find what I need for my adventures. Great shopping experience overall.",
    rating: 4,
  },
  {
    imgUrl: "/images/review3.png",
    name: "John Smith",
    reviewText:
      "I recently bought a sleeping bag from Campee Shop, and it was super comfortable and kept me warm all night. Highly recommend their products for quality and reliability.",
    rating: 5,
  },
  {
    imgUrl: "/images/review4.png",
    name: "Michael Davis",
    reviewText:
      "Amazing selection of camping gear. The staff was very helpful in guiding me to choose the right products for my needs. I'll definitely be a returning customer.",
    rating: 4.5,
  },
  {
    imgUrl: "/images/review5.png",
    name: "Sarah Brown",
    reviewText:
      "I love the variety of camping gear available at Campee Shop. The prices are competitive and the quality is exceptional. My go-to store for all my camping needs.",
    rating: 4,
  },
  {
    imgUrl: "/images/review6.png",
    name: "Jessica Green",
    reviewText:
      "Campee Shop exceeded my expectations with their fast delivery and high-quality products. I'll definitely be back for more. Great experience overall!",
    rating: 5,
  },
  {
    imgUrl: "/images/review7.png",
    name: "Chris Martin",
    reviewText:
      "Fantastic store with a great range of camping equipment. The website is easy to navigate and the checkout process was smooth. Highly recommend Campee Shop!",
    rating: 4.5,
  },
  {
    imgUrl: "/images/review8.png",
    name: "Laura Wilson",
    reviewText:
      "I'm extremely satisfied with my purchase from Campee Shop. The products are durable and the customer service is friendly and helpful. Will definitely shop here again!",
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
