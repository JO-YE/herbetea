import React from "react";

const reviews = [
  {
    id: 1,
    name: "Jennifer Adisson",
    rating: 5,
    review:
      "This tea really worked for my belly. It was my first time using this particular one. Kudos to the team. I’m really impressed.",
    time: "3 hours ago",
  },
  {
    id: 2,
    name: "Emily Stuart",
    rating: 5,
    review:
      "Absolutely love this herbal tea! The blend of chamomile and lavender is so soothing, perfect for unwinding after a long day.!",
    time: "4 hours ago",
  },
  {
    id: 3,
    name: "Karen Lee",
    rating: 5,
    review:
      "This herbal tea is a game-changer. I drink it every morning, and it helps me start my day feeling refreshed and balanced.",
    time: "3 hour ago",
  },
];

const ReviewBox = ({ name, rating, review, time }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="w-[394px] h-[302px] rounded-[10px] border border-green-900 p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049.957L7.156 6.09H1.6l4.517 3.288L4.201 16l4.849-3.572L13.898 16l-1.916-6.622L16.5 6.09h-5.556L9.049.957z" />
              </svg>
            ))}
            {rating % 1 !== 0 && (
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049.957L7.156 6.09H1.6l4.517 3.288L4.201 16l4.849-3.572L13.898 16l-1.916-6.622L16.5 6.09h-5.556L9.049.957z" />
              </svg>
            )}
          </div>
        </div>
        <p className="text-gray-600 mb-4">{review}</p>
        <p className="text-gray-400 text-sm">{time}</p>
      </div>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-neutral-900/opacity-90 text-4xl font-normal font-Quicksand">
        Reviews
      </h1>
      <div className="flex flex-wrap">
        {reviews.map((review) => (
          <ReviewBox
            key={review.id}
            name={review.name}
            rating={review.rating}
            review={review.review}
            time={review.time}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
