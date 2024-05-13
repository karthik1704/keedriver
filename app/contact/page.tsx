import Image from "next/image";
import type { Metadata } from "next";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact us | Keedriver",
  description: "Contact Page",
};

export default function Contact() {
  return (
    <>
      <main className="flex mx-auto bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h2 className="text-2xl mb-2 text-red-500 font-semibold">
            DROP US A LINE
          </h2>
          <div className="flex flex-col  md:flex-row gap-20">
            <div className="flex flex-1">
              <ContactForm />
            </div>
            <div className="mx-auto md:w-96">
              <h2 className="text-2xl p-2 text-red-500 font-semibold">
                REACH US
              </h2>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className=" leading-6  text-gray-900 text-base">
                    No.62, Station Rd, Radha Nagar, Chromepet,Chennai,
                    <br />
                    Tamil Nadu - 600044.
                  </h2>
                </div>
                <div className="p-4 px-6 border-gray-200 justify-between">
                  <div className="flex items-center gap-2 p-1">
                    <FaPhone className=" text-red-500 size-4" />
                    <p className="text-base">+91-7845885888</p>
                  </div>

                  <div className="flex items-center gap-2 p-1">
                    <MdEmail className=" text-red-500 size-6" />
                    <p className="text-base">info@keedriver.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
