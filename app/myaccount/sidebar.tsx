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
  return (
    <>
      {myAccountRoutLists?.map((routList, i) => {
        return (<Link className={`shadow-md w-full flex items-center px-2 hover:bg-gray-100 hover:text-inherit cursor-pointer ${pathName === routList.pathname &&"bg-gray-400 text-white"}`} key={i} href={`${routList.pathname}`}>
                <h1 className="shadow-md ">{routList.Icon}</h1>
                <div className="w-full lg:w-full h-14 flex items-center justify-between  mt-1 lg:mt-0 text-xl ml-2">
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
