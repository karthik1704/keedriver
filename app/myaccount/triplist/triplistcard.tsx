"use client";
import Image from "next/image";
import img from "@/app/services/image/myacc/car.png";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  ArrowRightFromLine,
  Calendar,
  Timer,
  ArrowRight,
  ArrowLeft,
  CarFront,
  Check,
  Car
} from "lucide-react";

const TripListCard = ({ user }: { user: any }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
    },
    //  will get updated once values returns
  });

  console.log(user);
  const onSubmit = (data: any) => console.log(data);

  return (
    <section className="flex justify-center w-full">
      <div className="w-full h-60 lg:h-auto rounded-lg flex items-center justify-around bg-white shadow-lg  border-t-4 border-stone-100 shadow-stone-400 hover:shadow-stone-500 md:mx-3 p-14 gap-3 relative ">

        <p className="flex items-center text-lg font-bold text-gray-800 gap-1 absolute top-2 right-2"><Check className="text-green-600"/>Done</p>
   

      <p className="absolute left-0 bottom-1 text-lg font-semibold px-4 p-2 flex items-center gap-2">
        <span className="h-10 w-10 rounded-full bg-rose-700 text-white flex items-center justify-center"><Car className="text-white h-6 w-6"/></span>Rounded trip
      </p>

        <div className="w-1/2 lg:h-full flex justify-start border bg-stone-50 rounded-md p-2">
          <ul className="w-full flex flex-col justify-around items-start text-start text-base text-gray-700 font-semibold capitalize gap-1">
          <li className="flex items-center justify-start gap-1 bg-rose-700 w-full p-1 rounded-sm text-lg text-white font-bold"><ArrowRight className="h-5 w-5"/>From</li>
          <li className="flex items-center justify-start gap-1 font-medium"><MapPin className="h-5 w-5 text-green-600" />Pallavarm</li>
          <li className="flex items-center justify-start gap-1 font-medium"><Calendar className="h-5 w-5 text-green-600" />12-04-2023</li>
          <li className="flex items-center justify-start gap-1 font-medium"><Timer className="h-5 w-5 text-green-600" />10.20am</li>
          </ul>
        </div>
        <div className="w-1/2 lg:h-full flex justify-start border bg-stone-50 rounded-md p-2">
          <ul className="w-full flex flex-col justify-around items-start text-start text-base text-gray-700 font-semibold capitalize gap-1">
          <li className="flex items-center justify-start gap-1 bg-rose-700 w-full p-1 rounded-sm text-lg text-white font-bold"><ArrowLeft className="h-5 w-5"/>To</li>
          <li className="flex items-center justify-start gap-1 font-medium"><MapPin className="h-5 w-5 text-rose-700" />Airport</li>
          <li className="flex items-center justify-start gap-1 font-medium"><Calendar className="h-5 w-5 text-rose-700" />12-04-2023</li>
          <li className="flex items-center justify-start gap-1 font-medium"><Timer className="h-5 w-5 text-rose-700" />10.20am</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TripListCard;

{
  /* <div className="flex flex-col w-full lg:w-4/5 shadow-md rounded-lg">
<div className="grid grid-cols-3 gap-5 place-items-center">
  <div className="grid grid-col md:grid-row md:space-x-4">
    <Image src={img} alt="" height={100} width={100} />
  </div>
  <div className="grid grid-col md:grid-row md:space-x-4">
    <h1 className="grid justify-center content-center">Id:</h1>
  </div>
  <div className="grid grid-col md:grid-row md:space-x-4">
    <h1 className="grid justify-center content-center">Status:</h1>
  </div>
</div>

<div className="flex justify-evenly ">
  <div className="flex flex-col md:flex-row md:space-x-4">
    <h1>Tambaram</h1>
  </div>
  <div className="flex flex-col md:flex-row md:space-x-4">
    <h1>................</h1>
  </div>
  <div className="flex flex-col md:flex-row md:space-x-4">
    <h1>Airport</h1>
  </div>
</div>

<div className="flex justify-around">
  <div className="flex flex-col md:flex-row md:space-x-4">
    <h5 className="text-gray-600 text-xs">12-04-2023</h5>
  </div>
  <div className="flex flex-col md:flex-row md:space-x-4">
    <h5 className="text-gray-600 text-xs">12-04-2023</h5>
  </div>
</div>

<div className="flex justify-around">
  <div className="flex flex-col md:flex-row">
    <h1 className="text-gray-600 text-xs">9.35am</h1>
  </div>
  <div className="flex flex-col md:flex-row">
    <h1 className="text-gray-600 text-xs">10.20am</h1>
  </div>
</div>
</div> */
}

{
  /* <section className="flex justify-center w-full lg:w-3/5">
<div className="w-full rounded-lg grid grid-cols-2 items-center justify-items-center bg-red-200  shadow-lg hover:shadow-red-500/50 md:mx-3 p-3 gap-3 ">
  <div className="w-full flex justify-stretch  overflow-hidden">
    <img className="w-full object-cover rounded-md" src="https://skift.com/wp-content/uploads/2020/04/AdobeStock_308962487-scaled-e1588326591558.jpeg" alt="car-img" />

  </div>
  <div className="w-full h-full flex flex-col items-center gap-3 justify-center rounded-lg relative">
    <small className="text-lg capitalize absolute top-2 right-3 font-semibold flex items-center justify-start gap-1"><Check className="text-green-700"/>done</small>

    <div className="w-full flex items-center justify-between  capitalize">
    <ul className="leading-9 text-sm font-semibold">
    <li className="flex items-center justify-start gap-1"><ArrowRight className="h-5 w-5"/>form</li>
      <li className="flex items-center justify-start gap-1"><MapPin className="h-5 w-5" />Tambaram</li>
      <li className="flex items-center justify-start gap-1"><Calendar className="h-5 w-5" />12-04-2023</li>
      <li className="flex items-center justify-start gap-1"><Timer className="h-5 w-5" />10.20am</li>

    </ul>

     <ul className="leading-9 text-sm font-semibold">
     <li className="flex items-center justify-start gap-1"><ArrowLeft className="h-5 w-5"/>To</li>
      <li className="flex items-center justify-start gap-1"><MapPin className="h-5 w-5" />Airport</li>
      <li className="flex items-center justify-start gap-1"><Calendar className="h-5 w-5" />12-04-2023</li>
      <li className="flex items-center justify-start gap-1"><Timer className="h-5 w-5" />10.20am</li>

    </ul>
    </div>
    
  </div>

</div>

</section> */
}
