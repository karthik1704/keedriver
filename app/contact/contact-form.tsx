"use client";
import { useFormState } from "react-dom";
import { createContact } from "./action";
import SubmitButton from "@/components/submit-button";
import { MessageSquareWarning } from "lucide-react";


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
    <form action={formAction} className="space-y-4 flex-col ">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="mt-1 w-80 md:w-96 p-3 block shadow-sm sm:text-sm border-gray-300 rounded-md"
        />

        {state.fieldErrors?.name && (
          <div className="flex p-1 gap-2 ">
            <MessageSquareWarning className="size-4 text-red-500" />
            <p className="text-xs	 font-semibold tracking-wide	text-red-500">
              {state.fieldErrors?.name}
            </p>
          </div>
        )}
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          className="mt-1 w-80 md:w-96 p-3 block shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        {state.fieldErrors?.email && (
          <div className="flex p-1 gap-2 ">
            <MessageSquareWarning className="size-4 text-red-500" />
            <p className="text-xs	 font-semibold tracking-wide	text-red-500">
              {state.fieldErrors?.email}
            </p>
          </div>
        )}
      </div>
      <div>
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          className="mt-1 w-80 md:w-96 p-3 block shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        {state.fieldErrors?.phone && (
          <div className="flex p-1 gap-2 ">
            <MessageSquareWarning className="size-4 text-red-500" />
            <p className="text-xs	 font-semibold tracking-wide	text-red-500">
              {state.fieldErrors?.phone}
            </p>
          </div>
        )}
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Your Message"
          className="mt-1 w-80 md:w-96 p-3 block shadow-sm sm:text-sm border-gray-300 rounded-md"
        ></textarea>
        {state.fieldErrors?.message && (
          <div className="flex p-1 gap-2 ">
            <MessageSquareWarning className="size-4 text-red-500" />
            <p className="text-xs	 font-semibold tracking-wide	text-red-500">
              {state.fieldErrors?.message}
            </p>
          </div>
        )}
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
