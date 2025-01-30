'use server';

import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getReviews(id: string){
    const cookiesStoreage = await cookies();
    const access_token = cookiesStoreage.get('access');
    if(!access_token){
        return null;
    }

    const res = await fetch(`${API_URL}/review/customer/${id}`,{
        method: 'GET',
        headers:{
            'content-Type':'application/json',
            Authorization: `Bearer ${access_token?.value}`,
        },
        next:{
            tags:['rev'],
        },
    });

    if(res.status ===401){
        redirect('/login');
    }

    if (res.status !==200){
        console.log('error');
    }

    const comment = await res.json();
    console.log(comment);

    return comment;
}