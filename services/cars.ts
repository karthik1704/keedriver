"use server";

import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getCars() {
  const cookiesStoreage = await cookies();
  const access_token = cookiesStoreage.get("access");
  if (!access_token) {
    return null;
  }

  const res = await fetch(`${API_URL}/cars/`, {
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


export async function getCar(id: string) {
  const cookiesStoreage = await cookies();
  const access_token = cookiesStoreage.get("access");
  if (!access_token) {
    return null;
  }

  const res = await fetch(`${API_URL}/cars/${id}/`, {
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



export async function getCarEngineType() {
  const cookiesStore = await cookies();
  const access = cookiesStore.get("access");

  const res = await fetch(`${API_URL}/carenginetype/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
  });

  if (!res.ok) {
    console.log("error");
  }

  if (res.status === 401) {
    redirect("/login");
  }

  const carEngineType = await res.json();

  return carEngineType;
}




export async function getCarType() {
  const cookiesStore = await cookies();
  const access = cookiesStore.get("access");

  const res = await fetch(`${API_URL}/cartype/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
  });

  if (!res.ok) {
    console.log("error");
  }
  if (res.status === 401) {
    redirect("/login");
  }

  const carType = await res.json();

  return carType;
}
