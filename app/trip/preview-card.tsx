"use client"
import React from 'react'
import { MoveRight,MapPinned,Calendar,Landmark,Phone, Car,Cog,Fuel,AlarmClock,Banknote,MoonStar,IndianRupee,Clock3} from 'lucide-react';


const PreViewCard = ({personData}) => {

  const{from,to,tripType,phoneNumber,landmark,carType } = personData;

  console.log(personData,"previw",personData.from)
  return <>

  <section className='w-full flex items-center justify-center p-5'>
  <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-5'>
  <div className='md:w-4/5 lg:w-3/5 xl:w-1/2 bg-rose-700 flex flex-col items-center justify-center p-8  rounded-lg '>
  <h2 className='text-2xl mb-4  font-semibold text-white'>Trip Details</h2>

  <div className='w-4/5 flex flex-col items-center justify-between gap-3'>

  <ul className='w-full lg:grid lg:grid-cols-2 items-start gap-5 '>
    <li>
      <span className='mb-3 inline-block text-white'>From</span>
      <div className='flex min-h-28 w-full gap-2 p-2 bg-white rounded-lg justify-center items-center lg:items-start shadow-sm shadow-current'>
       <span className='inline-block'> <MapPinned className='text-red-600'/> </span>
        <span className='inline-block md:text-base lg:text-lg capitalize font-semibold'>{from}</span>
      </div>
      </li>
    {/* <li className='invisible md:visible'> <MoveRight className='text-white' />
    </li> */}
    <li>
      <span className='mb-3 inline-block text-white'>To</span>
      <div className='flex min-h-28 w-full gap-1 p-2 bg-white rounded-lg justify-center items-center lg:items-start shadow-sm shadow-current '>
      <span className='inline-block'> <MapPinned className='text-red-600'/> </span>
        <span className='inline-block md:text-base lg:text-lg capitalize font-semibold'>{to}</span>
      </div>
      </li>
  </ul>
   {/* <ul className='w-full flex justify-between gap-4 items-center'>
    <li className='w-full'>
      <span className='mb-3 inline-block text-white'>From</span>
      <div className='flex w-full gap-3 rounded-lg justify-between'>
        <span className='inline-block'><MapPinned className='text-white'/></span>
        
        <span className='inline-block md:text-base lg:text-lg text-gray-200 capitalize font-semibold'>{from}</span>
      </div>
      </li>
    <li className='invisible md:visible'> <MoveRight className='text-white' />
    </li>
    <li className='w-full'>
      <span className='mb-3 inline-block text-white'>To</span>
      <div className='flex w-full gap-3 rounded-lg justify-between'>
        <span className='inline-block'><MapPinned className='text-white'/></span>
        
        <span className='inline-block md:text-base lg:text-lg text-gray-200 capitalize font-semibold'>{to}</span>
      </div>
      </li>
  </ul> */}
  <div className='w-full'>
  <span className='mb-3 inline-block text-white'>Land Mark</span>
      <div className='flex w-full gap-1 p-2 bg-white rounded-lg justify-center shadow-sm shadow-current '>
        <span className='inline-block'> <Landmark className='text-red-600' /> </span>
        
        <span className='inline-block md:text-base lg:text-lg capitalize font-semibold'>{landmark}</span>
      </div>

  </div>
   <ul className='w-full flex flex-wrap md:flex-row items-center justify-between gap-2'>
    <li>
      <span className='mb-3 inline-block text-white'>Trip Date</span>
      <div className='flex md:w-32 lg:w-36 gap-1 p-2 bg-white rounded-lg justify-between shadow-sm shadow-current '>
        <span className='inline-block'> <Calendar className='text-red-600'/> </span>
        
        <span className='inline-block md:text-base lg:text-lg capitalize font-semibold'>04/09/2024</span>
      </div>
      </li>

      <li>
      <span className='mb-3 inline-block text-white'>Trip Time</span>
      <div className='flex md:w-28 lg:w-36 gap-1 p-2 bg-white rounded-lg justify-between shadow-sm shadow-current '>
        <span className='inline-block'> <Clock3 className='text-red-600' /> </span>
        
        <span className='inline-block md:text-base lg:text-lg capitalize font-semibold'>10:30 am</span>
      </div>
      </li>
   
    <li>
      <span className='mb-3 inline-block text-white'>Trip Type</span>
      <div className='flex md:w-28 lg:w-36 gap-1 p-2 bg-white rounded-lg justify-between shadow-sm shadow-current '>
        <span className='inline-block'> < Car className='text-red-600'/> </span>
        
        <span className='inline-block md:text-base lg:text-lg capitalize font-semibold'>{tripType}</span>
      </div>
      </li>
       
  </ul>

   <ul className='w-full flex flex-wrap md:flex-row items-center justify-between gap-2'>
    <li>
      <span className='mb-3 inline-block text-white'>Phone Number</span>
      <div className='flex md:w-32  lg:w-36 gap-1 p-2 bg-white rounded-lg  items-center justify-between shadow-sm shadow-current '>
        <span className='inline-block'> <Phone className='text-red-600 h-5 w-5'/> </span>
        
        <span className='inline-block md:text-base lg:text-lg capitalize font-semibold'>{phoneNumber}</span>
      </div>
      </li>
    <li>
      <span className='mb-3 inline-block text-white'>Gear Type</span>
      <div className='flex md:w-28 lg:w-36 gap-1 p-2 bg-white rounded-lg justify-between shadow-sm shadow-current '>
        <span className='inline-block'> <Cog  className='text-red-600' /> </span>
        
        <span className='inline-block md:text-base lg:text-lg capitalize font-semibold'>auto</span>
      </div>
      </li>
       <li>
      <span className='mb-3 inline-block text-white'>Gas</span>
      <div className='flex md:w-28 lg:w-36 gap-1 p-2 bg-white rounded-lg justify-between shadow-sm shadow-current '>
        <span className='inline-block'> <Fuel className='text-red-600' /> </span>
        
        <span className='inline-block md:text-base lg:text-lg capitalize font-semibold'>petrol</span>
      </div>
      </li>
    {/* <li> <MoveRight />
    </li> */}
    
  </ul>


  </div>
  
  </div>

  <div className='w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col gap-7'>
  <div className='w-full bg-rose-700 rounded-lg p-4'>
  <h2 className='text-xl text-center font-semibold text-white p-3'>Trip Amount</h2>
  <ul className='w-full text-white text-lg flex flex-col gap-4'>
    <li className='w-11/12 flex items-center justify-between gap-3 pb-2 border-b-2'>
      <span className='inline-block'>Estimated Time</span>
      <p><AlarmClock className='inline mr-2'/>10am</p>
    </li>
    <li className='w-11/12 flex items-center justify-between gap-3 pb-2 border-b-2'>
      <span className='inline-block'>Estimated Cost</span>
      <p><Banknote className='inline mr-2'/>800</p>
    </li>
    <li className='w-11/12 flex items-center justify-between gap-3 pb-2 border-b-2'>
      <span className='inline-block'>Night Shit Allowance</span>
      <p><MoonStar className='inline mr-2'/>200</p>
    </li>
  </ul>
  <p className='w-11/12 flex items-center justify-between mt-5 text-white text-xl'>
  <span className='inline-block tracking-widest font-bold '>Total</span>
  <span className='inline-block'><IndianRupee className='inline mr-1'/>1000</span>
  </p>
  </div>

  <div className='w-full'>
    <button className='bg-white text-lg shadow-md shadow-current w-full text-center py-2 text-rose-700 hover:bg-rose-600 hover:text-white rounded-lg font-semibold tracking-wider transition duration-500 ease-in-out'>Submit</button>
  </div>

  </div>

  </div>
   

  </section>

  </>
}

export default PreViewCard;