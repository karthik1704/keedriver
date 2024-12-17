"use server";

import { API_URL } from "@/constants";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const carSchema = z.object({
  model: z.string().min(1, "Name is required !"),
  company_name: z.string().min(1, "Name is required !"),
  registration_number: z.string(),
  transmission_type: z.string(),
  type: z.string(),
  engine_model: z.string(),
});

export async function createCar(data: any) {
  const validatedFields = carSchema.safeParse(data);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: null,
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const access_token = (await cookies()).get("access");

  const res = await fetch(`${API_URL}/cars/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token?.value}`,
    },
    body: JSON.stringify(data),
  });

  if (res.status === 401) {
    redirect("/login");
  }
  

  if (res.status !==201) {
    console.log("hi");
    console.log(res);
    const resJson = await res.json();
    return;
  }

  revalidateTag("cars");
  

  redirect("/myaccount/cars");
}
