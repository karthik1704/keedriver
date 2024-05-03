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
      <main className="w-full h-auto lg:h-[80vh] flex flex-col-reverse lg:flex-row-reverse justify-evenly items-center">
        <div className="flex flex-col sm:w-4/5 md:w-3/5 lg:w-1/2 p-5">
          <h1 className="text-4xl">Looking for a Driver job?</h1>
          <h2 className="col-span-2 my-12 text-primary font-bold text-4xl">
            Earn up to ₹30,000 per month by driving cars
          </h2>
          <div className="row-span-2 text-xl mb-9 font-bold my-5">
            Work flexibly with zero investment. Own Car is not required, easy
            onboarding and daily payouts!
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-5">
          <Input  type="email" placeholder="Email" className="w-full" />

          <Select>
            <SelectTrigger className="w-full">
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
          <Image src={img} alt="" className="w-full"  />
        </div>
      </main>
    </>
  );
}
