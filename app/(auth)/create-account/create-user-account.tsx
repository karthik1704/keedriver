import React from 'react';
import Image from 'next/image';
import createAccountImage from 'public/images/create account/create-account-img.webp'

const CreateUserAccount = () => {
  return <>
  <section className='w-full h-screen flex items-center justify-center'>
  <div className='w-4/5 h-5/6 flex items-center justify-center'>
    <div className='w-2/5 flex flex-col gap-7 p-3'>
  <div className='text-center'>
    <h2 className='text-3xl font-semibold'>Create your account</h2>
    <span className='text-base text-gray-400 inline-block mt-2'>Describe yourself as clearly so that there are no mistake</span>
  </div>
  <form action="" className='w-full flex flex-col items-start justify-center gap-3'>
   <div className='w-full'>
    <label htmlFor="">First name <span className='text-red-500'>*</span></label> <br />
  <input type="text" placeholder='Enter your firstname' className='w-full border-2 p-2 rounded-lg mt-2 focus:outline-none focus:ring-2  focus:ring-red-600' />
   </div>
   <div className='w-full'>
    <label htmlFor="">Last name <span className='text-red-500'>*</span></label> <br />
    <input type="text" placeholder='Enter your lastname' className='w-full border-2 p-2 rounded-lg mt-2 focus:outline-none focus:ring-2  focus:ring-red-600' />
   </div>
   <div className='w-full'>
    <label htmlFor="">Email <span className='text-red-500'>*</span></label> <br />
    <input type="email" placeholder='Enter your email' className='w-full border-2 p-2 rounded-lg mt-2 focus:outline-none focus:ring-2  focus:ring-red-600' />
   </div>
   <div className='w-full'>
    <label htmlFor="">Phone-number<span className='text-red-500'>*</span></label> <br />
    <input type="email" placeholder='Enter your phone-number' className='w-full border-2 p-2 rounded-lg mt-2 focus:outline-none focus:ring-2  focus:ring-red-600' />
   </div>
   <button type='submit' className='w-full py-3 mt-2 bg-red-600 rounded-lg text-lg text-white'>Create account</button>
  </form>
  <p className='text-center'>Already have an account? <span className='inline-block underline font-bold ml-2'>Log in</span></p>
  </div>
  <div className='w-3/5 h-full'>
  <Image className='h-full w-full object-cover' src={createAccountImage} alt='driver-pic'/>
  
  </div>
  </div>
</section>
  </>
}

export default CreateUserAccount;