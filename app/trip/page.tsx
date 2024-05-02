import type { Metadata } from 'next'
import TripForm from './trip-form'


export const metadata:Metadata =  {
    title: 'Book Trip | Keedriver',
    description: 'Book Trip',
}


const TripPage = () => {
  return (
    <div>
        <TripForm
        />

        
    </div>
  )
}

export default TripPage