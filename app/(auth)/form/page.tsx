import type { Metadata } from "next";
import DriverForm from "./form";

export const metadata: Metadata = {
  title: "About | Keedriver",
  description: "About Page",
};

export default function form() {
  return (
    <>
      {" "}
      <div className="max-w-md mx-auto mt-8">
        <h1>welcome to drive form</h1>
        <h1>Add driver</h1>
        <h1>Driver information</h1>
        <DriverForm />
      </div>
      <div>
        <h1>Driver profile</h1>
      </div>
    </>
  );
}
