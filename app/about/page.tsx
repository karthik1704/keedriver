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
          <div className="flex flex-col mr-10 sm:w-full md:w-3/5">
            <h1 className="text-6xl text-rose-600 font-bold text-center lg:text-left">
              Join KeeDriver and Earn Up to ₹30,000/Month!
            </h1>
            <h2 className="col-span-2 mt-12 text-rose-600 font-semibold text-3xl text-center lg:text-left">
              Drive with us and enjoy flexible hours, daily payouts, and no upfront investment required.
            </h2>
            <div className="row-span-2 text-lg mb-9 my-5 font-medium text-center lg:text-left">
              <p>No car needed - everything is provided! Enjoy an easy sign-up, flexible hours, and competitive earnings with daily payouts. Drive various vehicles, from economy to luxury, and get comprehensive training and support. Experience a convenient and rewarding driving career!</p>
            </div>
          </div>
          <div className="sm:w-4/5 my-10 ml-36 md:w-3/5 lg:w-1/2">
            <Image src={img} alt="" className="w-10/12 h-10/12" />
          </div>
        </div>

        <div className="w-full bg-rose-700 text-white border-white">
          <div className="flex w-full p-10 px-40 flex-col lg:flex-row justify-between items-center gap-4">  
            {/* Text Section */}
            <div className="flex flex-col text-left lg:w-1/3">
              <h3 className="text-5xl font-bold text-white mb-4">Sign Up Now</h3>
              <p className="text-white font-medium text-2xl mb-6">Choose your city and start your journey with KeeDriver</p>
            </div>

            {/* Form Section */}
            <div className="flex flex-row gap-7 items-end justify-end lg:w-2/3">
              {/* Email Input */}
              <Input
                type="email"
                placeholder="Email"
                className="w-1/3 p-6 text-stone-800 shadow-inner shadow-stone-300"
              />

              {/* City Selection Dropdown */}
              <Select>
                <SelectTrigger className="w-1/3 p-6 shadow-inner shadow-stone-300 text-stone-800">
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
              <Link href="#" className={buttonVariants({ className: "bg-stone-950 text-white text-xl font-semibold hover:bg-stone-700 transition-colors rounded-lg py-6 px-12 text-center" })}>
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
       

       

        <div className="w-full flex flex-col justify-center gap-7 p-2 items-center lg:items-start lg:flex-row text-center lg:text-start  mt-5 lg:w-4/5">
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 flex flex-col p-6 gap-5">
            <h3 className="text-rose-600 font-semibold text-2xl">KEE DRIVER - EXPERT DRIVING SERVICES</h3>
            <p className="text-lg row-span-2">
              <span className="font-bold italic">Keedriver</span> provides skilled and professional drivers for your car. 
              Our drivers are experienced with various car models, from economy to luxury vehicles. We are committed
               to punctuality and ensuring you reach your destination on time. Our primary goal is customer 
               satisfaction. For a safe and pleasant journey, call Keedriver.
              <br />
              <br />
              <span className="font-bold italic">
              We offer exceptional 24-hour service anywhere, anytime, whether within the city or beyond. 
              </span>
              
              Wherever you are, just give Keedriver a call to drive your car safely and securely.
              <br />
              <br />
              We are more than just drivers; we are professionals dedicated to your comfort and safety. 
              Our drivers are punctual and reliable, ensuring you a stress-free and enjoyable journey. 
              In a busy city, avoid the hassle and fatigue of driving. Let us make your journey smooth 
              and worry-free.
            </p>
          </div>
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 flex p-6 flex-col gap-5">
            <h3 className="text-rose-600 font-semibold text-2xl">OUR STRENGTH</h3>
            <p className="text-lg">
              Our drivers are skilled in handling all types of vehicles, from standard 
              cars to luxury and high-end models, with meticulous care and attention.
              <br />
              <br />
              We provide reliable call driver services throughout Chennai, catering to 
              all our valued customers. Our services are highly regarded in the city for 
              their quality and professionalism. Please feel free to contact us anytime to 
              receive top-notch drivers at your doorstep, whether for personal use or for 
              your esteemed organization.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
