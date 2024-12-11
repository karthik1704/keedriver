"use server";

import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getTrips() {
  const cookiesStoreage = cookies();
  const access_token = cookiesStoreage.get("access");
  if (!access_token) {
    return null;
  }

  const res = await fetch(`${API_URL}/customer/trips`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token?.value}`,
    },
    next: {
      tags: ["cars"],
    },
  });

  if (res.status === 401) {
    redirect("/login");
  }

  if (res.status !== 200) {
    console.log("error");
  }

  const data = await res.json();
  // console.log(data);

  return data;
}


export async function getTrip(id: string) {
  const cookiesStoreage = cookies();
  const access_token = cookiesStoreage.get("access");
  if (!access_token) {
    return null;
  }

  const res = await fetch(`${API_URL}/customer/trips/${id}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token?.value}`,
    },
    next: {
      tags: ["cars"],
    },
  });

  if (res.status === 401) {
    redirect("/login");
  }

  if (res.status !== 200) {
    console.log("error");
  }

  const data = await res.json();

  return data;
}



