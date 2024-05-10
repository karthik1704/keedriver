"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { updateUser } from "./action";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const ProfileForm = ({user}:{user:any}) => {
  const { register, handleSubmit } = useForm(
    {
      defaultValues: {
        first_name: user.first_name,
        last_name: user.last_name,
        email:user.email,
        country:user.country,
      },
 // will get updated once values returns
    }
  ); 

  console.log(user)
  const onSubmit = async (data: any) => {
   await updateUser (data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-[600px] h-[300px]">
  <div className="flex flex-col md:flex-row md:space-x-4 ">
    <label className="w-full md:w-full">
      <span className="block mb-1 ">First Name:</span>
      <Input {...register("first_name")} className="w-full border rounded-md px-4 py-2" />
    </label>
    </div>

<div className="flex flex-col md:flex-row md:space-x-4">
    <label className="w-full md:w-full">
      <span className="block mb-1">Last Name:</span>
      <Input {...register("last_name")} className="w-full border rounded-md px-4 py-2" />
    </label>
  </div>

    <div className="flex flex-col md:flex-row md:space-x-4">
    <label className="w-full md:w-full">
      <span className="block mb-1">Email-id:</span>
      <Input {...register("email")} className="w-full border rounded-md px-4 py-2" />
    </label>
  </div>

  <div className="flex flex-col md:flex-row md:space-x-4">
    <label className="w-full md:w-full">
      <span className="block mb-1">Country:</span>
      <Input {...register("country")} className="w-full border rounded-md px-4 py-2" />
    </label>
  </div>

  <Link
              href="/verification"
              className={buttonVariants({
              })}
            >
              Update
            </Link>

  {/* <button type="submit" className="bg-red-300 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-400">
    Update
  </button> */}
</form>

  );
}

export default ProfileForm;