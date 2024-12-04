"use server";

import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

const phoneRegex = new RegExp(/^(0|91)?[6-9][0-9]{9}$/);

const schema = z.object({
  phone: z
    .string()
    .regex(phoneRegex, "Please enter valid 10 digit phone number"),
});



export async function sendOTP(prevState: any, formData: FormData) {
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
  const res = await fetch(`${API_URL}/getotp/`, {
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
      message: "something went wrong",
    }
    
  }

  const resJson = await res.json();
  console.log(resJson);
  const encodedPhone = Buffer.from(validatedFields.data.phone).toString(
    "base64"
  );
  redirect("/otp?q=" + encodedPhone);
}

