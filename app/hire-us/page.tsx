import Image from "next/image";
import img1 from "@/app/services/image/warning.jpg";
import img2 from "@/app/services/image/green_double_circle_check_mark.jpg";
import img3 from "@/app/services/image/wrong-icon.jpg";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

const HireUS = () => {
  return (
    <>
      <main className=" bg-gray-100">
        {/* No Trip found */}

        <div className="flex h-[75vh] items-center justify-center p-5">
          {/* Increase max-width and adjust padding for wider layout */}
          <div className="max-w-2xl w-full p-8 sm:p-12 md:p-16 bg-white shadow-md rounded-lg">
            <div className="flex justify-center">
              <Image
                src={img1}
                height={100}
                width={100}
                alt=""
                className="object-center w-auto h-auto md:h-30 md:w-30 animate-fadeIn"
              />
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 mt-6">
              We sincerely apologize, but something went wrong with your
              booking.
            </h1>
            <p className="text-center text-sm md:text-base lg:text-md mb-4 pb-10">
              We invite you to try again, or reach out to us if you need further
              assistance.
            </p>

            <Link
              href="#"
              className="bg-rose-600 text-white text-lg font-bold hover:bg-stone-700 transition-colors mx-auto block rounded-lg py-4 px-8 sm:px-12 text-center"
            >
              Return to Home Page
            </Link>
          </div>
        </div>

        {/* trip message */}

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

        {/* trip not succesfull */}

        <div className="flex h-[55vh] items-center justify-center p-5">
          <div className="max-w-sm w-full p-10 md:p-14 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
            <div className="mb-4">
              <Image src={img3} height={100} width={100} alt="" />
            </div>
            <h1 className="text-xl font-semibold mb-4">
              Your trip has been canceled successfully.
            </h1>
            <button
              type="submit"
              className="bg-red-500 text-white text-base font-medium hover:bg-red-600 transition-colors rounded-lg py-2 px-10"
            >
              Ok
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default HireUS;
