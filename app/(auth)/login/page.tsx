import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { signIn } from "./action";
import SigninForm from "./signin-form";

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
            Welcome to KeeDriver
          </h1>
          <p className="text-center mb-4">Hi.</p>
          <p className="text-center mb-4">Let&apos;s get started</p>
          <SigninForm />
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
