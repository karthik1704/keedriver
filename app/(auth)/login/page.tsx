import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { SingIn } from "./action";

export const metadata: Metadata = {
  title: "Login | Keedriver",
  description: "Login Page",
};
function LoginPage() {
  return (
    <>
      <div className="h-96 flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-14 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Welcome to KeeDrive
          </h1>
          <p className="text-center mb-4">Hi.</p>
          <p className="text-center mb-4">Let&apos;s get started</p>
          <form action={SingIn}  className="mb-4 flex flex-col gap-4">
            {/* <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-700">Enter Mobile Number</label> */}
           
            <input
              type="number"
              id="mobile"
              name="mobile"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none  focus:border-red-500"
              placeholder="Enter Phone Number"
              required
            />
            <button className="w-full bg-red-500 text-white text-center capitalize font-bold py-2 px-4 rounded-lg" type="submit">
              submit

            </button>
          </form>
          {/* <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600">Get Otp</button> */}
          <div className="flex justify-center">
             {/* <Link
              href="/verification"
              className={buttonVariants({
                // className: 'text-center'
              })}
            >
              Get OTP
            </Link>  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
