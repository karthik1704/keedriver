import { cookies } from "next/headers";
import { API_URL } from "@/constants";


export async function GET(request: Request){
    const { searchParams } = new URL(request.url)
    console.log(searchParams)
    const id = searchParams.get('id')||""
    const cookiesStoreage = cookies();
    const access_token = cookiesStoreage.get('access');

    if(!access_token){
        return null;
    }

    const res = await fetch(`${API_URL}/car/${id}/`,{
        headers:{
            "Content-Type":"application/json",
            Authorization : `Bearer ${access_token?.value}`
        }
    })

    console.log(res,"res")

    const carDetails = await res.json();

    console.log(carDetails,"cardetail")

 return Response.json(carDetails)
}