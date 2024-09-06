"use client"

import { Car, ChevronRight, Map } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegAddressCard } from "react-icons/fa6";

const myAccountRoutLists = [
  {
    name: "Profile",
    pathname: "/myaccount",
    Icon: <FaRegAddressCard size={24} />,
  },
  {
    name: "Trips",
    pathname: "/myaccount/triplist",
    Icon: <Map size={24} />,
  },
  {
    name: "Cars",
    pathname: "/myaccount/cars",
    Icon: <Car size={24} />,
  },
];

const MyAccountNavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <>
      {myAccountRoutLists?.map((routList, i) => {
        return (<Link className={`shadow-md w-full lg:w-full flex flex-col items-center px-2 hover:bg-rose-600 hover:text-white cursor-pointer ${pathName === routList.pathname ?"bg-rose-700 text-white":"bg-white text-black"}`} key={i} href={`${routList.pathname}`}>
                
                <div className={`w-full lg:w-full h-14 flex items-center justify-between mt-1 lg:mt-0 text-xl ml-2 `}>
                  {routList.Icon}
                  {routList.name}
                  <ChevronRight />
                </div>
            </Link>
        );
      })}
    </>
  );
};

export default MyAccountNavBar;
