import {
  MapPin,
  Landmark,
  Calendar,
  Clock,
  User,
  Phone,
  Fuel,
  Cog,
  RectangleEllipsis,
  Car,
  CarFront,
  Route,
  AlarmClock,
  Banknote,
  MoonStar,
  IndianRupee,
  Star,
 } from "lucide-react";

import RatingComponent from "./RatingComponent";
import { getTrip } from "@/services/trips";
import { getReviews } from "@/services/reviews";
import { format } from "date-fns";

interface Review {
  rating: number;
  review: string;
  date: string;
}

const TripDetailCard = async (
  props: {
    params: Promise<{ id: string }>;
  }
) => {
  const params = await props.params;
  const {
    id
  } = params;

  const trip = await getTrip(id);
  const rev = await getReviews(id);

  const pickupTime = format(trip.pickup_time, 'hh:mm a');
  // const pickupTime = format(new Date(trip.pickup_time), 'MMMM dd, yyyy');



  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-col items-center rounded-lg bg-rose-700 p-4 relative">
        <div className="text-white text-lg flex items-center gap-2 absolute top-3 right-3">
          <span className="inline-block">Status :</span>
          <span className="inline-block">{trip.trip_status}</span>
        </div>

        <div className="w-11/12 flex flex-col justify-center gap-3 mt-5">
          <div className="text-lg">
            <span className="text-white">From</span>
            <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2 flex items-center">
              <MapPin className="hidden md:inline-block mr-2 text-red-600" />
              <span className="inline-block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, repellendus!
              </span>
            </p>
          </div>

          <div className="text-lg">
            <span className="text-white">To</span>
            <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2 flex items-center">
              <MapPin className="hidden md:inline-block mr-2 text-red-600" />
              <span className="inline-block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, repellendus!
              </span>
            </p>
          </div>

          <div className="text-lg">
            <span className="text-white">Land Mark</span>
            <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2 flex items-center">
              <Landmark className="inline-block mr-2 text-red-600" />
              {trip.landmark}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-center text-white my-2">
              Trip Details
            </h4>
            <div className="text-lg grid sm:grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <span className="text-white">Trip Date</span>
                <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2">
                  <Calendar className="inline-block mr-2 text-red-600" />
                  06/09/2024
                </p>
              </div>
              <div>
                <span className="text-white">Trip Time</span>
                <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2">
                  <Clock className="inline-block mr-2 text-red-600" />
                  {pickupTime}
                </p>
              </div>
              <div>
                <span className="text-white">Trip Type</span>
                <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2">
                  <Route className="inline-block mr-2 text-red-600" />
                  round trip
                </p>
              </div>
              <div>
                <span className="text-white">Phone Number</span>
                <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2">
                  <Phone className="inline-block mr-2 text-red-600" />
                  {trip.alternate_phone_number}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl capitalize font-semibold text-center text-white my-2">
              Driver Details
            </h4>
            <div className="text-lg grid sm:grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <span className="text-white">Name</span>
                <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2">
                  <User className="inline-block mr-2 text-red-600" />
                 {trip.driver_name}
                </p>
              </div>
              <div>
                <span className="text-white">Phone Number</span>
                <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2">
                  <Phone className="inline-block mr-2 text-red-600" />
                  {trip.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-xl capitalize mb-4 font-semibold text-white text-center">
              Car Details
            </h3>
            <ul className="w-full bg-white rounded-lg grid lg:grid-cols-3 items-center gap-2 p-3">
              <li className="w-full">
                <span className="mb-3 inline-block font-bold border-b-2 border-rose-700 pb-1">
                  Car Name
                </span>
                <div className="flex gap-3 text-gray-700 rounded-lg">
                  <CarFront className="text-rose-700" />
                  <span className="font-semibold">Innova</span>
                </div>
              </li>
              <li className="w-full">
                <span className="mb-3 inline-block font-bold border-b-2 border-rose-700 pb-1">
                  Car Model
                </span>
                <div className="flex gap-3 text-gray-700 rounded-lg">
                  <Car className="text-rose-700" />
                  <span className="font-semibold">SUV</span>
                </div>
              </li>
              <li className="w-full">
                <span className="mb-3 inline-block font-bold border-b-2 border-rose-700 pb-1">
                  Registration No
                </span>
                <div className="flex gap-3 text-gray-700 rounded-lg">
                  <RectangleEllipsis className="text-rose-700" />
                  <span className="font-semibold">{trip.registration_number}</span>
                </div>
              </li>
              <li className="w-full">
                <span className="mb-3 inline-block font-bold border-b-2 border-rose-700 pb-1">
                  Gear Type
                </span>
                <div className="flex gap-3 text-gray-700 rounded-lg">
                  <Cog className="text-rose-700" />
                  <span className="font-semibold">Manual</span>
                </div>
              </li>
              <li className="w-full">
                <span className="mb-3 inline-block font-bold border-b-2 border-rose-700 pb-1">
                  Gas
                </span>
                <div className="flex gap-3 text-gray-700 rounded-lg">
                  <Fuel className="text-rose-700" />
                  <span className="font-semibold">Petrol</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-3">
            <h3 className="text-xl capitalize mb-4 font-semibold text-white text-center">
              Trip Amount
            </h3>
            <div className="w-full text-lg grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <span className="text-white">Estimate Time</span>
                <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2 flex items-center gap-2">
                  <AlarmClock className="inline-block mr-2 text-red-600" />
                  <span>10 hr</span>
                </p>
              </div>
              <div>
                <span className="text-white">Estimate Cost</span>
                <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2 flex items-center gap-2">
                  <Banknote className="inline-block mr-2 text-red-600" />
                  <span>600</span>
                </p>
              </div>
              <div>
                <span className="text-white">Night Shift Allowance</span>
                <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2 flex items-center gap-2">
                  <MoonStar className="inline-block mr-2 text-red-600" />
                  <span>200</span>
                </p>
              </div>
              <div>
                <span className="text-white">Total</span>
                <p className="bg-white p-2 text-md text-gray-700 rounded-lg mt-2 flex items-center gap-2">
                  <IndianRupee className="inline-block mr-2 text-red-600" />
                  <span>{trip.amount}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <RatingComponent />

      </div>

      <div className="flex flex-col gap-4">
      <h2 className="bg-rose-700 w-9/12 mx-auto text-center rounded-t-lg p-3 text-2xl font-bold text-white my-4">Review</h2>

  {rev.results.map((result, index) => (
    <div key={index} className="w-full">
      <div className="shadow-md bg-white transition-shadow hover:shadow-md duration-300 ease-in-out rounded-lg w-9/12 mx-auto mt-8">

        <div className="p-6">
        <h2 className="text-stone-700 text-right">
        {new Date(result.created_at).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })}
        </h2>
        

        <div className="mb-4 ">
        {/* <h3 className="text-base text-stone-700 font-semibold">Rating </h3> */}
        <div className="flex items-center">
          {Array.from({length:5},(_,i)=>{
            return(
<span key={i}>
                  <Star
                    className={`${
                      i < result.rating
                        ? 'text-yellow-500' 
                        : 'text-gray-300' 
                    }`}
                    fill={i + 1 <= result.rating ? "yellow" : "none"}
                  />
                </span>
            )
          })}
        </div>
        </div>

        <div className="mb-4">
          {/* <h3 className="text-base text-stone-700 font-semibold">Title </h3> */}
          <p className="text-stone-800 font-bold">{result.title}</p>
        </div>

        <div className="mb-4">
        {/* <h3 className="text-base text-stone-700 font-semibold">Comment </h3> */}
        <span className="text-stone-800 font-medium">{result.comment}</span>
        </div>

        </div>

      </div>
    </div>
  ))}
</div>

      
    </div>
  );
};

export default TripDetailCard;
