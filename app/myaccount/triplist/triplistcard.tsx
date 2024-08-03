"use client";
import Image from "next/image";
import img from "@/app/services/image/myacc/car.png";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

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
    <section className="flex justify-center w-full lg:w-3/5">
      <div className="flex flex-col w-full lg:w-4/5 shadow-md rounded-lg py-5 mx-3">
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
          <div className="flex flex-col md:flex-row md:space-x-4">
            <h1 className="text-gray-600 text-xs">9.35am</h1>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <h1 className="text-gray-600 text-xs">10.20am</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripListCard;
