import CarNewForm from "./car-new-form"
import { cookies } from "next/headers"
import { API_URL } from "@/constants";
import { redirect } from "next/navigation";


export async function getData(){
    const cookiesStore = cookies();
    const acces = cookiesStore.get("access")

    const res = await fetch(`${API_URL}/cartype/`,
        {
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${acces?.value}`
            },
        }
    )
    
    if(!res.ok){
        console.log('error')
    }

    if(res.status === 401){
        redirect("/login")
    }

    const res1 = await fetch(`${API_URL}/carenginetype/`,{
        headers:{
            "Content-Type":"application/json",
            Authorization : `Bearer ${acces?.value}`    
        }
    });

    if(!res1.ok){
        console.log("error");
    }

    if(res1.status === 401){
        redirect("/login")
    }


    const carType = await res.json();
    const carEngineType = await res1.json();

    console.log(carEngineType,carType)

    return{carType,carEngineType}

}


const CarNewPage = async() => {

    const {carType,carEngineType} = await getData();
  return <>
  <CarNewForm carType={carType} carEngineType={carEngineType}/>
  </>
}

export default CarNewPage ;