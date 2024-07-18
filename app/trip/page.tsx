import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import TripForm from './trip-form'
import { TripDetailForm,PickupLocation } from './pickup-location'
import { Input } from '@/components/ui/input'


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
const res = await fetch('http://3.110.169.239:8000/api/v1/car/',{
  method:'GET',
  headers:{
    "Content-Type":"applicaton/json",
    Authorization :`Bearer ${access_token?.value}`,

  }
 
});
const data = await res.json();

console.log(data);
return data;
}





const TripPage = async() => {

  const data = await getData();
 
  return (
    <div className='h-[80vh] flex flex-col items-center'>
        <TripDetailForm/>
        {/* <PickupLocation/> */}

        
    </div>
  )
}

export default TripPage