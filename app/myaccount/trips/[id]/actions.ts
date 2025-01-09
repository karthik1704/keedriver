"use server";

import { API_URL } from "@/constants";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {z} from "zod";

const schema = z.object({
    rating:z.string().min(1,"Rating is required"),
    title:z.string().min(1, "Title is required"),
    comment:z.string().min(1,"comment is required"),
});

export const createReview =  async (formData:any) =>{

const access = (await cookies()).get('access');

if(!access){
    redirect('/login');
}

// const validatedFields = schema.safeParse(formData);

// if(!validatedFields.success){
//     return{
//         message:null,
//         fieldErrors: validatedFields.error.flatten().fieldErrors,
//     };
// }
console.log('new')

    const res = await fetch(`${API_URL}/review/customer/create/`,{
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

    if (res.status ===422){
        console.log(res)
        return{
            status: "error",
            message: "Failed to create review.",
        }               
    }



    if(res.status !==201){
        console.log(res);
        const response = await res.json(); 
        console.log("API Response:", response); 
        return { status: "error", message: response.message || "Failed to create review." };
    }

    revalidatePath(`/myaccount/trips/${formData.trip}`);

    const response = await res.json(); 


    return { status: "success", message: response.message || "Review created successfully." };


    // redirect(`/myaccount/trips/${formData.trip}`);

}