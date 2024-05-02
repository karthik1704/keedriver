"use server";

import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(prevState: any, formData: FormData) {

  const phone = formData.get("phone");

  const res = await fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "",
      phone,
      password: "",
    }),
  });

  
  if(!res.ok){
    return {}
  }
  
  const resJson = await res.json();



  cookies().set("access", resJson.access);
  redirect("/");
}
