import Image from "next/image";
import img1 from '@/app/services/image/warning.jpg'
import img2 from '@/app/services/image/green_double_circle_check_mark.jpg'
import img3 from '@/app/services/image/wrong-icon.jpg'
import { buttonVariants } from "@/components/ui/button";

const HireUS=()=>{
return(
    <>
    <main className=" bg-gray-100">

      {/* No Trip found */}

        <div className="flex h-[75vh] items-center justify-center  p-5">
        <div className="max-w-md w-full p-6 sm:p-10 md:p-14 bg-white shadow-md rounded-lg">
        <div className="flex justify-center">
  <Image src={img1} height={100} width={100} alt="" className="object-center w-auto h-auto md:h-30 md:w-30 animate-fadeIn"/>
</div>
          <h1 className="text-3xl font-semibold text-center mb-6 mt-6">
           We Apologize For Your InConvenience
          </h1>
          <p className="text-center mb-4">We will ensure your trip will be arranged soon.</p>
        </div>
      </div>

      {/* trip message */}

      <div className="flex h-[55vh] items-center justify-center p-5">
        <div className=" max-w-lg w-full sm:p-10 md:p-14 bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
          <div>
          <Image src={img2} height={100} width={100} alt=''/>
          </div>
          <h1 className="m-2 text-lg font-bold">
            Your booking is successful 
            </h1>
            <p className="text-sm m-2 text-justify">
            we are looking for driver near by you <br />
            we will let you know soon.
            </p>
          
          <button type="submit" className={buttonVariants({
              })}>Ok
</button>
        </div>

      </div>

      {/* trip not succesfull */}

      <div className="flex h-[55vh] items-center justify-center p-5">
        <div className="max-w-lg w-full sm:p-10 md:p-14 bg-white shadow-md rounded-lg flex flex-col p-5 items-center">
          <div>
            <Image src={img3} height={100} width={100} alt=""/>
          </div>
          <h1 className="m-4 text-lg font-bold">
          Your trip is cancelled successful
          </h1>
          <button type="submit" className={buttonVariants({
              })}>Ok</button>

        </div>

      </div>

      </main>
    </>
)
}

export default HireUS;