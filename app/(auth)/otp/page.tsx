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
      <InputOTPForm />
    </>
  );
};

export default OtpVerificationInput;
