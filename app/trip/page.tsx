import type { Metadata } from "next";
import { TripDetailForm } from "./pickup-location";
import { getCars } from "@/services/cars";

export const metadata: Metadata = {
  title: "Book Trip | Keedriver",
  description: "Book Trip",
};

const TripPage = async () => {
  const cars = await getCars();
  console.log(cars);
  return (
    <div className={`flex flex-col h-full items-center`}>
      <TripDetailForm cars={cars} />
    </div>
  );
};

export default TripPage;
