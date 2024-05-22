import React from 'react';
import Image from "next/image";
import {img1,img2,img3,img4} from './image';

const serviceFeature = [
    {
        featureName : 'Trust',
        featureDescription:'With our fleet of trained, verified and trusted drivers. we make the drive better and safer for you and your family.',
        image:img1
    },
    {
        featureName : 'Secure',
        featureDescription:'DriveU Secure helps you insure your drives from vehicle damages and personal injuries, while we insure our drivers for all trips.',
        image:img2
    },
    {
        featureName : 'Versatile',
        featureDescription:'Book a driver for daily office commutes, mid-day shopping, night-outs, airport transfers, or weekend getaways with our hourly packages.',
        image:img3
    },
    {
        featureName : 'Tracking',
        featureDescription:'Live track your driver as he reaches the pickup location and share your real-time trip status with family and friends along with your drive.',
        image:img4
    }
]
const ServiceCard = () => {
  return (
   <>
   {
    serviceFeature.map((featureIteam,id)=>{
        return <div className="w-full sm:w-1/2 md:w-2/5 lg:1/4 xl:w-1/5 my-3 md:my-5 flex flex-col items-center justify-center gap-3 p-5" key={id}>
            <div className='w-3/5 lg:w-4/5 xl:w-3/5 rounded-full'>
            <Image src={featureIteam.image} alt="" className='object-cover'/>
            </div>
             
           <div className="font-bold">{featureIteam.featureName}</div>
            <p className="xl:w-4/5 text-center text-sm text-zinc-600">{featureIteam.featureDescription}</p>
            </div>
    })

   }
   </>
  )
}
export default ServiceCard;
