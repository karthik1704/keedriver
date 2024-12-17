import React from "react";
import { InputOTPForm } from "./otpbox";
import { redirect } from "next/navigation";

const OtpVerificationInput = async (
  props: {
    searchParams: Promise<{ q: string }>;
  }
) => {
  const searchParams = await props.searchParams;

  const {
    q
  } = searchParams;

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
