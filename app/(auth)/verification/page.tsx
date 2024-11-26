import type { Metadata } from "next";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { sendOTP } from "../login/action";

export const metadata: Metadata = {
  title: "Login | Keedriver",
  description: "Login Page",
};

function Verification({searchParams: { phone }}: { searchParams: { phone: string } }) {
  console.log(phone);



  return (
    <>
      <div className="h-96 flex items-center justify-center bg-gray-100">
        <form className="max-w-md w-full p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Verification
          </h1>
          <p className="text-center">We will send you a one Time password </p>
          <p className="text-center">to your phone number</p>
          <div className="m-4 flex justify-center">
            <div className="w-full md:w-auto flex items-center">
              <InputOTP maxLength={6}>
                <div className="flex items-center">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </div>
              </InputOTP>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <Link href="/verification" className={buttonVariants({})}>
              Verify OTP
            </Link>
          </div>
          <p className="text-center mb-8">
            Did't receive the Verification OTP?{" "}
            <a className="text-pink-700" >
              Click here
            </a>{" "}
            to Resend again
          </p>
        </form>
      </div>
    </>
  );
}

export default Verification;
