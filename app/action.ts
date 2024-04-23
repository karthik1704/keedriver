"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function LogOut(){
    cookies().delete('access');
    redirect('/login')
}