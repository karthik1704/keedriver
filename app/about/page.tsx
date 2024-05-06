import Image from "next/image";
import img from "@/app/services/image/home/car.png";

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
      <main className="w-full h-auto p-5 ">
        <div className="w-full  flex flex-col-reverse lg:flex-row-reverse justify-evenly items-center">
        <div className="flex flex-col sm:w-4/5 md:w-3/5 lg:w-1/2">
          <h1 className="text-4xl text-center lg:text-left">
            Looking for a Driver job?
          </h1>
          <h2 className="col-span-2 my-12 text-primary font-bold text-4xl text-center lg:text-left">
            Earn up to ₹30,000 per month by driving cars
          </h2>
          <div className="row-span-2 text-xl mb-9 font-bold my-5 text-center lg:text-left">
            Work flexibly with zero investment. Own Car is not required, easy
            onboarding and daily payouts!
          </div>
          <div className="w-full flex flex-col  gap-5  lg:flex-row">
            <Input
              type="email"
              placeholder="Email"
              className="w-full lg:w-2/5"
            />

            <Select>
              <SelectTrigger className="w-full lg:w-2/5">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Fruits</SelectLabel> */}
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
        </div>

        <div className="sm:w-4/5 md:w-3/5 lg:w-1/2">
          <Image src={img} alt="" className="w-full" />
        </div>
        </div>
        <div className="w-full flex flex-col justify-center gap-7 p-2 items-center lg:items-start lg:flex-row text-center lg:text-start mt-5">
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 flex flex-col  gap-5">
            <h3 className="text-primary text-2xl">KEE DRIVER - ACTING DRIVERS</h3>
            <p className="text-lg row-span-2">
              <span className="font-bold">KEEDRIVER</span> provide an amazing
              driver for your CAR. Our drivers are experienced in driving
              various car models from low category to high category. We will be
              on time and we will drop you on time. Our only goal is customer
              satisfaction. For safe and happy journey call KEEDRIVER.
              <br />
              <br />
              <span className="font-bold">
                We provide an excellent service for 24 hours any where anytime
                in and out of the city
              </span>
              . Wherever you are just give a call to KEEDRIVER to drive your CAR
              for safe and secure.
              <br />
              <br />
              We are not simply drivers we are more than that. Our Driver's are
              punctual and deliver on time. In a busy city don't struggle by
              driving and get tired, we are here to make your journey as a
              pleasant and tense free journey.
            </p>
          </div>
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 flex flex-col gap-5">
            <h3 className="text-primary text-2xl">OUR STRENGTH</h3>
            <p className="text-lg">
              Our drivers has the ability to drive cars of various of classes
              like ordinary cars, luxurious cars and most luxurious cars with
              special care and attention.
              <br />
              <br />
              Call drivers in Chennai and driver service for all customers. Our
              call drivers' services are well in Chennai. We request your good
              selves to call on us at any time for providing best quality
              drivers at your doorsteps of your esteemed Organizations.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
