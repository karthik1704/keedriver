"use client";
import Image from "next/image";
import img from "@/app/services/image/my_account_car_img.png"
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const TripList = ({user}:{user:any}) => {
  const { register, handleSubmit } = useForm(
    {
      defaultValues: {
        first_name: user.first_name,
        last_name: user.last_name,
      },
//  will get updated once values returns
    }
  ); 

  console.log(user)
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex flex-col space-y-4">
  {/* <div className="flex flex-row content-evenly md:flex-row md:space-x-4">
    <Image src={img} alt="" height={100} width={100}/>
    <h1>Id:</h1>
    <h1>Status:</h1>
    </div> */}

    <div className="grid grid-cols-3 gap-5 content-center">
<div className="grid grid-col md:grid-row md:space-x-4">
<Image src={img} alt="" height={100} width={100}/>
  </div>
<div className="grid grid-col md:grid-row md:space-x-4">
<h1 className="grid justify-center content-center">Id:</h1>
  </div>
<div className="grid grid-col md:grid-row md:space-x-4">
<h1 className="grid justify-center content-center">Status:</h1>
  </div>
</div>

    <div className="flex justify-evenly">
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
    <h1>9.35am</h1>
  </div>
<div className="flex flex-col md:flex-row md:space-x-4">
    <h1>10.20am</h1>
  </div>
  </div>

</div>

  );
}


export default TripList