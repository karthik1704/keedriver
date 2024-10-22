import React from 'react';
import Image from 'next/image';
import img8 from "@/app/services/image/test/Pradeep.jpg";
import img9 from "@/app/services/image/test/Sudhakar.jpg";
import img10 from "@/app/services/image/test/Sathishbabu.jpg";



const reviewDetail = [
    {
        clientName:'Pradeep Pandey',
        tripType:'Outstation Trip',
        tripReview:'everyone who require Drivers for outstation please download KeeDriver app they reply immediately and make sure the availability of the drivers also provide the best Drivers',
        image:img8

    },
    {
        clientName:'Sudhakar Surya ',
        tripType:'Round Trip',
        tripReview:'I had my first drive and its great , Driver came on time, had a professional and polite service , he was also thorough on the routes which was added advantage.',
        image:img9

    },
    {
        clientName:'Sathishbabu M.',
        tripType:'After-Party Drop',
        tripReview:'KeeDriver is reliable. I have done some 5 to 6 rides so far and all of them were good and punctual. They took very good care of the car as their own. Must try',
        image:img10

    }
]



 const ReviewCard = () => {
  return (
    <>
    {
        reviewDetail.map((reviewList,id)=>{
            return <div className="flex flex-col justify-between rounded-sm bg-rose-700 my-5 md:my-0 w-full lg:h-96 shadow-xl p-5" key={id}>
            <div className='flex flex-col justify-center items-center gap-3'>
        <div className="m-5 align-middle"><Image src={reviewList.image} alt="client-image" width={75} height={75} className="rounded-full"/></div>
        <p className="text-white text-sm md:text-sm xl:text-lg capitalize text-center">
            {
                reviewList.tripReview
            }
    
        </p>
        </div>
        <p className="text-white text-left text-md pt-3 before:border-2 before:border-slate-700"><span className='text-transparent'>.</span> {reviewList?.clientName} / <span className="text-rose-300 text-md italic font-semibold">{reviewList?.tripType}</span></p>
    </div>
        })
    }
    </>
  )
}

export default ReviewCard;