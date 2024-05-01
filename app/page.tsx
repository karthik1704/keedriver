import Image from "next/image";

import img from "@/app/services/image/home/car.png";
import img1 from "@/app/services/image/home/trip.png";
import img2 from "@/app/services/image/home/driver.png";
import img3 from "@/app/services/image/home/start.png";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4">
       
          <div className="grid md:grid-cols-1 lg:grid-cols-2 md:space-x-7 my-10 mx-5 md:mx-36 ">
            <div className="row-span-3 md:basis-1/3">
              <h1 className="col-span-2 my-12 text-primary font-bold text-4xl">
                We Drive You Thrive
              </h1>
              <h2 className="row-span-2 text-xl mb-9 font-bold  my-5">
                We Provide on excellent Service for 24 hours any where anytime
              </h2>
              <button className="bg-primary text-white font-medium px-12 py-3 text-2xl my-7">
                Call us Now - 072005 88582
              </button>
            </div>
            <div className="row-span-5">
              <Image src={img} alt="" width={800} height={200} />
            </div>
          </div>
      

        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-4 md:justify-center my-20 mx-auto ">
          <div className=" m-3 basis-1/4 shadow-xl text-center">
            <div className="mx-36">
              <Image
                src={img1}
                alt=""
                width={75}
                height={75}
                className="rounded-full"
              />
            </div>
            <p className="text-red-700 py-5 font-semibold">Select Your Trip</p>
            <p className="py-5 font-semibold">1</p>
            <p className="py-5 font-semibold">
              Select your trip by entering location in Pickup & Drop Menu
            </p>
          </div>

          <div></div>
          <div className=" m-3 basis-1/4 shadow-xl text-center">
            <div className="mx-36">
              <Image
                src={img2}
                alt=""
                width={75}
                height={75}
                className="rounded-full"
              />
            </div>
            <p className="text-red-700 py-5 font-semibold">Book a Driver</p>
            <p className="py-5 font-semibold">2</p>
            <p className="py-5 font-semibold">
              Enter the Date and Time for Booking.
            </p>
          </div>

          <div className=" m-3 basis-1/4 shadow-xl text-center">
            <div className="mx-36 ">
              <Image
                src={img3}
                alt=""
                width={75}
                height={75}
                className="rounded-full"
              />
            </div>
            <p className="text-red-700 py-10 font-semibold">All set to go</p>
            <p className="py-2 font-semibold">3</p>
            <p className="py-5 font-semibold">
              That&apos;s it. Our Driver will call you in 10 minutes before the
              TRIP
            </p>
          </div>
        </div>

        <h1 className="text-center py-5 font-bold">OUR TARIFF</h1>

        <div className="md:grid-cols-2 lg:grid-cols-4 grid gap-4 text text-center mx-11 my-24">
          {/* <div className="p-4">Our Tariff</div> */}
          <div>
            <h1 className="p-3 font-semibold">Normal Tarif</h1>
            <p>Read more</p>
          </div>

          <div>
            <h1 className="p-3 font-semibold">
              Normal Tariff(Hi-Luxuary cars)
            </h1>
            <p>Read more</p>
          </div>

          <div>
            <h1 className="p-3 font-semibold">Outstation Tarif</h1>
            <p>Read more</p>
          </div>

          <div>
            <h1 className="p-3 font-semibold">
              Outstation Drop Only(Every KM Calculated)
            </h1>
            <p>Read more</p>
          </div>
        </div>

        <h1 className="text-center py-10 font-bold">Why KeeDriver</h1>

        <div className="flex flex-row justify-center py-36 bg-green-500 ">
          <div className="basis-1/4 font-semibold">
            <p>1000+</p>
            <p>Successful Booking</p>
          </div>

          <div className="basis-1/4 font-semibold ">
            <p>100+</p>
            <p>Trusted Drivers</p>
          </div>

          <div className="basis-1/4 font-semibold">
            <p>2000+</p>
            <p>Satisfied Customers</p>
          </div>
        </div>

        <br></br>

        <div className="flex flex-col text-center bg-emerald-600 py-12 ">
          <div className="font-bold">Testimonial</div>
          <div className="py-32  mx-14 font-semibold">
            &quot;I am very glad to refer you, people, the Kee Driver, Drivers
            drop on time and they us on time. Punctuality is what Kee Drivers
            is! We feel very safe and secure journey with well experienced and
            professional drivers with Kee Drivers&quot;
          </div>
          <div className="font-semibold">Alex</div>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default Home;
