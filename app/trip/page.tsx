import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import TripForm from './trip-form'
import { TripDetailForm,PickupLocation } from './pickup-location'
import { Input } from '@/components/ui/input'
import { API_URL } from '@/constants';


export const metadata:Metadata =  {
    title: 'Book Trip | Keedriver',
    description: 'Book Trip',
}

async function getData() {
  
  const cookiesStoreage = cookies();
  const access_token = cookiesStoreage.get("access");
if(!access_token){
  return null;
}
const res = await fetch(`${API_URL}/car/`,{
  method:'GET',
  headers:{
    "Content-Type":"applicaton/json",
    Authorization :`Bearer ${access_token?.value}`,

  }
 
});
const data = await res.json();

// console.log(data);
return data;
}





const TripPage = async() => {

  
  const carlists = await getData();


 
  return (
    <div className={`flex flex-col h-full items-center`}>
        <TripDetailForm carlists={carlists}/>
        {/* <PickupLocation/> */}

        
    </div>
  )
}

export default TripPage