"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function signIn(formData : any){

   
    const mobileNumber = formData.get('mobile');



    const res = await fetch('http://devapi.keedriver.com/api/v1/login/',{
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify({
            username:'',
            phone:mobileNumber,
            password:''

        })
    })

    const resJson = await res.json();

    cookies().set('access',resJson.access);
    redirect('/')
    

}