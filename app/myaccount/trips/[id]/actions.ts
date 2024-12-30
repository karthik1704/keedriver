"use server";

import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {z} from "zod";

const schema = z.object({
    rating:z.string().min(1,"Rating is required"),
    title:z.string().min(1, "Title is required"),
    comment:z.string().min(1,"comment is required"),
});

export const createReview =  async (prevState:any, formData:any) =>{
    // const data = Object.fromEntries(formData)

const access = (await cookies()).get('access');

if(!access){
    redirect('/login');
}

const validatedFields = schema.safeParse(data);

if(!validatedFields.success){
    return{
        message:null,
        fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
}

    const res = await fetch(`${API_URL}/review/customer/create`,{
        method: 'POST',
        headers:{
            "content-Type": "application/json",
            Authorization:`Bearer ${access?.value}`,
        },
        body: JSON.stringify(formData),
    });

    if (res.status ===401){
        redirect('/login');       
    }

    if(res.status !==200){
        return{
            message: 'something went wrong'
        }
    }

    redirect('/');
}