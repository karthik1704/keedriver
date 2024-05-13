"use server";

import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

const phoneRegex = new RegExp(/^(0|91)?[6-9][0-9]{9}$/);

const schema = z.object({
  phone: z
    .string()
    .regex(phoneRegex, "Please enter valid 10 digit phone number !"),
  name: z.string().min(1, "Name is required !"),
  email: z.string().email("Invalid email !"),
  message: z.string().min(1, "Message is required !"),
});

export async function createContact(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData);
  const validatedFields = schema.safeParse(data);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: null,
      fieldErrors: {
        name: validatedFields.error.flatten().fieldErrors.name,
        email: validatedFields.error.flatten().fieldErrors.email,
        phone: validatedFields.error.flatten().fieldErrors.phone,
        message: validatedFields.error.flatten().fieldErrors.message,
      },
    };
  }
  const res = await fetch(`${API_URL}/contacts/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log("hi");
    console.log(res);
    return {};
  }

  const resJson = await res.json();

  cookies().set("access", resJson.access);
  redirect("/");
}
