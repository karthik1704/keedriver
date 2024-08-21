import Image from "next/image";
import img1 from "@/app/services/image/myacc/profilepic.jpg";
import { cookies } from "next/headers";
import { API_URL } from "@/constants";
import { redirect, usePathname } from "next/navigation";
import MyAccountNavBar from "./sidebar";
import { Sidebar, CircleUserRound,Mail, Phone,LogIn} from "lucide-react";
import {dateFormatter,dateTimeFormatter} from 'lib/utils';

export async function getData() {
  const cookiesStore = cookies();
  const access = cookiesStore.get("access");

  const res = await fetch(`${API_URL}/user/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
  });

  if (!res.ok) {
    console.log("error");
  }

  if (res.status === 401) {
    redirect("/login");
  }

  const user = await res.json();

  console.log(user);
  

  return { user };
}



export default async function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user }: any = await getData();
  console.log(dateTimeFormatter(new Date(user.last_login).toLocaleString()),"hello",new Date(user.last_login).toLocaleString());
  
  return (
    <>
      <div className="w-full p-3 sm:pt-6 sm:px-4">
        <div className=" container mx-auto px-4 mb-14">
          <h1 className="text-center text-3xl m-4 font-bold">My Account</h1>
        </div>

        {/* <div className="flex flex-col md:flex-row justify-center w-full sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-3/5 mx-auto shadow-md rounded-lg mb-14 py-5">
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
        </div> */}

        <div className="flex flex-col md:flex-row justify-center w-full sm:w-4/5 md:w-3/5 lg:w-4/5 xl:w-3/5 mx-auto shadow-md rounded-lg mb-14 overflow-hidden">
          <div className="w-full before:h-20 lg:before:h-28 before:bg-gradient-to-r from-red-500 via-red-300 to-red-50 flex flex-col">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:px-5">
              <div className="flex flex-col items-center justify-center gap-2 relative bottom-6 lg:bottom-12">
                {/* <CircleUserRound className="h-20 w-20" /> */}
                <div className="h-24 w-24 lg:h-32 lg:w-32 rounded-full overflow-hidden">
                  <Image
                    src={img1}
                    height={100}
                    width={100}
                    alt="profile-image"
                    className="h-full w-full"
                  />
                </div>
                <h5 className="md:text-xl lg:text-2xl font-semibold capitalize">
                  {user.first_name} {user.last_name}
                </h5>
                <p className="text-base lg:text-lg">
                  <span className="font-semibold">Date Joined :</span>
                  {dateFormatter(user.date_joined)}
                </p>
              </div>

              <div className="h-full flex flex-col items-center justify-center lg:justify-between lg:py-2 gap-3 lg:gap-2 pb-3">
                <ul className="text-base lg:text-lg flex flex-col items-center justify-center lg:items-start gap-3 lg:gap-2">
                  <li>
                    <span className="font-semibold"><Mail className="inline-block mx-2 h-5 w-5 lg:h-6 lg:w-6" />Email :</span>
                    {user.email}
                  </li>
                  <li>
                    <span className="font-semibold"><Phone className="inline-block mx-2 h-5 w-5 lg:h-6 lg:w-6" />Contact number :</span>
                    {user.phone}
                  </li>
                </ul>
                <p className="text-base lg:text-lg">
                  <span className="font-semibold"><LogIn className="inline-block mx-2 h-5 w-5 lg:h-6 lg:w-6" />Last Login :</span>
                  { dateTimeFormatter(user.last_login)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 flex items-center justify-center">
          <div className="flex flex-col w-full md:w-4/5 lg:w-4/5 xl:w-3/5 lg:flex-row gap-5 lg:divide-gray-300 lg:divide-x-2">
            <div className="flex flex-col bg-white h-64 w-full sm:w-3/5 lg:w-2/5 gap-2 space-y-4">
              <MyAccountNavBar />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
