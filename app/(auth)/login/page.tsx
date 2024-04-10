import Image from 'next/image'
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next'
import React,{useState} from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
// import phoneOtpForm from '@/components/login/login';

export const metadata:Metadata =  {
    title: 'Login | Keedriver',
    description: 'Login Page',
}
function LoginPage() {
return(
<>
<div className="h-96 flex items-center justify-center bg-gray-100">
        <form className="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-semibold text-center mb-6">Welcome to KeeDrive</h1>
          <p className="text-center mb-4">Hi.</p>
          <p className="text-center mb-4">Let's get started</p>
          <div className="mb-4">
            {/* <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-700">Enter Mobile Number</label> */}
            <input type="tel" id="mobile" name="mobile" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500" placeholder="Enter Mobile Number" required />
          </div>
          {/* <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600">Get Otp</button> */}
          <div className="flex justify-center">
          <Link href='/verification' className={buttonVariants({
            // className: 'text-center'
          })}>Get opt</Link>
          </div>
          </form>
      </div>

  </>
)
}


  

export default LoginPage;
