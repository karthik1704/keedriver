import { AnyARecord } from "dns";
import {
  MapPin,
  Calendar,
  Timer,
  ArrowRight,
  ArrowLeft,
  Check,
  Car,
} from "lucide-react";
import Link from "next/link";

const TripCard = ({data}:{data: any}) => {

  return (
    <section className=" w-full flex flex-col items-end justify-end gap-4 relative lg:pl-10">
      <div className="w-full lg:w-full h-auto rounded-lg flex flex-col lg:flex-row items-end justify-end gap-4 bg-white shadow-lg border-t-4 border-stone-100 shadow-stone-400 hover:shadow-stone-500 p-6 relative">
        {/* Status */}
        <p className="flex items-center text-lg font-bold text-gray-800 gap-2 absolute top-2 right-2">
          <Check className="text-green-600" />
          Done
        </p>

        {/* Trip Info */}
        <p className="absolute left-0 bottom-1 text-lg font-semibold px-4 py-3 flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-rose-700 text-white flex items-center justify-center">
            <Car className="text-white h-6 w-6" />
          </span>
          Rounded trip
        </p>

        {/* Route Details */}
        <div className="flex flex-col w-full h-auto rounded-lg items-center md:mx-3 p-2 gap-4 relative">
          {/* From Section */}
          <div className="flex flex-col lg:flex-row w-full h-auto rounded-lg items-center md:mx-3 p-2 sm:p-4 gap-1 relative">
            <div className="w-full lg:w-1/2 flex justify-start border bg-stone-50 rounded-md p-2 sm:p-4">
              <ul className="w-full flex flex-col justify-around items-start text-start text-base text-gray-700 font-semibold capitalize gap-1">
                <li className="flex items-center justify-start gap-1 bg-rose-700 w-full p-1 rounded-sm text-lg text-white font-bold">
                  <ArrowRight className="h-5 w-5" />
                  From
                </li>
                <li className="flex items-center justify-start gap-1 font-medium">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Pallavaram
                </li>
                <li className="flex items-center justify-start gap-1 font-medium">
                  <Calendar className="h-5 w-5 text-green-600" />
                  12-04-2023
                </li>
                <li className="flex items-center justify-start gap-1 font-medium">
                  <Timer className="h-5 w-5 text-green-600" />
                  10.20am
                </li>
              </ul>
            </div>

            {/* To Section */}
            <div className="w-full lg:w-1/2 flex justify-start border bg-stone-50 rounded-md p-2 sm:p-4">
              <ul className="w-full flex flex-col justify-around items-start text-start text-base text-gray-700 font-semibold capitalize gap-1">
                <li className="flex items-center justify-start gap-1 bg-rose-700 w-full p-1 rounded-sm text-lg text-white font-bold">
                  <ArrowLeft className="h-5 w-5" />
                  To
                </li>
                <li className="flex items-center justify-start gap-1 font-medium">
                  <MapPin className="h-5 w-5 text-rose-700" />
                  {data.drop_location||'unknown'}
                </li>
                <li className="flex items-center justify-start gap-1 font-medium">
                  <Calendar className="h-5 w-5 text-rose-700" />
                  12-04-2023
                </li>
                <li className="flex items-center justify-start gap-1 font-medium">
                  <Timer className="h-5 w-5 text-rose-700" />
                  10.20am
                </li>
              </ul>
            </div>
          </div>

          {/* Driver Details */}
          <div className="w-full flex justify-start border bg-stone-50 rounded-md p-2 sm:p-4 mb-10">
            <ul className="w-full flex flex-col justify-around items-start text-start text-base text-gray-700 font-semibold capitalize gap-1">
              <li className="flex items-center justify-start gap-1 bg-rose-700 w-full p-1 rounded-sm text-lg text-white font-bold">
                Driver Details
              </li>
              <li className="flex items-center justify-start gap-1 font-medium">
                Name: {data.driver_name || 'unknown'}
              </li>
              <li className="flex items-center justify-start gap-1 font-medium">
                Phone Number: 95454257879
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};



export default TripCard;
