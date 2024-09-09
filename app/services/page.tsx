import { img } from "./image";
import ServiceCard from "./serviceCard";
import TemporaryDriverCard from "./temporaryDriverCard";
import ReviewCard from "./reviewCard";

import Image from "next/image";
const Done = () => {
  return (
    <section className="w-full flex flex-col bg-stone-100 items-center justify-center">
      <div className="w-full text-center sm:text-left flex flex-col items-center">
        <div className="flex flex-col items-center p-5 justify-center sm:flex-row sm:items-start my-10 gap-5">
          <div className="flex flex-col items-center sm:items-start gap-7 p-0 xl:p-5 md:px-10">
            <h1 className="text-rose-700 font-bold text-3xl md:text-5xl lg:text-6xl uppercase">
              Hire Drivers
            </h1>
            <h2 className="text-2xl italic md:text-4xl xl:text-5xl font-bold ">
              Your Personal Driver, Whenever You Need One
            </h2>
            <button className="bg-rose-600 text-white font-semibold p-10 py-3 hover:bg-rose-700 hover:shadow-md hover:shadow-rose-600 md:px-12 lg:px-14 xl:px-20 md:py-4 text-lg md:text-2xl rounded-full mt-10">
              Secure Your Ride Now
            </button>
          </div>
          <div className="w-4/5 mt-5 sm:mt-0 sm:w-2/3 md:2/3 lg:w-2/5">
            <Image src={img} alt="trips-image" className="object-cover" />
          </div>
        </div>

        <div className="w-full flex flex-col py-10 items-center justify-center lg:flex-row bg-rose-600 my-4 lg:my-12 lg:items-center lg:justify-center">
          <ServiceCard />
        </div>

        <div className="text-center pb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-rose-700 pb-5 font-bold uppercase">Temporary Drivers</h1>
          <p className="text-lg md:text-xl text-zinc-800">
            {" "}
            Now serving Ahmedabad, Bangalore, Chennai, Delhi NCR, Hyderabad,
            Kolkata, Mumbai & Pune
          </p>
        </div>

        <div className="w-full lg:w-5/6 xl:w-5/6 p-5 flex flex-col items-center gap-0 md:gap-5">
          <TemporaryDriverCard />
          <div className="flex justify-center">
            <button className="bg-rose-600 text-white font-semibold p-10 py-3 hover:bg-rose-700 hover:shadow-md hover:shadow-rose-600 md:px-12 lg:px-14 xl:px-20 md:py-4 text-lg md:text-2xl rounded-full mt-10">
              Book Now
            </button>
          </div>
        </div>


        <h1 className="text-3xl w-full text-center justify-items-center text-white bg-rose-600 p-4 font-bold mt-10 uppercase">Reviews</h1>

        <div className="w-4/5 sm:w-3/5 md:w-4/5 xl:w-3/5 flex flex-col gap-4 md:flex-row md:gap-4 md:justify-center my-5">
          <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export default Done;
