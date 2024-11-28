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
  <div className="w-full flex md:w-full lg:flex-col mx-2 lg:ml-10 items-center justify-end">
  <TripListCard user={user}/> 
  </div>
  </>
}

export default TripListPage; 