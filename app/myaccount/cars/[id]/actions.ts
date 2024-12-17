"use server";
import { cookies } from "next/headers";
import { API_URL } from "@/constants";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";

export async function updateCar(id: any, formData: any) {

  const cookiesStore = await cookies();
  const access = cookiesStore.get("access");

  if (!access) {
    redirect('/login');
  }

  const res = await fetch(`${API_URL}/cars/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    // console.log(await res.json());
    console.log("error");
  }

  if (res.status === 401) {
    redirect("/login");
  }

  revalidateTag('cars');

  if (res.status === 200) {
    redirect("/myaccount/cars/");
  }
}
