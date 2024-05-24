"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { API_URL } from "@/constants";
import z from "zod";

// import { getErrorMessage } from "@/lib/utils";
import { revalidateTag } from "next/cache";
import { json } from "stream/consumers";


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


// const phoneRegex = new RegExp(/^(0|91)?[6-9][0-9]{9}$/);

const schema = z.object({
  // phone: z
  //   .string(),
    // .regex(phoneRegex, "Please enter valid 10 digit phone number"),
    // model: z.string().min(1, "Name is required"),
  model: z.string(),
  companyname: z.string(),
  registrationnumber: z.string(),
  transmissiontype: z.string(),
  enginetype: z.string(),
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
        model: validatedFields.error.flatten().fieldErrors.model,
        company_name: validatedFields.error.flatten().fieldErrors.companyname,
        registration_number: validatedFields.error.flatten().fieldErrors.registrationnumber,
        transmission_type: validatedFields.error.flatten().fieldErrors.transmissiontype,
        engine_type: validatedFields.error.flatten().fieldErrors.enginetype,
      },
    };
  }
  const res = await fetch(`${API_URL}/user/`, {
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

const car = z.object({
  // phone: z
  //   .string()
  //   .regex(phoneRegex, "Please enter valid 10 digit phone number !"),
  model: z.string().min(1, "Name is required !"),
  company_name: z.string().min(1, "Name is required !"),
  registration_number: z.string(),
  transmission_type: z.string(),
  type: z.string(),
  engine_model: z.string(),
});

export async function createCar( data: any) {
  // const data = Object.fromEntries(formData);
  console.log(data,'getdata')
  // data.customer = 1;
  const validatedFields = car.safeParse(data);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: null,
      fieldErrors: {
        model: validatedFields.error.flatten().fieldErrors.model,
        company_name: validatedFields.error.flatten().fieldErrors.company_name,
        registration_number: validatedFields.error.flatten().fieldErrors.registration_number,
        transmission_type: validatedFields.error.flatten().fieldErrors.transmission_type,
        type: validatedFields.error.flatten().fieldErrors.type,
        engine_model: validatedFields.error.flatten().fieldErrors.engine_model,
      },
    };
  }
  const res1 = await fetch(`${API_URL}/car/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  console.log(res1);

  if (!res1.ok) {
    console.log("hi");
    console.log(res1);
    const resJson = await res1.json();
    return {};
  }

  const resJson = await res1.json();
console.log(resJson)
  redirect("/");
}