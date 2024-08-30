"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { updateUser } from "./action";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  first_name: z.string().min(1, "please enter first name"),
  last_name: z.string().min(1, "please enter last name"),
  email: z.string().email("Enter valid email"),
});

type TuserSchema = z.infer<typeof userSchema>;

const ProfileForm = ({ user }: { user: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TuserSchema>({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      email:user.email,
      // country:user.country,
    },
    resolver: zodResolver(userSchema),
    //  will get updated once values returns
  });

  const onSubmit = async (data: any) => {
    await updateUser(data);
  };

  return (

    <div className="w-full h-full bg-white flex flex-col md:flex-row justify-center shadow-md rounded-md shadow-stone-400 p-7 overflow-hidden">
    <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col space-y-4 w-full lg:w-full mx-5">
    <div className="flex flex-col md:flex-row md:space-x-4">
      <label className="w-full md:w-full">
        <span className="block mb-1 text-gray-700 text-sm font-semibold">First Name</span>
        <Input {...register("first_name")} className="capitalize text-gray-800 w-full border rounded-md px-4 py-2" />
      </label>
      </div>
  
  <div className="flex flex-col md:flex-row md:space-x-4">
      <label className="w-full md:w-full">
        <span className="block mb-1 text-gray-700 text-sm font-semibold">Last Name</span>
        <Input {...register("last_name")} className="capitalize text-gray-800 w-full border rounded-md px-4 py-2" />
      </label>
    </div>
  
      <div className="flex flex-col md:flex-row md:space-x-4">
      <label className="w-full md:w-full">
        <span className="block mb-1  text-gray-700 text-sm font-semibold">Email</span>
        <Input {...register("email")} className="text-gray-800 w-full border rounded-md px-4 py-2" />
      </label>
    </div>
  
    {/* <div className="flex flex-col md:flex-row md:space-x-4">
      <label className="w-full md:w-full">
        <span className="block mb-1">Country:</span>
        <Input {...register("country")} className="w-full border rounded-md px-4 py-2" />
      </label>
    </div> */}
  
    {/* <Link
                href=""
                className={buttonVariants({
                })}
              >
                Update
              </Link>*/ }
  
    <Button type="submit" className="font-bold bg-rose-700 text-white hover:bg-rose-800 mt-4">
      Update
    </Button>
  </form>
  
  </div>

  );
};

export default ProfileForm;
