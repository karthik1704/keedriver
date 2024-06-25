"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler,Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { FormControl } from "@/components/ui/form";
import { assert } from "console";
import { resolve } from "path";
import PlaceAutocomplete from "@/components/place-autocomplete";
// import { MapPin } from 'lucide-react';

type FormFields = {
  from: string;
  to: string;
  date: number;
  tripType: string;
  landmark: string;
  phoneNumber: number;
};

export const TripDetailForm = () => {
  const [show, setShow] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data,"hello");
  };
  function handleNext() {
    setShow(!show);
  }
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center capitalize gap-2 p-5 sm:p-0">
        <h1 className="text-4xl font-bold capitalize text-center text-primary">
          book my trip
        </h1>
        <div className="w-full sm:w-4/5 md:w-3/5  xl:w-1/2 h-auto  border-2 rounded-lg p-5 lg:p-8 flex items-center ">
          <form action="" className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div
              className={`w-full  flex-col  justify-center gap-5  ${
                show ? "flex" : "hidden"
              }`}
            >
              <div className="flex flex-col gap-2">
                <Label className="text-xl">from</Label>
                {/* <Input
                  {...register("from", {
                    required:
                      "Please enter a starting location in the From field",
                  })}
                  type="text"
                  placeholder="Enter your location"
                /> */}
                 <PlaceAutocomplete  
                  type="text"
                  placeholder="Enter your location"
                  name = "from" 
                  errorMsg = "Please enter a starting location in the From field"
                  register = {register}
                  control ={control}
                  setValue={setValue}
                   lat="from_lat"
                  lng="from_lng"

                  />
                {errors.from && (
                  <div className="text-red-500 text-start">
                    {errors.from.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-xl">to</Label>
                {/* <Input
                  {...register("to", {
                    required:
                      "Please enter a destination location in the To field",
                  })}
                  type="text"
                  placeholder="Enter your drop location"
                /> */}
                 <PlaceAutocomplete  
                  type="text"
                  placeholder="Enter your drop location"
                  name = "to" 
                  errorMsg = "Please enter a destination location in the To field"
                  register = {register}
                  setValue={setValue}
                  Controller = {Controller}
                  control ={control}
                  lat="to_lat"
                  lng="to_lng"
                  />
                {errors.to && (
                  <div className="text-red-500 text-start">
                    {errors.to.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-xl">date</Label>
                <Input
                  {...register("date", {
                    // required: "Please enter a date.",
                  })}
                  type="date"
                />
                {errors.date && (
                  <div className="text-red-500 text-start">
                    {errors.date.message}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-end">
                <Button
                  type="button"
                  className="w-full flex items-center capitalize"
                  onClick={handleNext}
                >
                  next
                </Button>
              </div>
            </div>

            <div
              className={`w-full flex-col  justify-center gap-5   ${
                show ? "hidden" : "flex"
              }`}
            >
              <div className="flex flex-col gap-2">
                <Label className="text-xl">Trip type</Label>
                <div className="w-full">
                  <Select>
                    <SelectTrigger {...register("tripType")} className="w-full">
                      <SelectValue placeholder="Select a Trip type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectLabel>Trip type</SelectLabel> */}
                        <SelectItem value="apple">Rounded Trip</SelectItem>
                        <SelectItem value="banana">Drop Only</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.tripType && (
                    <span className="text-red-500 text-sm">
                      {errors.tripType.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-xl">landmark</Label>
                <Input
                  {...register("landmark", {
                    // required: "Please specify a landmark.",
                  })}
                  type="text"
                  placeholder="Enter landmark"
                />
                {errors.landmark && (
                  <span className="text-red-500 text-sm">
                    {errors.landmark.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-xl">alternative phone number</Label>
                <Input
                  {...register("phoneNumber", {
                    // required: "Please provide a phone number.",
                    maxLength: {
                      value: 10,
                      message: "length of mobile number should be 10",
                    },
                  })}
                  type="number"
                  placeholder="Enter phone number"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-end">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full flex justify-evenly items-center capitalize text-lg font-bold"
                >
                  {isSubmitting ? "Loading..." : "submit"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export const PickupLocation = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center capitalize gap-2 p-5 sm:p-0">
        <h1 className="text-4xl font-bold capitalize text-center text-primary">
          trip type
        </h1>
        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-1/3 h-3/5  border-2 border-red-500 rounded-lg p-5 flex items-center shadow-md shadow-red-500 ">
          <form
            action=""
            className="w-full flex flex-col  justify-center gap-5"
          >
            <div className="flex flex-col gap-2">
              <Label className="text-xl">from</Label>
              <SelectGroup>
                <Select>option one</Select>
              </SelectGroup>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xl">landmark</Label>
              <Input />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xl">alternative phone number</Label>
              <Input type="number" />
            </div>
            <div className="flex items-center justify-end">
              <Button className="w-full flex justify-evenly items-center capitalize text-lg font-bold">
                submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
