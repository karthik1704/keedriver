import React from 'react';
import Image from "next/image";
import img2 from "@/app/services/image/green_double_circle_check_mark.jpg";

const SuccessCard = () => {
  return <>
  <div className="flex h-[55vh] items-center justify-center p-5">
          <div className="max-w-sm w-full p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <Image src={img2} height={80} width={80} alt="" />
            </div>

            <h1 className="text-2xl font-bold mb-4">Booking Confirmed!</h1>

            <p className="text-sm mb-6">
              A driver is being arranged close to your location.
              <br />
              We'll keep you updated.
            </p>

            <button
              type="submit"
              className="bg-green-500 text-white text-lg font-semibold hover:bg-green-600 transition-colors rounded-lg py-2 px-10"
            >
              Ok
            </button>
          </div>
        </div>
  </>
}

export default SuccessCard ;