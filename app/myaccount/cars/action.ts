"use server"
import { cookies } from "next/headers";
import { API_URL } from "@/constants";
import { redirect } from "next/navigation";
import { object } from "zod";


export async function updateCarList(id:any,formData:any){

    console.log(formData)

    const cookiesStore = cookies();
    const access = cookiesStore.get('access');

    const res = await fetch(`${API_URL}/car/update/${id}/`,{
        method:'PUT',
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${access?.value}`
        },
        body:JSON.stringify(formData),
    })


    if(!res.ok){
        // console.log(await res.json());
        console.log('error')
    }

    if(res.status === 401){
        redirect('/login')

    }

    if(res.status === 200){
        redirect('/myaccount/cars/')
    }


}