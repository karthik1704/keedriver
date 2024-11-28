import { getCarEngineType, getCarType } from "@/services/cars";
import CarNewForm from "./car-new-form";

const CarNewPage = async () => {
  const carEngineTypes = await getCarEngineType();
  const carTypes = await getCarType();
  return <CarNewForm carType={carTypes} carEngineType={carEngineTypes} />;
};

export default CarNewPage;
