import Image from "next/image";
import img from "@/app/services/image/driver_hire.jpeg";
import img1 from "@/app/services/image/edperienced_driver.webp";
import img2 from "@/app/services/image/punctual.avif";
import img3 from "@/app/services/image/cabs.jpg";
import img4 from "@/app/services/image/cutomer_services.jpeg";

import img5 from "@/app/services/image/special_offer.jpg";
import img6 from "@/app/services/image/home/trip.png";
import img7 from "@/app/services/image/home/driver.png";
import img8 from "@/app/services/image/home/start.png";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import TempDriverCard from "./tempDriverCard";
import ReviewCard from "./ReviewsCard";

const HireUS = () => {
  return (
    <>
      <main className="bg-gray-100">
        {/* Header Section */}
        <section className="bg-rose-700 flex flex-col md:flex-row items-center justify-center text-white text-center md:text-start py-12">
          <div className="mx-16 w-full md:w-2/3 lg:w-1/2 items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              Drive with Confidence—Hire Expert Drivers Today!
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold mt-2">
              Hire a Driver with KeeDriver!
            </h2>
            <button className="bg-white text-rose-700 text-xl md:text-2xl font-medium mt-6 p-4 rounded-full hover:bg-rose-100 hover:shadow-md">
              Book a Driver Now
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-5 lg:mt-0 flex items-center justify-center">
            <Image
              src={img}
              alt="Driver Hire"
              className="object-cover w-3/4 rounded-md shadow-lg"
            />
          </div>
        </section>

        {/* Welcome Section */}
        <section className="p-5 md:p-10 bg-gray-100">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h3 className="text-rose-600 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
              Seamless Rides, Exceptional Service
            </h3>
            <p className="mt-4 text-md md:text-lg lg:text-xl text-gray-800 max-w-4xl">
              Welcome to KeeDriver, where your comfort and safety are our top
              priorities. Whether you need a driver for a special event, daily
              commutes, or just a reliable ride, we’ve got you covered.
            </p>
            <p className="mt-4 text-sm md:text-md lg:text-lg text-gray-800 text-justify max-w-6xl">
              At KeeDriver, we understand that your time and comfort are
              precious. That's why we go the extra mile to provide you with a
              driving experience that is not only reliable but also tailored to
              your specific requirements. Whether you're planning a business
              trip, a family outing, or need a chauffeur for a special occasion,
              our professional drivers are here to ensure you reach your
              destination safely and on time. When you choose KeeDriver, you're
              not just hiring a driver—you're gaining a partner who is dedicated
              to making your journey as seamless and enjoyable as possible.
            </p>
          </div>
        </section>

        {/* Service Features Section */}
        <section className="py-5 xl:p-10 bg-white">
          <div className="flex flex-wrap items-center justify-center mx-0 xl:mx-auto">
            <TempDriverCard />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-rose-700 py-6 text-white">
          <h3 className="text-center text-2xl md:text-4xl font-bold mb-10">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-2 lg:gap-10 px-6 md:flex-wrap md:justify-around my-20 mx-3 sm:mx-20 md:mx-2">
            <div className="bg-white text-rose-700 rounded-lg shadow-lg h-full text-center m-2 py-2 sm:py-5 xl:py-8 shadow-rose-900 flex flex-col justify-around">
              <p className="uppercase font-semibold p-2 lg:py-5 text-xl lg:text-2xl">
                Choose Your Service
              </p>
              <div className="my-5  flex justify-center">
                <Image
                  src={img6}
                  alt="Service"
                  width={75}
                  height={75}
                  className="mx-auto rounded-full"
                />
              </div>
              <p className="text-sm sm:text-base font-semibold p-2 lg:py-5 text-md lg:text-base">
                Select from a range of options, from hourly hires to full-day
                services.
              </p>
            </div>

            <div className="bg-white text-rose-700 rounded-lg shadow-lg h-full text-center m-2 py-2 sm:py-5 xl:py-8 shadow-rose-900 flex flex-col justify-around">
              <p className="uppercase font-semibold p-2 lg:py-5 text-xl lg:text-2xl">
                Track Your Driver
              </p>
              <div className="my-5 flex justify-center">
                <Image
                  src={img7}
                  alt="Tracking"
                  width={75}
                  height={75}
                  className="mx-auto rounded-full"
                />
              </div>
              <p className="text-sm sm:text-base font-semibold p-2 lg:py-5 text-md lg:text-base">
                Stay updated with real-time driver tracking and notifications.
              </p>
            </div>

            <div className="bg-white text-rose-700 rounded-lg shadow-lg h-full text-center m-2 py-2 sm:py-5 xl:py-8 shadow-rose-900 flex flex-col justify-around">
              <p className="uppercase font-semibold p-2 lg:py-5 text-xl lg:text-2xl">
                Enjoy Your Ride
              </p>
              <div className="my-5  flex justify-center">
                <Image
                  src={img8}
                  alt="Enjoy Ride"
                  width={75}
                  height={75}
                  className="mx-auto rounded-full"
                />
              </div>
              <p className="text-sm sm:text-base font-semibold p-2 lg:py-5 text-md lg:text-base">
                Sit back and relax while our drivers take care of the journey.
              </p>
            </div>
          </div>
        </section>

        {/* Promotion Section */}
        <section className="bg-white p-5 md:p-16 flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center max-w-6xl gap-10">
            <div className="w-full md:w-1/2 lg:px-10 flex items-center justify-center">
              <Image src={img5} alt="Special Offer" className="w-full" />
            </div>
            <div className="w-full md:w-1/2 lg:px-10 bg-gray-50 p-10 rounded-md shadow-lg">
              <h3 className="text-rose-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
                Get Started
              </h3>
              <p className="text-sm md:text-md lg:text-lg text-center">
                Ready to experience top-quality driving services? Download the{" "}
                <span className="font-bold">KeeDriver</span> app and book your
                driver today.
              </p>
              <p className=" text-md text-center mt-6">
                <span className="font-bold text-xl">For Assistance:</span>{" "}
                <br />
                Contact us at{" "}
                <a
                  href="tel:07200588582"
                  className="text-rose-600 font-semibold"
                >
                  7200588582
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="w-full text-center flex flex-col items-center justify-center py-10">
          <h1 className="text-3xl w-full p-4 bg-rose-600 text-white font-bold uppercase mb-5">
            Reviews
          </h1>
          <div className="w-4/5 flex flex-col md:flex-row md:justify-center gap-6 sm:w-3/5 md:w-5/6 xl:w-3/5 md:gap-4 my-5">
            <ReviewCard />
          </div>
        </section>
      </main>
    </>
  );
};

export default HireUS;