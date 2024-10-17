"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";

interface RatingComponentProps {
  onClose: () => void;
  onSubmit: (rating: number, review: string, date: string) => void;
}

const RatingComponent: React.FC<RatingComponentProps> = ({
  onClose,
  onSubmit,
}) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingClick = (rate: number) => {
    setRating(rate);
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    const date = new Date().toLocaleString(); // Get current date and time
    onSubmit(rating, review, date); // Pass data to TripDetailCard
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white mx-5 p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4 text-center">
          Rate Your Trip
        </h2>

        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-6 h-6 sm:w-8 sm:h-8 cursor-pointer ${
                star <= (hoverRating || rating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
              fill={star <= (hoverRating || rating) ? "yellow" : "none"}
              onClick={() => handleRatingClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            />
          ))}
        </div>

        <textarea
          className="w-full p-2 sm:p-3 border rounded-lg mb-4 text-sm sm:text-base"
          rows={4}
          placeholder="Write your review here..."
          value={review}
          onChange={handleReviewChange}
        />

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md mr-2 text-sm sm:text-base"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-rose-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-rose-700 text-sm sm:text-base"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
