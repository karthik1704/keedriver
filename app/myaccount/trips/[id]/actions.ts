"use server";

import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {z} from "zod";

const schema = z.object({
    rating:z.string().min(1,"Rating is required"),
    title:z.string().min(1, "Title is required"),
    comment:z.string().min(1,"comment is required"),
})

export async function customerReview(formData:any){

    const cookiesStore = await cookies();
    const access = cookiesStore.get("access");

    if(!access){
        redirect('/login');
    }

    const res = await fetch(`${API_URL}/review/customer/create`,{
        method: 'POST',
        headers:{
            "content-Type": "application/json",
            Authorization:`Bearer ${access?.value}`,
        },
        body: JSON.stringify(formData)
    })
}