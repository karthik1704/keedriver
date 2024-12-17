"use server";

import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
});

export const createAccount = async (prevState:any, formData: FormData) => {
  const data = Object.fromEntries(formData);

  const access = (await cookies()).get("access");

  if (!access) {
    redirect("/login");
  }

  const validatedFields = schema.safeParse(data);

  if (!validatedFields.success) {
    return {
      message: null,
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await fetch(`${API_URL}/update-account/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
    body: JSON.stringify(data),
  });

  if (res.status === 401) {
    redirect("/login");
  }

  if (res.status !== 200) {
    console.log(res);
    console.log(await res.json());
    return {
      message: "Something went wrong",
    };
  }

  redirect("/");
};
