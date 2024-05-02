import Image from "next/image";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";

import img1 from "@/app/services/image/myacc/profilepic.jpg";
import ProfileForm from "./profile-form";
import TripList from "./trip-list";
import CarModel from "./car-list";

export const metadata: Metadata = {

  title:
  'Acting Drivers, Acting Drivers in Chennai, Driver Job, Call Driver, call Driver In Chennai',
applicationName:'Keedriver',

authors:[{name:'keedriver', url:'https://keedriver.com'}],
description:
'We are concerntarting and giving more vacancies to driver job for various acting drivers and we are mainly covering areas for the drivers in chennai.',
keywords:[
  "Acting Drivers",
  "Acting Drivers in chennai",
  "Driver job",
  "Call Driver",
  " Call Driver In Chennai",
],
metadataBase: new URL('https://keedriver.com/myaccount')
};

export async function getData(){
  const cookiesStore = cookies();
  const access = cookiesStore.get('access')

  // console.log(access);
  // if(!access){
  //   return null;
  // }

  const res = await fetch('http://devapi.keedriver.com/api/v1/user/',{
    headers:{
      'content-Type':'application/json',
      Authorization : `Bearer ${access?.value}`,
    },
  })

  if(!res.ok){
    console.log('error')
  }

  if(res.status ===401){
    redirect('/login')
  }

  const user = await res.json();
  console.log(user);

  return user;
}



const MyAccount= async ()=> {
  const data: any = await getData();
  return (
    <div className="max-w-screen-lg mx-auto p-6">

      <div className=" container mx-auto px-4 mb-14">
      <h1 className="text-center text-3xl m-4 font-bold">My Account</h1>
</div>

      <div className="flex flex-col md:flex-row justify-start md:justify-start border border-solid mb-14">
        <div className=" flex justify-center basis-1/4 md:w-1/2" style={{ margin: '0 10px' }}>
          <Image src={img1} height={100} width={100} alt="" className="w-auto h-auto md:h-30 md:w-30" />
          </div>

          

          <div className="md:w-1/2 basis-3/4 text-center md:text-left">
          <div className="mt-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div style={{ margin: '10px' }}>
        <h1>First name : {data.first_name}</h1>
        <h1>Last name : {data.last_name}</h1>
        <h1>Contact number :{data.phone}</h1>
      </div>
      <div style={{ margin: '10px' }}>
        <h1>Email :{data.email}</h1>
        <h1>Last Login :{new Date(data.last_login).toLocaleString()}</h1>
        <h1>Date Joined :{new Date(data.date_joined).toLocaleDateString()}</h1>
      </div>
    </div>
          </div>
      </div>

    </div>

    <div className="mb-14 lg:flex lg:justify-between">
      <Tabs defaultValue="profile" className="w-[400px]">
  <TabsList className="flex">
    <TabsTrigger value="profile">Profile</TabsTrigger>
    <TabsTrigger value="trips">Trips</TabsTrigger>
    <TabsTrigger value="cars">Cars</TabsTrigger>
  </TabsList>
  <TabsContent value="profile"><ProfileForm user={data}/></TabsContent>
  <TabsContent value="trips"><TripList user={data}/></TabsContent>
  <TabsContent value="cars"><CarModel/></TabsContent>
</Tabs>
</div>

    </div>
  );
}

export default MyAccount;
