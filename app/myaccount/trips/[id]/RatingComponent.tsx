"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { createReview } from "./actions";
import { useParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

const RatingComponent = () => {
  const { control, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      rating: 0,
      title: "",
      review: "",
    },
  });

  const [showRating, setShowRating] = useState(false);
  const { id } = useParams();
  const rating = watch("rating");

  const handleRatingClick = (rate) => {
    setValue("rating", rate);
  };

  const onSubmit = async (data) => {
    const date = new Date().toLocaleString();
    await createReview({
      rating: data.rating,
      title: data.title,
      comment: data.review,
      trip: id,
    });
    setShowRating(false);
    reset();

    console.log(data.rating,data.title,data.review)
  };

  return (
    <div>
      <button
        className="bg-white text-rose-600 text-lg font-bold px-4 py-2 rounded-md hover:bg-amber-50 mt-4"
        onClick={() => setShowRating(true)}
      >
        Rate Your Trip
      </button>

      {showRating && (
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
                    star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  fill={star <= rating ? "yellow" : "none"}
                  onClick={() => handleRatingClick(star)}
                />
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full p-2 sm:p-3 border rounded-lg mb-4 text-sm sm:text-base"
                    placeholder="Review title"
                  />
                )}
              />

              <Controller
                name="review"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="w-full p-2 sm:p-3 border rounded-lg mb-4 text-sm sm:text-base"
                    rows={4}
                    placeholder="Write your review here..."
                  />
                )}
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowRating(false);
                    reset();
                  }}
                  className="bg-gray-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md mr-2 text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-rose-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-rose-700 text-sm sm:text-base"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingComponent;


// "use client";

// import React, { useState } from "react";
// import { Star } from "lucide-react";
// import { createReview } from "./actions";
// import { useParams } from "next/navigation";

// const RatingComponent = () => {
//   const [showRating, setShowRating] = useState(false);
//   const [reviews, setReviews] = useState<any[]>([]);

//   const handleReviewSubmit = (rating: number, review: string, date: string) => {
//     setReviews([...reviews, { rating, review, date }]);
//   };
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [review, setReview] = useState("");
//   const [title, setTitle] = useState("");

//   const {id} = useParams()

//   const handleRatingClick = (rate: number) => {
//     setRating(rate);
//   };

//   const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setReview(e.target.value);
//   };

//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value);
//   };

//   const handleSubmit = async () => {

//     console.log(id)

//     const date = new Date().toLocaleString(); 
//    await createReview({
//     "rating": rating,
//     "title": title,
//     "comment": review,
//     "trip": id,
//    })
//     setShowRating(false);
//   };

//   return (
//     <div>
//       <button
//         className="bg-white text-rose-600 text-lg font-bold px-4 py-2 rounded-md hover:bg-amber-50 mt-4"
//         onClick={() => setShowRating(true)}
//       >
//         Rate Your Trip
//       </button>
//       {showRating && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//           <div className="bg-white mx-5 p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl">
//             <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4 text-center">
//               Rate Your Trip
//             </h2>

//             <div className="flex justify-center mb-4">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   className={`w-6 h-6 sm:w-8 sm:h-8 cursor-pointer ${
//                     star <= (hoverRating || rating)
//                       ? "text-yellow-500"
//                       : "text-gray-300"
//                   }`}
//                   fill={star <= (hoverRating || rating) ? "yellow" : "none"}
//                   onClick={() => handleRatingClick(star)}
//                   onMouseEnter={() => setHoverRating(star)}
//                   onMouseLeave={() => setHoverRating(0)}
//                 />
//               ))}
//             </div>

//             <input
//               type="text"
//               className="w-full p-2 sm:p-3 border rounded-lg mb-4 text-sm sm:text-base"
//               placeholder="Review title"
//               value={title}
//               onChange={handleTitleChange}
//             />

//             <textarea
//               className="w-full p-2 sm:p-3 border rounded-lg mb-4 text-sm sm:text-base"
//               rows={4}
//               placeholder="Write your review here..."
//               value={review}
//               onChange={handleReviewChange}
//             />

//             <div className="flex justify-end">
//               <button
//                 onClick={() => setShowRating(false)}
//                 className="bg-gray-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md mr-2 text-sm sm:text-base"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="bg-rose-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-rose-700 text-sm sm:text-base"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default RatingComponent;
