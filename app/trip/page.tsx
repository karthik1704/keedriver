import type { Metadata } from 'next'
import TripForm from './trip-form'
import { TripDetailForm,PickupLocation } from './pickup-location'
import { Input } from '@/components/ui/input'


export const metadata:Metadata =  {
    title: 'Book Trip | Keedriver',
    description: 'Book Trip',
}


const TripPage = () => {
  return (
    <div className='h-[80vh] flex flex-col items-center'>
        <TripDetailForm/>
        {/* <PickupLocation/> */}

        
    </div>
  )
}

export default TripPage