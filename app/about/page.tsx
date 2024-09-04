import Image from "next/image";
import img from "@/app/services/image/home/Driver-Jobs.jpg";

import type { Metadata } from "next";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "About | Keedriver",
  description: "About Page",
};

export default function About() {
  return (
    <>
      <main className="w-full h-auto bg-stone-100 flex flex-col items-center">
        <div className="w-full mt-10 flex flex-col-reverse lg:flex-row-reverse justify-evenly items-center">
          <div className="flex flex-col px-5 sm:px-10 lg:mr-10 lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-rose-600 font-bold text-center lg:text-left">
              Join KeeDriver and Earn Up to ₹30,000/Month!
            </h1>
            <h2 className="mt-6 p-3 md:p-1 sm:mt-8 lg:mt-12 text-2xl sm:text-3xl text-rose-600 font-semibold text-center lg:text-left">
              Drive with us and enjoy flexible hours, daily payouts, and no
              upfront investment required.
            </h2>
            <div className="text-base sm:text-sm md:text-lg  mb-8 sm:mt-6 p-6 md:p-1 font-medium text-justify lg:text-left">
              <p>
                No car needed - everything is provided! Enjoy an easy sign-up,
                flexible hours, and competitive earnings with daily payouts.
                Drive various vehicles, from economy to luxury, and get
                comprehensive training and support. Experience a convenient and
                rewarding driving career!
              </p>
            </div>
          </div>
          <div className="w-full sm:w-4/5 lg:w-1/2 flex justify-center my-6 lg:my-0">
            <Image src={img} alt="" className="w-10/12 h-auto" />
          </div>
        </div>

        <div className="w-full bg-rose-700 text-white md:mt-20 my-10 border-white">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4 px-12 md:px-14 p-4 md:p-7 lg:p-10 lg:px-32">
            {/* Text Section */}
            <div className="flex flex-col text-center md:text-left md:w-1/3">
              <h3 className="text-xl md:text-2xl lg:text-5xl font-bold mb-4">
                Sign Up Now
              </h3>
              <p className="font-medium md:text-xl mb-6">
                Choose your city and start your journey with KeeDriver
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center w-full md:w-2/3">
              {/* Email Input */}
              <Input
                type="email"
                placeholder="Email"
                className="w-full md:w-1/2 p-4 sm:p-6 text-stone-800 shadow-inner shadow-stone-300"
              />

              {/* City Selection Dropdown */}
              <Select>
                <SelectTrigger className="w-full md:w-1/2 sm:w-full p-4 sm:p-6 shadow-inner shadow-stone-300 text-stone-800">
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Bengaluru">Bengaluru</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="Chennai">Chennai</SelectItem>
                    <SelectItem value="Mumbai">Mumbai</SelectItem>
                    <SelectItem value="Delhi">Delhi</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Submit Button */}
              <Link
                href="#"
                className="bg-stone-950 text-white text-lg sm:text-xl font-semibold hover:bg-stone-700 transition-colors rounded-lg py-2 lg:py-4 px-8 sm:px-12 text-center"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>

        {/*<div className="w-full flex flex-col p-6 gap-5 border bg-white rounded-md shadow-md shadow-stone-500 lg:flex-row">
            <Input
              type="email"
              placeholder="Email"
              className="w-full text-stone-800 border-stone-700 lg:w-2/5"
            />

            <Select>
              <SelectTrigger className="w-full text-stone-800 border-stone-700 lg:w-2/5">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Fruits</SelectLabel> /}
                  <SelectItem value="Bengaluru">Bengaluru</SelectItem>
                  <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="chennai">chennai</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Link href="#" className={buttonVariants({})}>
              submit
            </Link>
          </div>
          */}

        <div className="w-full flex flex-col justify-center gap-7 p-8 items-center md:items-start md:flex-row text-justify mt-5 md:mt-2">
          <div className="w-full md:w-3/5 flex flex-col p-6 gap-5">
            <h3 className="text-rose-600 text-center font-semibold text-2xl">
              KEE DRIVER - EXPERT DRIVING SERVICES
            </h3>
            <p className="text-base lg:text-lg">
              <span className="font-bold italic"> Keedriver</span> provides
              skilled and professional drivers for your car. Our drivers are
              experienced with various car models, from economy to luxury
              vehicles. We are committed to punctuality and ensuring you reach
              your destination on time. Our primary goal is customer
              satisfaction. For a safe and pleasant journey, call Keedriver.
              <br />
              <br />
              <span className="font-bold italic">
                  We offer exceptional 24-hour service anywhere, anytime, whether
                within the city or beyond
              </span>
              . Wherever you are, just give Keedriver a call to drive your car
              safely and securely.
              <br />
              <br />
                 We are more than just drivers; we are professionals dedicated to
              your comfort and safety. Our drivers are punctual and reliable,
              ensuring you a stress-free and enjoyable journey. In a busy city,
              avoid the hassle and fatigue of driving. Let us make your journey
              smooth and worry-free.
            </p>
          </div>
          <div className="w-full md:w-2/5 flex flex-col p-6 gap-5">
            <h3 className="text-rose-600 text-center font-semibold text-2xl">
              OUR STRENGTH
            </h3>
            <p className="text-base lg:text-lg">
                 Our drivers are skilled in handling all types of vehicles, from
              standard cars to luxury and high-end models, with meticulous care
              and attention.
              <br />
              <br />
                 We provide reliable call driver services throughout Chennai,
              catering to all our valued customers. Our services are highly
              regarded in the city for their quality and professionalism. Please
              feel free to contact us anytime to receive top-notch drivers at
              your doorstep, whether for personal use or for your esteemed
              organization.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
