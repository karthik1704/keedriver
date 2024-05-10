"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { API_URL } from "@/constants";

// import { getErrorMessage } from "@/lib/utils";
import { revalidateTag } from "next/cache";


export async function updateUser(
//   id: string,
//   prevState: any,
  formData: FormData,
) {
  let jsonObject = formData;

  console.log(jsonObject)
  const access_token = cookies().get("access");

  const res = await fetch(`${API_URL}/user/`, {

  
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${access_token?.value}`,
    },
    body: JSON.stringify(jsonObject),
  });
  if (res.status === 401) redirect("/signin");

  if (res.status !== 204) {
    const error = await res.json();
    console.log(error)
    // return {
    //   fieldErrors: null,
    //   type: "Error",
    //   message: getErrorMessage(error.detail),
    // };
  }

  revalidateTag("Branch");

//   if (res.status === 204) {
//     return {
//       fieldErrors: null,
//       type: "Success",
//       message: "Branch Updated Successfully",
//     };
//   }
  if (res.status === 204) redirect("/myaccount");
}


export async function trip(
  //   id: string,
  //   prevState: any,
    formData: FormData,
  ) {
    let jsonObject = formData;
  
    console.log(jsonObject)
    const access_token = cookies().get("access");
  
    const res = await fetch(`${API_URL}/user/`, {
  
    
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${access_token?.value}`,
      },
      body: JSON.stringify(jsonObject),
    });
    if (res.status === 401) redirect("/signin");
  
    if (res.status !== 204) {
      const error = await res.json();
      console.log(error)
      // return {
      //   fieldErrors: null,
      //   type: "Error",
      //   message: getErrorMessage(error.detail),
      // };
    }
  
    revalidateTag("Branch");
  
  //   if (res.status === 204) {
  //     return {
  //       fieldErrors: null,
  //       type: "Success",
  //       message: "Branch Updated Successfully",
  //     };
  //   }
    if (res.status === 204) redirect("/myaccount");
  }
