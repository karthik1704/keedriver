import img from "@/app/services/image/home.webp";
import img1 from "@/app/services/image/trust.webp";
import img2 from "@/app/services/image/secure.webp";
import img3 from "@/app/services/image/Versatile.webp";
import img4 from "@/app/services/image/Tracking.webp";
import img5 from "@/app/services/image/Fare Price.jpg";
import img6 from "@/app/services/image/hour.jpg";
import img7 from "@/app/services/image/Corporate.jpg";
import img8 from "@/app/services/image/test/Pradeep.jpg";
import img9 from "@/app/services/image/test/Sudhakar.jpg";
import img10 from "@/app/services/image/test/Sathishbabu.jpg";

import Image from "next/image";
const Done =() =>{
    return(
        <div className="mx-10 md:mx-10">
    <div>
         <div className="flex flex-col md:flex-row justify-center md:space-x-7 my-10 ">
            <div className="basis-1/2 md:basis-1/3">
        <h1 className="my-12 text-primary font-bold text-xl">Hire Drivers</h1>
        <h2 className="text-4xl mb-9 font-bold pb-40 my-5">Hire Temporary Drivers at Your Convenience</h2>
        <button className="bg-primary text-white font-medium px-16 py-4 text-4xl my-7">Book Now</button>
        </div>
        <div className=""><Image src={img} alt="" width={700} height={200}/></div>
        </div>
        
        <div className="flex flex-col md:flex-row md:space-x-10 my-24">

    <div className="basis-1/4 md:basis-1/3 my-5">
    <Image src={img1} alt="" height={200} width={200}/>
            <div className="font-bold">Trust</div>
        <p className="text-sm text-zinc-600">With our fleet of trained, verified and trusted drivers. we make the drive better and safer for you and your family.</p>
        </div>

        <div className="basis-1/4 md:basis-1/3 my-5">
    <Image src={img2} alt="" height={200} width={200}/>
            <div className="font-bold">Secure</div>
        <p className="text-sm text-zinc-600">DriveU Secure helps you insure your drives from vehicle damages and personal injuries, while we insure our drivers for all trips.</p>
        </div>

        <div className="basis-1/4 md:basis-1/3 my-5">
    <Image src={img3} alt="" height={200} width={200}/>
            <div className="font-bold">Versatile</div>
        <p className="text-sm text-zinc-600">Book a driver for daily office commutes, mid-day shopping, night-outs, airport transfers, or weekend getaways with our hourly packages.</p>
        </div>

        <div className="basis-1/4 md:basis-1/3 my-5">
    <Image src={img4} alt="" height={200} width={200}/>
            <div className="font-bold">Tracking</div>
        <p className="text-sm text-zinc-600">Live track your driver as he reaches the pickup location and share your real-time trip status with family and friends along with your drive.</p>
        </div>
</div>

<div className="text-center pb-10">
        <h1 className="text-3xl pb-5 font-bold">Temporary Drivers</h1>
        <p className="text-zinc-600"> Now serving Ahmedabad, Bangalore, Chennai, Delhi NCR, Hyderabad, Kolkata, Mumbai & Pune</p>
        </div>

        <div className="flex flex-col md:flex-row flex-row-reverse; md:justify-evenly my-10 md:mx-10 ">
    <div className="flex-col basis-1/2">
        <h4 className="m-2.5 font-bold">Fare Price</h4>
        <p className="text-zinc-600 my-5">Hiring a full-time chauffeur is expensive. Instead, you can hire a part time driver from us. 
            They’ll provide transportation when you absolutely need it, and make themselves scarce once the job is done. 
            Our prices start at INR 129 for the first hour. After this, you’ll only be charged by the minute. 
            If you’re ever in need of transportation, we can DriveU.</p>
            </div>
            <div className="basis-1/3 md:basis-1/2">
            <Image src={img5} alt="" width={600} height={500}/>
            </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row md:justify-evenly my-10 md:mx-10">
            <div className="basis-1/3 md:basis-1/2 mt-4;">
            <Image src={img6} alt="" width={600} height={500}/>
            </div>
    <div className="flex-col basis-1/2 mx-5">
        <h4 className="m-2.5 font-bold">Drive by the hour</h4>
        <p className="text-zinc-600 my-5">Our hourly packages are great when you are looking for a ride to and fro from the airport or the railway station to pick or drop your family members or relatives. 
        Quick and easy, we make sure you reach your destination and back in time without any trouble.</p>
            </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-evenly my-10 md:mx-10">
    <div className="flex-col basis-1/2">
        <h4 className="m-2.5 font-bold">Corporate Meetings</h4>
        <p className="text-zinc-600 my-5">Corporate meetings are all about being well prepared and well suited! But, driving across the city can be stressful and sap all your energy before the critical meeting.
         While you prepare for your next sales pitch, we help you reach your meeting destination fresh and rejuvenated to do your best and close the deal well!</p>
            </div>
            <div className="basis-1/3 md:basis-1/2 md:my-10">
            <Image src={img7} alt="" width={600} height={500}/>
            </div>
            </div>
<div className="flex justify-center m-10">
            <button className="bg-primary text-white font-bold py-2 px-10">Book Now</button>
            </div>

            <hr></hr>

            <h3 className="flex justify-center text-3xl m-10 font-bold">Reviews</h3>


            <div className="flex flex-col md:flex-row md:space-x-14 md:justify-center my-10">
            <div className="basis-1/4 shadow-xl">
                <div className="m-5"><Image src={img8} alt=""width={75} height={75} className="rounded-full"/></div>
                <p className="text-zinc-600 pb-14 m-5">everyone who require Drivers for outstation please download DriveU app they reply immediately and make sure the availability of the drivers also provide the best Drivers

                </p>
                <hr></hr>
                <p className="text-zinc-600 m-5">Pradeep Pandey / <span className="text-primary font-bold"> Outstation Trip</span></p>
            </div>

            <div className="basis-1/4 shadow-xl">
            <div className="m-5 "><Image src={img9} alt=""width={75} height={75} className="rounded-full"/></div>
                <p className="text-zinc-600 pb-14 m-5">I had my first drive and it's great , Driver came on time, had a professional and polite service , he was also thorough on the routes which was added advantage.

                </p>
                <hr></hr>
                <p className="text-zinc-600 m-5">Sudhakar Surya / <span className="text-primary font-bold"> Round Trip</span></p>
            </div>

            <div className="basis-1/4 shadow-xl">
            <div className="m-5"><Image src={img10} alt=""width={75} height={75} className="rounded-full"/></div>
                <p className="text-zinc-600 pb-14 m-5">DriveU is reliable. I have done some 5 to 6 rides so far and all of them were good and punctual. They took very good care of the car as their own. Must try

                </p>
                <hr></hr>
                <p className="text-zinc-600 m-5">Sathishbabu M./ <span className="text-primary font-bold">After-Party Drop</span> </p>
            </div>

            </div>


    </div>
</div>)
}

export default Done