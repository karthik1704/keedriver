"use client";
import { useFormState } from "react-dom";
import { signIn } from "./action";
import SubmitButton from "@/components/submit-button";

type InitialState =  {
  message: null | string;
  fieldErrors: {
    phone: null| string |string[],
  },
}

const initialState =  {
  message: null,
  fieldErrors: {
    phone: null,
  },
}


const SigninForm = () => {
  const [state, formAction] = useFormState(signIn, initialState);
  return (
    <form action={formAction} className="mb-4 flex flex-col gap-4">
      {/* <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-700">Enter Mobile Number</label> */}

      <input
        type="tel"
        id="mobile"
        name="phone"
        autoComplete="mobile tel"
        autoFocus={true}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none  focus:border-rose-800"
        placeholder="Enter Phone Number"
        required
      />
  
      {/* <button
        className="w-full bg-red-500 text-white text-center capitalize font-bold py-2 px-4 rounded-lg"
        type="submit"
      >
        submit
      </button> */}
      <SubmitButton name="Get Started" />
    </form>
  );
};

export default SigninForm;
