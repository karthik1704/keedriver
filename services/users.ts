import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getUser() {
  const cookiesStore = await cookies();
  const access = cookiesStore.get("access");

  if (!access) {
    redirect("/login");
  }

  const res = await fetch(`${API_URL}/user/`, {
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

  const user = await res.json();

  return user;
}


export async function getCurrentUser() {
    const cookiesStore = await cookies();
    const access = cookiesStore.get("access");
  
    if (!access) {
      return null;
    }
    const res = await fetch(`${API_URL}/user/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access?.value}`,
      },
    });
  
    if (!res.ok) {
      console.log("error");
    }
  
    if (res.status === 401) {
      return null;
    }
  
    const user = await res.json();
    
    return user;
  }