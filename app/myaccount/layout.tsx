import Image from "next/image";
import img1 from "@/app/services/image/myacc/profilepic.jpg";
import MyAccountNavBar from "./sidebar";
import { Mail, Phone, LogIn } from "lucide-react";
import { dateFormatter, dateTimeFormatter } from "lib/utils";
import { getUser } from "@/services/users";

export default async function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <>
      <div className="w-full bg-rose-700">
        {/* Header Section */}
        <h1 className="text-white p-4 text-center text-2xl md:text-3xl font-bold">
          My Account
        </h1>
      </div>
      <div className="w-full p-3 bg-stone-100 sm:pt-6 sm:px-4">
        <div className=" px-4 mb-9 max-w-xl">
          <h1 className="text-2xl sm:text-3xl text-gray-900 font-medium capitalize">
            Welcome back, {user.first_name}
          </h1>
        </div>

        <div className="mx-3 sm:mx-8 md:mx-12 bg-white flex flex-col md:flex-row justify-center shadow-md shadow-stone-400 rounded-md mb-14 overflow-hidden">
          <div className="w-full before:h-20 lg:before:h-28 before:bg-gradient-to-r from-rose-950 via-rose-700 to-rose-500 flex flex-col">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between sm:px-5">
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
                <h5 className="md:text-xl lg:text-2xl text-gray-800 font-semibold capitalize">
                  {user.first_name} {user.last_name}
                </h5>

                <ul className="text-base lg:text-lg text-gray-800 flex flex-col items-center justify-center sm:items-start gap-3 sm:gap-2">
                  <li>
                    <span className="font-semibold text-gray-800 text-sm">
                      <Mail className="inline-block mx-2 h-3 w-3 lg:h-5 lg:w-5" />
                    </span>
                    {user.email}
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800 text-sm">
                      <Phone className="inline-block mx-2 h-3 w-3 lg:h-5 lg:w-5" />
                    </span>
                    {user.phone}
                  </li>
                </ul>
              </div>

              <div className="h-full flex flex-col items-start justify-center lg:justify-between lg:py-2 gap-3 pb-3">
                <p className="text-sm md:text-base items-end lg:text-md">
                  <span className="text-gray-800 font-semibold text-start sm:text-right">
                    Date Joined :
                  </span>
                  {dateFormatter(user.date_joined)}
                </p>
                <p className="text-sm md:text-base lg:text-md">
                  <span className="font-semibold text-gray-800 ">
                    <LogIn className="text-gray-800 text-start sm:text-right inline-block mr-1 h-5 w-5 lg:h-6 lg:w-6" />
                    Last Login :
                  </span>
                  {dateTimeFormatter(user.last_login)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-3 sm:mx-8 md:mx-12 mb-10 flex items-center justify-center">
          <div className="flex flex-col w-full md:flex-row gap-5 lg:divide-gray-300 lg:divide-x-2">
            <div className="flex flex-col bg-transparent h-64 w-full sm:w-full md:w-1/3 lg:w-1/5 xl:w-1/5 gap-2 space-y-4">
              <MyAccountNavBar />
            </div>

            <div className="flex md:mx-10 w-full sm:w-full md:w-1/2 lg:w-11/12 xl:w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
