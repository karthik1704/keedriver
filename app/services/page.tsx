import { img } from "./image";
import ServiceCard from "./serviceCard";
import TemporaryDriverCard from "./temporaryDriverCard";
import ReviewCard from "./reviewCard";

import Image from "next/image";
const Done = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full p-5 text-center sm:text-left xl:w-[90%] flex flex-col items-center">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start my-10 gap-5">
          <div className="lg:w-2/5 xl:w-1/3 flex flex-col items-center lg:items-start gap-7 p-0 xl:p-5">
            <h1 className="text-primary font-bold text-xl uppercase">
              Hire Drivers
            </h1>
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold ">
              Hire Temporary Drivers at Your Convenience
            </h2>
            <button className="bg-primary text-white font-semibold p-10 py-3  md:px-12 lg:px-14 xl:px-20 md:py-4 text-lg md:text-2xl rounded-sm mt-4">
              Book Now
            </button>
          </div>
          <div className="w-full mt-5 sm:mt-0 lg:w-2/5">
            <Image src={img} alt="trips-image" className="object-cover" />
          </div>
        </div>

        <div className="w-full flex flex-col items-center md:flex-row my-4 md:my-12 md:items-center md:justify-center">
          <ServiceCard />
        </div>

        <div className="text-center pb-10">
          <h1 className="text-3xl pb-5 font-bold uppercase">Temporary Drivers</h1>
          <p className="text-zinc-600">
            {" "}
            Now serving Ahmedabad, Bangalore, Chennai, Delhi NCR, Hyderabad,
            Kolkata, Mumbai & Pune
          </p>
        </div>

        <div className="w-full lg:w-4/5 xl:w-3/5 flex flex-col items-center gap-0 md:gap-5">
          <TemporaryDriverCard />
          <div className="flex justify-center">
            <button className="bg-primary text-white font-bold py-3 px-10">
              Book Now
            </button>
          </div>
        </div>


        <h1 className="text-3xl pb-5 font-bold mt-10 uppercase">Reviews</h1>

        <div className="w-full sm:w-3/5 md:w-4/5 xl:w-3/5 flex flex-col gap-4 md:flex-row md:gap-4 md:justify-center my-5">
          <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export default Done;
