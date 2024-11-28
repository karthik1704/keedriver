"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { API_URL } from "@/constants";
import z from "zod";

import { revalidateTag } from "next/cache";

export async function updateUser(
  formData: FormData
) {
  let jsonObject = formData;

  console.log(jsonObject);
  const access_token = cookies().get("access");

  if(!access_token){
    redirect("/login");
  }

  const res = await fetch(`${API_URL}/user/`, {
    method: "PUT", 
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token?.value}`,
    },
    body: JSON.stringify(jsonObject),
  });
  if (res.status === 401) redirect("/signin");

  if (res.status !== 204) {
    const error = await res.json();
    console.log(error);
    // return {
    //   fieldErrors: null,
    //   type: "Error",
    //   message: getErrorMessage(error.detail),
    // };
  }

  revalidateTag("user");

  //   if (res.status === 204) {
  //     return {
  //       fieldErrors: null,
  //       type: "Success",
  //       message: "Branch Updated Successfully",
  //     };
  //   }
  if (res.status === 204) redirect("/myaccount");
}
