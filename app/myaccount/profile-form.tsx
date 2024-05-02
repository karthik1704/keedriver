"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const ProfileForm = ({user}:{user:any}) => {
  const { register, handleSubmit } = useForm(
    {
      defaultValues: {
        first_name: user.first_name,
        last_name: user.last_name,
      },
 // will get updated once values returns
    }
  ); 

  console.log(user)
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
  <div className="flex flex-col md:flex-row md:space-x-4">
    <label className="w-full md:w-full">
      <span className="block mb-1">First Name:</span>
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

  <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">
    Update
  </button>
</form>

  );
}

export default ProfileForm;