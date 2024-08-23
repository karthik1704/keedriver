import TripListCard from "./triplistcard";
import { cookies } from "next/headers";
import { API_URL } from "@/constants";
import { redirect } from "next/navigation";

export async function getData(){
    const cookiesStore = cookies();
    const access = cookiesStore.get('access')

    const res = await fetch(`${API_URL}/user/`,{
        headers:{
            "Content-Type":"application/json",
            Authorization :`Bearer ${access?.value}`
        }
    })

    if(!res.ok){
        console.log('error')
    }
    if(res.status === 401){
        redirect('/login')

    }

    const user = await res.json();

    return {user}
}

const TripListPage = async() => {
    const {user} = await getData();
  return <>
  <TripListCard user={user}/> 
  </>
}

export default TripListPage; 