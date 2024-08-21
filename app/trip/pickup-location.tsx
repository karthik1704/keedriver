"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
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
import { assert } from "console";
import { resolve } from "path";
import PlaceAutocomplete from "@/components/place-autocomplete";
import { any } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { MapPin } from 'lucide-react';

type FormFields = {
  from: string;
  to: string;
  date: string;
  tripType: string;
  landmark: string;
  phoneNumber: number;
  from_lat: number;
  from_lng: number;
  to_lat: number;
  to_lng: number;
  carType: string;
};

export const TripDetailForm = ({carlists}:any) => {
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(true);
  const [login, setLogin] = useState(true);
  const [personData, setPersonData] = useState([]);
  const [isTall, setIsTall] = useState(true);

 const dateTimeInputRef = useRef(null);
  const router = useRouter();
// console.log(carlists);
  // const {
  //   register,
  //   handleSubmit,
  //   control,
  //   form,
  //   setValue,
  //   formState: { errors, isSubmitting },
  // } = useForm<FormFields>();

  const form = useForm<FormFields>({
    defaultValues: {
      tripType: personData?.tripType ? personData?.tripType : "RoundedTrip",
    },
  });

  useEffect(() => {
    if (carlists) {
      const value: string | null = localStorage.getItem("PersonDetail");

      console.log(value);
      if (!value) {
        return;
      }
      const users = JSON.parse(value);

      form.setValue("from", users.from);
      form.setValue("to", users.to);
      form.setValue("date", users.date);
      form.setValue("tripType", users.tripType);
      form.setValue("landmark", users.landmark);
      form.setValue("phoneNumber", users.phoneNumber);
      form.setValue("from_lat", users.from_lat);
      form.setValue("from_lng", users.from_lng);
      form.setValue("to_lat", users.to_lat);
      form.setValue("to_lng", users.to_lng);

      setPersonData(users);
    }
  },[]);

  useEffect(()=>{
    const subcription = form.watch((value)=>{
      // console.log(value);
      let personDetail = JSON.stringify(value)
      localStorage.setItem("PersonDetail",personDetail);

    })

    return ()=>subcription.unsubscribe();

  }, [form.watch])

   let personDetail;
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
   personDetail = JSON.stringify(data);
   console.log(personDetail);
   
  };
  function dateTimePicker(){
    if(dateTimeInputRef.current){
      dateTimeInputRef.current.showPicker();
    }
  }
  function handleNext() {
    if (!show) {
      if(!carlists){
        // localStorage.setItem('PersonDetail',personDetail);
        router.push("/login");
      }
      setDisplay(!display);
      return;
    }
    setShow(!show);
  }
  console.log(personData.tripType,"hi")
  return (
    <>
      <Form {...form}>
        <div className={`w-full flex flex-col items-center justify-center capitalize gap-2 p-5 my-4 sm:p-0`}>
          <h1 className="text-3xl md:text-4xl font-bold capitalize text-center text-primary">
            book my trip
          </h1>
          <div className="w-full sm:w-4/5 md:w-3/5  xl:w-2/5 h-auto  border-2 rounded-lg  p-3 md:p-7 lg:p-8 flex items-center flex-col relative">
          <Button
                  type="button"
                  className={`justify-evenly items-center capitalize text-sm md:text-md font-semibold absolute top-2 right-2 ${display ? "hidden" : "flex"}`}
                >
                 <Plus/> add car
                </Button>
            <form
              action=""
              className="w-full"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className={`w-full ${display ? "flex" : "hidden"}`}>
                <div
                  className={`w-full  flex-col  justify-center gap-5  ${
                    show ? "flex" : "hidden"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <Label className="text-xl">from</Label>
                    {/* <Input
                  {...form.register("from", {
                    required:
                      "Please enter a starting location in the From field",
                  })}
                  type="text"
                  placeholder="Enter your location"
                /> */}
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
                      <div className="text-red-500 text-start">
                        {form.formState.errors.from.message}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-xl">to</Label>
                    {/* <Input
                  {...form.register("to", {
                    required:
                      "Please enter a destination location in the To field",
                  })}
                  type="text"
                  placeholder="Enter your drop location"
                /> */}
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
                      <div className="text-red-500 text-start">
                        {form.formState.errors.to.message}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-xl">date</Label>
                    {/* <Input
                      {...form.register("date", {
                        // required: "Please enter a date.",
                      })}
                      type="datetime-local"
                      className="w-full"
                    /> */}
                    <input
                    {...form.register("date", {
                      // required: "Please enter a date.",
                    })}  type="datetime-local"
                      className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      ref={dateTimeInputRef}
                      onFocus={dateTimePicker}
                      />
                   
                    {form.formState.errors.date && (
                      <div className="text-red-500 text-start">
                        {form.formState.errors.date.message}
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
                    <FormField
                      control={form.control}
                      name="tripType"
                      render={({ field }) => (
                        <FormItem>
                          <Label className="text-xl">Trip type</Label>
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
                                  {/* <SelectLabel>Trip type</SelectLabel> */}
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
                              <span className="text-red-500 text-sm">
                                {form.formState.errors.tripType.message}
                              </span>
                            )}
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-xl">landmark</Label>
                    <Input
                      {...form.register("landmark", {
                        // required: "Please specify a landmark.",
                      })}
                      type="text"
                      placeholder="Enter landmark"
                    />
                    {form.formState.errors.landmark && (
                      <span className="text-red-500 text-sm">
                        {form.formState.errors.landmark.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-xl">alternative phone number</Label>
                    <Input
                      {...form.register("phoneNumber", {
                        // required: "Please provide a phone number.",
                        maxLength: {
                          value: 10,
                          message: "length of mobile number should be 10",
                        },
                      })}
                      type="number"
                      placeholder="Enter phone number"
                    />
                    {form.formState.errors.phoneNumber && (
                      <span className="text-red-500 text-sm">
                        {form.formState.errors.phoneNumber.message}
                      </span>
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
                  {/* <div className="flex items-center justify-end">
                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  className="w-full flex justify-evenly items-center capitalize text-lg font-bold"
                >
                  {form.formState.isSubmitting ? "Loading..." : "submit"}
                </Button>
              </div> */}
                </div>
              </div>
              <div
                className={`w-full ${
                  display ? "hidden" : "flex flex-col  gap-5"
                }`}
              >
                <h4 className="text-center capitilize text-2xl md:text-3xl text-primary font-semibold">
                  car list
                </h4>
                <div className="w-full flex  items-center justify-center">
                  <FormField
                    control={form.control}
                    name="carType"
                    render={({ field }) => (
                      <FormItem className="space-y-3 w-full">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="w-full flex flex-col items-center justify-center space-y-1"
                          >
                            {
                              carlists?.results?.map((carList,index)=>{
                                return <FormItem
                                className={`w-full lg:w-3/4 flex items-center justify-between gap-5 space-x-3 space-y-0 bg-white p-4 rounded-lg shadow-lg relative capitalize ${
                                  field.value === `${carList.company_name}`
                                    ? " shadow-red-500/50"
                                    : " shadow-gray-200"
                                }`}
                                key={index}
                              >
                                <div>
                                  <FormLabel className="font-bold text-lg md:text-xl text-primary flex gap-2">
                                    {carList.company_name} innova<br />  
                                  </FormLabel>
                                  <span className="font-medium text-sm md:text-md  inline-block text-slate-600">
                                    {carList.registration_number}
                                  </span><br />
                                  <br />
                                  <span className="font-medium text-sm md:text-md   inline-block text-slate-600">
                                   <span className="text-primary font-semibold">model :</span>{carList.model}
                                  </span>
                                  <br />
                                  <span className="font-medium text-sm md:text-md  inline-block text-slate-600">
                                  <span className="text-primary font-semibold">gas :</span> petrol
                                  </span>
                                  <br />
                                  <span className="font-medium text-sm md:text-md   inline-block text-slate-600">
                                  <span className="text-primary font-semibold">gear type :</span>{carList.transmission_type}
                                  </span>
                                  {/* <div className="flex items-center gap-5">
                      
                      </div> */}
                                </div>
                                <div className="w-1/2 md:w-2/5">
                                  <div className="h-auto w-full">
                                    <img
                                      className="h-full w-full object-cover"
                                      src="https://5.imimg.com/data5/SELLER/Default/2020/12/YP/IV/KC/118359422/innova-car.jpg"
                                      alt="car-image"
                                    />
                                  </div>
                                </div>
  
                                <FormControl className="">
                                    <RadioGroupItem value={`${carList.company_name}`} />
                                  </FormControl>
  
                                {/* <FormLabel className="font-normal">
                        All new messages
                      </FormLabel> */}
                              </FormItem>

                              })
                            }
                            

                            {/* <FormItem
                              className={`w-full lg:w-3/4 flex items-center justify-between gap-5 space-x-3 space-y-0 bg-white p-4 rounded-lg shadow-lg relative capitalize ${
                                field.value === "mention"
                                  ? " shadow-red-500/50"
                                  : " shadow-gray-200"
                              }`}
                            >
                              <div>
                                <FormLabel className="font-bold text-xl text-primary flex gap-2">
                                  toyota innova<br />  
                                </FormLabel>
                                <span className="font-medium text-md inline-block text-slate-600">
                                  Tn 22 c 0198
                                </span><br />
                                <br />
                                <span className="font-medium text-md   inline-block text-slate-600">
                                 <span className="text-primary font-semibold">model :</span> MPv
                                </span>
                                <br />
                                <span className="font-medium text-md  inline-block text-slate-600">
                                <span className="text-primary font-semibold">gas :</span> petrol
                                </span>
                                <br />
                                <span className="font-medium text-md   inline-block text-slate-600">
                                <span className="text-primary font-semibold">geartype :</span> manual gear
                                </span>
                              </div>
                              <div className="w-2/5">
                                <div className="h-auto w-full">
                                  <img
                                    className="h-full w-full object-cover"
                                    src="https://5.imimg.com/data5/SELLER/Default/2020/12/YP/IV/KC/118359422/innova-car.jpg"
                                    alt="car-image"
                                  />
                                </div>
                              </div>

                              <FormControl className="">
                                  <RadioGroupItem value="mention" />
                                </FormControl>
                            </FormItem> */}
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    disabled={form.formState.isSubmitting}
                    type="submit"
                    className="w-full lg:w-3/4 justify-evenly items-center capitalize text-lg font-bold"
                  >
                    {form.formState.isSubmitting ? "Loading..." : "submit"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Form>
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
