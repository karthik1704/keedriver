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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 w-full lg:w-full mx-5"
    >
      <div className="flex flex-col md:flex-row md:space-x-4 ">
        <label className="w-full md:w-full">
          <span className="block mb-1 ">First Name:</span>
          <Input
            {...register("first_name")}
            className="w-full border rounded-md px-4 py-2"
          />
        </label>
      </div>
      {errors.first_name && (
        <div className="text-red-500 text-start text-sm lg:text-base">
          {errors.first_name.message}
        </div>
      )}

      <div className="flex flex-col md:flex-row md:space-x-4">
        <label className="w-full md:w-full">
          <span className="block mb-1">Last Name:</span>
          <Input
            {...register("last_name")}
            className="w-full border rounded-md px-4 py-2"
          />
        </label>
      </div>
      {errors.last_name && (
        <div className="text-red-500 text-start text-sm lg:text-base">
          {errors.last_name.message}
        </div>
      )}

      <div className="flex flex-col md:flex-row md:space-x-4">
        <label className="w-full md:w-full">
          <span className="block mb-1">Email ID:</span>
          <Input
            {...register("email")}
            className="w-full border rounded-md px-4 py-2"
          />
        </label>
      </div>
      {errors.email && (
        <div className="text-red-500 text-start text-sm lg:text-base">
          {errors.email.message}
        </div>
      )}

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
            </Link> */}

      <Button type="submit">Update</Button>
    </form>
  );
};

export default ProfileForm;
