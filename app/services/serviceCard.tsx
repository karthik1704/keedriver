import React from 'react';
import Image from "next/image";
import {img1,img2,img3,img4} from './image';

const serviceFeature = [
    {
        featureName : 'Trust',
        featureDescription:'With our team of fully trained, verified, and dependable drivers, we ensure every journey is safer, smoother, and more enjoyable for your family.',
        image:img1
    },
    {
        featureName : 'Secure',
        featureDescription:'KeeDriver Secure safeguards your rides against vehicle damages & personal injuries, while our drivers are insured on all trips, offering peace of mind.',
        image:img2
    },
    {
        featureName : 'Versatile',
        featureDescription:'Book a driver in KeeDriver for office commutes, shopping trips, airport transfers, night-outs, or weekend getaways—our hourly packages cover all your needs and wishes.',
        image:img3 
    },
    {
        featureName : 'Tracking',
        featureDescription:'Easily track your driver in real-time as they reach your pickup point, and share live trip updates with your family and friends for added assurance.',
        image:img4
    }
]
const ServiceCard = () => {
  return (
   <>
   {
    serviceFeature.map((featureIteam,id)=>{
        return <div className="w-4/5 max-h-fit my-3 md:my-5 flex flex-col border rounded-md shadow-sm shadow-black bg-white items-center justify-center p-5 m-2 py-2 sm:py-5 xl:py-8 text-center" key={id}>
            <div className='w-2/5 lg:w-4/5 xl:w-3/5 items-center justify-center rounded-full'>
            <Image src={featureIteam.image} alt="" width={185}
                height={185} className='object-cover'/>
            </div>
             
           <div className="font-bold text-rose-800 text-2xl uppercase ">{featureIteam.featureName}</div>
            <p className="xl:w-4/5 text-center text-sm text-zinc-700">{featureIteam.featureDescription}</p>
            </div>
    })

   }
   </>
  )
}
export default ServiceCard;
