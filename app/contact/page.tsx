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
      <main className="flex flex-col bg-hmbg">
        <h1 className="text-turquoise bg-hmbg p-4 text-center text-2xl md:text-3xl font-bold">
          Contact
        </h1>
        <div className="flex flex-col lg:flex-row h-full items-center">
          <div className="max-w-4xl mx-auto py-8 px-4">
            <h2 className="text-2xl mb-2 text-turquoise font-semibold">
              DROP US A LINE
            </h2>
            <div className="flex flex-col  md:flex-row gap-20">
              <div className="flex flex-1">
                <ContactForm />
              </div>
              <div className="mx-auto md:w-96">
                <h2 className="text-2xl p-2 text-turquoise font-semibold">
                  REACH US
                </h2>
                <div className="bg-white px-5m-auto shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2 className=" leading-6  text-hmbg text-base">
                      No.62, Station Rd, Radha Nagar,
                      <br />
                      Chromepet,Chennai,
                      <br />
                      Tamil Nadu - 600044.
                    </h2>
                  </div>
                  <div className="p-4 px-6 border-gray-200 justify-between">
                    <div className="flex items-center gap-2 p-1">
                      <FaPhone className=" text-hmbg size-4" />
                      <p className="text-base">+91-7845885888</p>
                    </div>

                    <div className="flex items-center gap-2 p-1">
                      <MdEmail className=" text-hmbg size-6" />
                      <p className="text-base">info@keedriver.com</p>
                    </div>
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
