import Image from "next/image";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { CarFront } from "lucide-react";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdCardTravel } from "react-icons/md";
import { ChevronRight, CircleUserRound } from "lucide-react";
import { IoCarSportSharp } from "react-icons/io5";
import img1 from "@/app/services/image/myacc/profilepic.jpg";
import ProfileForm from "./profile-form";
import TripList from "./triplist/triplistcard";
import CarNewForm from "./cars/new/car-new-form";
import { createCar } from "./action";
import { API_URL } from "@/constants";

export const metadata: Metadata = {
  title:
    "Acting Drivers, Acting Drivers in Chennai, Driver Job, Call Driver, call Driver In Chennai",
  applicationName: "Keedriver",

  authors: [{ name: "keedriver", url: "https://keedriver.com" }],
  description:
    "We are concerntarting and giving more vacancies to driver job for various acting drivers and we are mainly covering areas for the drivers in chennai.",
  keywords: [
    "Acting Drivers",
    "Acting Drivers in chennai",
    "Driver job",
    "Call Driver",
    " Call Driver In Chennai",
  ],
  metadataBase: new URL("https://keedriver.com/myaccount"),
};

export async function getData() {
  const cookiesStore = cookies();
  const access = cookiesStore.get("access");

  // console.log(access);
  // if(!access){
  //   return null;
  // }

  const res = await fetch(`${API_URL}/user/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
  });

  const res1 = await fetch(`${API_URL}/cartype/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
  });

  const res2 = await fetch(`${API_URL}/carenginetype/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
  });

  if (!res.ok) {
    console.log("error");
  }

  if (!res1.ok) {
    console.log("error");
  }

  if (!res2.ok) {
    console.log("error");
  }

  if (res.status === 401) {
    redirect("/login");
  }

  const user = await res.json();
 

  if (res1.status === 401) redirect("/login");

  const cartype = await res1.json();

  if (res2.status === 401) redirect("/login");

  const carenginetype = await res2.json();

  return { cartype, carenginetype, user };
}

// const MyAccount = async () => {
//   const { cartype, user, carenginetype }: any = await getData();
//   return (
//     <div className="w-full p-6">
//       <div className="mb-14 flex items-center justify-center">
//         <Tabs
//           defaultValue="profile"
//           className="flex gap-x-4 flex-col w-full md:w-4/5 lg:w-3/5 lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-44"
//         >
//           <TabsList className="flex-col bg-white h-80 w-full space-y-4">
//             <div className="shadow-md w-full flex items-center ">
//               <h1 className="shadow-md ">
//                 <FaRegAddressCard size={24} />
//               </h1>
//               <TabsTrigger
//                 className="w-full lg:w-full h-14 justify-between hover:bg-red-300 mt-1 lg:mt-0 text-xl ml-2"
//                 value={"profile"}
//               >
//                 Profile
//                 <ChevronRight />
//               </TabsTrigger>
//             </div>

//             <div className="shadow-md w-full flex items-center">
//               <h1 className="shadow-md">
//                 <FaRegAddressCard size={24} />
//               </h1>
//               <TabsTrigger
//                 className="w-full lg:w-full h-14 justify-between hover:bg-red-300 mt-1 lg:mt-0 text-xl"
//                 value="trips"
//               >
//                 Trips
//                 <ChevronRight />
//               </TabsTrigger>
//             </div>

//             <div className="shadow-md w-full flex items-center">
//               <h1 className="shadow-md">
//                 <FaRegAddressCard size={24} />
//               </h1>
//               <TabsTrigger
//                 className="w-full lg:w-full h-14 justify-between hover:bg-red-300 mt-1 lg:mt-0 text-xl"
//                 value="cars"
//               >
//                 Cars
//                 <ChevronRight />
//               </TabsTrigger>
//             </div>
//           </TabsList>
//           <div className="w-full lg:w-full">
//             <TabsContent value="profile">
//               <ProfileForm user={user} />
//             </TabsContent>
//             <TabsContent value="trips">
//               <TripList user={user} />
//             </TabsContent>
//             <TabsContent value="cars">
//               <CarNewForm cartype={cartype} carenginetype={carenginetype} />
//             </TabsContent>
//           </div>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

const MyAccount = async () => {
  const { cartype, user, carenginetype }: any = await getData();
  return (
    <div className="w-full lg:w-3/5 flex bg-white border border-spacing-10 items-center justify-center">
           
    <ProfileForm user={user} />
 
  
</div>
  );
};

export default MyAccount;

// export const MyAccountDetails = async () => {
//   const { cartype, user, carenginetype }: any = await getData();
//   return (
//     <>
//       <div className="w-full pt-6">
//         <div className=" container mx-auto px-4 mb-14">
//           <h1 className="text-center text-3xl m-4 font-bold">My Account</h1>
//         </div>

//         <div className="flex flex-col md:flex-row justify-center w-full md:w-4/5 lg:w-3/5 mx-auto shadow-md rounded-lg mb-14 py-5">
//           <div
//             className=" flex justify-center basis-1/4 md:w-1/2"
//             style={{ margin: "0 10px" }}
//           >
//             <Image
//               src={img1}
//               height={100}
//               width={100}
//               alt=""
//               className="w-auto h-auto md:h-30 md:w-30 text-primary"
//             />
//             {/* <CircleUserRound className="w-auto h-auto md:h-30 md:w-30 text-primary"/> */}
//           </div>

//           <div className="md:w-1/2 basis-3/4 text-center md:text-left ">
//             <div className="mt-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="m-3 flex flex-col gap-2">
//                   <h1>First name : {user.first_name}</h1>
//                   <h1>Last name : {user.last_name}</h1>
//                   <h1>Contact number :{user.phone}</h1>
//                 </div>
//                 <div className="m-3 flex flex-col gap-2">
//                   <h1>Email :{user.email}</h1>
//                   <h1>
//                     Last Login :{new Date(user.last_login).toLocaleString()}
//                   </h1>
//                   <h1>
//                     Date Joined :
//                     {new Date(user.date_joined).toLocaleDateString()}
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-3 flex items-center justify-center">
//         <div className="flex gap-x-4 flex-col w-full md:w-4/5 lg:w-3/5 lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-44">
//           <div className="flex-col bg-white h-64 w-full lg:w-2/5 space-y-4">
//             <div className="shadow-md w-full flex items-center px-2">
//               <h1 className="shadow-md ">
//                 <FaRegAddressCard size={24} />
//               </h1>
//               <div  className="w-full lg:w-full h-14  flex items-center justify-between hover:bg-red-300 mt-1 lg:mt-0 text-xl ml-2">
//               Profile
//               <ChevronRight />

//               </div>
//             </div>

//             <div className="shadow-md w-full flex items-center px-2">
//               <h1 className="shadow-md">
//                 <FaRegAddressCard size={24} />
//               </h1>
//               <div  className="w-full lg:w-full h-14 flex items-center justify-between hover:bg-red-300 mt-1 lg:mt-0 text-xl ml-2">
//               Trips
//                 <ChevronRight />

//               </div>
               
//             </div>

//             <div className="shadow-md w-full flex items-center px-2">
//               <h1 className="shadow-md">
//                 <FaRegAddressCard size={24} />
//               </h1>
//               <div  className="w-full lg:w-full h-14 flex items-center justify-between hover:bg-red-300 mt-1 lg:mt-0 text-xl ml-2">
//               Cars
//                 <ChevronRight />

//               </div>
               
//             </div>
//             </div>
//           {/* <div className="w-full lg:w-full">
           
//               <ProfileForm user={user} />
           
            
//           </div> */}
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

