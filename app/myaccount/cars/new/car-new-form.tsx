"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateUser } from "../../action";
import Link from "next/link";
import { createCar } from "../../action";
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
  carType,
  carEngineType,
}: {
  carType: any;
  carEngineType: any;
}) => {
  const { results } = carType;
  const { results: engine } = carEngineType;

  console.log(carType);

  const form = useForm();
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
    <section className="w-full bg-white mx-2 sm:mx-8 p-5 md:p-10 shadow-sm items-center justify-center rounded-md lg:w-4/5">
      <Form {...form}>
        <form
          className="w-full flex flex-col gap-3 justify-start lg:mx-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* <div className="w-full flex flex-col md:flex-row md:space-x-4">
          <label className="w-full md:w-full">
            <span className="block mb-1 text-md">Model Name:</span>
            <Input className="text-md w-full border rounded-md px-4 py-2" placeholder="Enter car name" {...form.register("car_name")} />
          </label>
        </div> */}

          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="w-full md:w-full">
              <span className="block mb-1 text-md  text-gray-700 text-sm font-semibold">
                Maker
              </span>
              <Input
                className="text-sm w-full border border-gray-600 rounded-md px-4 py-2 text-gray-700"
                placeholder="Enter maker name"
                {...form.register("company_name")}
              />
            </label>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="w-full md:w-full">
              <span className="block mb-1 text-md  text-gray-700 text-sm font-semibold">
                Model Name
              </span>
              <Input
                className="text-sm w-full border border-gray-600 rounded-md px-4 py-2 text-gray-700"
                placeholder="Enter model name"
                {...form.register("model")}
              />
            </label>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="w-full md:w-full">
              <span className="block mb-1 text-md  text-gray-700 text-sm font-semibold">
                Registration Number
              </span>
              <Input
                className="text-sm w-full border border-gray-600 rounded-md px-4 py-2  text-gray-700"
                placeholder="Enter registration number"
                {...form.register("registration_number")}
              />{" "}
            </label>
          </div>

          <div className="block ">
            <label className="w-full md:w-full">
              <span className="block mb-1 text-md text-gray-700 text-sm font-semibold">
                Transmission Type
              </span>
            </label>
            <div className="text-sm w-full border border-gray-600 rounded-md text-gray-700">
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
                          <SelectValue
                            className="text-sm text-gray-700"
                            placeholder="Select a Transmission Type"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem
                          className="text-sm text-gray-700"
                          value="AUTO"
                        >
                          Auto
                        </SelectItem>
                        <SelectItem
                          className="text-sm text-gray-700"
                          value="MANUAL"
                        >
                          Mannual
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="block">
            <FormField
              control={form.control}
              name="engine_model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md text-gray-700 text-sm font-semibold">
                    Engine Model
                  </FormLabel>
                  <div className="text-sm w-full border border-gray-600 rounded-md text-gray-700">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            className="text-sm text-gray-700"
                            placeholder="Select a Engine Type"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {engine?.map((engineType: any) => {
                          return (
                            <SelectItem
                              key={engineType?.id}
                              value={`${engineType?.engine_type}`}
                            >
                              {engineType?.engine_type}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="block ">
            <label className="w-full md:w-full">
              <span className="block mb-1 text-md text-gray-700 text-sm font-semibold">
                Gas Type
              </span>
            </label>

            <div className="text-sm w-full border border-gray-600 rounded-md text-gray-700">
              <FormField
                control={form.control}
                name="gas_type"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Engine Model</FormLabel> */}
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            className="text-sm text-gray-700"
                            placeholder="Select a Gas Type"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem
                          className="text-sm text-gray-700"
                          value="EV"
                        >
                          EV
                        </SelectItem>
                        <SelectItem
                          className="text-sm text-gray-700"
                          value="PETROL"
                        >
                          Petrol
                        </SelectItem>
                        <SelectItem
                          className="text-sm text-gray-700"
                          value="DIESEL"
                        >
                          Diesel
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="block">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md text-gray-700 text-sm font-semibold">
                    Car Type
                  </FormLabel>
                  <div className="text-sm w-full border border-gray-600 rounded-md text-gray-700">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            className="text-sm text-gray-700"
                            placeholder="Select Car Type"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {results?.map((carlist: any) => {
                          return (
                            <SelectItem
                              key={carlist?.id}
                              value={`${carlist?.type_name}`}
                            >
                              {carlist?.type_name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* <div className="flex flex-col md:flex-row md:space-x-4 p-3 ">
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
        </div> */}

          <Button
            type="submit"
            className="font-semibold bg-rose-700 text-white hover:bg-rose-800 mt-4"
          >
            Add car
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default CarNewForm;
