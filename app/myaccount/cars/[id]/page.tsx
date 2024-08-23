import { cookies } from "next/headers";
import { API_URL } from "@/constants";
import { redirect } from "next/navigation";
import CarEditForm from "./car-edit-form";
import { updateCarList } from "../action";


async function getData(id:string){
    const cookiesStore = cookies();
    const access = cookiesStore.get('access')

    const res = await fetch(`${API_URL}/cartype/`,{
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${access?.value}`
        }
    })

    if(!res.ok){
        console.log('error')
    }
    if(res.status === 401){
        redirect('/login')

    }

    const res1 = await fetch(`${API_URL}/carenginetype/`,{
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${access?.value}`
        }
    })

    if(!res1.ok){
        console.log('error')
    }

    if(res1.status === 401){
        redirect('/login')
    }

    const res2 = await fetch(`${API_URL}/car/${id}`,{
        headers:{
            "Content-Type":"application/json",
            Authorization : `Bearer ${access?.value}`
        }
    })

    if(!res2.ok){

        console.log('hello');
    }

    if(res2.status === 401){
        redirect('/login');
    }

    const carType = await res.json();
    const CarEngineType = await res1.json();


    const data = await res2.json();

    return{carType,CarEngineType,data};

}

const EditCarListPage = async({params:{id},}:{params:{id:string}}) => {
    const {carType,CarEngineType,data} = await getData(id)
    const updateWithId = updateCarList.bind(null,id)
  return <>
  <CarEditForm carType={carType} carEngineType={CarEngineType} actionFn={updateWithId} data={data}/>

  </>
}

export default EditCarListPage;