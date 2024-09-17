"use client";
import React, { useEffect,useState } from "react";
import {
  MoveRight,
  MapPinned,
  Calendar,
  Landmark,
  Phone,
  Car,
  Cog,
  Fuel,
  AlarmClock,
  Banknote,
  MoonStar,
  IndianRupee,
  Clock3,
   RectangleEllipsis,
   Route,
    CarFront
} from "lucide-react";
import HireUS from "../hire-us/page";
import SuccessCard from "./success-card";
import { GET } from "../api/cars/route";

const PreViewCard = ({ personData}) => {
  const { from, to, tripType, phoneNumber, landmark, carType } = personData;

  const [carTypeData,setCarTypeData] = useState([]);
  const [messageShow,setMessageShow] = useState(true);

  useEffect(() => {
    const query = `id=${encodeURIComponent(carType.toString())}`;
    fetch(`/api/cars/?${query}`)
      .then((data) => data.json())
      .then((res) => {console.log(res,"resdata"),setCarTypeData(res)})
      .catch((error) => console.log(error));
  }, []);

  function handleMessageShow(){
    console.log("clicked")
    setMessageShow(false)
  }

  console.log(personData, "previw", personData.from);
  return (
    <>
      {
        messageShow ? <section className="w-full bg-stone-100 flex items-center justify-center p-5">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-5">
          <div className="md:w-4/5 lg:w-[66%] xl:w-[55%] bg-rose-700 flex flex-col items-center justify-center px-5 py-6 xl:py-8 rounded-lg ">
            <h2 className="text-2xl mb-4 font-semibold text-white">
              TRIP DETAILS
            </h2>

            <div className="w-4/5 flex flex-col items-center justify-between gap-3">
              <ul className="w-full flex flex-col gap-2 lg:grid lg:grid-cols-2 items-start lg:gap-5 ">
                <li className="w-full">
                  <span className="mb-3 inline-block text-white text-lg font-semibold">
                    From
                  </span>
                  <div className="flex min-h-16 w-full gap-2 p-2 bg-white rounded-lg justify-start items-center lg:items-start shadow-sm shadow-current">
                    <span className="inline-block px-2">
                      {" "}
                      <MapPinned className="text-red-600" />{" "}
                    </span>
                    <span className="inline-block md:text-base lg:text-lg capitalize font-semibold text-gray-700">
                      {from}
                    </span>
                  </div>
                </li>
                <li className="w-full">
                  <span className="mb-3 inline-block text-white text-lg font-semibold">
                    To
                  </span>
                  <div className="flex min-h-16 w-full gap-2 p-2 bg-white rounded-lg justify-start items-center lg:items-start shadow-sm shadow-current ">
                    <span className="inline-block px-2">
                      {" "}
                      <MapPinned className="text-red-600" />{" "}
                    </span>
                    <span className="inline-block md:text-base lg:text-lg capitalize text-gray-700 font-semibold">
                      {to}
                    </span>
                  </div>
                </li>
              </ul>

              <div className="w-full">
                <span className="mb-3 inline-block text-white text-lg font-semibold">
                  Land Mark
                </span>
                <div className="flex w-full gap-2 p-2 bg-white rounded-lg justify-start shadow-sm shadow-current ">
                  <span className="inline-block px-2">
                    {" "}
                    <Landmark className="text-red-600" />{" "}
                  </span>

                  <span className="inline-block md:text-base lg:text-lg text-gray-700 capitalize font-semibold">
                    {landmark}
                  </span>
                </div>
              </div>
              <ul className="w-full flex flex-wrap lg:grid lg:grid-cols-2 items-start justify-start lg:justify-items-start gap-2 lg:gap-4">
                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-white text-lg font-semibold">
                    Trip Date
                  </span>
                  <div className="flex w-full sm:w-36 md:w-40 lg:w-full gap-2 p-2 bg-white rounded-lg justify-center shadow-sm shadow-current ">
                    <span className="inline-block px-2">
                      {" "}
                      <Calendar className="text-red-600" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg capitalize text-gray-700 font-semibold">
                      04/09/2024
                    </span>
                  </div>
                </li>

                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-white text-lg font-semibold">
                    Trip Time
                  </span>
                  <div className="flex w-full sm:w-36 md:w-40 lg:w-full gap-2 p-2 bg-white rounded-lg justify-center shadow-sm shadow-current ">
                    <span className="inline-block px-2">
                      {" "}
                      <Clock3 className="text-red-600" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg capitalize text-gray-700 font-semibold">
                      10:30 am
                    </span>
                  </div>
                </li>

                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-white text-lg font-semibold">
                    Trip Type
                  </span>
                  <div className="flex w-full  sm:w-36 md:w-40 lg:w-full gap-2 p-2 bg-white rounded-lg justify-center shadow-sm shadow-current ">
                    <span className="inline-block px-2">
                      {" "}
                      <Route className="text-red-600" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg text-gray-700 capitalize font-semibold">
                      {tripType}
                    </span>
                  </div>
                </li>

                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-white text-lg font-semibold">
                    Phone Number
                  </span>
                  <div className="flex w-full  sm:w-36 md:w-40  lg:w-full gap-2 p-2 bg-white rounded-lg  items-center justify-center shadow-sm shadow-current ">
                    <span className="inline-block px-2">
                      {" "}
                      <Phone className="text-red-600 h-5 w-5" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg text-gray-700 capitalize font-semibold">
                      {phoneNumber}
                    </span>
                  </div>
                </li>      
              </ul>
              <div className="w-full">
               <h3 className="text-xl mb-4 font-semibold text-white text-center">
                CAR DETAILS

               </h3>
               <ul className="w-full bg-white rounded-lg flex flex-wrap lg:grid lg:grid-cols-3 items-center justify-between lg:justify-items-center gap-2 lg:gap-4 p-3">
                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-gray-800 text-lg font-semibold border-b-2 border-rose-700 pb-1">
                    Car Name
                  </span>
                  <div className="flex w-full sm:w-36 md:w-40 lg:w-full gap-2 p-2 rounded-lg justify-start">
                    <span className="inline-block px-2">
                      {" "}
                      <CarFront className="text-red-600" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg text-gray-700 capitalize font-semibold">
                      innova
                    </span>
                  </div>
                </li>

                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-gray-800 text-lg font-semibold border-b-2 border-rose-700 pb-1">
                    Car Model
                  </span>
                  <div className="flex w-full sm:w-36 md:w-40 lg:w-full gap-2 p-2 bg-white rounded-lg justify-start ">
                    <span className="inline-block px-2">
                      <Car className="text-red-600" />
                    </span>

                    <span className="inline-block md:text-base lg:text-lg text-gray-700 capitalize font-semibold">
                      Suv
                    </span>
                  </div>
                </li>

                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-gray-800  text-lg font-semibold border-b-2 border-rose-700 pb-1">
                    Registration No
                  </span>
                  <div className="flex w-full  sm:w-36 md:w-40 lg:w-full gap-2 p-2 bg-white rounded-lg justify-start ">
                    <span className="inline-block px-2">
                      {" "}
                      < RectangleEllipsis className="text-red-600" />{" "}
                    </span>

                    <span className="inline-block md:text-base text-gray-700 lg:text-lg capitalize font-semibold">
                     TN 85 q 0931
                    </span>
                  </div>
                </li>

                {/* <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-gray-600 font-bold">
                    Phone Number
                  </span>
                  <div className="flex w-full  sm:w-36 md:w-40  lg:w-full gap-2 p-2 bg-white rounded-lg  items-center justify-center ">
                    <span className="inline-block">
                      {" "}
                      <Phone className="text-red-600 h-5 w-5" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg capitalize font-semibold">
                      {phoneNumber}
                    </span>
                  </div>
                </li> */}
                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-gray-800 text-lg font-semibold border-b-2 border-rose-700 pb-1">
                    Gear Type
                  </span>
                  <div className="flex w-full  sm:w-36 md:w-40 lg:w-full gap-2 p-2 bg-white rounded-lg justify-start ">
                    <span className="inline-block px-2">
                      {" "}
                      <Cog className="text-red-600" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg text-gray-700 capitalize font-semibold">
                     {carTypeData.transmission_type}
                    </span>
                  </div>
                </li>
                <li className="w-full sm:w-auto lg:w-full">
                  <span className="mb-3 inline-block text-gray-800 text-lg font-semibold border-b-2 border-rose-700 pb-1">
                    Gas
                  </span>
                  <div className="flex w-full sm:w-36 md:w-40 lg:w-full gap-2 p-2 bg-white rounded-lg justify-start ">
                    <span className="inline-block px-2">
                      {" "}
                      <Fuel className="text-red-600" />{" "}
                    </span>

                    <span className="inline-block md:text-base lg:text-lg text-gray-700 capitalize font-semibold">
                      petrol
                    </span>
                  </div>
                </li>
              </ul>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/5 lg:w-1/3 xl:w-1/4 flex flex-col gap-7">
            <div className="w-full flex flex-col items-center  bg-rose-700 rounded-lg p-4">
              <h2 className="text-xl text-center font-semibold uppercase text-white p-3">
                Trip Amount
              </h2>
              <ul className="w-full flex flex-col items-center text-white text-lg gap-4">
                <li className="w-11/12 flex items-center justify-between gap-3 pb-2 border-b-2">
                  <span className="inline-block">Estimated Time</span>
                  <p>
                    <AlarmClock className="inline mr-2" />
                    10am
                  </p>
                </li>
                <li className="w-11/12 flex items-center justify-between gap-3 pb-2 border-b-2">
                  <span className="inline-block">Estimated Cost</span>
                  <p>
                    <Banknote className="inline mr-2" />
                    800
                  </p>
                </li>
                <li className="w-11/12 flex items-center justify-between gap-3 pb-2 border-b-2">
                  <span className="inline-block">Night Shit Allowance</span>
                  <p>
                    <MoonStar className="inline mr-2" />
                    200
                  </p>
                </li>
              </ul>
              <p className="w-11/12 flex items-center justify-between mt-5 text-white text-xl">
                <span className="inline-block tracking-widest font-bold ">
                  Total
                </span>
                <span className="inline-block">
                  <IndianRupee className="inline mr-1" />
                  1000
                </span>
              </p>
            </div>

            <div className="w-full">
              <button className="bg-gradient-to-r from-rose-700 to-rose-500 text-lg shadow-md shadow-current w-full text-center py-2 text-white hover:bg-gradient-to-l rounded-lg font-semibold tracking-wider transition duration-500 ease-in-out"
              onClick={()=> {handleMessageShow()}}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      :
      <SuccessCard/>
      }
      
    </>
  );
};

export default PreViewCard;
