import { useState } from "react";

const StarRating = ({ onRate }) => {
  const [rating, setRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-2">
      {stars.map((star) => (
        <span
          key={star}
          className={`text-2xl cursor-pointer transition ${
            star <= rating ? "text-yellow-400" : "text-gray-400"
          }`}
          onClick={() => {
            setRating(star);
            onRate(star);
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
