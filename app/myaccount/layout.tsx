import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/services/image/myacc/profilepic.jpg";
import { cookies } from "next/headers";
import { API_URL } from "@/constants";
import { redirect } from "next/navigation";
import { FaRegAddressCard } from "react-icons/fa6";
import { ChevronRight,Map,Car} from "lucide-react";


// export default function MyAccountLayout ({children}:{children:React.ReactNode}){
//     return <>
//     <div>
//         <MyAccountDetails/>
//         {children}
//     </div>
//     </>

// }

export async function getData(){
    const cookiesStore =cookies();
    const access = cookiesStore.get('access')

    const res = await fetch(`${API_URL}/user/`,{
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${access?.value}`
        }
    })

    if(!res.ok){
        console.log('error')
    }

    if(res.status === 401){
        redirect('/login')
    }

    const user = await res.json()

    console.log(user)

    return{user}
}

export default async function MyAccountLayout ({children}:{children:React.ReactNode}){
    const{user}:any = await getData();
    return <>
     <div className="w-full p-3 sm:pt-6 sm:px-4">
        <div className=" container mx-auto px-4 mb-14">
          <h1 className="text-center text-3xl m-4 font-bold">My Account</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center w-full sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-3/5 mx-auto shadow-md rounded-lg mb-14 py-5">
          <div
            className=" flex justify-center basis-1/4 md:w-1/2"
            style={{ margin: "0 10px" }}
          >
            <Image
              src={img1}
              height={100}
              width={100}
              alt=""
              className="w-auto h-auto md:h-30 md:w-30 text-primary"
            />
            {/* <CircleUserRound className="w-auto h-auto md:h-30 md:w-30 text-primary"/> */}
          </div>

          <div className="md:w-1/2 basis-3/4 text-center md:text-left ">
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="m-3 flex flex-col gap-2">
                  <h1><span className="font-bold md:text-lg text-slate-700">First name :</span> {user.first_name}</h1>
                  <h1><span className="font-bold md:text-lg text-slate-700">Last name :</span>  {user.last_name}</h1>
                  <h1><span className="font-bold md:text-lg text-slate-700">Contact number :</span> {user.phone}</h1>
                </div>
                <div className="m-3 flex flex-col gap-2">
                  <h1><span className="font-bold md:text-lg text-slate-700">Email :</span> {user.email}</h1>
                  <h1>
                    <span className="font-bold md:text-lg text-slate-700">Last Login :</span> {new Date(user.last_login).toLocaleString()}
                  </h1>
                  <h1>
                   <span className="font-bold md:text-lg text-slate-700">Date Joined :</span> 
                    {new Date(user.date_joined).toLocaleDateString()}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 flex items-center justify-center">
        <div className="flex flex-col w-full md:w-4/5 lg:w-4/5 xl:w-3/5 lg:flex-row gap-5 lg:divide-gray-300 lg:divide-x-2">
          <div className="flex flex-col bg-white h-64 w-full sm:w-3/5 lg:w-2/5 gap-2 space-y-4">
          <Link  href={'/myaccount'}>
            <div className="shadow-md w-full flex items-center px-2 cursor-pointer">
              <h1 className="shadow-md ">
                <FaRegAddressCard className="text-red-600" size={24} />
              </h1>
              <div  className="w-full lg:w-full h-14 flex items-center justify-between hover:bg-red-400 hover:text-white mt-1 lg:mt-0 text-xl ml-2">
              Profile
              <ChevronRight />

              </div>
            </div>
            </Link>
            <Link  href={'/myaccount/triplist'}>
            <div className="shadow-md w-full flex items-center px-2 cursor-pointer">
              <h1 className="shadow-md">
                <Map className="text-red-600"  size={24} />
              </h1>
              <div  className="w-full lg:w-full h-14 flex items-center justify-between hover:bg-red-400 hover:text-white mt-1 lg:mt-0 text-xl ml-2">
              Trips
                <ChevronRight />

              </div>
               
            </div>
            </Link>

            <Link href={'/myaccount/cars'}>

            <div className="shadow-md w-full flex items-center px-2 cursor-pointer">
              <h1 className="shadow-md">
                <Car className="text-red-600"  size={24} />
              </h1>
              <div  className="w-full lg:w-full h-14 flex items-center justify-between hover:bg-red-400 hover:text-white mt-1 lg:mt-0 text-xl ml-2">
              Cars
                <ChevronRight />

              </div>
               
            </div>
            </Link>
            </div>
         {
            children
         }
        </div>
      </div>
      </div>
    
    </>

}