"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, Plus } from "lucide-react";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { format } from "date-fns";
import { dateFormatter } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { assert } from "console";
import { resolve } from "path";
import PlaceAutocomplete from "@/components/place-autocomplete";
import { any } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import PreViewCard from "./preview-card";
import Image from "next/image";
// import { MapPin } from 'lucide-react';

// type FormFields = {
//   from: string;
//   to: string;
//   date: string;
//   tripType: string;
//   landmark: string;
//   phoneNumber: number;
//   from_lat: number;
//   from_lng: number;
//   to_lat: number;
//   to_lng: number;
//   carType: string;
// };

const tripFormSchema = z.object({
  from: z
    .string()
    .min(1, "The 'From' field cannot be empty. Please enter a value."),
  to: z.string().min(1, "please fill out the empty field"),
  // date:z.tuple([z.date(),z.string().time()]),
  date:z.date({
    required_error: "Please select at least one date.",
  }),
  // time:z.string().regex(/^(0[1-9]|1[0-2]):([0-5][0-9]) (AM|PM)$/, {
  //   message: "Invalid time format. Please select a valid time (e.g., 10:30 AM).",
  // }),
  // date:z.string(),
  tripType: z.string().min(1, "please fill out the empty field"),
  landmark: z.string().min(1, "please fill out the empty field"),
  phoneNumber: z.string().min(1, "please fill out the empty field"),
  from_lat: z.number(),
  from_lng: z.number(),
  to_lat: z.number(),
  to_lng: z.number(),
  carType: z.union([z.string(), z.number()]),
});

type TtripFormSchema = z.infer<typeof tripFormSchema>;

