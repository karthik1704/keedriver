import Image from "next/image";
import type { Metadata } from "next";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
              <form action="#" method="POST" className="space-y-6 flex-col ">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="mt-1 w-80 md:w-96 p-3 block  shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-80 md:w-96 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-80 md:w-96 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-80 md:w-96 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="py-2 w-80 md:w-96 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-red-500"
                >
                  SEND NOW
                </button>
              </form>
            </div>
            <div className="mx-auto md:w-96">
              <h2 className="text-2xl p-2 text-red-500 font-semibold">
                REACH US
              </h2>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className=" leading-6  text-gray-900 font-semibold">
                    No.62, Station Rd, Radha Nagar, Chromepet,Chennai,
                    <br />
                    Tamil Nadu - 600044
                  </h2>
                </div>
                <div className="p-4 px-6 border-gray-200 justify-between">
                  <div className="flex items-center gap-2 p-1">
                    <FaPhone className=" text-red-500 size-4" />
                    <p className="font-semibold">+91-7845885888</p>
                  </div>

                  <div className="flex items-center gap-2 p-1">
                    <MdEmail className=" text-red-500 size-6" />
                    <p className="font-semibold">info@keedriver.com</p>
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
