"use client";
import { useFormState } from "react-dom";
import { createContact } from "./action";
import SubmitButton from "@/components/submit-button";

type InitialState = {
  message: null | string;
  fieldErrors: {
    phone: null | string | string[];
  };
};

const initialState = {
  message: null,
  fieldErrors: {
    phone: null,
  },
};

const ContactForm = () => {
  const [state, formAction] = useFormState(createContact, initialState);
  return (
    <form action={formAction} className="space-y-6 flex-col ">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="mt-1 w-80 md:w-96 p-3 block  shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        {state.fieldErrors?.name && <p>{state.fieldErrors?.name}</p>}
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-80 md:w-96 shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        {state.fieldErrors?.email && <p>{state.fieldErrors?.email}</p>}
      </div>
      <div>
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-80 md:w-96 shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        {state.fieldErrors?.phone && <p>{state.fieldErrors?.phone}</p>}
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Your Message"
          className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-80 md:w-96 shadow-sm sm:text-sm border-gray-300 rounded-md"
        ></textarea>
        {state.fieldErrors?.message && <p>{state.fieldErrors?.message}</p>}
      </div>
      {/* <button
        type="submit"
        className="py-2 w-80 md:w-96 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-red-500"
      >
        SEND NOW
      </button> */}
      <SubmitButton name="SEND NOW" />
    </form>
  );
};

export default ContactForm;
