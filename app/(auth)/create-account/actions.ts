'use server';

import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";




export const createAccount = async (formData: FormData) => {
    const data = Object.fromEntries(formData);

    const access = cookies().get("access");

    if (!access) {
        redirect("/login");
    }

    console.log(access)

    const res = await fetch(`${API_URL}/update-account/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access?.value}`,
        },
        body: JSON.stringify(data),
    });

    if (res.status ===401){
        redirect('/login')
    }

    if (res.status!==200){
        console.log(res);
        console.log(await res.json());
        throw new Error('Something went wrong')
    }

    redirect('/');


}