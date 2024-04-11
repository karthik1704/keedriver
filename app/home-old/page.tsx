import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import OurServices from "@/components/home/our-services";
import Section2 from "@/components/home/section2";
import Section3 from "@/components/home/section3";

export default function Home() {
  return (
    <main className="mx-auto p-2 w-full">
      <div className="flex justify-between items-center leading-7">
        <div className="w-1/2 p-7">
          <h1 className="text-bold text-7xl ">Enjoy your ride <span className="text-primary">Peacefully!</span></h1>
          <p className="mt-2 text-sm text-gray-500">With our 24 hours service and talented drivers you can sit & relax.</p>
          <Link href='/book' className={buttonVariants({
            className: 'mt-6'
          })}>Book Trip Now</Link>
        </div>
        <div className="flex   w-1/2 justify-center items-center h-1/3 mt-28 mr-7">
          <Image
            src="/images/city-driver-animate.svg"
            alt="city dirver animation"
            width={500}
            height={700}
          />
        </div>
      </div>

      <OurServices/>
        <Section2/>
        <Section3/>
    </main>
  );
}
