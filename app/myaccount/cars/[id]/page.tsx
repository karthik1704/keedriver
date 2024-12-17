import CarEditForm from "./car-edit-form";
import { getCar, getCarEngineType, getCarType } from "@/services/cars";




const EditCarListPage = async (props:{params: Promise<{id:string}>}) => {
  const params = await props.params;

  const {
    id
  } = params;

  const car = await getCar(id)
  const carTypes = await getCarType()
  const carEngineTypes = await getCarEngineType()
  return <>
  <CarEditForm carTypes={carTypes} carEngineTypes={carEngineTypes}  data={car}/>

  </>
}

export default EditCarListPage;