import CarEditForm from "./car-edit-form";
import { getCar, getCarEngineType, getCarType } from "@/services/cars";




const EditCarListPage = async({params:{id},}:{params:{id:string}}) => {
    const car = await getCar(id)
    const carTypes = await getCarType()
    const carEngineTypes = await getCarEngineType()
  return <>
  <CarEditForm carTypes={carTypes} carEngineTypes={carEngineTypes}  data={car}/>

  </>
}

export default EditCarListPage;