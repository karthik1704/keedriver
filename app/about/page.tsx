import Image from 'next/image'
import img from "@/app/services/image/home/car.png";

import type { Metadata } from 'next'
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const metadata:Metadata =  {
    title: 'About | Keedriver',
    description: 'About Page',
}
  
export default function About() {
  return (
    <> 

<main className="grid grid-row-6 md:flex md:flex-col md:space-x-7 my-10 mx-24 ">
  <h1>Looking for a Driver job?</h1>

  <div className="row-span-3 md:basis-1/3 flex flex-col md:flex-row md:items-center">
    <h1 className="col-span-2 my-12 text-primary font-bold text-4xl">Earn up to ₹30,000 per month by driving cars</h1>
    <div className="row-span-2 text-xl mb-9 font-bold my-5">Work flexibly with zero investment. Own Car is not required, easy onboarding and daily payouts!</div>
    <Input type="email" placeholder="Email" className="w-48" />

    <Select>
      <SelectTrigger className="w-[150px]">
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
    <Link href='#' className={buttonVariants({})}>submit</Link>
  </div>

  <div className="col-start-2 col-end-4 md:col-start-auto md:col-end-auto order-first md:order-none">
    <Image src={img} alt="" width={700} height={200} />
  </div>
</main>

  

    </>

  )
}
