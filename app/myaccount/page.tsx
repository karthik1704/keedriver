import type { Metadata } from "next";
import ProfileForm from "./profile-form";
import { getUser } from "@/services/users";

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


const MyAccount = async () => {
  const user = await getUser();
  return (
    <div className="w-full flex mx-2 lg:mx-10 items-center justify-center">
      <ProfileForm user={user} />
    </div>
  );
};

export default MyAccount;

