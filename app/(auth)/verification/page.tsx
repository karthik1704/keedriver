import type { Metadata } from 'next'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"

  export const metadata:Metadata =  {
    title: 'Login | Keedriver',
    description: 'Login Page',
}

function Verification(){
    return(
     <>
     <div className='h-96 flex items-center justify-center bg-gray-100'>
        <form className='max-w-md w-full p-8 bg-white shadow-md rounded-lg'>
<h1 className="text-3xl font-semibold text-center mb-6">Verification</h1>
<p className='text-center'>We will send you a one Time password </p>
<p className='text-center'>to your phone number</p>
<div className='border-border m-4'>
      <InputOTP maxLength={6}>
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
</InputOTP>
</div>
{/* <div className="mb-4">
<input type="tel" id="mobile" name="mobile" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500" placeholder="Enter OTP" required />
          </div> */}
          <button type="submit" className=" mb-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600">Verify</button>
          <p className='text-center mb-8'>Did't receive the Verification opt? Resend again</p>
        </form>

        </div>
     </>   
    )
}

export default Verification;
