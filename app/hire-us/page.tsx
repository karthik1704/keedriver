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
      <main className=" bg-gray-100">
        <section className="bg-rose-700 flex flex-col md:flex-row items-center justify-center text-white text-center md:text-start py-12">
          <div className="mx-16 w-full md:w-2/3 lg:w-1/2 items-center justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Drive with Confidence- Hire Expert Drivers Today!
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2">
              Hire a Driver with KEEDRIVER!
            </h2>
            <button className="bg-white text-rose-700 text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium mt-6 p-5 py-2 px-4 rounded-full hover:bg-rose-100 hover:shadow-md hover:shadow-rose-200">
              Book a Driver Now
            </button>
          </div>
          <div className="w-4/5 mx-10 lg:mx-20 mt-5 md:2/5 lg:w-2/5 items-center justify-center">
            <Image src={img} alt="" className="object-cover" />
          </div>
        </section>

        <section className="flex items-center justify-center">
          <div className="w-full md:w-4/5 m-10 py-5 sm:px-10 md:px-20 items-center justify-cente md:mx-12 flex flex-col md:flex-rowmb-14 overflow-hidden">
            <h3 className="text-2xl md:text-4xl lg:text-6xl text-center font-semibold text-rose-600">
              Seamless Rides, Exceptional Service
            </h3>
            <p className="mt-4 text-lg md:text-xl text-center text-semibold text-gray-800">
              Welcome to KeeDriver, where your comfort and safety are our top
              priorities. Whether you need a driver for a special event, daily
              commutes, or just a reliable ride, we’ve got you covered.
            </p>
            <p className="mt-4 text-md md:text-lg text-justify text-gray-800">
              At KeeDriver, we understand that your time and comfort are
              precious. That's why we go the extra mile to provide you with a
              driving experience that is not only reliable but also tailored to
              your specific requirements. Whether you're planning a business
              trip, a family outing, or need a chauffeur for a special occasion,
              our professional drivers are here to ensure you reach your
              destination safely and on time.When you choose KeeDriver, you're not just hiring a driver—you're
              gaining a partner who is dedicated to making your journey as
              seamless and enjoyable as possible. Let us take the wheel while
              you sit back, relax, and enjoy the ride. Whether it's a quick trip
              across town or a long-distance journey, KeeDriver is here to
              provide you with exceptional service, every step of the way.
            </p>
            
          </div>
        </section>

        {/* Service Features Section */}
        <section className="flex justify-center items-center">
          <div className="w-full sm:w-5/6 py-10">
            <TempDriverCard />
          </div>

          {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <Image src={img1} alt="" className="mx-auto" />
            <h3 className="text-xl font-bold mt-4">Experienced Professionals</h3>
            <p className="mt-2">Our drivers are highly skilled and trained to ensure a smooth, safe journey.</p>
          </div>
          <div>
            <Image src={img2} alt="" className="mx-auto" />
            <h3 className="text-xl font-bold mt-4">Punctual & Reliable</h3>
            <p className="mt-2">We value your time. Expect timely arrivals and departures, every time.</p>
          </div>
          <div>
            <Image src={img3} alt="" className="mx-auto" />
            <h3 className="text-xl font-bold mt-4">Top-Notch Vehicles</h3>
            <p className="mt-2">Travel in comfort and style with our well-maintained, modern fleet.</p>
          </div>
          <div>
            <Image src={img4} alt="" className="mx-auto" />
            <h3 className="text-xl font-bold mt-4">Customer-Centric Service</h3>
            <p className="mt-2">Your satisfaction is our goal. Our drivers are courteous and attentive to your needs.</p>
          </div>
        </div> */}
        </section>

        <section className="flex bg-rose-700 flex-col p-10 items-center justify-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">How It Works</h3>
          <div className="flex flex-col md:flex-row text-gray-800">
          <div className="flex flex-col lg:flex-row md:flex-wrap md:gap-6 md:justify-center my-10 mx-auto">
          <div className="m-3 py-10 px-5 rounded-md basis-1/4 shadow-md shadow-rose-400 bg-white text-center">
          <p className="py-5 text-lg sm:text-2xl uppercase font-semibold">Choose Your Service</p>
            <div className="flex justify-center mb-5">
              <Image
                src={img6}
                alt=""
                width={75}
                height={75}
                className="rounded-full"
              />
            </div>
            <p className="py-5 text-sm sm:text-base font-semibold">
            Select from a range of options, from hourly hires to full-day
            services.
            </p>
          </div>


        <section className="bg-white flex flex-col md:flex-row p-5 md:p-10 md:gap-20 lg:gap-32 items-center justify-center">
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 p-5 md:p-10 lg:p-20 items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <Image
                src={img5}
                alt=""
                className=" items-center object-cover w-4/5 h-auto"
              />
            </div>
            <p className="mt-4 text-lg md:text-xl text-semibold text-center text-gray-800">
              Take advantage of our ongoing promotions and discounts for a
              limited time. <br />
              Check out our offers in the app for the best deals!
            </p>
          </div>

          <div className="w-full sm:w-4/5 border rounded-xl shadow-lg shadow-gray-400 bg-gray-50 md:w-3/5 lg:w-1/4 xl:w-1/5 mb-8 p-10 items-center justify-center">
            <h3 className="text-4xl font-semibold text-center text-rose-600">
              Get Started
            </h3>
            <p className="mt-4 text-lg text-center ">
              Ready to experience top-quality driving services? Download the{" "}
              <span className="font-bold">KEEDRIVER</span> app and book your
              driver today.
            </p>
            <p className="mt-4 py-8 text-lg text-center">
              <p className="text-xl font-bold">For Assistance</p> Contact us at{" "}
              <a href="tel:07200588582" className="text-rose-600 font-semibold">
                7200588582
              </a>
              !
            </p>
          </div>
        </section>

        <section className="w-full text-center sm:text-left flex flex-col items-center justify-center">
          <h1 className="text-3xl w-full text-center justify-items-center text-white bg-rose-600 p-4 font-bold  uppercase">
            Reviews
          </h1>
          <div className="w-4/5 sm:w-3/5 md:w-11/12 lg:w-4/5 xl:w-3/5 flex flex-col gap-4 md:flex-row md:gap-4 md:justify-center my-5">
            <ReviewCard />
          </div>
        </section>
      </main>
    </>
  );
};

export default HireUS;
