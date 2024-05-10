import Image from "next/image";
import img1 from '@/app/services/image/warning.jpg'

const HireUS=()=>{
return(
    <div>
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
    </div>
)
}

export default HireUS;