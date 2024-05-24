import CarNewForm from "./car-new-form"


const CarList=()=>{
    return(
        <div>
          
        <div className="flex h-[50vh] w-[600px] items-center justify-center  p-5">
        <div className="max-w-full w-full p-6 sm:p-10 md:p-14 bg-white shadow-md rounded-lg">
          <CarNewForm/>
        </div>
      </div>
     </div>
    )
}

export default CarList