export const TripDetailForm = ({ cars }: any) => {
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(true);
  const [display1, setDisplay1] = useState(true);
  const [login, setLogin] = useState(true);
  const [personData, setPersonData] = useState([]);
  const [isTall, setIsTall] = useState(true);

  const [carListId,setCarListId] = useState(0);
  const [step, setStep] = useState(1);
  const [dateTime,setDateTime] = useState(null);


  const dateTimeInputRef = useRef(null);
  const router = useRouter();

  console.log(personData, "persondata");
  

  const form = useForm<TtripFormSchema>({
    defaultValues: {
      tripType: personData?.tripType ? personData?.tripType : "RoundedTrip",
    },
    resolver: zodResolver(tripFormSchema),
  });

  useEffect(() => {
    if (carlists) {
      const value: string | null = localStorage.getItem("PersonDetail");

      // console.log(value);
      if (!value) {
        return;
      }
      const users = JSON.parse(value);

      const restoreDate = dateFormatter(users.date);

      // console.log(users,users.carType,"hello")

      form.setValue("from", users.from);
      form.setValue("to", users.to);
      form.setValue("date", restoreDate);
      form.setValue("tripType", users.tripType);
      form.setValue("landmark", users.landmark);
      form.setValue("phoneNumber", users.phoneNumber);
      form.setValue("from_lat", users.from_lat);
      form.setValue("from_lng", users.from_lng);
      form.setValue("to_lat", users.to_lat);
      form.setValue("to_lng", users.to_lng);
      form.setValue("carType", users.carType);

      const newData = JSON.stringify(users);

      console.log(newData, "newdata");

      setPersonData(users);
    }
  }, []);

  useEffect(() => {
    const subcription = form.watch((value) => {
      let personDetail = JSON.stringify(value);
      console.log(personDetail);
      localStorage.setItem("PersonDetail", personDetail);
    });

    return () => subcription.unsubscribe();
  }, [form.watch]);

  // let personDetail;
  const onSubmit: SubmitHandler<TtripFormSchema> = async (data) => {
    // console.log("submit",data);

    setDisplay1(false);
  };
  function dateTimePicker() {
    if (dateTimeInputRef.current) {
      dateTimeInputRef.current.showPicker();
    }
  }
  // async function handleNext() {
  //   const inputFieldsOne = await form.trigger(["from", "to","date"]);
  //   if (inputFieldsOne) {
  //     const inputFieldsTwo = await form.trigger([
  //       "tripType",
  //       "landmark",
  //       "phoneNumber",
  //     ]);
  //     if (!show && inputFieldsTwo) {
  //       if (!carlists) {
  //         router.push("/login");
  //       }
  //       setDisplay(!display);
  //       return;
  //     }
  //     setShow(!show);
  //   }
  // }
  async function handleNext() {
  if (step === 1) {
    const inputFieldsOne = await form.trigger(["from", "to", "date"]);
    if (inputFieldsOne) {
      // Move to the next step
      setStep(2);
      setShow(!show);
    }
  } else if (step === 2) {
    const inputFieldsTwo = await form.trigger([
      "tripType",
      "landmark",
      "phoneNumber",
    ]);
    if (inputFieldsTwo) {
      if (!show) {
        if (!carlists) {
          router.push("/login");
        }
        setDisplay(!display);
        return;
      }
    }
  }
}

function handleTimePicker(newDateTime){
  setDateTime(newDateTime)

}
  //  console.log(form.formState.errors.date.message)
  return (
    <>


         
      {display1 ? (
        <Form {...form}>
          <div
            className={`w-full h-full flex flex-col items-center justify-center bg-stone-300/50 capitalize`}
          >
            <h1 className="text-xl text-white p-3 w-full bg-rose-700 md:text-3xl mb-10 font-semibold capitalize text-center text-primary">
              Book My Trip
            </h1>
            <div className="w-auto h-full mb-24 mx-6 sm:mx-20 md:mx-12 lg:mx-40 xl:mx-52 bg-rose-700 shadow-rose-800 shadow-md rounded-lg my-10 p-5 md:p-7 lg:p-8 flex items-center flex-col relative">
              <Button
                type="button"
                className={`justify-evenly items-center bg-stone-950 hover:bg-stone-700 capitalize text-sm md:text-md font-semibold absolute top-2 right-2 ${
                  display ? "hidden" : "flex"
                }`}
              >
                <Plus /> add car
              </Button>
              <form
                action=""
                className="w-full mx-14 sm:mx-24"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className={`w-full ${display ? "flex" : "hidden"}`}>
                  <div
                    className={`w-full flex-col justify-center gap-5  ${
                      show ? "flex" : "hidden"
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <Label className="text-xl text-white">from</Label>
                      <PlaceAutocomplete
                        type="text"
                        placeholder="Enter your location"
                        name="from"
                        errorMsg="Please enter a starting location in the From field"
                        register={form.register}
                        control={form.control}
                        setValue={form.setValue}
                        lat="from_lat"
                        lng="from_lng"
                      />
                      {form.formState.errors.from && (
                        <div className="text-white text-start text-sm lg:text-base">
                          {form.formState.errors.from.message}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-xl text-white">to</Label>
                      <PlaceAutocomplete
                        type="text"
                        placeholder="Enter your drop location"
                        name="to"
                        errorMsg="Please enter a destination location in the To field"
                        register={form.register}
                        setValue={form.setValue}
                        Controller={Controller}
                        control={form.control}
                        lat="to_lat"
                        lng="to_lng"
                      />
                      {form.formState.errors.to && (
                        <div className="text-white text-start text-sm lg:text-base">
                          {form.formState.errors.to.message}
                        </div>
                      )}
                    </div>
                

                  

                  <div className="flex flex-col gap-2">
              
                   <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-white text-xl">Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        dateFormatter(field.value)
                      ) : (
                        <span>DD/MM/YYYY</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    // initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
                   


                    {form.formState.errors.date && (
                      <div className="text-white text-start text-sm lg:text-base">
                        {form.formState.errors.date.message}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-xl text-white">Time</Label>
                    <div className="w-full relative">
                    <DatePicker
                    name="time"
                    // className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm placeholder:text-muted-foreground"
                    containerClassName="w-full"
                    inputClass="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    disableDayPicker
                    value={dateTime}
                    onChange={handleTimePicker}
                    format="hh:mm A"
                    plugins={[<TimePicker position="bottom" className="cursor-pointer w-full"/>]}
                    placeholder="hh:mm:ss"
            
                    />
                     <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                  <Clock className="w-4 h-4 text-gray-500" />
                    </div>

                    </div>
                    
                    {form.formState.errors.time && (
                      <div className="text-white text-start text-sm lg:text-base">
                        {form.formState.errors.time.message}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-end">
                    <Button
                      type="button"
                      className="w-full flex bg-stone-950 hover:bg-stone-700 items-center capitalize"
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
                      <FormField
                        control={form.control}
                        name="tripType"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="text-xl text-white">
                              Trip type
                            </Label>
                            <div className="w-full">
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select a Trip type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="RoundedTrip">
                                      Rounded Trip
                                    </SelectItem>
                                    <SelectItem value="DropOnly">
                                      Drop Only
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              {form.formState.errors.tripType && (
                                <span className="text-white text-sm lg:text-base">
                                  {form.formState.errors.tripType.message}
                                </span>
                              )}
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-xl text-white">landmark</Label>
                      <Input
                        {...form.register("landmark", {})}
                        type="text"
                        placeholder="Enter landmark"
                      />
                      {form.formState.errors.landmark && (
                        <span className="text-white text-sm lg:text-base">
                          {form.formState.errors.landmark.message}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-xl text-white">
                        alternative phone number
                      </Label>
                      <Input
                        {...form.register("phoneNumber", {
                          maxLength: {
                            value: 10,
                            message: "length of mobile number should be 10",
                          },
                        })}
                        type="number"
                        placeholder="Enter phone number"
                      />
                      {form.formState.errors.phoneNumber && (
                        <span className="text-white text-sm lg:text-base">
                          {form.formState.errors.phoneNumber.message}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-end">
                      <Button
                        type="button"
                        className="w-full flex bg-stone-950 hover:bg-stone-700 items-center capitalize"
                        onClick={handleNext}
                      >
                        next
                      </Button>
                    </div>

                  </div>
                </div>
                <div
                  className={`w-full ${
                    display ? "hidden" : "flex flex-col gap-5"
                  }`}
                >
                  <h4 className="text-center text-white capitilize text-2xl md:text-3xl text-primary font-semibold">
                    car list
                  </h4>
                  <div className="w-full flex items-center justify-center">
                    <FormField
                      control={form.control}
                      name="carType"
                      render={({ field }) => (
                        <FormItem className="space-y-3 w-full">
                          <FormControl>
                            <RadioGroup
                              required={false}
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center justify-center"
                            >
                              {cars?.results?.map((car) => (
                                <FormItem
                                  className={`flex w-full items-center justify-between gap-5 bg-white p-4 rounded-lg shadow-lg relative capitalize ${
                                    field.value === `${car.id}`
                                      ? "border-4 border-gray-600 shadow-black"
                                      : "border border-rose-700"
                                  }`}
                                  key={car.id}
                                >
                                  <div>
                                    <FormLabel className="font-bold text-lg md:text-xl text-primary flex gap-2">
                                      {car.company_name} innova
                                      <br />
                                    </FormLabel>
                                    <span className="font-medium text-sm md:text-md inline-block text-slate-600">
                                      {car.registration_number}
                                    </span>
                                    <br />
                                    <br />
                                    <span className="font-medium text-sm md:text-md inline-block text-slate-600">
                                      <span className="text-primary font-semibold">
                                        model :
                                      </span>
                                      {car.model}
                                    </span>
                                    <br />
                                    <span className="font-medium text-sm md:text-md inline-block text-slate-600">
                                      <span className="text-primary font-semibold">
                                        gas :
                                      </span>{" "}
                                      petrol
                                    </span>
                                    <br />
                                    <span className="font-medium text-sm md:text-md inline-block text-slate-600">
                                      <span className="text-primary font-semibold">
                                        gear type :
                                      </span>
                                      {car.transmission_type}
                                    </span>
                                  </div>
                                  <div className="w-1/2 md:w-2/5">
                                    <div className="h-auto w-full">
                                      <Image
                                        width={100}
                                        height={100}
                                        className="h-full w-full object-cover"
                                        src="/images/cars/innova-car.jpg"
                                        alt="car-image"
                                      />
                                    </div>
                                  </div>
                                  <FormControl>
                                    <RadioGroupItem value={`${car.id}`} />
                                  </FormControl>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  {form.formState.errors.carType && (
                    <div className="flex items-center justify-center">
                      <span className="w-full lg:w-3/4 text-red-500 text-start text-sm lg:text-base inline-block">
                        {form.formState.errors.carType.message}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-center">
                    <Button
                      disabled={form.formState.isSubmitting}
                      type="submit"
                      className="w-full lg:w-3/4 bg-stone-950 hover:bg-stone-700 justify-evenly items-center capitalize text-lg font-bold"
                    >
                      {form.formState.isSubmitting ? "Loading..." : "submit"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Form>
      ) : (
        <PreViewCard personData={personData} carListId={carListId} />
      )}
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
