import Image from "next/image";

import img from "@/app/services/image/home/car.png";
import img1 from "@/app/services/image/home/trip.png";
import img2 from "@/app/services/image/home/driver.png";
import img3 from "@/app/services/image/home/start.png";
import img4 from "@/app/services/image/booking_process.jpeg";
import img5 from "@/app/services/image/driver.jpeg";
import img6 from "@/app/services/image/happy_customer.jpeg";

const Home = () => {
  return (
    <>
      <div className="bg-hmbg">
        <div className="grid gap-10 lg:grid-cols-2 md:space-x-7 my-10 md:my-5 mx-5 md:mx-36">
          <div className="flex flex-col justify-center">
            <h1 className="mt-12 text-white font-semibold text-2xl text-center lg:text-left">
              Join KeeDriver Today!
            </h1>
            <h1 className="mt-8 text-turquoise font-bold text-4xl md:text-6xl lg:text-7xl text-center lg:text-left">
              We Drive You Thrive
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-turquoise mb-9 font-medium my-5 text-center lg:text-left">
              We provide a safe journey, anytime, anywhere, with our 24/7
              service.
            </h2>
          </div>
          <div className="flex justify-center">
            <Image
              src={img}
              alt=""
              width={1000}
              height={200}
              className="w-full max-w-md"
            />
          </div>
        </div>

        <div className="bg-turquoise text-black p-10 border-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex-1 p-3 md:p-5">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                Find Your Driver, It's Easy and Reliable
              </h1>
              <p className="md:text-lg mb-3 md:mb-6">
                Connecting car owners with active drivers for a seamless driving
                experience.
              </p>
            </div>
            <div className="flex flex-col items-center p-3 md:p-5">
              <div className="flex items-center mb-2 md:mb-4">
                <p className="text-2xl font-bold">Contact:</p>
                <span className="text-2xl font-semibold ml-2">7200588582</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap lg:gap-4 md:justify-around my-20 mx-3 sm:mx-20 md:mx-2">
          <div className="m-2 py-2 sm:py-5 xl:py-8 px-5 rounded-md basis-1/4 shadow-xl shadow-stone-400 bg-red-400 text-center">
            <div className="flex justify-center mb-5">
              <Image
                src={img1}
                alt=""
                width={75}
                height={75}
                className="rounded-full"
              />
            </div>
            <p className="py-2 lg:py-5 text-xl lg:text-2xl font-semibold">SELECT A TRIP</p>
            <p className="lg:py-2 text-white text-3xl lg:text-5xl font-bold">1</p>
            <p className="py-2 lg:py-5 text-md lg:text-base font-semibold">
              Select your Pickup & Drop location Menu
            </p>
          </div>

          <div className="m-2 py-2 sm:py-5 xl:py-8 px-5 rounded-md basis-1/4 shadow-xl shadow-stone-400 bg-amber-400 text-center">
            <div className="flex justify-center mb-5">
              <Image
                src={img2}
                alt=""
                width={75}
                height={75}
                className="rounded-full"
              />
            </div>
            <p className="py-2 lg:py-5 text-xl lg:text-2xl font-semibold">BOOK A DRIVER</p>
            <p className="lg:py-2 text-white text-3xl lg:text-5xl font-bold">2</p>
            <p className="py-2 lg:py-5 text-md lg:text-base font-semibold">
              Enter the Date and Time for Booking.
            </p>
          </div>

          <div className="m-2 py-2 sm:py-5 xl:py-8 px-5 rounded-md basis-1/4 shadow-xl shadow-stone-400 bg-green-500 text-center">
            <div className="flex justify-center mb-5">
              <Image
                src={img3}
                alt=""
                width={75}
                height={75}
                className="rounded-full"
              />
            </div>
            <p className="py-2 lg:py-5 text-xl lg:text-2xl font-semibold">ALL SET TO GO</p>
            <p className="lg:py-2 text-white text-3xl lg:text-5xl font-bold">3</p>
            <p className="py-2 lg:py-5 text-md lg:text-base font-semibold">
              Our Driver will call you in 10 minutes before the TRIP
            </p>
          </div>
        </div>

        <h1 className="text-center text-4xl my-2 text-turquoise font-bold">
          OUR TARIFF
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mx-2 md:mx-4 mb-10">
          <div className=" m-5">
            <h1 className="p-2 text-turquoise text-xl font-semibold">
              Normal Tariff
            </h1>
            <p className="text-justify text-white">
              Here’s an improved version with added detail: Our standard tariff
              is tailored to meet the everyday transportation needs of both
              individuals and families. Whether you’re commuting to work,
              running errands, or heading out for a casual outing, we offer
              reliable, professional drivers at a price that fits your budget.
              With a fleet of good vehicles and a team of experienced drivers,
              you can count on us for a smooth, safe, and hassle-free journey
              every time.
            </p>
            <p className="italic font-bold text-justify text-white">
              {" "}
              24/7 availability, Background-verified drivers, Affordable city
              rates, Real-time tracking, Easy booking process.
            </p>
          </div>
          <div className="m-5">
            <h1 className="p-2 text-turquoise text-xl font-semibold">
              Normal Tariff
              <br />
              (Hi-Luxury cars)
            </h1>
            <p className="text-justify text-white">
              For those who prefer to travel in style, our luxury car service is
              the perfect choice. This premium offering allows you to ride in
              high-end vehicles such as BMWs, Audis, and Mercedes-Benz,
              accompanied by highly trained drivers who prioritize your comfort
              and privacy. Ideal for business trips, special occasions, or when
              you simply want to enjoy a luxurious experience on the road.
            </p>
            <p className="italic font-bold text-justify text-white">
              {" "}
              Premium luxury vehicles, Professional chauffeur service, Enhanced
              comfort and privacy, Ideal for business or special events,
              Guaranteed punctuality.
            </p>
          </div>
          <div className="m-5">
            <h1 className="p-2 text-turquoise text-xl font-semibold">
              Outstation Tariff
            </h1>
            <p className="text-justify text-white">
              Heading out of town? Our outstation service is designed to make
              long-distance travel stress-free. Whether you're going for a
              family vacation, a business trip, or a weekend getaway, we offer
              well-planned routes and expert drivers who are familiar with
              outstation journeys. Enjoy the freedom to travel without worrying
              about fuel, tolls, or navigation—we take care of everything.
            </p>
            <p className="italic font-bold text-justify text-white">
              {" "}
              Transparent pricing for long trips, Experienced drivers for
              outstation travel, One-way or round-trip options, Safe,
              comfortable vehicles, Flexible stops along the way.
            </p>
          </div>
          <div className=" m-5">
            <h1 className="p-2 text-turquoise text-xl font-semibold">
              Outstation Drop Only (Calculated Per KM)
            </h1>
            <p className="text-justify text-white">
              This service is perfect for those who need a one-way drop to a
              destination outside the city. Whether you're visiting relatives,
              traveling for work, or need a transfer to another city, you only
              pay for the kilometers you travel, ensuring a cost-effective
              solution for your one-way travel needs. Enjoy a comfortable,
              timely, and safe journey, while our professional drivers handle
              the road.
            </p>
            <p className="italic font-bold text-justify text-white">
              {" "}
              Pay-per-kilometer pricing, Ideal for one-way outstation trips,
              Reliable and timely service, Vehicle options for comfort, Easy,
              cost-effective booking.
            </p>
          </div>
        </div>

        <h1 className="text-center py-2 text-turquoise text-3xl md:text-4xl font-bold">
          Why Choose KeeDriver
        </h1>

        <div className="flex flex-col md:flex-row justify-center px-5 lg:px-16 py-10 md:py-24 bg-stone-950">
          <div className="lg:basis-1/3 px-5 lg:px-10 xl:px-16 mb-10 lg:mb-0">
            <div className="flex justify-center mb-5">
              <Image
                src={img4}
                alt=""
                width={105}
                height={105}
                className="rounded-full"
              />
            </div>
            <h3 className="font-semibold text-center mb-5 text-turquoise text-2xl">
              Convenient Booking Process
            </h3>
            <p className="text-white text-center lg:text-justify text-lg">
              With over 1,000 successful bookings, our user-friendly platform
              makes it easy to book your ride anytime, anywhere. Your
              convenience is our commitment.
            </p>
          </div>
          <div className="lg:basis-1/3 px-5 lg:px-10 xl:px-16  mb-10 lg:mb-0">
            <div className="flex justify-center mb-5">
              <Image
                src={img5}
                alt=""
                width={105}
                height={105}
                className="rounded-full"
              />
            </div>
            <h3 className="font-semibold text-center mb-5 text-turquoise text-2xl">
              Experienced and Trusted Drivers
            </h3>
            <p className="text-white text-center lg:text-justify text-lg">
              Our drivers are highly experienced and background-verified to
              provide you with the safest and smoothest rides. Your security and
              satisfaction are our top priorities.
            </p>
          </div>
          <div className="lg:basis-1/3 lg:px-10 xl:px-16">
            <div className="flex justify-center mb-5">
              <Image
                src={img6}
                alt=""
                width={105}
                height={105}
                className="rounded-full"
              />
            </div>
            <h3 className="font-semibold text-center mb-5 text-turquoise text-2xl">
              Thousands of Happy Customers
            </h3>
            <p className="text-white text-center lg:text-justify text-lg">
              Join our community of over 2,000 satisfied customers who trust
              KeeDriver for their travel needs. We are dedicated to providing
              exceptional service, making every trip memorable.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center pt-20">
          <div className="font-bold text-4xl text-turquoise">Testimonial</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mx-5 md:mx-11 my-8 mb-24">
            <div className="w-full border shadow-md shadow-stone-400 bg-white rounded-lg">
              <div className="pt-10 md:pt-24 mx-8 font-medium">
                &quot;I highly recommend KeeDriver! Their drivers are always
                punctual, picking us up and dropping us off on time. KeeDriver
                truly values punctuality! We always feel safe and secure with
                their experienced and professional drivers.&quot;
              </div>
              <div className="font-semibold p-10 text-xl">— Alex</div>
            </div>
            <div className="w-full border shadow-md shadow-stone-400 bg-white rounded-lg">
              <div className="pt-10 md:pt-24 mx-8 font-medium">
                &quot;I highly recommend KeeDriver! Their drivers are always
                punctual, picking us up and dropping us off on time. KeeDriver
                truly values punctuality! We always feel safe and secure with
                their experienced and professional drivers.&quot;
              </div>
              <div className="font-semibold p-10 text-xl">— Alex</div>
            </div>
            <div className="w-full border shadow-md shadow-stone-400 bg-white rounded-lg">
              <div className="pt-10 md:pt-24 mx-8 font-medium">
                &quot;I highly recommend KeeDriver! Their drivers are always
                punctual, picking us up and dropping us off on time. KeeDriver
                truly values punctuality! We always feel safe and secure with
                their experienced and professional drivers.&quot;
              </div>
              <div className="font-semibold p-10 text-xl">— Alex</div>
            </div>
            <div className="w-full border shadow-md shadow-stone-400 bg-white rounded-lg">
              <div className="pt-10 md:pt-24 mx-8 font-medium">
                &quot;I highly recommend KeeDriver! Their drivers are always
                punctual, picking us up and dropping us off on time. KeeDriver
                truly values punctuality! We always feel safe and secure with
                their experienced and professional drivers.&quot;
              </div>
              <div className="font-semibold p-10 text-xl">— Alex</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
