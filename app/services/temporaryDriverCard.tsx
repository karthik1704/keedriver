import React from "react";
import Image from "next/image";
import { img5, img6, img7 } from "./image";

const temporaryDriverDetail = [
  {
    title: "Fare Price",
    description: `Hiring a full-time chauffeur is expensive. Instead, you can hire a part time driver from us. 
        They’ll provide transportation when you absolutely need it, and make themselves scarce once the job is done. 
        Our prices start at INR 129 for the first hour. After this, you’ll only be charged by the minute. 
        If you’re ever in need of transportation, we can DriveU.`,
    image: img5,
  },
  {
    title: "Drive by the hour",
    description: `Our hourly packages are great when you are looking for a ride to and fro from the airport or the railway station to pick or drop your family members or relatives. 
        Quick and easy, we make sure you reach your destination and back in time without any trouble.`,
    image: img6,
  },
  {
    title: "Corporate Meetings",
    description: `Corporate meetings are all about being well prepared and well suited! But, driving across the city can be stressful and sap all your energy before the critical meeting.
        While you prepare for your next sales pitch, we help you reach your meeting destination fresh and rejuvenated to do your best and close the deal well!`,
    image: img7,
  },
];

 const TemporaryDriverCard = () => {
  return (
    <>
      {
        temporaryDriverDetail?.map((temIteam,id)=>{
            return <div className={`w-full flex  flex-col-reverse items-center justify-center ${ id%2===0 ?'md:flex-row-reverse':'md:flex-row' } md:justify-evenly md:items-center my-4 md:mx-10 gap-3 md:gap-7 `} key={id}>
            <div className="w-full lg:w-1/2 flex flex-col  md:justify-start items-start">
              <h4 className="font-bold text-xl md:text-2xl lg:text-3xl m-0">{temIteam?.title}</h4>
              <p className="text-zinc-600 text-left my-5">
                {
                    temIteam?.description
                }
              </p>
            </div>
            <div className="w-full  lg:w-1/2">
              <Image src={temIteam?.image} alt=""/>
            </div>
          </div>
        })
      }
    </>
  );
};

export default TemporaryDriverCard ;
