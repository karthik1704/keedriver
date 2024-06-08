"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { updateUser } from "./action";
import Link from "next/link";
import { createCar } from "./action";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
  FormField,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { buttonVariants } from "@/components/ui/button";

const CarNewForm = ({
  cartype,
  carenginetype,
  createCar,
}: {
  cartype: any;
  carenginetype: any;
  createCar: any;
}) => {
  const { results } = cartype;
  const { results: engine } = carenginetype;

  const form =
    useForm();
    // {
    //   defaultValues: {
    //     model: createCar.model,
    //     last_name: user.last_name,
    //     email:user.email,
    //     country:user.country,
    //   },
    //   }
  const onSubmit = async (data: any) => {
    console.log(data);
    await createCar(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <label className="w-full md:w-full">
            <span className="block mb-1">Model:</span>
            <Input {...form.register("model")} />
          </label>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <label className="w-full md:w-full">
            <span className="block mb-1">Company Name:</span>
            <Input {...form.register("company_name")} />
          </label>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <label className="w-full md:w-full">
            <span className="block mb-1">Registration Number:</span>
            <Input {...form.register("registration_number")} />{" "}
          </label>
        </div>

        <div className="block ">
          <label className="w-full md:w-full">
            <span className="block mb-1">Transmission Type:</span>
          </label>

          <FormField
            control={form.control}
            name="transmission_type"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Engine Model</FormLabel> */}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Transmission Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="AUTO">AUTO</SelectItem>
                    <SelectItem value="MANUAL">MANUAL</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="block">
          <FormField
            control={form.control}
            name="engine_model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Engine Model</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Engine Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {engine?.map((engineType: any) => {
                      return (
                        <SelectItem
                          key={engineType?.id}
                          value={`${engineType?.id}`}
                        >
                          {engineType?.engine_type}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 p-3 ">
          <div className="block">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Car Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {results?.map((carlist: any) => {
                        return (
                          <SelectItem
                            key={carlist?.id}
                            value={`${carlist?.id}`}
                          >
                            {carlist?.type_name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-red-300 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-400"
        >
          Add car
        </button>
      </form>
    </Form>
  );
};

export default CarNewForm;
