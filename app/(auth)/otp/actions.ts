"use server";

import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

const phoneRegex = new RegExp(/^(0|91)?[6-9][0-9]{9}$/);

const OTPSchema = z.object({
    phone: z
      .string()
      .regex(phoneRegex, "Please enter valid 10 digit phone number"),
  
    otp: z.string().length(6, "Please enter valid 6 digit OTP"),
  });

export async function signIn(
  prevState: any,
  formData: { otp: string; phone: string }
) {
  const { phone, otp } = formData;

  const validatedFields = OTPSchema.safeParse({
    phone,
    otp,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: null,
      fieldErrors: {
        phone: validatedFields.error.flatten().fieldErrors.phone,
        otp: validatedFields.error.flatten().fieldErrors.otp,
      },
    };
  }
  const res = await fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "",
      phone,
      password: "",
      role: "customer",
      otp: otp,
    }),
  });

  if (!res.ok) {
    console.log(res);
    const error = await res.json();
    console.log(error);
    if (error.non_field_errors) {
      return {
        message: error.non_field_errors[0],
      };
    }

    return {
      message: "Something went wrong",
    };
  }

  const resJson = await res.json();
  console.log(resJson);
  cookies().set("access", resJson.access);

  if (!resJson.user.email) {
    redirect("/create-account");
  }

  redirect("/");
}





const schema = z.object({
  phone: z
    .string()
    .regex(phoneRegex, "Please enter valid 10 digit phone number"),
});



export async function resendOTP( formData: FormData) {
  const phone = formData.get("phone");

  const validatedFields = schema.safeParse({
    phone,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: null,
      fieldErrors: {
        phone: validatedFields.error.flatten().fieldErrors.phone,
      },
    };
  }
  const res = await fetch(`${API_URL}/sendotp/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phone,
    }),
  });

  if (!res.ok) {
    return {};
  }

  if (res.status !==200){
    const error = await res.json();

    return {
      message: "something went wrong, Please try again",
    }
    
  }

  const resJson = await res.json();

  return {
    message: "OTP sent successfully",
  }
}

