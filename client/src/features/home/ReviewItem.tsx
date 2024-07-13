import React from "react";
import Rating from "../../components/Rating";

interface ReviewItemProps {
  imgUrl: string;
  name: string;
  reviewText: string;
  rating: number;
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  imgUrl,
  name,
  reviewText,
  rating,
}) => {
  return (
    <blockquote className="rounded-lg bg-[#2d2e2f]  p-6 shadow sm:p-8">
      <div className="flex items-center gap-4">
        <img
          alt={name}
          src={imgUrl}
          className="size-14 rounded-full object-cover"
        />

        <div>
          <div className="">
            <Rating value={rating} />
          </div>

          <p className="mt-0.5 text-lg font-medium text-white">{name}</p>
        </div>
      </div>

      <p className="mt-4 text-zinc-300">{reviewText}</p>
    </blockquote>
  );
};

export default ReviewItem;
