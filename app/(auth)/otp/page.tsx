import React from "react";
import { InputOTPForm } from "./otpbox";
import { redirect } from "next/navigation";

const OtpVerificationInput = ({
  searchParams: { q },
}: {
  searchParams: { q: string };
}) => {

  if (!q) {
    redirect("/login");
  }

  return (
    <>
    <div className="bg-rose-800 h-full backdrop-blur-sm">
      <InputOTPForm />
    </div>
    </>
  );
};

export default OtpVerificationInput;
