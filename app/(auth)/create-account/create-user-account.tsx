'use client';
import Image from "next/image";
import createAccountImage from "public/images/create account/create-account-img.webp";
import { createAccount } from "./actions";
import { useEffect, useActionState } from "react";
import { toast } from "sonner";
import SubmitButton from "@/components/submit-button";

type InitialState =  {
  message?: undefined | string;
  fieldErrors?: {
    phone?: undefined | string |string[],
  },
}

const initialState:InitialState =  {
  message: undefined,
  fieldErrors: {
    phone: undefined,
  },
}


const CreateUserAccount = () => {
  const [state, formAction] = useActionState(createAccount, initialState);

  useEffect(() => {
    if (state.message) {
      toast.error(state?.message, {
        duration: 10000,
        closeButton: true,
      });
    }
  }, [state.message]);


  return (
    <>
      <section className="w-full  flex items-center justify-center mx-auto">
        <div className="w-full h-full md:w-4/5 md:h-5/6 p-1 flex items-center justify-center">
          <div className="w-full md:w-2/5 flex flex-col gap-7 p-3">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Create your account</h2>
              <span className="text-base text-gray-400 inline-block mt-2">
                Describe yourself as clearly so that there are no mistake
              </span>
            </div>
            <form
              action={formAction}
              className="w-full flex flex-col items-start justify-center gap-3"
            >
              <div className="w-full">
                <label htmlFor="">
                  First name <span className="text-red-500">*</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  className="w-full border-2 p-2 rounded-lg mt-2 focus:outline-none focus:ring-2  focus:ring-red-600"
                />
                {state.fieldErrors?.first_name && <p className="text-red-500">{state.fieldErrors?.first_name}</p>}
              </div>
              <div className="w-full">
                <label htmlFor="">
                  Last name <span className="text-red-500">*</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  className="w-full border-2 p-2 rounded-lg mt-2 focus:outline-none focus:ring-2  focus:ring-red-600"
                />
                {state.fieldErrors?.last_name && <p className="text-red-500">{state.fieldErrors?.last_name}</p>}
              </div>
              <div className="w-full">
                <label htmlFor="">
                  Email <span className="text-red-500">*</span>
                </label>{" "}
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border-2 p-2 rounded-lg mt-2 focus:outline-none focus:ring-2  focus:ring-red-600"
                />
                {state.fieldErrors?.email && <p className="text-red-500">{state.fieldErrors?.email}</p>}
              </div>
           
              {/* <button
                type="submit"
                className="w-full py-3 mt-2 bg-red-600 rounded-lg text-lg text-white"
              >
                Create account
              </button> */}
              <SubmitButton name="Create Account" />
            </form>
            {/* <p className='text-center'>Already have an account? <span className='inline-block underline font-bold ml-2'>Log in</span></p> */}
          </div>
          {/* <div className='w-3/5 h-full'>
  <Image className='h-full w-full object-cover' src={createAccountImage} alt='driver-pic'/>
  
  </div> */}
        </div>
      </section>
    </>
  );
};

export default CreateUserAccount;
